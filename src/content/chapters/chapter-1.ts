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
      bgm: "/assets/bg-music/morning.mp3",
    },

    {
      id: "morning-village",
      background: "/assets/backgrounds/prologue.png",
      bgm: "/assets/bg-music/morning.mp3",
      characters: [
        {
          character: "miyamoto/neutral",
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
        {
          speaker: "",
          text: "He dressed in silence. The house breathed around him — the creak of old wood, the whisper of wind through the walls.",
        },
        {
          speaker: "",
          text: "He stepped outside. The world was soft with mist. It would burn away soon.",
        },
      ],
    },

    {
      id: "training-clearing",
      background: "/assets/backgrounds/prologue.png",
      bgm: "/assets/bg-music/morning.mp3",
    },

    {
      id: "morning-training",
      background: "/assets/backgrounds/prologue.png",
      bgm: "/assets/bg-music/morning.mp3",
      characters: [
        {
          character: "miyamoto/neutral",
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
        {
          speaker: "",
          text: "Again. Each swing must become instinct, not thought.",
        },
        {
          speaker: "",
          text: "Again. The body must remember what the mind forgets.",
        },
        {
          speaker: "",
          text: "He closed his eyes and swung into the empty air. The world fell away.",
        },
      ],
    },

    {
      id: "village-road-reveal",
      background: "/assets/backgrounds/village-road.png",
      bgm: "/assets/bg-music/village.mp3",
    },

    {
      id: "matahachi-meeting",
      background: "/assets/backgrounds/village-road.png",
      bgm: "/assets/bg-music/village.mp3",
      characters: [
        {
          character: "miyamoto/neutral",
          position: "left",
        },
        {
          character: "matahachi/neutral",
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
        {
          speaker: "",
          text: "They walked together through the waking village. Dust rose beneath their feet.",
        },
        {
          speaker: "Matahachi",
          text: "You never answered my question, you know.",
        },
        {
          speaker: "Miyamoto",
          text: "Which one?",
        },
        {
          speaker: "Matahachi",
          text: "Do you ever get tired?",
        },
        {
          speaker: "Miyamoto",
          text: "Every day.",
        },
        {
          speaker: "Matahachi",
          text: "Then why do you keep going?",
        },
        {
          speaker: "Miyamoto",
          text: "Because stopping is worse.",
        },
        {
          speaker: "",
          text: "Matahachi had no answer to that. They walked in silence for a while.",
        },
      ],
    },

    {
      id: "osugi-scolding",
      background: "/assets/backgrounds/village-road.png",
      bgm: "/assets/bg-music/village.mp3",
      characters: [
        {
          character: "osugi/neutral",
          position: "center",
        },
        {
          character: "matahachi/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "They rounded the corner and walked straight into Osugi.",
        },
        {
          speaker: "Osugi",
          text: "There you are. Wasting time again.",
        },
        {
          speaker: "Matahachi",
          text: "Mother, I was just —",
        },
        {
          speaker: "Osugi",
          text: "I know exactly what you were doing. Following this one around like a lost puppy.",
        },
        {
          speaker: "",
          text: "She jabbed a finger at Takezō's chest.",
        },
        {
          speaker: "Osugi",
          text: "You. You fill his head with dreams of glory. Of swords and battles. You think that makes you a man?",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Osugi",
          text: "My husband died in a war. For what? A patch of land that changed hands twice before his body grew cold.",
        },
        {
          speaker: "Matahachi",
          text: "Mother, that is enough —",
        },
        {
          speaker: "Osugi",
          text: "It is not enough. You will end up dead in a ditch, and for what? So some lord can add another province to his map?",
        },
        {
          speaker: "",
          text: "She looked at Takezō with cold, hard eyes.",
        },
        {
          speaker: "Osugi",
          text: "You are a bad influence. You always have been.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Osugi",
          text: "Say something. Defend yourself.",
        },
        {
          speaker: "Miyamoto",
          text: "There is nothing to defend.",
        },
        {
          speaker: "",
          text: "She stared at him. He did not look away.",
        },
        {
          speaker: "Osugi",
          text: "Hmph. At least you are not a coward. I will give you that.",
        },
        {
          speaker: "",
          text: "She turned and walked back toward the house, her sandals slapping the hard earth.",
        },
        {
          speaker: "Matahachi",
          text: "...I am sorry about her.",
        },
        {
          speaker: "Miyamoto",
          text: "She is not wrong.",
        },
      ],
    },

    {
      id: "shrine-reveal",
      background: "/assets/backgrounds/shrine.png",
      bgm: "/assets/bg-music/shrine.mp3",
    },

    {
      id: "otsu-meeting",
      background: "/assets/backgrounds/shrine.png",
      bgm: "/assets/bg-music/shrine.mp3",
      characters: [
        {
          character: "otsu/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
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
        {
          speaker: "",
          text: "She did not look at him as he turned to leave.",
        },
        {
          speaker: "",
          text: "She looked at the cherry tree instead. It had seen so many springs. It would see more.",
        },
        {
          speaker: "",
          text: "She wondered if she would see him next spring.",
        },
      ],
    },

    {
      id: "shrine-memory",
      background: "/assets/backgrounds/shrine.png",
      bgm: "/assets/bg-music/shrine.mp3",
      characters: [
        {
          character: "otsu/neutral",
          position: "center",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "She stayed at the gate long after his footsteps faded.",
        },
        {
          speaker: "",
          text: "The cherry tree swayed gently above her. She reached out and touched its bark.",
        },
        {
          speaker: "",
          text: "She remembered being seven years old.",
        },
        {
          speaker: "",
          text: "The river was swollen with spring rain. She had slipped on the bank and fallen in.",
        },
        {
          speaker: "",
          text: "He had jumped in without thinking, grabbed her hand, pulled her to shore.",
        },
        {
          speaker: "",
          text: "She had coughed water and cried. He had sat beside her, silent, until she stopped.",
        },
        {
          speaker: "",
          text: "Then he had picked a flower — a small white one — and placed it in her wet hair.",
        },
        {
          speaker: "",
          text: "\"You are the only one who does not look at me like I am a monster,\" he had said.",
        },
        {
          speaker: "",
          text: "She had never forgotten those words.",
        },
        {
          speaker: "",
          text: "Her fingers traced the bark of the cherry tree. Her eyes were dry, but only barely.",
        },
        {
          speaker: "",
          text: "\"You were never a monster to me,\" she whispered.",
        },
        {
          speaker: "",
          text: "The wind answered with silence.",
        },
      ],
    },

    {
      id: "dojo-reveal",
      background: "/assets/backgrounds/dojo.png",
      bgm: "/assets/bg-music/dojo.mp3",
    },

    {
      id: "dojo-scene",
      background: "/assets/backgrounds/dojo.png",
      bgm: "/assets/bg-music/dojo.mp3",
      characters: [
        {
          character: "dojo-master/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
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
        {
          speaker: "",
          text: "Musashi bowed. He stood. He walked to the door.",
        },
        {
          speaker: "Dojo Master",
          text: "Takezō.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Dojo Master",
          text: "The road you choose... make sure it is yours.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "",
          text: "He stepped out into the morning light. The dojo felt smaller than it had before.",
        },
      ],
    },

    {
      id: "blacksmith-wisdom",
      background: "/assets/backgrounds/village-square.png",
      bgm: "/assets/bg-music/dojo.mp3",
      characters: [
        {
          character: "blacksmith/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "The blacksmith's hammer rang against the anvil. Sparks flew like fireflies.",
        },
        {
          speaker: "",
          text: "Musashi stood at the entrance, watching.",
        },
        {
          speaker: "Blacksmith",
          text: "You again. Come to stare at the fire?",
        },
        {
          speaker: "Miyamoto",
          text: "I came to ask about the blade.",
        },
        {
          speaker: "Blacksmith",
          text: "Still swinging that wooden stick?",
        },
        {
          speaker: "Miyamoto",
          text: "It is all I have.",
        },
        {
          speaker: "Blacksmith",
          text: "A blade is not so different from a man.",
        },
        {
          speaker: "",
          text: "He plunged the hot steel into water. Steam hissed violently.",
        },
        {
          speaker: "Blacksmith",
          text: "It is forged in fire. Hammered while hot. Cooled in water. Each strike makes it stronger — or breaks it.",
        },
        {
          speaker: "Blacksmith",
          text: "You are like this steel, boy. Still being shaped.",
        },
        {
          speaker: "Miyamoto",
          text: "When will I be ready for a real sword?",
        },
        {
          speaker: "Blacksmith",
          text: "When you understand that a real sword changes a man.",
        },
        {
          speaker: "",
          text: "He pulled the metal from the water and examined it in the light.",
        },
        {
          speaker: "Blacksmith",
          text: "A blade is not a tool for killing. It is a mirror. It shows you who you truly are.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Blacksmith",
          text: "Come back when you are ready. I will make you a sword worthy of your hand.",
        },
      ],
    },

    {
      id: "merchant-news",
      background: "/assets/backgrounds/village-square.png",
      bgm: "/assets/bg-music/village.mp3",
      characters: [
        {
          character: "merchant/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "A traveling merchant had set up his wares by the well. He was a talkative man, eager for company.",
        },
        {
          speaker: "Merchant",
          text: "You there, young man. You look like you could use some news.",
        },
        {
          speaker: "Miyamoto",
          text: "What news?",
        },
        {
          speaker: "Merchant",
          text: "The kind that changes everything.",
        },
        {
          speaker: "",
          text: "He leaned in, his voice dropping.",
        },
        {
          speaker: "Merchant",
          text: "Tokugawa Ieyasu has declared against Ishida Mitsunari. The country is splitting in two.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Merchant",
          text: "Every lord is choosing sides. Families are turning against each other. It will be the greatest battle this land has seen in a generation.",
        },
        {
          speaker: "Miyamoto",
          text: "Where?",
        },
        {
          speaker: "Merchant",
          text: "A place called Sekigahara. A valley in the mountains. Narrow. Perfect for a slaughter.",
        },
        {
          speaker: "",
          text: "The merchant unwrapped a cloth and began folding it, his hands busy.",
        },
        {
          speaker: "Merchant",
          text: "Mark my words, boy. That battle will decide the future of Japan. Everything will change after it.",
        },
        {
          speaker: "Miyamoto",
          text: "And the young men who go there?",
        },
        {
          speaker: "Merchant",
          text: "Some will become heroes. Most will become food for crows.",
        },
        {
          speaker: "",
          text: "The merchant laughed, but it was hollow.",
        },
        {
          speaker: "Merchant",
          text: "You are the quiet type, eh? That is good. The loud ones die first.",
        },
      ],
    },

    {
      id: "village-square-reveal",
      background: "/assets/backgrounds/village-square.png",
      bgm: "/assets/bg-music/elder.mp3",
    },

    {
      id: "elder-conversation",
      background: "/assets/backgrounds/village-square.png",
      bgm: "/assets/bg-music/elder.mp3",
      characters: [
        {
          character: "elder/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
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
        {
          speaker: "",
          text: "Musashi bowed his head. The elder watched him with eyes that had seen too much.",
        },
        {
          speaker: "",
          text: "As he walked away, the elder spoke one last time.",
        },
        {
          speaker: "Village Elder",
          text: "The road is a cruel teacher, Takezō. But it is the only honest one.",
        },
      ],
    },

    {
      id: "hilltop-reflection",
      background: "/assets/backgrounds/prologue.png",
      bgm: "/assets/bg-music/morning.mp3",
      characters: [
        {
          character: "miyamoto/determine",
          position: "center",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "He climbed the hill above the village as the sun began to sink.",
        },
        {
          speaker: "",
          text: "The sky burned orange and gold. The rice paddies shimmered below.",
        },
        {
          speaker: "",
          text: "He sat alone on the grass, the bokken resting across his knees.",
        },
        {
          speaker: "",
          text: "Below him, the village was waking from its afternoon sleep. Cooking fires sent thin ribbons of smoke into the air.",
        },
        {
          speaker: "",
          text: "He could hear a dog barking. A child laughing. A woman calling someone home.",
        },
        {
          speaker: "",
          text: "This was what he was leaving.",
        },
        {
          speaker: "",
          text: "This warmth. This peace. This cage.",
        },
        {
          speaker: "",
          text: "He closed his eyes. He saw the road stretching ahead, unfamiliar and vast.",
        },
        {
          speaker: "",
          text: "A flicker of doubt passed through him — small, cold, honest.",
        },
        {
          speaker: "",
          text: "He opened his eyes. The doubt did not vanish. But it no longer mattered.",
        },
        {
          speaker: "",
          text: "He stood. The hill had given him nothing but the question. That was enough.",
        },
        {
          speaker: "",
          text: "He began the walk back down as the first stars appeared.",
        },
      ],
    },

    {
      id: "village-exit-reveal",
      background: "/assets/backgrounds/village-exit.png",
      bgm: "/assets/bg-music/departure.mp3",
    },

    {
      id: "departure-goodbye",
      background: "/assets/backgrounds/village-exit.png",
      bgm: "/assets/bg-music/departure.mp3",
      characters: [
        {
          character: "matahachi/neutral",
          position: "left",
        },
        {
          character: "miyamoto/neutral",
          position: "center",
        },
        {
          character: "otsu/neutral",
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
        {
          speaker: "",
          text: "He walked past her. His shoulder brushed hers. Just barely.",
        },
        {
          speaker: "",
          text: "She did not reach for him. She wanted to.",
        },
        {
          speaker: "",
          text: "But some distances cannot be closed by reaching.",
        },
      ],
    },

    {
      id: "osugi-farewell",
      background: "/assets/backgrounds/village-exit.png",
      bgm: "/assets/bg-music/departure.mp3",
      characters: [
        {
          character: "osugi/neutral",
          position: "left",
        },
        {
          character: "matahachi/neutral",
          position: "center",
        },
        {
          character: "miyamoto/neutral",
          position: "right",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "They had taken three steps when the voice stopped them.",
        },
        {
          speaker: "Osugi",
          text: "Matahachi.",
        },
        {
          speaker: "",
          text: "He turned. His mother stood at the gate, her face hard as stone.",
        },
        {
          speaker: "Matahachi",
          text: "Mother. I thought you said your goodbyes.",
        },
        {
          speaker: "Osugi",
          text: "I did. But I forgot something.",
        },
        {
          speaker: "",
          text: "She walked up to him and shoved a cloth bundle into his chest.",
        },
        {
          speaker: "Osugi",
          text: "Rice cakes. Do not let them go to waste.",
        },
        {
          speaker: "Matahachi",
          text: "...",
        },
        {
          speaker: "Osugi",
          text: "And this.",
        },
        {
          speaker: "",
          text: "She pressed a small pouch into his hand — coins, by the weight of it.",
        },
        {
          speaker: "Osugi",
          text: "Come back alive, you fool.",
        },
        {
          speaker: "",
          text: "Her voice cracked on the last word. She turned to Takezō.",
        },
        {
          speaker: "Osugi",
          text: "You. Watch over him. Or I will find you.",
        },
        {
          speaker: "Miyamoto",
          text: "...",
        },
        {
          speaker: "Osugi",
          text: "I mean it.",
        },
        {
          speaker: "",
          text: "She did not wait for an answer. She turned and walked back through the gate.",
        },
        {
          speaker: "",
          text: "Matahachi watched her go. The bundle felt heavy in his hands.",
        },
      ],
    },

    {
      id: "departure-walk",
      background: "/assets/backgrounds/village-exit.png",
      bgm: "/assets/bg-music/departure.mp3",
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
        {
          speaker: "",
          text: "One step. Another. The village grew smaller behind him.",
        },
        {
          speaker: "",
          text: "He did not look back. He would not allow himself that weakness.",
        },
        {
          speaker: "",
          text: "But he felt the weight of her gaze on his back long after the road had curved and the shrine had disappeared from view.",
        },
      ],
    },

    {
      id: "otsu-remaining",
      background: "/assets/backgrounds/shrine.png",
      bgm: "/assets/bg-music/shrine.mp3",
      characters: [
        {
          character: "otsu/neutral",
          position: "center",
        },
      ],
      dialogue: [
        {
          speaker: "",
          text: "The shrine was quiet.",
        },
        {
          speaker: "",
          text: "Otsū stood at the gate long after they had disappeared from sight.",
        },
        {
          speaker: "",
          text: "The cherry tree by the path was still. Not a single petal moved.",
        },
        {
          speaker: "",
          text: "She touched the place where his hand had been. The warmth was already gone.",
        },
        {
          speaker: "",
          text: "She did not cry. Not yet.",
        },
        {
          speaker: "",
          text: "She would save it for when the moonlight came.",
        },
        {
          speaker: "",
          text: "\"Walk safely,\" she whispered.",
        },
        {
          speaker: "",
          text: "The wind took her words and carried them down the empty road.",
        },
        {
          speaker: "",
          text: "She turned and walked into the shrine. The paper door slid shut behind her.",
        },
        {
          speaker: "",
          text: "The silence returned. The cherry tree waited for spring.",
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
