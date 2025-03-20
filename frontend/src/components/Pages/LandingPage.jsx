import React from 'react';
import { ChevronRight, Clock, Puzzle, Book } from 'lucide-react';
import '../../styles/LandingPage.css';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <div className="hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Your Journey. Your Choices.
            <span className="highlight"> Your Escape.</span>
          </h2>
          <p className="hero-subtitle">
            Immerse yourself in interactive adventures where your decisions shape the story.
          </p>
          <a href="/play" className="cta-button">
            Begin Your Adventure
            <ChevronRight className="icon" />
          </a>
        </div>
      </div>

      <div className="features">
        <h3 className="features-title">Core Features</h3>
        <div className="feature-cards">
          <FeatureCard 
            icon={<Book className="feature-icon" />}
            title="Engaging Storyline"
            description="Deep, immersive narratives with unexpected twists and turns that keep you on the edge of your seat."
          />
          <FeatureCard 
            icon={<Puzzle className="feature-icon" />}
            title="Challenging Puzzles"
            description="Test your wit with intricate riddles, codes, and interactive challenges that unlock new paths."
          />
          <FeatureCard 
            icon={<Clock className="feature-icon" />}
            title="Time-Limited Decisions"
            description="Feel the pressure as you make crucial choices under time constraints that affect your story's outcome."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon-wrapper">{icon}</div>
    <h4 className="feature-title">{title}</h4>
    <p className="feature-description">{description}</p>
  </div>
);

export default LandingPage;
