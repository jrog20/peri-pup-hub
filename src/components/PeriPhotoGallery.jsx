import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Calendar, MapPin } from 'lucide-react';

const PeriPhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    {
      id: 1,
      title: "Fetch!",
      date: "October 12, 2023",
      location: "Backyard",
      description: "Fetch is life! This was the day I perfected my signature leap-and-catch move. The humans were amazed, and I got an extra treat for style points.",
      mood: "Playful",
      likes: 98,
      image: "/images/fetch1.png" // Add your image filename here
    },
    {
      id: 2,
      title: "Squirrel - The Great Squirrel Standoff",
      date: "November 5, 2023",
      location: "Backyard",
      description: "A tense 45-minute standoff with a particularly cheeky squirrel. I maintained my dignity while he taunted me from the tree. It was a draw, but I'm pretty sure I won on style points.",
      mood: "Determined",
      likes: 67,
      image: "/images/squirrel-standoff-compressed.jpg"
    },
    {
      id: 3,
      title: "Sunbathing King",
      date: "December 20, 2023",
      location: "Backyard",
      description: "My daily beauty routine includes strategic sunbeam positioning. This spot gets the perfect amount of warmth while maintaining optimal surveillance of the yard.",
      mood: "Relaxed",
      likes: 89,
      image: "/images/sunbathing.png"
    },
    {
      id: 4,
      title: "Costume Time!",
      date: "January 15, 2024",
      location: "Backyard",
      description: "The humans dressed me as a panda for a laugh. I played along, but only because I knew treats were involved. Fashion is temporary, dignity is forever.",
      mood: "Triumphant",
      likes: 156,
      image: "/images/panda-costume.png"
    },
    {
      id: 5,
      title: "Couch Comfort Expert",
      date: "February 3, 2024",
      location: "Living Room",
      description: "Mastering the art of the perfect nap. Remote in paw, blanket just right, and not a care in the world. This is peak poodle comfort.",
      mood: "Cozy",
      likes: 203,
      image: "/images/nap-with-remote.png"
    },
    {
      id: 6,
      title: "Cuddle Time",
      date: "February 28, 2024",
      location: "Living Room",
      description: "Nothing beats a good cuddle session after a long day of adventures.",
      mood: "Affectionate",
      likes: 78,
      image: "/images/cuddles.png"
    },
    {
      id: 7,
      title: "Dress for every occasion",
      date: "March 10, 2024",
      location: "Living Room",
      description: "Bowtie on, attitude set to ‘fancy.’ Whether it’s a party or just a regular Tuesday, I believe in looking my best.",
      mood: "Dapper",
      likes: 134,
      image: "/images/bowtie.png"
    },
    {
      id: 8,
      title: "Bedtime pajama party",
      date: "March 25, 2024",
      location: "Home",
      description: "Pajamas on, toys gathered, and ready for a night of sweet dreams. The best way to end a day full of fun and treats.",
      mood: "Comfy",
      likes: 245,
      image: "/images/bedtime.png"
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentPhoto(index);
  };

  // Function to render photo with fallback
  const renderPhoto = (photo) => {
    if (photo.image) {
      console.log('Loading image:', photo.image);
      return (
        <img
          src={photo.image}
          alt={photo.title}
          className="max-w-full max-h-[400px] mx-auto object-contain rounded-lg shadow-lg"
          onLoad={() => console.log('Image loaded successfully:', photo.image)}
          onError={(e) => {
            console.error('Image failed to load:', photo.image);
            // Fallback to emoji if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      );
    }
    return null;
  };

  // Function to render fallback emoji
  const renderFallback = (photo) => {
    return (
      <div 
        className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center"
        style={{ display: photos[currentPhoto].image ? 'none' : 'flex' }}
      >
        <div className="text-6xl">📷</div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="text-red-500" size={24} />
        <h2 className="text-3xl font-bold">📸 Peri's Life in Photos</h2>
      </div>

      <p className="text-gray-600 mb-8">
        A visual journey through my fabulous adventures, daily discoveries, and moments of pure poodle perfection. Each photo tells a story of elegance, mischief, and undeniable charm.
      </p>

      {/* Main Photo Display */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 min-h-96 flex items-center justify-center">
          <div className="text-center w-full">
            {/* Photo or Fallback */}
            <div className="relative mb-4">
              {renderPhoto(photos[currentPhoto])}
              {renderFallback(photos[currentPhoto])}
            </div>
            
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              {photos[currentPhoto].title}
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              {photos[currentPhoto].description}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {photos[currentPhoto].date}
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                {photos[currentPhoto].location}
              </div>
              <div className="flex items-center gap-1">
                <Heart size={16} className="text-red-500" />
                {photos[currentPhoto].likes} likes
              </div>
            </div>
            <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              Mood: {photos[currentPhoto].mood}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft size={24} className="text-purple-600" />
        </button>
        <button
          onClick={nextPhoto}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronRight size={24} className="text-purple-600" />
        </button>

        {/* Photo Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium">
          {currentPhoto + 1} / {photos.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-purple-600">Photo Timeline</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => goToPhoto(index)}
              className={`p-2 rounded-lg transition-all ${
                index === currentPhoto
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 hover:bg-purple-100'
              }`}
            >
              <div className="text-2xl mb-1">📷</div>
              <div className="text-xs truncate">{photo.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Photo Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{photos.length}</div>
          <div className="text-sm text-gray-500">Total Photos</div>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-pink-600">
            {photos.reduce((sum, photo) => sum + photo.likes, 0)}
          </div>
          <div className="text-sm text-gray-500">Total Likes</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">8</div>
          <div className="text-sm text-gray-500">Locations</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">∞</div>
          <div className="text-sm text-gray-500">Fabulousness</div>
        </div>
      </div>

      {/* Fun footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 italic">
          "Every photo is a masterpiece of poodle perfection" 🐩✨
        </p>
      </div>
    </div>
  );
};

export default PeriPhotoGallery; 