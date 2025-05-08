export const getGenreByMood = (mood) => {
  // Define mappings between moods and TMDB genre ids
  const genreMap = {
    happy: 35, // Comedy
    sad: 18, // Drama
    romantic: 10749, // Romance
    adventurous: 12, // Adventure
    action: 28,
    animation: 16,
    crime: 80,
    extranerdy: 99, // Documentary
    fantasy: 14,
    learned: 36, // History
    horror: 27,
    musical: 10402,
    mysterious: 9648, // Mystery (corrected from 9468)
    nerdy: 878, // Science Fiction
    thrilled: 53, // Thriller
  };

  return genreMap[mood] || "";
};

export const getMoodIcon = (mood) => {
  const moodIcons = {
    happy: "😊",
    sad: "😢",
    romantic: "💕",
    adventurous: "🌄",
    action: "💥",
    fantasy: "🧙",
    musical: "🎵",
    mysterious: "🔍",
    thrilled: "😲",
    nerdy: "🤓",
    extranerdy: "🧠",
    crime: "🕵️",
    animation: "🎬",
    horror: "😱",
    learned: "📚",
  };

  return moodIcons[mood] || "🎭";
};

 export const getMoodColor = (mood) => {
    const moodColors = {
      happy: "bg-yellow-400",
      sad: "bg-blue-400",
      romantic: "bg-pink-400",
      adventurous: "bg-green-500",
      action: "bg-red-500",
      fantasy: "bg-purple-500",
      musical: "bg-indigo-400",
      mysterious: "bg-gray-700",
      thrilled: "bg-orange-500",
      nerdy: "bg-teal-500",
      extranerdy: "bg-teal-700",
      crime: "bg-gray-800",
      animation: "bg-blue-500",
      horror: "bg-red-900",
      learned: "bg-amber-700",
    };

    return moodColors[mood] || "bg-blue-600";
  };
