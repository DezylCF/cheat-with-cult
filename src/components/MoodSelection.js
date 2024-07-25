import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaSadTear, FaFrown, FaMeh, FaSmile, FaGrin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const moods = [
  { name: 'Sad', icon: FaSadTear },
  { name: 'Neutral', icon: FaFrown },
  { name: 'Happy', icon: FaMeh },
  { name: 'Excited', icon: FaSmile },
  { name: 'Overjoyed', icon: FaGrin }
];

const MoodSelection = ({ onMoodSelect }) => {
  return (
    <Row className="justify-content-center">
      {moods.map((mood) => (
        <Col key={mood.name} xs={12} sm={6} md={4} lg={2} className="mb-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline-primary" size="lg" onClick={() => onMoodSelect(mood.name)}>
              <mood.icon className="mood-icon" />
              <br />
              {/* {mood.name} */}
            </Button>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default MoodSelection;
