"use client"

import { Button } from "@/components/ui/8bit/button"

interface ContinueButtonProps {
  onClick: () => void
}

export function ContinueButton({ onClick }: ContinueButtonProps) {
  return (
    <Button
      variant="ghost"
      font="retro"
      className="text-retro-beige hover:text-retro-gold text-[11px] sm:text-xs h-auto py-3 px-8 transition-colors"
      onClick={onClick}
    >
      Continue
    </Button>
  )
}
