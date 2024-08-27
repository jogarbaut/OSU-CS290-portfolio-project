const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

router.post('/exercises', exerciseController.createExercise);
router.get('/exercises', exerciseController.getExercises);
router.get('/exercises/:id', exerciseController.getExerciseById);
router.put('/exercises/:id', exerciseController.updateExerciseById);
router.delete('/exercises/:id', exerciseController.deleteExerciseById);

module.exports = router;
