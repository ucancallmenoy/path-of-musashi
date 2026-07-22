import type { Chapter, Scene } from "@/types/game"
import { prologue } from "@/content/chapters/prologue"
import { chapter1 } from "@/content/chapters/chapter-1"

const chapters: Record<string, Chapter> = {
  prologue,
  "chapter-1": chapter1,
}

export function getChapter(id: string): Chapter | undefined {
  return chapters[id]
}

export function getScene(chapterId: string, sceneId: string): Scene | undefined {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  return chapter.scenes.find((s) => s.id === sceneId)
}
