import React, { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../css/Home.css";
import Navbar from '../components/Navbar';

const Home = () => {
    const [selectedMood, setSelectedMood] = useState('');
    const [showAllMoods, setShowAllMoods] = useState(true);
    const navigate = useNavigate();

    //function to handle mood selection
    const handleMoodSelection = (mood) => {
      setSelectedMood(mood);
      setShowAllMoods(false);
      console.log(mood);
    }

    //function to handle show all moods again
    const handleShowAllMoods = () => {
      setSelectedMood('');
      setShowAllMoods(true);
    }

    //to handle form submission
    const handleSubmit = () => {
      if (selectedMood) {
        navigate(`/moviepage/${selectedMood}`); // Navigate to the MoviePage component with selected mood
      } else {
        alert('Please select a mood');
      }
    };

    return (
      <div className='home'>
          <Navbar />
          <div className='main'>
              <div className='info'>
                  <h3>Welcome</h3>
                  <p>Find the best movies to watch personally tailored to how you feel at any moment. Just select the mood you are in today and find a movie.</p>
              </div>

              {/* Mood selection */}
              <div className='moodselection'>
                  <h3>How do you feel today?</h3>

                  {/* Mood buttons */}
                  {showAllMoods ? (
                      <div className='mood-box'>
                          <div className='mood-btn'>
                              <button onClick={() => handleMoodSelection('happy')} className='moodbtn'>Happy</button>
                              <button onClick={() => handleMoodSelection('sad')} className='moodbtn'>Sad</button>
                              <button onClick={() => handleMoodSelection('romantic')} className='moodbtn'>Romantic</button>
                              <button onClick={() => handleMoodSelection('adventurous')} className='moodbtn'>Adventurous</button>
                              <button onClick={() => handleMoodSelection('action')} className='moodbtn'>Action</button>
                              <button onClick={() => handleMoodSelection('fantasy')} className='moodbtn'>Fantasy</button>
                              <button onClick={() => handleMoodSelection('musical')} className='moodbtn'>Musical</button>
                              <button onClick={() => handleMoodSelection('mysterious')} className='moodbtn'>Mystery</button>
                              <button onClick={() => handleMoodSelection('thrilled')} className='moodbtn'>Thrilled</button>
                              <button onClick={() => handleMoodSelection('nerdy')} className='moodbtn'>Nerdy</button>
                              <button onClick={() => handleMoodSelection('extranerdy')} className='moodbtn'>Extra Nerdy</button>
                              <button onClick={() => handleMoodSelection('crime')} className='moodbtn'>Crime</button>
                              <button onClick={() => handleMoodSelection('animation')} className='moodbtn'>Animation</button>
                              <button onClick={() => handleMoodSelection('horror')} className='moodbtn'>Horrified</button>
                              <button onClick={() => handleMoodSelection('learned')} className='moodbtn'>Learned</button>
                              {/* Navigate to Wrongpage.js */}
                              <Link to="/wrongpage">
                                <button className='moodbtn'>Horny</button>
                              </Link>
                        
                              {/* Add more mood buttons */}
                          </div>
                      </div>
                  ) : (
                      <div className='selected-mood'>
                          <p>I feel {selectedMood} today</p>
                          <button onClick={handleShowAllMoods} className='moodbtn'>Back</button>
                      </div>
                  )}
                  <button onClick={handleSubmit} type='submit' className='submitbtn'>Find Movie</button>

                 
              </div>
          </div>
      </div>
  )
}

export default Home

//add view most rated movies