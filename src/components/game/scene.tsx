"use client"

import { useState, useCallback, useEffect } from "react"
import type { Scene as SceneType } from "@/types/game"
import { Character } from "./character"
import { Dialogue } from "./dialogue"
import { Choice } from "./choice"

interface SceneProps {
  scene: SceneType
  initialDialogueIndex?: number
  onComplete: () => void
  onNavigate: (nextSceneId: string) => void
  onSave: (sceneId: string, dialogueIndex: number) => void
}

export function SceneRenderer({ scene, initialDialogueIndex, onComplete, onNavigate, onSave }: SceneProps) {
  const [dialogueIndex, setDialogueIndex] = useState(initialDialogueIndex ?? 0)

  const hasDialogue = !!scene.dialogue && scene.dialogue.length > 0
  const hasChoices = !!scene.choices && scene.choices.length > 0

  const currentDialogue = hasDialogue ? scene.dialogue![dialogueIndex] : null
  const isLastDialogue = dialogueIndex >= (scene.dialogue?.length ?? 0) - 1

  const handleAdvance = useCallback(() => {
    if (hasDialogue && !isLastDialogue) {
      const nextIndex = dialogueIndex + 1
      setDialogueIndex(nextIndex)
      onSave(scene.id, nextIndex)
    } else if (hasChoices) {
      return
    } else if (scene.nextScene) {
      onSave(scene.id, dialogueIndex)
      onNavigate(scene.nextScene)
    } else {
      onSave(scene.id, dialogueIndex)
      onComplete()
    }
  }, [dialogueIndex, hasDialogue, isLastDialogue, hasChoices, scene.nextScene, scene.id, onSave, onNavigate, onComplete])

  const handleChoice = useCallback((nextScene: string) => {
    onSave(scene.id, dialogueIndex)
    onNavigate(nextScene)
  }, [scene.id, dialogueIndex, onSave, onNavigate])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        handleAdvance()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleAdvance])

  return (
    <div
      className="relative h-dvh w-full bg-black"
      onClick={handleAdvance}
      style={
        scene.background
          ? {
              backgroundImage: `url("${scene.background}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {scene.characters?.map((char, i) => (
        <Character key={i} name={char.character} position={char.position} visible />
      ))}
      {currentDialogue && (
        <Dialogue
          speaker={currentDialogue.speaker}
          text={currentDialogue.text}
        />
      )}
      {hasChoices && isLastDialogue && (
        <Choice choices={scene.choices!} onChoose={handleChoice} />
      )}
    </div>
  )
}
