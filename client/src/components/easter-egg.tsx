import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function EasterEgg() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    
    // Create extra sparkles for easter egg
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
          sparkle.remove();
        }, 2000);
      }, i * 50);
    }
  };

  return (
    <>
      <div className="hidden md:block relative">
        <button
          onClick={handleClick}
          className="text-2xl text-pink-500 cursor-pointer hover:scale-110 transition-transform"
          title="Click me! 🐱"
        >
          🐱
        </button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center">
          <div className="text-6xl mb-4">🐱</div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text mb-4">Secret Message! 🎉</DialogTitle>
          </DialogHeader>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You found the hidden Hello Kitty! 9 months ago, you found your way into my heart - 
            unexpected, wonderful, and absolutely perfect. Here's to many more months of love, 
            laughter, and beautiful surprises together! 💖
          </p>
          <div className="text-4xl animate-bounce">✨ 💕 ✨</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
