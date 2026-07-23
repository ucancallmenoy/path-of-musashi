export interface DialogueLine {
  speaker: string
  text: string
}

export interface Choice {
  label: string
  nextScene: string
}

export interface CharacterEntry {
  character: string
  position: "left" | "center" | "right"
}

export interface Scene {
  id: string
  background?: string
  characters?: CharacterEntry[]
  dialogue?: DialogueLine[]
  choices?: Choice[]
  nextScene?: string
  chapterTitle?: string
  subtitle?: string
  transition?: "fadeIn" | "fadeOut" | "none"
}

export interface Chapter {
  id: string
  title: string
  scenes: Scene[]
}

export interface SaveData {
  chapter: string
  scene: string
  dialogueIndex: number
}

export type CharacterPosition = "left" | "center" | "right";

export interface CharacterScene {
  character: string;
  position: CharacterPosition;
}