import React, { useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PianoApp = () => {
  const firstNote = MidiNumbers.fromNote("c4");
  const lastNote = MidiNumbers.fromNote("f5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote, lastNote, keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Piyano Eğitimi</h2>
          <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(midiNumber) => console.log(`Çalınan nota: ${midiNumber}`)}
            stopNote={(midiNumber) => console.log(`Bırakılan nota: ${midiNumber}`)}
            width={600}
            keyboardShortcuts={keyboardShortcuts}
          />
          <Button className="mt-4">Ders Başlat</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PianoApp;
