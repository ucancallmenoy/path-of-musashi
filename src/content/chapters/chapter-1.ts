import type { Chapter } from "@/types/game";

export const chapter1: Chapter = {
  id: "chapter-1",
  title: "Chapter I",
  scenes: [
    {
      id: "chapter-title",
      chapterTitle: "Chapter I",
      subtitle: "The Beginning",
      transition: "fadeIn",
    },

    {
      id: "morning-reveal",
      background: "/assets/backgrounds/prologue.png",
    },

    {
      id: "morning-village",
      background: "/assets/backgrounds/prologue.png",
      characters: [
        {
          character: "miyamoto",
          position: "center",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "Dawn broke quietly over Miyamoto Village.",
        },
        {
          speaker: "",
          text: "Mist clung to the rice paddies like a ghost, pale and still.",
        },
        {
          speaker: "",
          text: "A temple bell rang in the distance. Once. Twice. The sound faded into the hills.",
        },
        {
          speaker: "",
          text: "The scent of cherry blossoms drifted through paper windows.",
        },
        {
          speaker: "",
          text: "Somewhere, a rooster crowed. Another answered.",
        },
        {
          speaker: "",
          text: "Miyamoto lay still, listening to the silence between sounds.",
        },
        {
          speaker: "",
          text: "His eyes had opened before the first bell. They always did.",
        },
        {
          speaker: "",
          text: "He had been dreaming of rain. Of thunder rolling across a plain he had never seen.",
        },
        {
          speaker: "",
          text: "The dream always ended the same way — with him standing at the edge of a road that stretched beyond the horizon.",
        },
        {
          speaker: "",
          text: "He rose without a sound. The morning air was cool against his skin.",
        },
      ],
    },

    {
      id: "training-clearing",
      background: "/assets/backgrounds/prologue.png",
    },

    {
      id: "morning-training",
      background: "/assets/backgrounds/prologue.png",
      characters: [
        {
          character: "miyamoto",
          position: "center",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "Beyond the village, where the path dissolved into grass, there was a clearing.",
        },
        {
          speaker: "",
          text: "He came here every morning before the world woke.",
        },
        {
          speaker: "",
          text: "Dew soaked the hem of his clothes. He did not notice.",
        },
        {
          speaker: "",
          text: "The bokken felt heavy in his hands. Familiar. Like an extension of his own bones.",
        },
        {
          speaker: "",
          text: "He swung. Once. Twice. A third time.",
        },
        {
          speaker: "",
          text: "Each strike was the same, yet different. The air resisted, then yielded.",
        },
        {
          speaker: "",
          text: "Sweat formed on his brow. His breath found its rhythm.",
        },
        {
          speaker: "",
          text: "The world narrowed to the space between his hands and the empty air before him.",
        },
        {
          speaker: "",
          text: "He wondered if this was what it meant to be alive — to cut through silence.",
        },
        {
          speaker: "",
          text: "A bird called from the trees. He did not answer.",
        },
      ],
    },

    {
      id: "village-road-reveal",
      background: "/assets/backgrounds/village-road.png",
    },

    {
      id: "matahachi-meeting",
      background: "/assets/backgrounds/village-road.png",
      characters: [
        {
          character: "miyamoto",
          position: "left",
        },
        {
          character: "matahachi",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "Matahachi",
          text: "Takezō! There you are.",
        },
        {
          speaker: "Matahachi",
          text: "I have been looking everywhere. My mother sent me to find you twice.",
        },
        {
          speaker: "Miyamoto",
          text: "I was training.",
        },
        {
          speaker: "Matahachi",
          text: "Training. Always training. Do you ever get tired?",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Matahachi",
          text: "Never mind. You are impossible.",
        },
        {
          speaker: "Matahachi",
          text: "Listen. A merchant passed through last night. He was coming from the north.",
        },
        {
          speaker: "Matahachi",
          text: "He said there is movement. Troops gathering. Samurai from every province.",
        },
        {
          speaker: "Miyamoto",
          text: "Movement where?",
        },
        {
          speaker: "Matahachi",
          text: "He did not know the exact place. But something is about to happen. Everyone can feel it.",
        },
        {
          speaker: "Matahachi",
          text: "This could be our chance, Takezō.",
        },
        {
          speaker: "Miyamoto",
          text: "Chance for what?",
        },
        {
          speaker: "Matahachi",
          text: "To leave this village. To become something more than farmers' sons.",
        },
        {
          speaker: "Miyamoto",
          text: "The sword is not a tool for becoming something.",
        },
        {
          speaker: "Matahachi",
          text: "You sound like the old master.",
        },
        {
          speaker: "Miyamoto",
          text: "Perhaps he is right.",
        },
        {
          speaker: "Matahachi",
          text: "You have been spending too much time at the dojo.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Matahachi",
          text: "Walk with me. My mother is making rice cakes.",
        },
        {
          speaker: "Matahachi",
          text: "You can tell me about your training on the way.",
        },
      ],
    },

    {
      id: "shrine-reveal",
      background: "/assets/backgrounds/shrine.png",
    },

    {
      id: "otsu-meeting",
      background: "/assets/backgrounds/shrine.png",
      characters: [
        {
          character: "otsu",
          position: "left",
        },
        {
          character: "miyamoto",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "Otsū",
          text: "You have been avoiding me.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Otsū",
          text: "Three days. You have not come to the shrine.",
        },
        {
          speaker: "Miyamoto",
          text: "I have been occupied.",
        },
        {
          speaker: "Otsū",
          text: "With the sword.",
        },
        {
          speaker: "Miyamoto",
          text: "Yes.",
        },
        {
          speaker: "",
          text: "She turned away, looking at the cherry tree by the gate.",
        },
        {
          speaker: "Otsū",
          text: "Do you remember — when we were children — you promised me something.",
        },
        {
          speaker: "Miyamoto",
          text: "I remember.",
        },
        {
          speaker: "Otsū",
          text: "You said you would always protect this village.",
        },
        {
          speaker: "Miyamoto",
          text: "I said I would always protect you.",
        },
        {
          speaker: "Otsū",
          text: "Then why do I feel like you are already gone?",
        },
        {
          speaker: "",
          text: "The wind moved between them. Cherry petals fell onto the stone path.",
        },
        {
          speaker: "Miyamoto",
          text: "There is something I must find.",
        },
        {
          speaker: "Otsū",
          text: "What?",
        },
        {
          speaker: "Miyamoto",
          text: "I do not know yet.",
        },
        {
          speaker: "Otsū",
          text: "Take this.",
        },
        {
          speaker: "",
          text: "She pressed a small cloth pouch into his hand.",
        },
        {
          speaker: "Otsū",
          text: "It is an omamori. From the shrine. For protection.",
        },
        {
          speaker: "Miyamoto",
          text: "Otsū...",
        },
        {
          speaker: "Otsū",
          text: "Do not say anything. Just... return it to me when you come back.",
        },
        {
          speaker: "",
          text: "Her voice broke, just a little, on the last words.",
        },
      ],
    },

    {
      id: "dojo-reveal",
      background: "/assets/backgrounds/dojo.png",
    },

    {
      id: "dojo-scene",
      background: "/assets/backgrounds/dojo.png",
      characters: [
        {
          character: "dojo-master",
          position: "left",
        },
        {
          character: "miyamoto",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "Dojo Master",
          text: "Your swings are sharper today.",
        },
        {
          speaker: "Miyamoto",
          text: "I have been practicing.",
        },
        {
          speaker: "Dojo Master",
          text: "I know. The whole village knows. You wake before the birds.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Dojo Master",
          text: "Sit.",
        },
        {
          speaker: "",
          text: "They sat facing each other. The dojo was silent except for the wind outside.",
        },
        {
          speaker: "Dojo Master",
          text: "You are restless. I see it in your shoulders. In the way you hold the sword.",
        },
        {
          speaker: "Miyamoto",
          text: "I do not understand what I feel.",
        },
        {
          speaker: "Dojo Master",
          text: "That is the first truth you must accept. The sword does not answer questions. It only reveals the one who holds it.",
        },
        {
          speaker: "Miyamoto",
          text: "Then what am I supposed to do?",
        },
        {
          speaker: "Dojo Master",
          text: "Listen.",
        },
        {
          speaker: "",
          text: "A long silence settled between them. Dust floated in the shafts of morning light.",
        },
        {
          speaker: "Dojo Master",
          text: "I had a student once. Many years ago. He was like you. Strong. Hungry. Certain that the world was waiting for him.",
        },
        {
          speaker: "Dojo Master",
          text: "He left when the call came. I never saw him again.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Dojo Master",
          text: "The way of the sword is not the path of glory. It is the path of patience.",
        },
        {
          speaker: "Dojo Master",
          text: "Of knowing when to cut and when to sheathe.",
        },
        {
          speaker: "Dojo Master",
          text: "A man who lives by the sword alone will die by it.",
        },
        {
          speaker: "Miyamoto",
          text: "Then what should I live by?",
        },
        {
          speaker: "Dojo Master",
          text: "That is a question only you can answer.",
        },
        {
          speaker: "Dojo Master",
          text: "But I will tell you this — do not confuse strength with purpose.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Dojo Master",
          text: "Go. Think on what I have said.",
        },
      ],
    },

    {
      id: "village-square-reveal",
      background: "/assets/backgrounds/village-square.png",
    },

    {
      id: "elder-conversation",
      background: "/assets/backgrounds/village-square.png",
      characters: [
        {
          character: "elder",
          position: "left",
        },
        {
          character: "miyamoto",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "Village Elder",
          text: "Ah, Takezō. Come. Sit with me.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "",
          text: "The elder sat on a worn wooden bench by the well. His hands rested on a walking stick.",
        },
        {
          speaker: "Village Elder",
          text: "An old man knows when a young man has something on his mind.",
        },
        {
          speaker: "Miyamoto",
          text: "I am thinking about the road.",
        },
        {
          speaker: "Village Elder",
          text: "The road?",
        },
        {
          speaker: "Miyamoto",
          text: "Beyond the village. Beyond these mountains.",
        },
        {
          speaker: "Village Elder",
          text: "I see. So the rumors have reached you as well.",
        },
        {
          speaker: "Miyamoto",
          text: "Matahachi spoke of soldiers gathering in the north.",
        },
        {
          speaker: "Village Elder",
          text: "It is true. There is talk of a great battle. The kind that changes everything.",
        },
        {
          speaker: "",
          text: "The elder paused, looking at the distant mountains veiled in haze.",
        },
        {
          speaker: "Village Elder",
          text: "I have seen war, boy. I know what it takes from young men.",
        },
        {
          speaker: "Village Elder",
          text: "It takes their youth. Their innocence. Sometimes their lives before they have truly lived.",
        },
        {
          speaker: "Miyamoto",
          text: "Is it wrong to want to see the world?",
        },
        {
          speaker: "Village Elder",
          text: "No. But see it with your eyes open. Do not let others decide what you fight for.",
        },
        {
          speaker: "Miyamoto",
          text: "And if I do not know what I fight for?",
        },
        {
          speaker: "Village Elder",
          text: "Then you are not ready to draw your sword.",
        },
        {
          speaker: "",
          text: "The elder smiled, tired and kind.",
        },
        {
          speaker: "Village Elder",
          text: "But you will learn. The road will teach you.",
        },
      ],
    },

    {
      id: "village-exit-reveal",
      background: "/assets/backgrounds/village-exit.png",
    },

    {
      id: "departure-goodbye",
      background: "/assets/backgrounds/village-exit.png",
      characters: [
        {
          character: "matahachi",
          position: "left",
        },
        {
          character: "miyamoto",
          position: "center",
        },
        {
          character: "otsu",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "Matahachi",
          text: "So... this is it.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Matahachi",
          text: "My mother cried when I told her. Said I would come back with my bones broken.",
        },
        {
          speaker: "Miyamoto",
          text: "You do not have to come.",
        },
        {
          speaker: "Matahachi",
          text: "And miss the greatest adventure of our lives? Not a chance.",
        },
        {
          speaker: "",
          text: "Matahachi laughed, but it was thin. The sound did not reach his eyes.",
        },
        {
          speaker: "Otsū",
          text: "...",
        },
        {
          speaker: "",
          text: "The three of them stood at the edge of the village. The road stretched ahead, dusty and endless.",
        },
        {
          speaker: "Otsū",
          text: "I meant what I said. At the shrine.",
        },
        {
          speaker: "Miyamoto",
          text: "I know.",
        },
        {
          speaker: "Otsū",
          text: "Then come back.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Otsū",
          text: "Promise me.",
        },
        {
          speaker: "Miyamoto",
          text: "I cannot promise what I cannot control.",
        },
        {
          speaker: "Otsū",
          text: "Then promise me you will try.",
        },
        {
          speaker: "",
          text: "A long pause. The wind stirred the grass. A hawk cried somewhere above.",
        },
        {
          speaker: "Miyamoto",
          text: "I will try.",
        },
        {
          speaker: "Matahachi",
          text: "We should go. Before the sun gets higher.",
        },
        {
          speaker: "",
          text: "Miyamoto turned. He looked at Otsū one last time.",
        },
        {
          speaker: "Miyamoto",
          text: "Goodbye.",
        },
        {
          speaker: "Otsū",
          text: "...Goodbye.",
        },
      ],
    },

    {
      id: "departure-walk",
      background: "/assets/backgrounds/village-exit.png",
      dialogue: [
        {
          speaker: "",
          text: "He did not look back.",
        },
        {
          speaker: "",
          text: "The village faded behind him. The sound of Otsū's footsteps did not follow.",
        },
        {
          speaker: "",
          text: "The road was empty. The sky was vast.",
        },
        {
          speaker: "",
          text: "He wondered if this was how all journeys began — with a single step away from everything familiar.",
        },
        {
          speaker: "",
          text: "The mountains waited in the distance, blue and patient.",
        },
        {
          speaker: "",
          text: "His hand tightened on the hilt of his bokken.",
        },
        {
          speaker: "",
          text: "Somewhere behind him, a bird sang.",
        },
        {
          speaker: "",
          text: "He walked.",
        },
      ],
    },

    {
      id: "chapter-end",
      chapterTitle: "Chapter II",
      subtitle: "The Battle of Sekigahara",
      nextScene: "chapter-2",
      transition: "fadeIn",
    },
  ],
};
