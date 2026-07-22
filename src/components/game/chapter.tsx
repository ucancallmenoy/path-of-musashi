"use client"

import { useState, useCallback, useEffect } from "react"
import type { Chapter as ChapterType } from "@/types/game"
import { SceneRenderer } from "./scene"
import { Transition } from "./transition"
import { ContinueButton } from "./continue-button"
import { saveGame } from "@/lib/storage"

interface ChapterProps {
  chapter: ChapterType
  initialScene?: string
  initialDialogueIndex?: number
  onComplete: (nextChapterId?: string) => void
}

export function Chapter({ chapter, initialScene, initialDialogueIndex, onComplete }: ChapterProps) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(() => {
    if (initialScene) {
      const idx = chapter.scenes.findIndex((s) => s.id === initialScene)
      return idx >= 0 ? idx : 0
    }
    return 0
  })
  const [transitionVisible, setTransitionVisible] = useState(true)
  const [showChapterEnd, setShowChapterEnd] = useState(false)

  const currentScene = chapter.scenes[currentSceneIndex]
  const isChapterTitleScene = !!currentScene?.chapterTitle && currentSceneIndex === 0

  useEffect(() => {
    if (isChapterTitleScene) {
      const timer = setTimeout(() => {
        setTransitionVisible(false)
        if (chapter.scenes.length > 1) {
          setCurrentSceneIndex(1)
        }
      }, 2500)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(() => setTransitionVisible(false), 0)
    return () => clearTimeout(timer)
  }, [currentSceneIndex, isChapterTitleScene, chapter.scenes.length])

  const handleSave = useCallback((sceneId: string, dialogueIndex: number) => {
    saveGame({ chapter: chapter.id, scene: sceneId, dialogueIndex })
  }, [chapter.id])

  const handleNavigate = useCallback((nextSceneId: string) => {
    const idx = chapter.scenes.findIndex((s) => s.id === nextSceneId)
    if (idx >= 0) {
      setTransitionVisible(true)
      setTimeout(() => {
        setCurrentSceneIndex(idx)
        setTimeout(() => setTransitionVisible(false), 0)
      }, 800)
    }
  }, [chapter.scenes])

  const handleComplete = useCallback(() => {
    const nextIndex = currentSceneIndex + 1
    if (nextIndex < chapter.scenes.length) {
      const nextScene = chapter.scenes[nextIndex]
      if (nextScene?.chapterTitle && nextIndex === chapter.scenes.length - 1) {
        setShowChapterEnd(true)
      } else {
        setCurrentSceneIndex(nextIndex)
      }
    } else {
      onComplete()
    }
  }, [currentSceneIndex, chapter.scenes, onComplete])

  const handleContinue = useCallback(() => {
    const lastScene = chapter.scenes[chapter.scenes.length - 1]
    onComplete(lastScene?.nextScene)
  }, [chapter.scenes, onComplete])

  if (showChapterEnd) {
    const lastScene = chapter.scenes[chapter.scenes.length - 1]
    return (
      <div className="relative h-dvh w-full bg-black flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          {lastScene?.chapterTitle && (
            <>
              <h1 className="retro text-2xl sm:text-3xl text-retro-beige tracking-[0.15em] text-center leading-relaxed">
                {lastScene.chapterTitle}
              </h1>
              {lastScene.subtitle && (
                <p className="retro text-[10px] sm:text-xs text-retro-gold tracking-[0.2em]">
                  {lastScene.subtitle}
                </p>
              )}
            </>
          )}
          <div className="mt-8">
            <ContinueButton onClick={handleContinue} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-black">
      {isChapterTitleScene && currentScene && (
        <Transition visible={transitionVisible}>
          {currentScene.subtitle ? (
            <div className="flex flex-col items-center gap-4">
              <h1 className="retro text-2xl sm:text-3xl md:text-4xl text-retro-beige tracking-[0.15em] text-center leading-relaxed">
                {currentScene.chapterTitle}
              </h1>
              <p className="retro text-[10px] sm:text-xs text-retro-gold tracking-[0.2em]">
                {currentScene.subtitle}
              </p>
            </div>
          ) : (
            currentScene.chapterTitle
          )}
        </Transition>
      )}
      {!transitionVisible && currentScene && (
        <SceneRenderer
          key={currentScene.id}
          scene={currentScene}
          initialDialogueIndex={initialDialogueIndex}
          onComplete={handleComplete}
          onNavigate={handleNavigate}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
