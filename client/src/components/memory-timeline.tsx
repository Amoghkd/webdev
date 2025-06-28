import { memories } from "@/data/memories";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function MemoryTimeline() {
  return (
    <section id="memories" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-16" style={{ fontFamily: 'Fredoka One, cursive' }}>
          <Heart className="inline mr-4 h-8 w-8" />
          Our Beautiful Memories
          <Heart className="inline ml-4 h-8 w-8" />
        </h2>
        
        <div className="space-y-12">
          {memories.map((memory, index) => (
            <Card 
              key={memory.id}
              className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/3">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <CardContent className="w-full md:w-2/3 text-center md:text-left p-0">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">{memory.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {memory.description}
                </p>
                <div className="text-sm text-pink-500 font-semibold">{memory.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
