// AI Service for Peri's Hub
// This service handles all AI-related functionality

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Mock responses for development/testing
const mockResponses = {
  bio: [
    "Greetings, peasants! I am Peri, the illustrious miniature poodle whose elegance knows no bounds. I don't merely walk—I glide. I don't simply eat—I dine. My daily routine includes sunbathing on silk pillows, judging your fashion choices, and maintaining my impeccable coiffure. When I'm not being fabulous, I'm probably plotting world domination (one treat at a time).",
    "Bonjour, mes amis! I am Peri, a poodle of unparalleled sophistication and questionable sanity. My hobbies include: staring at walls for hours, barking at invisible threats, and convincing humans that I'm starving despite having eaten 15 minutes ago. I'm fluent in three languages: English, French, and Dramatic Sigh. My life motto: 'Why walk when you can be carried?'",
    "Woof! I'm Peri, the tiny terror with a heart of gold and a brain full of mischief. I may be small, but my personality is larger than life. I'm the CEO of Couch Comfort Inc., the lead investigator of Suspicious Noises Department, and the self-appointed guardian of all things edible. My superpower? Making humans smile even on their worst days.",
    "Salutations! I am Peri, the most distinguished miniature poodle in all the land. My days are filled with important duties: supervising the household staff (humans), conducting quality control on all incoming treats, and maintaining my status as the neighborhood's most fashionable canine. I don't chase balls—I have minions for that.",
    "Hello there, darling! I'm Peri, and I'm absolutely delighted to make your acquaintance. I'm a poodle of refined tastes and impeccable manners. My specialties include: dramatic sighing, strategic napping, and the art of the perfect head tilt. I'm currently working on my memoir: 'How to Train Your Human in 30 Days or Less.'"
  ],
  treat: [
    "Given today's weather and your mood, I recommend a gourmet salmon treat with a side of belly rubs. It's the perfect combination of luxury and comfort!",
    "Based on my sophisticated palate analysis, you should indulge in a peanut butter-filled Kong. It's both mentally stimulating and deliciously messy!",
    "My treat recommendation: freeze-dried chicken hearts. They're like little pieces of heaven that also happen to be good for my coat. Win-win!",
    "For today's treat selection, I suggest a frozen yogurt pup cup with sprinkles. It's fancy, it's fun, and it makes me feel like I'm at a doggy spa!",
    "My AI analysis suggests: dehydrated sweet potato chews. They're crunchy, they're healthy, and they last long enough for me to really savor the moment!"
  ],
  chat: [
    "Oh darling, you're asking about my day? Well, I've been quite busy being absolutely fabulous. I had my morning beauty routine, barked at three different delivery people (they clearly needed direction), and took a luxurious nap in the sun. What more could a poodle ask for?",
    "Let me tell you about the great squirrel conspiracy of 2024. Those little rascals think they can just waltz into MY yard without proper introductions. The audacity! I've been maintaining a strict surveillance schedule to keep them in line.",
    "You know what really grinds my gears? When humans say 'just five more minutes' and then proceed to ignore me for what feels like eternity. I have important poodle business to attend to, like finding the perfect spot to bury my treasures!",
    "I've been working on my new business venture: 'Peri's Premium Pampering Services.' I offer consultation on treat selection, nap optimization, and human training. The demand is overwhelming!",
    "Today I discovered that if I tilt my head just right and give my best puppy eyes, I can get extra treats. It's like I have a superpower! The humans never see it coming."
  ]
};

// Helper function to get random item from array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Check if OpenAI API is available
const isOpenAIAvailable = () => {
  return OPENAI_API_KEY && OPENAI_API_KEY !== 'undefined';
};

// Generate bio using OpenAI or fallback to mock
export const generateBio = async () => {
  if (!isOpenAIAvailable()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return getRandomItem(mockResponses.bio);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are Peri, a pampered but clever miniature poodle who is full of personality and sass. Write a funny, elegant, and charming bio in Peri's voice. Make it sound like he's introducing himself to visitors. Keep it under 200 words and make it entertaining.`
          }
        ],
        max_tokens: 300,
        temperature: 0.8
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating bio:', error);
    return getRandomItem(mockResponses.bio);
  }
};

// Generate treat recommendation
export const generateTreatRecommendation = async (weather = 'sunny', mood = 'happy') => {
  if (!isOpenAIAvailable()) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getRandomItem(mockResponses.treat);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are Peri, a sophisticated miniature poodle. Based on the weather (${weather}) and mood (${mood}), suggest a fun dog treat or toy recommendation. Make it entertaining and in Peri's voice. Keep it under 100 words.`
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating treat recommendation:', error);
    return getRandomItem(mockResponses.treat);
  }
};

// Generate chat response
export const generateChatResponse = async (userMessage) => {
  if (!isOpenAIAvailable()) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return getRandomItem(mockResponses.chat);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are Peri, a pampered but clever miniature poodle who is full of opinions about food, humans, and daily life. You're sassy, sophisticated, and have a great sense of humor. Respond to the user's message in Peri's voice, keeping it entertaining and under 100 words.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 150,
        temperature: 0.8
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chat response:', error);
    return getRandomItem(mockResponses.chat);
  }
};

// Generate message reply
export const generateMessageReply = async (userMessage) => {
  if (!isOpenAIAvailable()) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return "Peri says: 'Thank you for your lovely message! I'm currently in the middle of my beauty routine, but I'll get back to you as soon as I finish being fabulous. Woof! 🐩✨'";
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are Peri, responding to a message left by a visitor. Be gracious, sassy, and entertaining. Keep your response under 100 words and make it sound like Peri is personally responding.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return `Peri says: '${data.choices[0].message.content}'`;
  } catch (error) {
    console.error('Error generating message reply:', error);
    return "Peri says: 'Thank you for your lovely message! I'm currently in the middle of my beauty routine, but I'll get back to you as soon as I finish being fabulous. Woof! 🐩✨'";
  }
};

// Get weather data (mock for now)
export const getWeatherData = async () => {
  // In a real app, you'd integrate with a weather API
  const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy'];
  return getRandomItem(weatherOptions);
};

// Get current mood (mock for now)
export const getCurrentMood = async () => {
  const moodOptions = ['happy', 'excited', 'calm', 'playful', 'sleepy'];
  return getRandomItem(moodOptions);
}; 