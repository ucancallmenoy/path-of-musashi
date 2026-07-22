"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface CharacterProps {
  name: string
  position: "left" | "center" | "right"
  visible: boolean
}

const positionClasses: Record<string, string> = {
  left: "left-[5%]",
  center: "left-1/2 -translate-x-1/2",
  right: "right-[5%]",
}

export function Character({ name, position, visible }: CharacterProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 h-[85vh] w-auto transition-all duration-700 ease-in-out",
        positionClasses[position],
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <Image
        src={`/assets/characters/${name}.png`}
        alt={name}
        width={400}
        height={600}
        className="h-full w-auto object-contain pixelated select-none pointer-events-none"
        draggable={false}
        priority
      />
    </div>
  )
}
