"use client"

import type { SaveData } from "@/types/game"

const SAVE_KEY = "path-of-musashi-save"

export function saveGame(data: SaveData): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data))
  } catch {
    console.warn("Failed to save game data")
  }
}

export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as SaveData
  } catch {
    return null
  }
}

export function hasSave(): boolean {
  return loadGame() !== null
}

export function clearSave(): void {
  try {
    localStorage.removeItem(SAVE_KEY)
  } catch {
    console.warn("Failed to clear save data")
  }
}
