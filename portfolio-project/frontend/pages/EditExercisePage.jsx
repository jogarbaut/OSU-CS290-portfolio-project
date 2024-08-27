import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExerciseForm from '../components/ExerciseForm.jsx';
import { ExerciseContext } from '../context/ExerciseContext';
import { updateExercise, getExerciseById } from '../src/services/exerciseService';

const EditExercisePage = () => {
  const { id } = useParams();
  const { dispatch } = useContext(ExerciseContext);
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const data = await getExerciseById(id);
        setInitialData(data);
      } catch (error) {
        alert('Failed to load exercise data.');
        navigate('/');
      }
    };
    fetchExercise();
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    try {
      const updatedExercise = await updateExercise(id, formData);
      dispatch({ type: 'UPDATE_EXERCISE', payload: updatedExercise });
      alert('Exercise updated successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to update exercise.');
      navigate('/');
    }
  };

  return (
    <div className="edit-workout-page">
      <h1>Edit Exercise</h1>
      {initialData ? (
        <ExerciseForm initialData={initialData} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditExercisePage;
