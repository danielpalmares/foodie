import {
  FRIENDS_LOADING,
  FRIENDS_LIST_LOADED,
  FRIEND_REQUESTS_LOADED,
  FRIEND_REQUEST_SENT,
  FRIEND_REQUEST_ACCEPTED,
  FRIEND_REQUEST_REJECTED,
  FRIEND_REMOVED,
  FRIENDS_ERROR,
} from './types';

import {
  fetchFriendsListAction,
  fetchFriendRequestsAction,
  sendFriendRequestAction,
  acceptFriendAction,
  rejectFriendAction,
  removeFriendAction,
} from './actions';

const initialState = {
  friends: [],
  requests: [],
  loading: false,
  error: '',
  requestSent: false,
};

function friends(state = initialState, action) {
  switch (action.type) {
    case FRIENDS_LOADING:
      return { ...state, loading: true, error: '' };

    case FRIENDS_LIST_LOADED:
      return { ...state, loading: false, friends: action.payload.friends };

    case FRIEND_REQUESTS_LOADED:
      return { ...state, loading: false, requests: action.payload.requests };

    case FRIEND_REQUEST_SENT:
      return { ...state, requestSent: true };

    case FRIEND_REQUEST_ACCEPTED:
      return {
        ...state,
        requests: state.requests.filter(r => r.request_id !== action.payload.requestId),
      };

    case FRIEND_REQUEST_REJECTED:
      return {
        ...state,
        requests: state.requests.filter(r => r.request_id !== action.payload.requestId),
      };

    case FRIEND_REMOVED:
      return {
        ...state,
        friends: state.friends.filter(f => f.user_id !== action.payload.friendId),
      };

    case FRIENDS_ERROR:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export {
  friends,
  fetchFriendsListAction,
  fetchFriendRequestsAction,
  sendFriendRequestAction,
  acceptFriendAction,
  rejectFriendAction,
  removeFriendAction,
};
