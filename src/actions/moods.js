import * as types from './actionType';

// SYNCS ACTIONS

export const updateMoodCaption = (mood) => ({
    type: types.UPDATE_MOOD_CAPTION,
    mood
})