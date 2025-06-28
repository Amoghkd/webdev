import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Gift } from "lucide-react";
import { useDateCounter } from "@/hooks/use-date-counter";

export default function DayCounter() {
  const { daysTogether, daysToAnniversary } = useDateCounter();

  return (
    <section id="counter" className="py-20 px-4 bg-gradient-to-r from-pink-200 to-orange-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-16" style={{ fontFamily: 'Fredoka One, cursive' }}>
          <Calendar className="inline mr-4 h-8 w-8" />
          Our Love Counter
          <Calendar className="inline ml-4 h-8 w-8" />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Days Together */}
          <Card className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="text-center p-0">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Days Together</h3>
              <div className="text-5xl font-bold gradient-text mb-4">{daysTogether}</div>
              <p className="text-gray-600">Beautiful days filled with love and laughter</p>
            </CardContent>
          </Card>
          
          {/* Countdown to Anniversary */}
          <Card className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="text-center p-0">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Until Our 1 Year</h3>
              <div className="text-5xl font-bold gradient-text mb-4">{Math.max(0, daysToAnniversary)}</div>
              <p className="text-gray-600">Days until we celebrate one amazing year!</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Love Percentage */}
        <Card className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Love Level</h3>
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div className="bg-gradient-to-r from-pink-400 to-pink-300 h-8 rounded-full flex items-center justify-end pr-4 animate-pulse" style={{ width: '100%' }}>
                  <span className="text-white font-bold">∞% 💖</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4">Our love is infinite and growing every day!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
