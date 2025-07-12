import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Mic, Headphones } from 'lucide-react';

const PeriBarkcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const episodes = [
    {
      id: 1,
      title: "Why I Bark at the Mailman: A Deep Dive",
      description: "In this episode, I explore the complex psychology behind my daily mailman encounters. Is it territorial instinct, boredom, or just good old-fashioned canine drama? Join me as I break down the science of strategic barking.",
      duration: "23:45",
      date: "March 15, 2024",
      guests: ["Dr. Squirrel Expert", "Mailman Mike"],
      tags: ["Psychology", "Territory", "Drama"]
    },
    {
      id: 2,
      title: "The Great Treat Conspiracy: Are Humans Hiding the Good Stuff?",
      description: "An investigative report on the mysterious disappearance of premium treats. I've gathered evidence, interviewed witnesses, and conducted taste tests to uncover the truth about treat distribution in modern households.",
      duration: "31:20",
      date: "March 8, 2024",
      guests: ["Treat Detective", "Food Scientist"],
      tags: ["Investigation", "Food", "Conspiracy"]
    },
    {
      id: 3,
      title: "Nap Optimization: Finding the Perfect Spot",
      description: "A comprehensive guide to achieving the perfect nap. From sunbeam positioning to pillow arrangement, I share my years of research on maximizing comfort and minimizing interruptions during critical rest periods.",
      duration: "18:15",
      date: "March 1, 2024",
      guests: ["Sleep Specialist", "Feng Shui Expert"],
      tags: ["Wellness", "Comfort", "Lifestyle"]
    },
    {
      id: 4,
      title: "The Art of the Puppy Eyes: Masterclass",
      description: "Learn the ancient technique of puppy eyes that has been passed down through generations. I demonstrate advanced techniques, timing strategies, and the psychology behind why humans can't resist our adorable gaze.",
      duration: "27:30",
      date: "February 23, 2024",
      guests: ["Body Language Expert", "Human Psychology Researcher"],
      tags: ["Training", "Psychology", "Technique"]
    },
    {
      id: 5,
      title: "Squirrel Watch: Neighborhood Surveillance Report",
      description: "My weekly update on all suspicious squirrel activities in the neighborhood. Who's new, who's up to no good, and which trees are currently under surveillance. Plus, exclusive footage of my most dramatic encounters.",
      duration: "35:10",
      date: "February 16, 2024",
      guests: ["Wildlife Expert", "Security Specialist"],
      tags: ["Security", "Wildlife", "Neighborhood"]
    },
    {
      id: 6,
      title: "The Philosophy of Belly Rubs: A Philosophical Discussion",
      description: "A deep philosophical exploration of why belly rubs feel so good. We discuss the metaphysics of touch, the ethics of human-canine relationships, and whether belly rubs are a fundamental right or a privilege.",
      duration: "42:05",
      date: "February 9, 2024",
      guests: ["Philosopher", "Touch Therapist"],
      tags: ["Philosophy", "Wellness", "Relationships"]
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextEpisode = () => {
    setCurrentEpisode((prev) => (prev + 1) % episodes.length);
    setIsPlaying(false);
  };

  const prevEpisode = () => {
    setCurrentEpisode((prev) => (prev - 1 + episodes.length) % episodes.length);
    setIsPlaying(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Mic className="text-purple-500" size={24} />
        <h2 className="text-3xl font-bold">🎙️ Peri's Barkcast</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Welcome to the most sophisticated canine podcast in the neighborhood! Join me as I explore the deep questions of dog life, share my wisdom, and occasionally bark at things that don't deserve it.
      </p>

      {/* Featured Episode */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500 text-white p-4 rounded-lg flex-shrink-0">
            <Headphones size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">🎧 Featured Episode</h3>
            <h4 className="text-lg font-semibold text-purple-600 mb-2">
              {episodes[currentEpisode].title}
            </h4>
            <p className="text-gray-700 mb-3">{episodes[currentEpisode].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {episodes[currentEpisode].tags.map((tag, index) => (
                <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>📅 {episodes[currentEpisode].date}</span>
              <span>⏱️ {episodes[currentEpisode].duration}</span>
            </div>
            
            {/* Player Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevEpisode}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              >
                <SkipBack size={20} className="text-purple-600" />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={nextEpisode}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              >
                <SkipForward size={20} className="text-purple-600" />
              </button>
              <div className="flex items-center gap-2">
                <Volume2 size={16} className="text-gray-400" />
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episode List */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-purple-600">All Episodes</h3>
        <div className="space-y-4">
          {episodes.map((episode, index) => (
            <div
              key={episode.id}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                index === currentEpisode
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
              }`}
              onClick={() => setCurrentEpisode(index)}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-purple-600">{episode.title}</h4>
                <span className="text-sm text-gray-500">{episode.duration}</span>
              </div>
              <p className="text-gray-700 text-sm mb-3 line-clamp-2">{episode.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {episode.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-400">{episode.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Podcast Stats */}
      <div className="mt-8 pt-6 border-t-2 border-purple-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">{episodes.length}</div>
            <div className="text-sm text-gray-500">Episodes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">1.2K</div>
            <div className="text-sm text-gray-500">Listeners</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">4.9⭐</div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">∞</div>
            <div className="text-sm text-gray-500">Wisdom</div>
          </div>
        </div>
      </div>

      {/* Fun footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 italic">
          "Available on all major podcast platforms (if they had a dog-friendly section)" 🐩🎧
        </p>
      </div>
    </div>
  );
};

export default PeriBarkcast; 