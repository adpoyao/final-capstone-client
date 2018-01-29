import * as types from './actionType';
import { normalizeResponseErrors } from './utils';
import {SubmissionError} from 'redux-form';

// MOOD: SYNC ACTIONS

export const updateMoodCaption = (mood) => ({
    type: types.UPDATE_MOOD_CAPTION,
    mood
})

export const fetchMoodRequest = () => ({
    type: types.FETCH_MOOD_REQUEST
});

// Retrieve all of a student's moods
export const fetchMoodSuccess = (moods) => ({
    type: types.FETCH_MOOD_SUCCESS,
    moods
});

export const fetchMoodError = (err) => ({
    type: types.FETCH_MOOD_ERROR,
    err
});

//----- MOOD: ASYNC ACTIONS  -----//
export const saveMood = (mood) => (dispatch, getState) => {
    return fetch('http://localhost:8080/api/mood', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
              'Accept': 'application/json',
            },
          body: JSON.stringify(mood),
        })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.status(200))
      .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
  };

//  MOOD: Retrieves all of a student's moods //
export const fetchStudentMoods = studentID => (dispatch, getState) => {
    dispatch(fetchMoodRequest());  
    return fetch(`http://localhost:8080/api/mood/${studentID}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(moods => dispatch(fetchMoodSuccess(moods)))
    .catch((err) => {
        dispatch(fetchMoodError(err));
    });
};