import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Save, Send } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useToast } from "@/hooks/use-toast";

interface SavedNote {
  id: number;
  text: string;
  date: string;
}

export default function MessageInput() {
  const [noteText, setNoteText] = useState("");
  const [savedNotes, setSavedNotes] = useLocalStorage<SavedNote[]>("loveNotes", []);
  const { toast } = useToast();

  const saveNoteLocally = () => {
    if (!noteText.trim()) {
      toast({
        title: "📝 Oops!",
        description: "Please write something first!",
      });
      return;
    }
    
    const newNote: SavedNote = {
      id: Date.now(),
      text: noteText.trim(),
      date: new Date().toLocaleDateString()
    };
    
    setSavedNotes([...savedNotes, newNote]);
    setNoteText("");
    
    toast({
      title: "💾 Note saved!",
      description: "Your message is safely stored locally.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) {
      toast({
        title: "📝 Oops!",
        description: "Please write something first!",
      });
      return;
    }
    
    // Create form data for Netlify
    const formData = new FormData();
    formData.append('form-name', 'love-note');
    formData.append('note', noteText.trim());

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      toast({
        title: "📩 Sent!",
        description: "Your love note is on its way to me!",
      });
      setNoteText("");
    })
    .catch(() => {
      toast({
        title: "❌ Error",
        description: "Failed to send note. Please try again.",
        variant: "destructive"
      });
    });
  };

  return (
    <section id="notes" className="py-20 px-4 bg-gradient-to-br from-orange-100 to-pink-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-16" style={{ fontFamily: 'Fredoka One, cursive' }}>
          <MessageSquare className="inline mr-4 h-8 w-8" />
          Write me a note whenever you want 💬
          <MessageSquare className="inline ml-4 h-8 w-8" />
        </h2>
        
        <Card className="bg-white rounded-3xl p-8 shadow-xl">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} name="love-note" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="love-note" />
              
              <div className="mb-6">
                <Textarea 
                  name="note"
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Tell me what's on your heart... 💕"
                  className="w-full h-48 p-6 border-2 border-pink-200 rounded-2xl resize-none focus:border-pink-400 focus:outline-none text-lg"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  type="button"
                  onClick={saveNoteLocally}
                  className="bg-gradient-to-r from-pink-400 to-pink-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-auto"
                >
                  <Save className="mr-2 h-4 w-4" />
                  💾 Save locally
                </Button>
                
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-purple-900 to-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-auto"
                >
                  <Send className="mr-2 h-4 w-4" />
                  📩 Send to Me
                </Button>
              </div>
            </form>
            
            {/* Saved Notes Display */}
            {savedNotes.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Your Saved Notes 📝</h3>
                <div className="space-y-4">
                  {savedNotes.map((note) => (
                    <div key={note.id} className="bg-orange-100 p-4 rounded-xl border-l-4 border-pink-400">
                      <p className="text-gray-700 mb-2">{note.text}</p>
                      <p className="text-sm text-pink-500">{note.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
