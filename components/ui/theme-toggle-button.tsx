"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

type AnimationVariant = "circle" | "circle-blur" | "gif" | "polygon"
type AnimationStart = "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"

interface ThemeToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: AnimationVariant
    start?: AnimationStart
    showLabel?: boolean
    url?: string
}

// Hook for View Transitions API
function useThemeTransition() {
    const startTransition = React.useCallback((callback: () => void) => {
        if (typeof document !== "undefined" && "startViewTransition" in document) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const doc = document as any
            if (typeof doc.startViewTransition === "function") {
                doc.startViewTransition(callback)
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, [])

    return { startTransition }
}

export function ThemeToggleButton({
    variant = "circle",
    start = "center",
    showLabel = false,
    url,
    className,
    disabled,
    ...props
}: ThemeToggleButtonProps) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const { startTransition } = useThemeTransition()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Inject CSS for animations
    React.useEffect(() => {
        if (typeof document === "undefined") return

        const styleId = "theme-toggle-styles"
        if (document.getElementById(styleId)) return

        const positions: Record<AnimationStart, string> = {
            center: "50% 50%",
            "top-left": "0% 0%",
            "top-right": "100% 0%",
            "bottom-left": "0% 100%",
            "bottom-right": "100% 100%",
        }
        const position = positions[start]

        const style = document.createElement("style")
        style.id = styleId
        style.textContent = `
      @view-transition {
        navigation: auto;
      }

      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.5s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      ${variant === "circle" || variant === "circle-blur"
                ? `
        ::view-transition-old(root) {
          z-index: 1;
        }
        ::view-transition-new(root) {
          z-index: 2;
        }
        ::view-transition-old(root) {
          ${getCircleMask(start, true)}
        }
        ::view-transition-new(root) {
          ${getCircleMask(start, false)}
          ${variant === "circle-blur"
                    ? `
            filter: blur(20px);
            animation-name: theme-transition-circle-in-blur;
            `
                    : ""
                }
        }
        @keyframes theme-transition-circle-out {
          to {
            mask-image: radial-gradient(circle at ${position}, black 0%, black 0%, transparent 100%);
          }
        }
        @keyframes theme-transition-circle-in {
          from {
            mask-image: radial-gradient(circle at ${position}, black 0%, black 0%, transparent 0%);
          }
          to {
            mask-image: radial-gradient(circle at ${position}, black 0%, black 0%, transparent 100%);
          }
        }
        ${variant === "circle-blur"
                    ? `
          @keyframes theme-transition-circle-in-blur {
            from {
              filter: blur(20px);
            }
            to {
              filter: blur(0);
            }
          }
          `
                    : ""
                }
        `
                : ""
            }

      ${variant === "polygon"
                ? `
        ::view-transition-old(root) {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          animation-name: theme-transition-polygon-out;
        }
        ::view-transition-new(root) {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          animation-name: theme-transition-polygon-in;
        }
        @keyframes theme-transition-polygon-out {
          to {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
        }
        @keyframes theme-transition-polygon-in {
          from {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
        }
        `
                : ""
            }

      ${variant === "gif" && url
                ? `
        ::view-transition-old(root),
        ::view-transition-new(root) {
          mask-image: url(${url});
          mask-size: cover;
          mask-position: center;
          mask-repeat: no-repeat;
        }
        `
                : ""
            }
    `
        document.head.appendChild(style)

        return () => {
            const existingStyle = document.getElementById(styleId)
            if (existingStyle) {
                existingStyle.remove()
            }
        }
    }, [variant, start, url])

    const toggleTheme = React.useCallback(() => {
        if (disabled) return

        startTransition(() => {
            setTheme(theme === "dark" ? "light" : "dark")
        })
    }, [theme, setTheme, startTransition, disabled])

    if (!mounted) {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                    className
                )}
                disabled
                {...props}
            >
                <Sun className="size-5" />
            </button>
        )
    }

    const isDark = theme === "dark"

    return (
        <button
            type="button"
            onClick={toggleTheme}
            disabled={disabled}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                className
            )}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            {...props}
        >
            {isDark ? (
                <Sun className="size-5 transition-transform duration-300" />
            ) : (
                <Moon className="size-5 transition-transform duration-300" />
            )}
            {showLabel && (
                <span className="text-sm font-medium">
                    {isDark ? "Light" : "Dark"}
                </span>
            )}
        </button>
    )
}

function getCircleMask(start: AnimationStart, isOld: boolean): string {
    const positions = {
        center: "50% 50%",
        "top-left": "0% 0%",
        "top-right": "100% 0%",
        "bottom-left": "0% 100%",
        "bottom-right": "100% 100%",
    }

    const position = positions[start]
    const animationName = isOld ? "theme-transition-circle-out" : "theme-transition-circle-in"

    return `
    mask-image: radial-gradient(circle at ${position}, black 0%, black 0%, transparent 0%);
    animation-name: ${animationName};
  `
}

