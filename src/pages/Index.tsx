import { ChatWidget } from "@/components/ChatWidget";
import { BookOpen, Clock, Sparkles, Library } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered History</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Explore History,
            <br />
            Powered by AI
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            An intelligent chatbot that brings history to life. Ask about any historical event, figure, or era and get 
            accurate, engaging answers powered by advanced AI.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Comprehensive Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                Access detailed information about historical events, people, and civilizations
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Any Era, Anytime</h3>
              <p className="text-sm text-muted-foreground">
                From ancient civilizations to modern history, explore any time period
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Library className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Engaging Stories</h3>
              <p className="text-sm text-muted-foreground">
                Learn history through engaging narratives and fascinating details
              </p>
            </div>
          </div>

          {/* Demo CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl border border-primary/20">
            <p className="text-lg font-medium mb-2">Start exploring history!</p>
            <p className="text-muted-foreground">
              Click the chat icon in the bottom right to ask about any historical event or figure
            </p>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
