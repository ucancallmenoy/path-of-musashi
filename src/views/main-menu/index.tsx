"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/8bit/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/8bit/dialog";
import { Separator } from "@/components/ui/8bit/separator";
import { hasSave } from "@/lib/storage";

const menuItems = [
  { label: "New Game", id: "new-game" },
  { label: "Continue", id: "continue" },
  { label: "Settings", id: "settings" },
  { label: "Credits", id: "credits" },
] as const;

export default function MainMenu() {
  const router = useRouter();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [saveExists, setSaveExists] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSaveExists(hasSave()), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = (id: string) => {
    if (id === "settings") {
      setSettingsOpen(true);
    } else if (id === "credits") {
      setCreditsOpen(true);
    } else if (id === "new-game") {
      router.push("/game?chapter=prologue");
    } else if (id === "continue") {
      router.push("/game?continue=true");
    }
  };

  return (
    <div className="relative h-dvh w-full bg-gradient-to-b from-retro-bg-dark to-[#050508] flex flex-col items-center justify-center overflow-hidden select-none">

      <div className="absolute bottom-4 left-4 text-[10px] text-retro-beige/40 retro">
        v0.1.0
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] text-retro-beige/40 retro">
        © 2026 Path of Musashi
      </div>

      <div className="flex flex-col items-center gap-16 px-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="retro text-2xl sm:text-3xl md:text-4xl text-retro-beige text-center leading-relaxed tracking-[0.15em]">
            PATH OF<br />MUSASHI
          </h1>
          <Separator className="w-36 data-[orientation=horizontal]:bg-retro-gold/50" />
          <p className="retro text-[10px] sm:text-xs text-retro-gold tracking-[0.2em]">
            The Way of the Sword
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          {menuItems.map((item) => {
            const isContinue = item.id === "continue"
            const disabled = isContinue && !saveExists
            return (
              <Button
                key={item.id}
                variant="ghost"
                font="retro"
                className={`text-retro-beige text-[11px] sm:text-xs h-auto py-3 px-8 transition-colors ${disabled ? "opacity-30 cursor-not-allowed" : "hover:text-retro-gold"}`}
                onClick={() => !disabled && handleMenuClick(item.id)}
              >
                {item.label}
              </Button>
            )
          })}
        </div>
      </div>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Adjust your game settings
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <span className="retro text-[10px] text-retro-beige">Volume</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <div
                    key={bar}
                    className="w-1.5 h-4 bg-retro-gold/70"
                  />
                ))}
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="retro text-[10px] text-retro-beige">SFX</span>
              <span className="retro text-[10px] text-retro-gold">ON</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="retro text-[10px] text-retro-beige">BGM</span>
              <span className="retro text-[10px] text-retro-gold">ON</span>
            </div>
          </div>
          <Button
            variant="default"
            size="sm"
            className="w-full text-xs"
            onClick={() => setSettingsOpen(false)}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={creditsOpen} onOpenChange={setCreditsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Credits</DialogTitle>
            <DialogDescription>
              The people behind the path
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4 text-center">
            <p className="retro text-xs text-retro-beige">Design &amp; Development</p>
            <p className="retro text-[10px] text-retro-beige/70">Patrick Perez</p>
            <Separator />
            <p className="retro text-[10px] text-retro-gold">
              Powered by Next.js &amp; 8bitcn
            </p>
          </div>
          <Button
            variant="default"
            size="sm"
            className="w-full text-xs"
            onClick={() => setCreditsOpen(false)}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

    </div>
  );
}
