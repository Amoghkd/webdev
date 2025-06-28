import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function WelcomeSection() {
  const scrollToMemories = () => {
    const element = document.getElementById('memories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-20 px-4">
        {/* Animated Hello Kitty placeholder */}
        <div className="mb-8 animate-float">
          <div className="w-48 h-48 mx-auto rounded-full border-8 border-white shadow-2xl bg-pink-100 flex items-center justify-center animate-pulse-slow">
            <div className="text-8xl">🐱</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-bounce-slow" style={{ fontFamily: 'Fredoka One, cursive' }}>
          Hi Beautiful! 💖
        </h1>
        <h2 className="text-2xl md:text-4xl text-purple-900 mb-8 font-semibold">
          Happy 9 Months Together!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Every day with you feels like a dream come true. Let's celebrate our beautiful journey together! 🌸
        </p>
        
        <Button 
          onClick={scrollToMemories}
          className="bg-gradient-to-r from-pink-400 to-pink-300 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse h-auto"
        >
          <Heart className="mr-2 h-5 w-5" />
          Start Our Journey
        </Button>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-pink-200 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
