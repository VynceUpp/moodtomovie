import React from "react";
import {
  ExternalLink,
  Film,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "../css/About.css";
import { Link } from "react-router-dom";

const About = () => {
  // Mock Link component (same as in your Home component)

  // Navigation Bar Component (same style as in the Mood2Movie page)
  const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
      <nav className="relative flex items-center justify-between px-6 py-4 bg-slate-900">
        <div className="flex items-center space-x-2">
          <Film size={24} className="text-blue-400" />
          <Link to="/" className="text-xl font-bold text-white">
            Mood2Movie
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-button"
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="text-white font-medium transition">
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
              to="/"
              className="text-gray-300 hover:text-white py-2 border-b border-slate-700 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white font-medium py-2 border-b border-slate-700 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white py-2 border-b border-slate-700 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-slate-800 bg-opacity-50 rounded-xl p-8 backdrop-blur-sm shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
              {/* If you want to add an actual image later: */}
              {/* <img src="/path/to/your/image.jpg" alt="Vincent" className="w-full h-full object-cover" /> */}
              <span className="text-5xl font-bold">V</span>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Vincent</h2>
              <p className="text-lg mb-4 text-gray-200">
                I'm a passionate Junior Frontend Developer dedicated to creating
                engaging and user-friendly web experiences. With a focus on
                React and modern web technologies, I'm constantly expanding my
                skills and knowledge in the ever-evolving world of web
                development.
              </p>
              <p className="text-lg mb-6 text-gray-200">
                Mood2Movie is one of my personal projects that aims to help
                users discover movies based on their current mood, making the
                movie selection process more intuitive and enjoyable.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/VynceUpp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded-lg"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/vincent-otieno-12477533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 transition px-4 py-2 rounded-lg"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="mailto:otienovincentofficial@gmail.com"
                  className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 transition px-4 py-2 rounded-lg"
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
