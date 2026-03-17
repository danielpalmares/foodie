import {
  FRIENDS_LOADING,
  FRIENDS_LIST_LOADED,
  FRIEND_REQUESTS_LOADED,
  FRIEND_REQUEST_SENT,
  FRIEND_REQUEST_ACCEPTED,
  FRIEND_REQUEST_REJECTED,
  FRIEND_REMOVED,
  FRIENDS_ERROR,
} from '../types';

import {
  apiGetFriendsList,
  apiGetFriendRequests,
  apiSendFriendRequest,
  apiAcceptFriend,
  apiRejectFriend,
  apiRemoveFriend,
} from '../../../services/foodie/api';

export const fetchFriendsListAction = userId => async dispatch => {
  dispatch({ type: FRIENDS_LOADING });
  try {
    const { data } = await apiGetFriendsList(userId);
    dispatch({ type: FRIENDS_LIST_LOADED, payload: { friends: data } });
  } catch (err) {
    dispatch({ type: FRIENDS_ERROR, payload: { error: err?.response?.data?.message || err.message } });
  }
};

export const fetchFriendRequestsAction = userId => async dispatch => {
  dispatch({ type: FRIENDS_LOADING });
  try {
    const { data } = await apiGetFriendRequests(userId);
    dispatch({ type: FRIEND_REQUESTS_LOADED, payload: { requests: data } });
  } catch (err) {
    dispatch({ type: FRIENDS_ERROR, payload: { error: err?.response?.data?.message || err.message } });
  }
};

export const sendFriendRequestAction = (requesterId, addresseeId) => async dispatch => {
  try {
    await apiSendFriendRequest({ requester_id: requesterId, addressee_id: addresseeId });
    dispatch({ type: FRIEND_REQUEST_SENT });
  } catch (err) {
    dispatch({ type: FRIENDS_ERROR, payload: { error: err?.response?.data?.message || err.message } });
  }
};

export const acceptFriendAction = (requestId, userId) => async dispatch => {
  try {
    await apiAcceptFriend(requestId);
    dispatch({ type: FRIEND_REQUEST_ACCEPTED, payload: { requestId } });
    // refresh both lists after accepting
    dispatch(fetchFriendsListAction(userId));
    dispatch(fetchFriendRequestsAction(userId));
  } catch (err) {
    dispatch({ type: FRIENDS_ERROR, payload: { error: err?.response?.data?.message || err.message } });
  }
};

export const rejectFriendAction = (requestId, userId) => async dispatch => {
  try {
    await apiRejectFriend(requestId);
    dispatch({ type: FRIEND_REQUEST_REJECTED, payload: { requestId } });
    dispatch(fetchFriendRequestsAction(userId));
  } catch (err) {
    dispatch({ type: FRIENDS_ERROR, payload: { error: err?.response?.data?.message || err.message } });
  }
};

export const removeFriendAction = (friendId, userId) => async dispatch => {
  try {
    await apiRemoveFriend(friendId);
    dispatch({ type: FRIEND_REMOVED, payload: { friendId } });
    dispatch(fetchFriendsListAction(userId));
  } catch (err) {
    dispatch({ type: FRIENDS_ERROR, payload: { error: err?.response?.data?.message || err.message } });
  }
};
