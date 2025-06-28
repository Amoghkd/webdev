import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Mail } from "lucide-react";
import { loveNotes } from "@/data/love-notes";

export default function LoveNotes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState("");

  const showRandomLoveNote = () => {
    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    setCurrentNote(randomNote);
    setIsModalOpen(true);
  };

  return (
    <section id="love-notes" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-16" style={{ fontFamily: 'Fredoka One, cursive' }}>
          <Mail className="inline mr-4 h-8 w-8" />
          Love Notes
          <Mail className="inline ml-4 h-8 w-8" />
        </h2>
        
        <div className="mb-12">
          <Button 
            onClick={showRandomLoveNote}
            className="bg-gradient-to-r from-purple-900 to-gray-800 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-auto"
          >
            <Heart className="mr-2 h-5 w-5" />
            Tap here when you miss me 💌
          </Button>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-100 opacity-50"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-4">💌</div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold gothic-text mb-6">A Love Note For You</DialogTitle>
              </DialogHeader>
              <p className="text-lg text-gray-700 leading-relaxed gothic-text font-semibold mb-6">
                {currentNote}
              </p>
              <div className="text-2xl">💕</div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
