import * as types from './actionType';
import { normalizeResponseErrors } from './utils';
import io from 'socket.io-client';


// Connect to socket.io server
export const socket = io.connect('http://localhost:8080');
socket.on('refresh messages', conversation =>  {
    // dispatch(refreshMessages(conversation))
    console.log('conversation', conversation)
})

// SYNC ACTIONS

export const refreshMessages = () => ({
    type: types.REFRESH_MESSAGES,
})
export const fetchRecipients = () => ({
    type: types.FETCH_RECIPIENTS,
})

export const fetchConversations = (conversations) => ({
    type: types.FETCH_CONVERSATIONS,
    conversations
})

export const startConversations = ({recipients, composedMessage}) => ({
    type: types.START_CONVERSATIONS,
    recipients,
    composedMessage,
})

export const fetchSingleCoversation = (conversation) => ({
    type: types.FETCH_SINGLE_CONVERSATION,
    conversation,
})

export const sendReply = (composedMessage) => {
    socket.emit('new message', composedMessage)
    // dispatch()
    // return {
    //     type: types.SEND_REPLY,
    //     composedMessage
    // }
}

export const chatError = (err) => ({
    type:types.CHAT_ERROR,
    err,
})

// ASYNC ACTIONS


// start new conversation

// export const startConversations = (recipient) => (dispatch, getState) => {
//     dispatch(startConversations());
//     return fetch(`http://localhost:8080/api/conversations/new/${recipient}`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify(recipient),
//     })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(conversation => {
//         socket.emit('enter conversation', conversation.id)
//     })
//     .catch((err) => {
//         dispatch(chatError(err));
//       })
// }




