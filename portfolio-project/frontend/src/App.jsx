import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditExercisePage from '../pages/EditExercisePage.jsx';
import CreateExercisePage from '../pages/CreateExercisePage.jsx';
import Navigation from '../components/Navigation.jsx';
import { ExerciseProvider } from '../context/ExerciseContext.jsx';
import HomePage from '../pages/HomePage.jsx';

const App = () => {
  return (
    <ExerciseProvider>
      <Router>
        <header>
          <h1>Exercise Tracker</h1>
          <p>Full Stack MERN App Demonstration</p>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit/:id" element={<EditExercisePage />} />
            <Route path="/create" element={<CreateExercisePage />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Jomel Bautista</p>
        </footer>
      </Router>
    </ExerciseProvider>
  );
};

export default App;
