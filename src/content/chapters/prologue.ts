import type { Chapter } from "@/types/game"

export const prologue: Chapter = {
  id: "prologue",
  title: "Prologue",
  scenes: [
    {
      id: "title",
      chapterTitle: "PATH OF MUSASHI",
      subtitle: "The Way of the Sword",
      transition: "fadeIn",
    },
    {
      id: "bg-reveal",
      background: "/assets/backgrounds/prologue.png",
      transition: "fadeIn",
    },
    {
      id: "character-intro",
      background: "/assets/backgrounds/prologue.png",
      characters: [{ character: "miyamoto", position: "center" }],
      transition: "fadeIn",
    },
    {
      id: "narration",
      background: "/assets/backgrounds/prologue.png",
      characters: [{ character: "miyamoto", position: "center" }],
      dialogue: [
        { speaker: "Narrator", text: "The land had known centuries of war." },
        { speaker: "Narrator", text: "The sword had become both protector and executioner." },
        { speaker: "Narrator", text: "But even in times of peace..." },
        { speaker: "Narrator", text: "There were those who still sought the path of the blade." },
        { speaker: "Narrator", text: "Miyamoto Musashi." },
        { speaker: "Narrator", text: "A young swordsman." },
        { speaker: "Narrator", text: "With nothing but his resolve." },
        { speaker: "Narrator", text: "And the road ahead." },
      ],
      transition: "fadeIn",
    },
    {
      id: "chapter-end",
      chapterTitle: "Chapter I",
      subtitle: "The Beginning",
      nextScene: "chapter-1",
      transition: "fadeIn",
    },
  ],
}
