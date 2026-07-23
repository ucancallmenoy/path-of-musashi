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
      bgm: "/assets/bg-music/prologue.mp3",
    },

    {
      id: "book-of-five-rings",
      background: "/assets/backgrounds/prologue-book.png",
      bgm: "/assets/bg-music/prologue.mp3",
    },

    {
      id: "epigraph",
      background: "/assets/backgrounds/prologue-book.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: '"I have been many years training in the Way of Strategy.',
        },
        {
          speaker: "",
          text: 'From youth, my heart has been inclined toward it.',
        },
        {
          speaker: "",
          text: 'I study morning and evening, searching for the principle.',
        },
        {
          speaker: "",
          text: "Now, in my sixtieth year, I take up my brush to explain the true spirit.",
        },
        {
          speaker: "",
          text: "But before the book, there was the road.",
        },
        {
          speaker: "",
          text: "And before the road, there was a boy."
        },
        {
          speaker: "",
          text: "— Miyamoto Musashi, from The Book of Five Rings",
        },
      ],
    },

    {
      id: "bg-reveal",
      background: "/assets/backgrounds/prologue-book.png",
      bgm: "/assets/bg-music/prologue.mp3",
    },

    {
      id: "sengoku-japan",
      background: "/assets/backgrounds/prologue-war.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: "The land of Japan had known a century of war.",
        },
        {
          speaker: "",
          text: "Province fought province. Clan devoured clan.",
        },
        {
          speaker: "",
          text: "Lords rose on morning tides of glory and drowned by dusk.",
        },
        {
          speaker: "",
          text: "The Sengoku Jidai — the Age of Warring States — had turned the earth red for generations.",
        },
        {
          speaker: "",
          text: "Farmers became soldiers. Soldiers became corpses. Corpses became fertilizer for the next season's rice.",
        },
        {
          speaker: "",
          text: "And through it all, the sword remained.",
        },
        {
          speaker: "",
          text: "A constant companion to every man who dared to dream of something more.",
        },
        {
          speaker: "",
          text: "But even an endless war must end.",
        },
        {
          speaker: "",
          text: "And when peace comes, what becomes of those who were forged for battle?",
        },
      ],
    },

    {
      id: "character-intro",
      background: "/assets/backgrounds/prologue.png",
      transition: "fadeIn",
      bgm: "/assets/bg-music/prologue.mp3",
    },

    {
      id: "musashi-birth",
      background: "/assets/backgrounds/prologue-childhood.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: "In the autumn of 1584, in the small village of Miyamoto in Harima Province, a boy was born.",
        },
        {
          speaker: "",
          text: "They named him Shinmen Takezō.",
        },
        {
          speaker: "",
          text: "His mother died bringing him into the world.",
        },
        {
          speaker: "",
          text: "His father, Shinmen Munisai, was a master of the sword and the jutte — a warrior of considerable skill and reputation.",
        },
        {
          speaker: "",
          text: "The house of Shinmen served the lords of Takayama Castle.",
        },
        {
          speaker: "",
          text: "The boy grew in the shadow of his father's discipline and the absence of his mother's warmth.",
        },
        {
          speaker: "",
          text: "He learned to hold a wooden sword before he learned to write his name.",
        },
      ],
    },

    {
      id: "fathers-shadow",
      background: "/assets/backgrounds/prologue-eyes.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: "Munisai was a strict man. He demanded perfection.",
        },
        {
          speaker: "",
          text: "Every swing of the bokken was watched. Every mistake was met with silence or a blow.",
        },
        {
          speaker: "",
          text: "He would wake the boy before sunrise and train him until his arms trembled.",
        },
        {
          speaker: "",
          text: "\"Do not call her mother,\" Munisai said once, when Takezō asked about the woman in the portrait.",
        },
        {
          speaker: "",
          text: "Takezō never asked again.",
        },
        {
          speaker: "",
          text: "But in the night, when the house was still, he dreamed of a woman's voice he could not remember.",
        },
        {
          speaker: "",
          text: "The sword became his mother. The discipline became his home.",
        },
      ],
    },

    {
      id: "eyes-of-a-beast",
      background: "/assets/backgrounds/prologue-eyes.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: "When Takezō was six, his father looked into his eyes during a lesson and stopped mid-swing.",
        },
        {
          speaker: "",
          text: "He saw something there that gave him pause.",
        },
        {
          speaker: "",
          text: "\"You have the eyes of a beast,\" Munisai said.",
        },
        {
          speaker: "",
          text: "It was not a compliment. It was not an insult. It was an observation — and a warning.",
        },
        {
          speaker: "",
          text: "The boy did not flinch. He did not lower his gaze.",
        },
        {
          speaker: "",
          text: "He simply waited for the next command, the bokken steady in his small hands.",
        },
        {
          speaker: "",
          text: "That fire — untamed, unbroken — would either consume him or set him free.",
        },
        {
          speaker: "",
          text: "Only the road ahead would decide.",
        },
      ],
    },

    {
      id: "the-way",
      background: "/assets/backgrounds/prologue-way.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: "The Way of the Sword is not a path of violence.",
        },
        {
          speaker: "",
          text: "It is a path of understanding.",
        },
        {
          speaker: "",
          text: "The blade is a mirror. It reflects the one who holds it — their fear, their pride, their truth.",
        },
        {
          speaker: "",
          text: "A man who seeks only to cut will eventually be cut.",
        },
        {
          speaker: "",
          text: "But a man who seeks to understand himself through the sword walks a different road.",
        },
        {
          speaker: "",
          text: "It is the road of patience. Of stillness. Of knowing when to strike and when to let the blade rest.",
        },
        {
          speaker: "",
          text: "Takezō did not know this yet. He only knew the fire.",
        },
        {
          speaker: "",
          text: "But the fire, if guided, can forge a blade stronger than any steel.",
        },
      ],
    },

    {
      id: "the-road-before",
      background: "/assets/backgrounds/prologue-road.png",
      bgm: "/assets/bg-music/prologue.mp3",
      dialogue: [
        {
          speaker: "",
          text: "The land had known centuries of war.",
        },
        {
          speaker: "",
          text: "The sword had become both protector and executioner.",
        },
        {
          speaker: "",
          text: "But even in times of peace, there were those who still sought the path of the blade.",
        },
        {
          speaker: "",
          text: "The year was 1600. The old order was crumbling.",
        },
        {
          speaker: "",
          text: "Two great powers were gathering for a battle that would shape the future of Japan.",
        },
        {
          speaker: "",
          text: "And in a small village called Miyamoto, a young man stood at the edge of everything he had ever known.",
        },
        {
          speaker: "",
          text: "He was sixteen years old.",
        },
        {
          speaker: "",
          text: "His name was Shinmen Takezō.",
        },
        {
          speaker: "",
          text: "But the world would come to know him by another name.",
        },
        {
          speaker: "",
          text: "Miyamoto Musashi.",
        },
        {
          speaker: "",
          text: "A young swordsman.",
        },
        {
          speaker: "",
          text: "With nothing but his resolve.",
        },
        {
          speaker: "",
          text: "And the road ahead.",
        },
      ],
    },

    {
      id: "chapter-end",
      chapterTitle: "Chapter I",
      subtitle: "The Beginning",
      nextScene: "chapter-1",
      transition: "fadeIn",
      bgm: "/assets/bg-music/prologue.mp3",
    },
  ],
}
