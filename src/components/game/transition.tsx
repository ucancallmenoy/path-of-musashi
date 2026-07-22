"use client"

import { cn } from "@/lib/utils"

interface TransitionProps {
  visible: boolean
  children?: React.ReactNode
}

export function Transition({ visible, children }: TransitionProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {children && (
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <h1 className="retro text-2xl sm:text-3xl md:text-4xl text-retro-beige tracking-[0.15em] leading-relaxed">
            {children}
          </h1>
        </div>
      )}
    </div>
  )
}
