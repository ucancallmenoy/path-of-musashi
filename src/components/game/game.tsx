"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Chapter as ChapterType } from "@/types/game"
import { Chapter } from "./chapter"
import { getChapter } from "@/lib/game"
import { loadGame } from "@/lib/storage"
import { useBgm } from "@/hooks/use-bgm"

const chapterBgm: Record<string, string> = {
  prologue: "/assets/bg-music/prologue.mp3",
}

interface GameProps {
  chapterId?: string
  resume?: boolean
}

export function Game({ chapterId, resume }: GameProps) {
  const router = useRouter()

  const [chapter, setChapter] = useState<ChapterType | null>(null)
  const [initialScene, setInitialScene] = useState<string | undefined>()
  const [initialDialogueIndex, setInitialDialogueIndex] = useState<number | undefined>()

  const currentChapterId = chapter?.id
  const bgmTrack = currentChapterId ? chapterBgm[currentChapterId] : undefined
  useBgm(bgmTrack)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (resume) {
        const save = loadGame()
        if (save) {
          const ch = getChapter(save.chapter)
          if (ch) {
            setChapter(ch)
            setInitialScene(save.scene)
            setInitialDialogueIndex(save.dialogueIndex)
            return
          }
        }
        router.push("/")
        return
      }
      if (chapterId) {
        const ch = getChapter(chapterId)
        if (ch) {
          setChapter(ch)
          return
        }
      }
      router.push("/")
    }, 0)
    return () => clearTimeout(timer)
  }, [chapterId, resume, router])

  const handleChapterComplete = useCallback((nextChapterId?: string) => {
    if (nextChapterId) {
      const ch = getChapter(nextChapterId)
      if (ch) {
        setChapter(ch)
        setInitialScene(undefined)
        setInitialDialogueIndex(undefined)
        return
      }
    }
    router.push("/")
  }, [router])

  if (!chapter) return null

  return (
    <Chapter
      key={chapter.id}
      chapter={chapter}
      initialScene={initialScene}
      initialDialogueIndex={initialDialogueIndex}
      onComplete={handleChapterComplete}
    />
  )
}
