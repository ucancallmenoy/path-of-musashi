"use client"

import { Button } from "@/components/ui/8bit/button"

interface ChoiceProps {
  choices: { label: string; nextScene: string }[]
  onChoose: (nextScene: string) => void
}

export function Choice({ choices, onChoose }: ChoiceProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {choices.map((choice, i) => (
        <Button
          key={i}
          variant="ghost"
          font="retro"
          className="w-full text-retro-beige hover:text-retro-gold text-[10px] sm:text-xs h-auto py-4 px-6 border border-retro-gold/20 hover:border-retro-gold/50 transition-all bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation()
            onChoose(choice.nextScene)
          }}
        >
          {choice.label}
        </Button>
      ))}
    </div>
  )
}
