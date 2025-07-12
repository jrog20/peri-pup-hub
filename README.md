# 🐩 Peri's AI-Powered Pup Hub

A delightful React application featuring Peri, a sophisticated miniature poodle, powered by AI to create an interactive and entertaining experience.

## ✨ Features

### 🎭 AI-Generated Bio
- Dynamic, personality-rich bios generated in Peri's voice
- Click "Generate New Bio" to get fresh content
- Fallback to curated responses when AI is unavailable

### 💬 Chat with Peri
- Interactive chat interface where you can talk to Peri
- AI-powered responses in Peri's signature sassy style
- Real-time conversation with loading states

### 🍖 AI Treat Picker
- Smart treat recommendations based on weather and mood
- Personalized suggestions in Peri's voice
- Fun, interactive experience

### 🎨 Art Gallery (Coming Soon)
- AI-generated artwork featuring Peri
- Multiple artistic styles and themes
- Interactive gallery with generation controls

### 💌 Send Peri a Message
- Leave personal messages for Peri
- AI-generated responses from Peri
- Personalized interaction experience

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key (optional, for enhanced AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd peri-pup-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### OpenAI API Setup (Optional)
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account and generate an API key
3. Add the key to your `.env` file
4. Restart the development server

**Note:** The app works perfectly without an API key using curated responses!

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** TailwindCSS 4
- **Icons:** Lucide React
- **AI:** OpenAI GPT-3.5-turbo (optional)
- **State Management:** React Hooks

## 🐾 About Peri

Peri is a sophisticated miniature poodle with a big personality. He's sassy, smart, and always ready to share his thoughts on life, treats, and the world around him. This hub showcases his unique character through AI-powered interactions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐕 Made with Love

Built with 🐾 by Peri's Human | Powered by AI Magic ✨

---

**Note:** This is a fun, personal project showcasing AI integration in a React application. The AI features are optional and the app provides a great experience even without API keys!
