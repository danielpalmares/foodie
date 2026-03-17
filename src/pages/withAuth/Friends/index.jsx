import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { activePageAction } from '../../../store/activePage';
import {
  fetchFriendsListAction,
  fetchFriendRequestsAction,
  acceptFriendAction,
  rejectFriendAction,
  removeFriendAction,
  sendFriendRequestAction,
} from '../../../store/friends';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';

import {
  IoPersonAddOutline,
  IoCheckmarkOutline,
  IoCloseOutline,
  IoPersonRemoveOutline,
  IoPeopleOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';

import {
  Container,
  Section,
  FriendCard,
  FriendAvatar,
  FriendInfo,
  ActionButtons,
  SearchBar,
  EmptyState,
  TabBar,
  Tab,
  RequestBadge,
} from './styles';

export default function Friends() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector(state => state.user);
  const { friends, requests, loading } = useSelector(state => state.friends);

  const [activeTab, setActiveTab] = useState('friends');
  const [searchUsername, setSearchUsername] = useState('');

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => { dispatch(activePageAction('friends')); }, [dispatch]);

  useEffect(() => {
    if (!user?.user_id) return;
    dispatch(fetchFriendsListAction(user.user_id));
    dispatch(fetchFriendRequestsAction(user.user_id));
  }, [dispatch, user?.user_id]);

  function handleSendRequest(e) {
    e.preventDefault();
    if (!searchUsername.trim()) return;
    dispatch(sendFriendRequestAction(user.user_id, searchUsername.trim()));
    setSearchUsername('');
  }

  function handleAccept(e, requestId) {
    e.stopPropagation();
    dispatch(acceptFriendAction(requestId, user.user_id));
  }

  function handleReject(e, requestId) {
    e.stopPropagation();
    dispatch(rejectFriendAction(requestId, user.user_id));
  }

  function handleRemove(e, friendId) {
    e.stopPropagation();
    dispatch(removeFriendAction(friendId, user.user_id));
  }

  function handleViewProfile(username) {
    history.push(`/user/${username}`);
  }

  const avatarSrc = (gender) =>
    `${process.env.PUBLIC_URL}avatars/${(gender === 'male' || gender === 1) ? 'man' : 'woman'}-1.png`;

  return (
    <Layout onlyBackButton>
      <Container>
        <AppTitle>
          <IoPeopleOutline size={24} style={{ verticalAlign: 'middle', marginRight: '0.8rem' }} />
          Friends
        </AppTitle>

        <SearchBar onSubmit={handleSendRequest}>
          <input
            type="text"
            placeholder="Add a friend by username..."
            value={searchUsername}
            onChange={e => setSearchUsername(e.target.value)}
          />
          <button type="submit">
            <IoPersonAddOutline size={22} />
          </button>
        </SearchBar>

        <TabBar>
          <Tab isActive={activeTab === 'friends'} onClick={() => setActiveTab('friends')}>
            Friends <span>{friends.length}</span>
          </Tab>
          <Tab isActive={activeTab === 'requests'} onClick={() => setActiveTab('requests')}>
            Requests
            {requests.length > 0 && <RequestBadge>{requests.length}</RequestBadge>}
          </Tab>
        </TabBar>

        {loading && <Spinner />}

        {activeTab === 'friends' && !loading && (
          <Section>
            {friends.length === 0 && (
              <EmptyState>You haven't added any friends yet.</EmptyState>
            )}
            {friends.map(friend => (
              <FriendCard
                key={friend.user_id}
                onClick={() => handleViewProfile(friend.username)}
                style={{ cursor: 'pointer' }}
              >
                <FriendAvatar
                  src={avatarSrc(friend.gender)}
                  alt={friend.name}
                />
                <FriendInfo>
                  <strong>{friend.name}</strong>
                  <span>@{friend.username}</span>
                  {friend.biography && <p>{friend.biography}</p>}
                </FriendInfo>
                <ActionButtons>
                  <button
                    className="profile"
                    title="View profile"
                  >
                    <IoChevronForwardOutline size={18} />
                  </button>
                  <button
                    className="remove"
                    onClick={e => handleRemove(e, friend.user_id)}
                    title="Remove friend"
                  >
                    <IoPersonRemoveOutline size={18} />
                  </button>
                </ActionButtons>
              </FriendCard>
            ))}
          </Section>
        )}

        {activeTab === 'requests' && !loading && (
          <Section>
            {requests.length === 0 && (
              <EmptyState>No pending friend requests.</EmptyState>
            )}
            {requests.map(req => (
              <FriendCard key={req.request_id}>
                <FriendAvatar
                  src={avatarSrc(req.gender)}
                  alt={req.name}
                />
                <FriendInfo>
                  <strong>{req.name}</strong>
                  <span>@{req.username}</span>
                </FriendInfo>
                <ActionButtons>
                  <button
                    className="accept"
                    onClick={e => handleAccept(e, req.request_id)}
                    title="Accept"
                  >
                    <IoCheckmarkOutline size={20} />
                  </button>
                  <button
                    className="reject"
                    onClick={e => handleReject(e, req.request_id)}
                    title="Reject"
                  >
                    <IoCloseOutline size={20} />
                  </button>
                </ActionButtons>
              </FriendCard>
            ))}
          </Section>
        )}
      </Container>
    </Layout>
  );
}
