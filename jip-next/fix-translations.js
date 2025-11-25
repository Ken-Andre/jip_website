const fs = require('fs');
const path = require('path');

// Fix fr.json
const frPath = path.join(__dirname, 'locales', 'fr.json');
const frData = JSON.parse(fs.readFileSync(frPath, 'utf8'));

// Fix languages
frData.participation.info.languages = {
    label: "Langues",
    value: "Français & Anglais"
};

// Fix about
frData.footer.about = {
    title: "À Propos",
    desc: "La Journée Internationale des Pasteurs est un événement annuel dédié à l'honneur et à l'encouragement des pasteurs du monde entier."
};

fs.writeFileSync(frPath, JSON.stringify(frData, null, 2), 'utf8');
console.log('✅ fr.json fixed');

// Fix en.json
const enPath = path.join(__dirname, 'locales', 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Fix languages
enData.participation.info.languages = {
    label: "Languages",
    value: "French & English"
};

// Fix about
enData.footer.about = {
    title: "About",
    desc: "International Pastors Day is an annual event dedicated to honoring and encouraging pastors worldwide."
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf8');
console.log('✅ en.json fixed');

console.log('\n✨ All translation files fixed successfully!');
