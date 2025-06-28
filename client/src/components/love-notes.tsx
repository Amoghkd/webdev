import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Heart, Mail } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  messages: string[];
}

const missYouQuestions: Question[] = [
  {
    id: "smile",
    question: "What do you miss most about me right now?",
    options: ["Your beautiful smile", "Your warm hugs", "Your sweet voice", "Your silly jokes"],
    messages: [
      "My smile is always brightest when I'm thinking of you. Even when we're apart, you light up my whole world just by being you. 😊💕",
      "I'm sending you the biggest virtual hug right now! My arms are always ready to hold you close whenever you need comfort. 🤗💖",
      "My voice carries all the love I have for you in every word. I can't wait to whisper 'I love you' in your ear again soon. 🎵💕",
      "You're the only one who can make me laugh until my cheeks hurt! Your joy is contagious and makes everything better. 😂💖"
    ]
  },
  {
    id: "feeling",
    question: "How are you feeling without me?",
    options: ["Lonely and missing you", "Excited for our next date", "Thinking of our memories", "Dreaming about our future"],
    messages: [
      "I feel that same loneliness too. Distance means nothing when someone means everything. You're always in my heart. 💙",
      "I'm counting down the minutes until I can see your beautiful face again! Our next adventure together will be magical. ✨💕",
      "Those precious memories we've made keep me warm when you're not here. Each moment with you is a treasure I hold close. 📸💖",
      "Our future is so bright and beautiful! I can't wait to write more chapters of our love story together. 🌟💕"
    ]
  },
  {
    id: "want",
    question: "What do you want to do when we're together again?",
    options: ["Cuddle and watch movies", "Go on a romantic date", "Just talk for hours", "Make new memories"],
    messages: [
      "Movie nights with you are pure magic! Wrapped in your arms, sharing popcorn and stealing kisses - pure perfection. 🎬💕",
      "Every date with you feels like the first time - butterflies, excitement, and endless love. You make ordinary moments extraordinary. 🌹✨",
      "Your voice is my favorite sound and your thoughts are fascinating. I could listen to you talk about anything for hours. 💭💖",
      "Every second with you becomes a beautiful memory. Let's fill our days with laughter, love, and unforgettable moments! 📷💕"
    ]
  }
];

export default function LoveNotes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<'question' | 'message'>('question');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentMessage, setCurrentMessage] = useState("");

  const startMissYouFlow = () => {
    console.log('Button clicked!'); // Debug log
    const randomQuestion = missYouQuestions[Math.floor(Math.random() * missYouQuestions.length)];
    console.log('Selected question:', randomQuestion); // Debug log
    setCurrentQuestion(randomQuestion);
    setCurrentStep('question');
    setIsModalOpen(true);
    console.log('Modal should be open now'); // Debug log
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (currentQuestion) {
      setCurrentMessage(currentQuestion.messages[optionIndex]);
      setCurrentStep('message');
    }
  };

  const resetFlow = () => {
    setCurrentStep('question');
    setCurrentQuestion(null);
    setCurrentMessage("");
    setIsModalOpen(false);
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
            onClick={startMissYouFlow}
            className="bg-gradient-to-r from-purple-900 to-gray-800 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-auto"
          >
            <Heart className="mr-2 h-5 w-5" />
            Tap here when you miss me 💌
          </Button>
        </div>

        {/* Custom Modal - bypassing Dialog component */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full mx-4 text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-100 opacity-50"></div>
              <div className="relative z-10">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>

                <h2 className="text-2xl font-bold gothic-text mb-6">
                  {currentStep === 'question' ? 'Tell me...' : 'A Love Note For You'}
                </h2>

                {/* Debug info */}
                <div className="text-sm text-gray-500 mb-4">
                  Debug: Step={currentStep}, HasQuestion={!!currentQuestion}, IsOpen={isModalOpen}
                </div>

                {currentStep === 'question' && currentQuestion ? (
                  <div>
                    <div className="text-4xl mb-6">💭</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-8">
                      {currentQuestion.question}
                    </h3>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleOptionSelect(index)}
                          className="w-full bg-gradient-to-r from-pink-400 to-pink-300 text-white py-4 px-6 rounded-2xl text-base font-medium hover:shadow-lg transform hover:scale-102 transition-all duration-200"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : currentStep === 'message' ? (
                  <div>
                    <div className="text-6xl mb-4">💌</div>
                    <p className="text-lg text-gray-700 leading-relaxed gothic-text font-semibold mb-8">
                      {currentMessage}
                    </p>
                    <div className="text-2xl mb-6">💕</div>
                    <Button
                      onClick={resetFlow}
                      className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Get Another Message 💫
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-4">❌</div>
                    <p>Something went wrong. Let me fix this...</p>
                    <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
