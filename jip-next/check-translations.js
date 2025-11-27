const fs = require('fs');
const path = require('path');

const frJsonPath = path.join(__dirname, 'locales', 'fr.json');
const frJson = JSON.parse(fs.readFileSync(frJsonPath, 'utf8'));

function flattenKeys(obj, prefix = '') {
    let keys = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(keys, flattenKeys(obj[key], prefix + key + '.'));
        } else {
            keys[prefix + key] = true;
        }
    }
    return keys;
}

const existingKeys = flattenKeys(frJson);

function scanFiles(dir) {
    const files = fs.readdirSync(dir);
    let missingKeys = new Set();

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                const subMissing = scanFiles(filePath);
                subMissing.forEach(k => missingKeys.add(k));
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const regex = /t\("([^"]+)"\)/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                const key = match[1];
                if (!existingKeys[key]) {
                    // Check if it's a dynamic key (contains template literals or variables)
                    // The regex only matches double quotes, so simple strings.
                    // But we should verify if the key actually exists.
                    // Sometimes keys are constructed dynamically, e.g. `resources.${category.key}.title`
                    // These won't be matched by this simple regex if they use backticks.
                    // But if they use double quotes, they are static keys.

                    // Wait, if the key is dynamic it usually uses backticks.
                    // My regex `t\("([^"]+)"\)` only matches double quotes.
                    // So these should be static keys.

                    // However, some keys might be partial, e.g. `program.${time}.title`.
                    // But those would use backticks.

                    missingKeys.add(key);
                }
            }

            // Also check for single quotes
            const regexSingle = /t\('([^']+)'\)/g;
            while ((match = regexSingle.exec(content)) !== null) {
                const key = match[1];
                if (!existingKeys[key]) {
                    missingKeys.add(key);
                }
            }
        }
    }
    return missingKeys;
}

const missing = scanFiles(path.join(__dirname));
console.log('Missing keys:', Array.from(missing));
