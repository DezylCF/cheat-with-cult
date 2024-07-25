import React, { useState } from 'react';
import MoodSelection from '../components/MoodSelection';
import CheatMealSuggestions from '../components/CheatMealSuggestions';
import WorkoutSuggestions from '../components/WorkoutSuggestions';

const Moods = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
    setSelectedMeal(null);
  };

  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <h1>Select Your Mood</h1>
      {!selectedMood && <MoodSelection onMoodSelect={handleMoodSelection} />}
      {selectedMood && !selectedMeal && <CheatMealSuggestions mood={selectedMood} onMealSelect={handleMealSelection} />}
      {selectedMeal && <WorkoutSuggestions meal={selectedMeal} />}
    </div>
  );
};

export default Moods;
