import * as types from './actionType';

// SYNC ACTIONS

export const updateMoodCaption = (mood) => ({
    type: types.UPDATE_MOOD_CAPTION,
    mood
})