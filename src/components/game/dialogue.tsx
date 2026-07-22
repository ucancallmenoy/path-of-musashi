"use client"

import { Card, CardContent } from "@/components/ui/8bit/card"

interface DialogueProps {
  speaker: string
  text: string
}

export function Dialogue({ speaker, text }: DialogueProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Card className="bg-black/80 backdrop-blur-sm border-retro-gold/30 shadow-2xl">
        <CardContent className="p-4 sm:p-6">
          <p className="retro text-[10px] sm:text-xs text-retro-gold mb-2 tracking-wider">
            {speaker}
          </p>
          <p className="retro text-xs sm:text-sm text-retro-beige leading-relaxed">
            {text}
          </p>
          <p className="retro text-[8px] text-retro-beige/30 text-right mt-3 animate-pulse">
            ▼
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
