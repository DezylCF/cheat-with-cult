import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const mealCalories = {
  'Ice Cream': 300,
  'Chocolate Cake': 400,
  Fries: 500,
  Pizza: 300,
  Burger: 500,
  Cookies: 400,
  Pasta: 350,
  Sandwich: 250,
  Muffin: 300,
  Sushi: 200,
  Tacos: 300,
  Cupcake: 400,
  Steak: 600,
  Lobster: 450,
  Cheesecake: 500
};

const workouts = [
  { name: 'Running', calsPerHour: 600, img: 'https://source.unsplash.com/1600x900/?running' },
  { name: 'Cycling', calsPerHour: 500, img: 'https://source.unsplash.com/1600x900/?cycling' },
  { name: 'Swimming', calsPerHour: 700, img: 'https://source.unsplash.com/1600x900/?swimming' },
  { name: 'Walking', calsPerHour: 300, img: 'https://source.unsplash.com/1600x900/?walking' }
];

const comboWorkouts = [
  { name: 'Running & Cycling', calsPerHour: 550, img: 'https://source.unsplash.com/1600x900/?run-cycle' },
  { name: 'Swimming & Walking', calsPerHour: 500, img: 'https://source.unsplash.com/1600x900/?swim-walk' },
  { name: 'Cycling & Walking', calsPerHour: 400, img: 'https://source.unsplash.com/1600x900/?cycle-walk' }
];

const WorkoutSuggestions = ({ meal }) => {
  const calories = mealCalories[meal];
  const suggestedWorkouts = workouts.map((workout) => {
    const hours = (calories / workout.calsPerHour).toFixed(2);
    return { name: workout.name, hours, img: workout.img };
  });

  const suggestedComboWorkouts = comboWorkouts.map((workout) => {
    const hours = (calories / workout.calsPerHour).toFixed(2);
    return { name: workout.name, hours, img: workout.img };
  });

  return (
    <div>
      <h2>To burn the calories from {meal}, you can:</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {suggestedComboWorkouts.map((suggestion, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="m-2">
            <Card style={{ width: '18rem' }} className="highlight-card">
              <Card.Img variant="top" src={suggestion.img} />
              <Card.Body>
                <Card.Title>{suggestion.name}</Card.Title>
                <Card.Text>
                  <Badge bg="warning" text="dark">Recommended</Badge>
                  <p>{suggestion.hours} hours</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
        {suggestedWorkouts.map((suggestion, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="m-2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={suggestion.img} />
              <Card.Body>
                <Card.Title>{suggestion.name}</Card.Title>
                <Card.Text>
                  <p>{suggestion.hours} hours</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSuggestions;

// import React from 'react';
// import { Card, Badge } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import useUnsplash from '../hooks/useUnsplash';

// const mealCalories = {
//   'Ice Cream': 300,
//   'Chocolate Cake': 400,
//   Fries: 500,
//   Pizza: 300,
//   Burger: 500,
//   Cookies: 400,
//   Pasta: 350,
//   Sandwich: 250,
//   Muffin: 300,
//   Sushi: 200,
//   Tacos: 300,
//   Cupcake: 400,
//   Steak: 600,
//   Lobster: 450,
//   Cheesecake: 500
// };

// const workouts = [
//   { name: 'Running', calsPerHour: 600 },
//   { name: 'Cycling', calsPerHour: 500 },
//   { name: 'Swimming', calsPerHour: 700 },
//   { name: 'Walking', calsPerHour: 300 }
// ];

// const comboWorkouts = [
//   { name: 'Running & Cycling', calsPerHour: 550 },
//   { name: 'Swimming & Walking', calsPerHour: 500 },
//   { name: 'Cycling & Walking', calsPerHour: 400 }
// ];

// const WorkoutSuggestions = ({ meal }) => {
//   const calories = mealCalories[meal] || 0;

//   // Prepare queries for unsplash hook
//   const workoutNames = workouts.map(workout => workout.name.toLowerCase());
//   const comboNames = comboWorkouts.map(workout => workout.name.toLowerCase().replace(' & ', '-'));

//   // Use the updated useUnsplash hook to fetch images for all workout and combo workout names
//   const { images, loading } = useUnsplash([...workoutNames, ...comboNames]);

//   // Extract images for workouts and combo workouts
//   const workoutImages = workouts.reduce((acc, workout) => {
//     acc[workout.name.toLowerCase()] = images[workout.name.toLowerCase()];
//     return acc;
//   }, {});

//   const comboImages = comboWorkouts.reduce((acc, workout) => {
//     acc[workout.name.toLowerCase().replace(' & ', '-')] = images[workout.name.toLowerCase().replace(' & ', '-')];
//     return acc;
//   }, {});

// //   if (loading) return <div>Loading...</div>;

//   const suggestedWorkouts = workouts.map((workout) => {
//     const hours = (calories / workout.calsPerHour).toFixed(2);
//     return { name: workout.name, hours, image: workoutImages[workout.name.toLowerCase()] };
//   });

//   const suggestedComboWorkouts = comboWorkouts.map((workout) => {
//     const hours = (calories / workout.calsPerHour).toFixed(2);
//     return { name: workout.name, hours, image: comboImages[workout.name.toLowerCase().replace(' & ', '-')] };
//   });

//   return (
//     <div>
//       <h2>To burn the calories from {meal}, you can:</h2>
//       <div className="d-flex flex-wrap justify-content-center">
//         {suggestedComboWorkouts.map((suggestion, index) => (
//           <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="m-2">
//             <Card style={{ width: '18rem' }} className="highlight-card">
//               <Card.Img variant="top" src={suggestion.image} />
//               <Card.Body>
//                 <Card.Title>{suggestion.name}</Card.Title>
//                 <Card.Text>
//                   <Badge bg="warning" text="dark">Recommended</Badge>
//                   <p>{suggestion.hours} hours</p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </motion.div>
//         ))}
//         {suggestedWorkouts.map((suggestion, index) => (
//           <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="m-2">
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={suggestion.image} />
//               <Card.Body>
//                 <Card.Title>{suggestion.name}</Card.Title>
//                 <Card.Text>
//                   <p>{suggestion.hours} hours</p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutSuggestions;
