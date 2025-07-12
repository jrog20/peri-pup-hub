import { useState, useEffect } from 'react';
import { MessageCircle, RefreshCw, Camera, Heart, Mail, Sparkles, PawPrint, FileText, Mic, Gift, Crown, Star } from 'lucide-react';
import { 
  generateBio, 
  generateTreatRecommendation, 
  generateChatResponse, 
  generateMessageReply,
  getWeatherData,
  getCurrentMood
} from './services/aiService';
import PeriResume from './components/PeriResume';
import PeriBarkcast from './components/PeriBarkcast';
import PeriPhotoGallery from './components/PeriPhotoGallery';
import PeriPicks from './components/PeriPicks';
import './App.css';

function App() {
  const [currentBio, setCurrentBio] = useState("Loading Peri's fabulous bio...");
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [treat, setTreat] = useState(null);
  const [isGeneratingTreat, setIsGeneratingTreat] = useState(false);
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Woof! Welcome to my hub! I'm Peri, and I'm here to chat about anything and everything. What's on your mind?", isPeri: true }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isGeneratingChat, setIsGeneratingChat] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Load initial bio on component mount
  useEffect(() => {
    generateNewBio();
  }, []);

  const generateNewBio = async () => {
    setIsGeneratingBio(true);
    try {
      const newBio = await generateBio();
      setCurrentBio(newBio);
    } catch (error) {
      console.error('Error generating bio:', error);
      setCurrentBio("Greetings! I'm Peri, and I'm having a fabulous day being absolutely perfect!");
    }
    setIsGeneratingBio(false);
  };

  const generateTreat = async () => {
    setIsGeneratingTreat(true);
    try {
      const weather = await getWeatherData();
      const mood = await getCurrentMood();
      const treatRecommendation = await generateTreatRecommendation(weather, mood);
      setTreat(treatRecommendation);
    } catch (error) {
      console.error('Error generating treat:', error);
      setTreat("My treat recommendation: a peanut butter-filled Kong with extra love!");
    }
    setIsGeneratingTreat(false);
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = { id: Date.now(), text: chatInput, isPeri: false };
    setChatMessages(prev => [...prev, userMessage]);
    const userInput = chatInput;
    setChatInput('');
    setIsGeneratingChat(true);
    
    try {
      const periResponse = await generateChatResponse(userInput);
      const responseMessage = { 
        id: Date.now() + 1, 
        text: periResponse, 
        isPeri: true 
      };
      setChatMessages(prev => [...prev, responseMessage]);
    } catch (error) {
      console.error('Error generating chat response:', error);
      const fallbackResponse = { 
        id: Date.now() + 1, 
        text: "Oh darling, I'm having a moment. Can you repeat that? My beauty routine is calling!", 
        isPeri: true 
      };
      setChatMessages(prev => [...prev, fallbackResponse]);
    }
    setIsGeneratingChat(false);
  };

  const handleMessageSend = async () => {
    if (!message.trim()) return;
    
    setReply("Peri is typing his response...");
    try {
      const periReply = await generateMessageReply(message);
      setReply(periReply);
    } catch (error) {
      console.error('Error generating message reply:', error);
      setReply("Peri says: 'Thank you for your lovely message! I'm currently in the middle of my beauty routine, but I'll get back to you as soon as I finish being fabulous. Woof! 🐩✨'");
    }
    setMessage('');
  };

  const tabs = [
    { id: 'about', label: 'About Peri', icon: PawPrint },
    { id: 'resume', label: 'Peri\'s Resume', icon: FileText },
    { id: 'barkcast', label: 'Barkcast', icon: Mic },
    { id: 'chat', label: 'Chat with Peri', icon: MessageCircle },
    { id: 'treats', label: 'Treat Picker', icon: Heart },
    { id: 'gallery', label: 'Photo Gallery', icon: Camera },
    { id: 'picks', label: 'Peri\'s Picks', icon: Gift },
    { id: 'mail', label: 'Send Message', icon: Mail }
  ];

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom right, #fefefe, #f0f2ff, #f0f8ff)'}}>
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto p-6">
        {/* Hero Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-periwinkle-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl shadow-periwinkle-200/50 animate-glow">
                <span className="text-4xl">🐩</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center shadow-lg">
                <Crown size={16} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold gradient-text mb-4 text-balance">
            Peri's AI-Powered Pup Hub
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Where sophistication meets sass, powered by cutting-edge AI technology
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="text-yellow-400 fill-current" size={16} />
              <span>AI-Powered</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="text-periwinkle-400" size={16} />
              <span>Sophisticated</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="text-accent-400" size={16} />
              <span>Poodle Approved</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === id ? 'tab-active' : 'tab-inactive'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>

        {/* Content Sections */}
        <div className="space-y-8 animate-fade-in">
          {/* About Peri */}
          {activeTab === 'about' && (
            <section className="glass-card glass-card-hover rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-periwinkle-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold gradient-text">👑 About Peri</h2>
              </div>
              
              <div className="gradient-bg rounded-2xl p-8 mb-8 border border-periwinkle-200/50">
                <p className="text-xl leading-relaxed italic text-gray-700 text-balance">"{currentBio}"</p>
              </div>
              
              <button
                onClick={generateNewBio}
                disabled={isGeneratingBio}
                className="sophisticated-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`${isGeneratingBio ? 'animate-spin' : ''} mr-2`} size={18} />
                {isGeneratingBio ? 'Generating...' : 'Generate New Bio'}
              </button>
            </section>
          )}

          {/* Peri's Resume */}
          {activeTab === 'resume' && (
            <PeriResume />
          )}

          {/* Peri's Barkcast */}
          {activeTab === 'barkcast' && (
            <PeriBarkcast />
          )}

          {/* Chat with Peri */}
          {activeTab === 'chat' && (
            <section className="glass-card glass-card-hover rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-periwinkle-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold gradient-text">💬 Chat with Peri</h2>
              </div>
              
              <div className="bg-gradient-to-br from-cream-100 to-periwinkle-100 rounded-2xl p-6 h-96 overflow-y-auto mb-6 custom-scrollbar border border-periwinkle-200/50">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 flex ${msg.isPeri ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl shadow-lg ${
                        msg.isPeri
                          ? 'bg-gradient-to-r from-periwinkle-500 to-blue-500 text-white'
                          : 'bg-white/90 backdrop-blur-sm border border-periwinkle-200 text-gray-800'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isGeneratingChat && (
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-periwinkle-500 to-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
                      <p className="text-sm">Peri is typing...</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Type your message to Peri..."
                  className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-sm border border-periwinkle-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-periwinkle-200 focus:border-periwinkle-400 transition-all"
                />
                <button
                  onClick={sendChatMessage}
                  disabled={!chatInput.trim() || isGeneratingChat}
                  className="sophisticated-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </section>
          )}

          {/* Treat Picker */}
          {activeTab === 'treats' && (
            <section className="glass-card glass-card-hover rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-periwinkle-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold gradient-text">🍖 Peri's AI Treat Picker</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Let AI analyze your mood and the weather to suggest the perfect treat for Peri! Our sophisticated algorithm considers multiple factors to provide personalized recommendations.
              </p>
              
              <button
                onClick={generateTreat}
                disabled={isGeneratingTreat}
                className="sophisticated-button disabled:opacity-50 disabled:cursor-not-allowed mb-8"
              >
                <Sparkles className={`${isGeneratingTreat ? 'animate-spin' : ''} mr-2`} size={18} />
                {isGeneratingTreat ? 'Analyzing...' : 'Get AI Treat Recommendation'}
              </button>
              
              {treat && (
                <div className="gradient-bg rounded-2xl p-8 border border-periwinkle-200/50">
                  <h3 className="text-2xl font-bold text-periwinkle-700 mb-4">Peri's Recommendation:</h3>
                  <p className="text-xl italic text-gray-700 leading-relaxed">"{treat}"</p>
                </div>
              )}
            </section>
          )}

          {/* Photo Gallery */}
          {activeTab === 'gallery' && (
            <PeriPhotoGallery />
          )}

          {/* Peri's Picks */}
          {activeTab === 'picks' && (
            <PeriPicks />
          )}

          {/* Send Message */}
          {activeTab === 'mail' && (
            <section className="glass-card glass-card-hover rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-accent-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold gradient-text">💌 Send Peri a Message</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Leave a personal message for Peri and he'll get back to you with his signature sass and sophistication!
              </p>
              
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-6 bg-white/80 backdrop-blur-sm border border-periwinkle-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-periwinkle-200 focus:border-periwinkle-400 transition-all resize-none text-lg"
                rows={4}
                placeholder="Dear Peri, I wanted to tell you..."
              />
              
              <button
                onClick={handleMessageSend}
                disabled={!message.trim()}
                className="sophisticated-button mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message to Peri
              </button>
              
              {reply && (
                <div className="gradient-bg rounded-2xl p-8 mt-6 border border-periwinkle-200/50">
                  <p className="text-xl italic text-gray-700 leading-relaxed">{reply}</p>
                </div>
              )}
            </section>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-periwinkle-200/50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-periwinkle-400 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-sm">🐩</span>
            </div>
            <p className="text-lg font-medium text-gray-600">Peri's AI-Powered Pup Hub</p>
          </div>
          <p className="text-sm text-gray-500">
            Made with 🐾 by Peri's Human | Powered by AI Magic ✨
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
