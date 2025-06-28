import WelcomeSection from "@/components/welcome-section";
import MemoryTimeline from "@/components/memory-timeline";
import DayCounter from "@/components/day-counter";
import LoveNotes from "@/components/love-notes";
import MessageInput from "@/components/message-input";
import EasterEgg from "@/components/easter-egg";
import { Heart, Calendar, MessageSquare, Sparkles } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Fredoka One, cursive' }}>
            💖 Our Story
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('welcome')}
              className="text-purple-900 hover:text-pink-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('memories')}
              className="text-purple-900 hover:text-pink-500 transition-colors"
            >
              Memories
            </button>
            <button 
              onClick={() => scrollToSection('counter')}
              className="text-purple-900 hover:text-pink-500 transition-colors"
            >
              Counter
            </button>
            <button 
              onClick={() => scrollToSection('notes')}
              className="text-purple-900 hover:text-pink-500 transition-colors"
            >
              Notes
            </button>
          </div>
          <EasterEgg />
        </div>
      </nav>

      {/* Sections */}
      <WelcomeSection />
      <MemoryTimeline />
      <DayCounter />
      <LoveNotes />
      <MessageInput />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-4xl mb-4">💖</div>
          <h3 className="text-2xl font-bold mb-4 gradient-text">Made with infinite love</h3>
          <p className="text-gray-300 mb-6">
            Every pixel, every animation, every word was crafted to show you how much you mean to me.
          </p>
          <p className="text-sm text-gray-400">
            Our Love Story PWA • Installable on iOS Safari • © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
