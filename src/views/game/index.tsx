"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Game } from "@/components/game/game"

function GameViewInner() {
  const searchParams = useSearchParams()
  const chapterId = searchParams.get("chapter") ?? undefined
  const resume = searchParams.has("continue")

  return <Game chapterId={chapterId} resume={resume} />
}

export function GameView() {
  return (
    <Suspense fallback={<div className="h-dvh w-full bg-black" />}>
      <GameViewInner />
    </Suspense>
  )
}
