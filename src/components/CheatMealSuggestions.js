import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cheatMeals = {
  Sad: ['Ice Cream', 'Chocolate Cake', 'Fries'],
  Neutral: ['Pizza', 'Burger', 'Cookies'],
  Happy: ['Pasta', 'Sandwich', 'Muffin'],
  Excited: ['Sushi', 'Tacos', 'Cupcake'],
  Overjoyed: ['Steak', 'Lobster', 'Cheesecake']
};

const CheatMealSuggestions = ({ mood, onMealSelect }) => {
  return (
    <div>
      <h2>Cheat Meals for when you feel {mood}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {cheatMeals[mood].map((meal) => (
          <motion.div key={meal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="m-2">
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM' />
              <Card.Body>
                <Card.Title>{meal}</Card.Title>
                <Button variant="primary" onClick={() => onMealSelect(meal)}>
                  Select
                </Button>
              </Card.Body>
            </Card> */}
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {meal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onMealSelect(meal)}>Choose Meal</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CheatMealSuggestions;



// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import useUnsplash from '../hooks/useUnsplash';

// const moodCheatMeals = {
//   Sad: ['Ice Cream', 'Chocolate Cake'],
//   Neutral: ['Fries', 'Pizza'],
//   Happy: ['Burger', 'Cookies'],
//   Excited: ['Pasta', 'Sandwich'],
//   Overjoyed: ['Muffin', 'Sushi']
// };

// const CheatMealSuggestions = ({ mood, onMealSelect }) => {
//   const cheatMeals = moodCheatMeals[mood] || [];
//   const queries = [mood.toLowerCase(), ...cheatMeals.map(meal => meal.toLowerCase())];
//   const { images, loading } = useUnsplash(queries);

//   const moodImage = images[mood.toLowerCase()];
//   const mealImages = cheatMeals.map(meal => images[meal.toLowerCase()]);

//   return (
//     <div>
//       <h2>Based on your mood, you might enjoy:</h2>
//       <div className="d-flex flex-wrap justify-content-center">
//         {!loading ? (
//           <div>Loading...</div>
//         ) : (
//           <>
//             <div className="mood-image">
//               {moodImage && <img src={moodImage} alt={mood} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />}
//             </div>
//             {cheatMeals.map((meal, index) => (
//               <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="m-2">
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src={mealImages[index]} alt={meal} />
//                   <Card.Body>
//                     <Card.Title>{meal}</Card.Title>
//                     <Card.Text>
//                       <button className="btn btn-primary" onClick={() => onMealSelect(meal)}>Get Workouts</button>
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CheatMealSuggestions;
