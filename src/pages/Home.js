import React, { useState, useEffect } from "react";
import { Film, ArrowRight, ChevronLeft, Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import FeaturedMovies from "../components/topMovies";

const Home = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [showAllMoods, setShowAllMoods] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Mood categories
  const moodCategories = [
    { name: "happy", label: "Happy", color: "bg-yellow-400", icon: "😊" },
    { name: "sad", label: "Sad", color: "bg-blue-400", icon: "😢" },
    { name: "romantic", label: "Romantic", color: "bg-pink-400", icon: "💕" },
    {
      name: "adventurous",
      label: "Adventurous",
      color: "bg-green-500",
      icon: "🌄",
    },
    { name: "action", label: "Action", color: "bg-red-500", icon: "💥" },
    { name: "fantasy", label: "Fantasy", color: "bg-purple-500", icon: "🧙" },
    { name: "musical", label: "Musical", color: "bg-indigo-400", icon: "🎵" },
    { name: "mysterious", label: "Mystery", color: "bg-gray-700", icon: "🔍" },
    { name: "thrilled", label: "Thrilled", color: "bg-orange-500", icon: "😲" },
    { name: "nerdy", label: "Nerdy", color: "bg-teal-500", icon: "🤓" },
    {
      name: "extranerdy",
      label: "Extra Nerdy",
      color: "bg-teal-700",
      icon: "🧠",
    },
    { name: "crime", label: "Crime", color: "bg-gray-800", icon: "🕵️" },
    { name: "animation", label: "Animation", color: "bg-blue-500", icon: "🎬" },
    { name: "horror", label: "Horrified", color: "bg-red-900", icon: "😱" },
    { name: "learned", label: "Learned", color: "bg-amber-700", icon: "📚" },
  ];

  // Function to handle mood selection
  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
    setShowAllMoods(false);
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      if (
        isMobileMenuOpen &&
        mobileMenu &&
        mobileMenuButton &&
        !mobileMenu.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Function to handle show all moods again
  const handleShowAllMoods = () => {
    setSelectedMood("");
    setShowAllMoods(true);
  };

  // To handle form submission
  const handleSubmit = () => {
    if (selectedMood) {
      navigate(`/moviepage/${selectedMood}`);
    } else {
      // Visual feedback for error
      const feedbackElement = document.getElementById("feedback-message");
      if (feedbackElement) {
        feedbackElement.classList.remove("opacity-0");
        setTimeout(() => {
          feedbackElement.classList.add("opacity-0");
        }, 3000);
      }
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Film size={26} />
          <span className="text-xl font-bold">Mood2Movie</span>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-button"
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition"
          >
            About
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`absolute top-full left-0 right-0 bg-slate-800 shadow-lg z-50 transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white py-2 border-b border-slate-700 transition"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Movie Match
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover films perfectly tailored to your current mood. Simply tell
            us how you're feeling, and we'll recommend the perfect movie to
            match.
          </p>
        </div>

        {/* Mood Selection */}
        <div className="bg-slate-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            How are you feeling today?
          </h2>

          {showAllMoods ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {moodCategories.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => handleMoodSelection(mood.name)}
                  className={`${mood.color} hover:opacity-90 rounded-lg py-3 px-4 flex flex-col items-center justify-center transition transform hover:scale-105 active:scale-95`}
                >
                  <span className="text-2xl mb-1">{mood.icon}</span>
                  <span className="font-medium">{mood.label}</span>
                </button>
              ))}
              <Link to="/wrongpage">
                <div className="bg-gray-600 hover:opacity-90 rounded-lg py-3 px-4 flex flex-col items-center justify-center transition transform hover:scale-105 active:scale-95">
                  <span className="text-2xl mb-1">😏</span>
                  <span className="font-medium">Horny</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-slate-700 rounded-lg p-4 inline-block">
                <p className="text-xl mb-2">
                  I'm feeling <span className="font-bold">{selectedMood}</span>{" "}
                  today
                </p>
                <div className="text-4xl">
                  {moodCategories.find((m) => m.name === selectedMood)?.icon ||
                    "😊"}
                </div>
              </div>

              <button
                onClick={handleShowAllMoods}
                className="flex items-center justify-center space-x-2 text-blue-300 hover:text-blue-200 transition"
              >
                <ChevronLeft size={18} />
                <span>Change mood</span>
              </button>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition transform hover:scale-105 active:scale-95"
            >
              <span>Find My Movie</span>
              <ArrowRight size={18} />
            </button>
            <p
              id="feedback-message"
              className="mt-3 text-red-400 opacity-0 transition-opacity duration-300"
            >
              Please select a mood first
            </p>
          </div>
        </div>

        {/* Featured section */}
        <FeaturedMovies />
      </div>
    </div>
  );
};

export default Home;
