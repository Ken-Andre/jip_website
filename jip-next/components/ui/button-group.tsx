import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
    "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
    {
        variants: {
            orientation: {
                horizontal:
                    "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
                vertical:
                    "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    }
)

interface ButtonGroupProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> { }

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ className, orientation, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="group"
                data-orientation={orientation}
                className={cn(buttonGroupVariants({ orientation }), className)}
                {...props}
            />
        )
    }
)
ButtonGroup.displayName = "ButtonGroup"

const ButtonGroupText = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
        <Comp
            ref={ref}
            className={cn(
                "flex items-center gap-2 rounded-md border bg-muted px-4 text-sm font-medium shadow-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        />
    )
})
ButtonGroupText.displayName = "ButtonGroupText"

const ButtonGroupSeparator = React.forwardRef<
    React.ElementRef<typeof Separator>,
    React.ComponentPropsWithoutRef<typeof Separator> & {
        orientation?: "horizontal" | "vertical"
    }
>(({ className, orientation = "vertical", ...props }, ref) => {
    return (
        <Separator
            ref={ref}
            orientation={orientation}
            className={cn(
                "relative !m-0 self-stretch bg-input data-[orientation=vertical]:h-auto",
                className
            )}
            {...props}
        />
    )
})
ButtonGroupSeparator.displayName = "ButtonGroupSeparator"

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants }
