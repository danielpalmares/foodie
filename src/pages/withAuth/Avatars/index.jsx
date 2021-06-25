import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../Layout';
import RecipesGrid from '../../../components/RecipesGrid';

import { Container } from './styles';

import { getItemFromLS, setItemFromLS } from '../../../utils';

import { changeAvatarAction } from '../../../store/user/actions';

export default function Avatars() {
  const dispatch = useDispatch();
  const avatarsCount = Array.from(Array(7).keys());

  const { gender, avatar, username } = useSelector(state => state.user.user);
  const avatarGender = gender === 'male' ? 'man' : 'woman';
  const [activeAvatar, setActiveAvatar] = useState();
  console.log(avatar);

  useEffect(() => setActiveAvatar(avatar), [avatar]);

  function handleAvatar(id) {
    setActiveAvatar(id);

    const usersList = getItemFromLS('users');
    usersList.map(user => {
      return user.username === username ? (user.avatar = id) : user;
    });
    setItemFromLS('users', usersList);

    return dispatch(changeAvatarAction(id));
  }

  return (
    <Layout onlyBackButton>
      <Container>
        <h1>Select your avatar</h1>

        <RecipesGrid>
          {avatarsCount.map((_, i) => {
            return (
              <img
                key={i + 1}
                src={`${process.env.PUBLIC_URL}avatars/${avatarGender}-${
                  i + 1
                }.png`}
                className={activeAvatar === i + 1 ? 'activeAvatar' : null}
                onClick={() => handleAvatar(i + 1)}
                alt="Avatar"
              />
            );
          })}
        </RecipesGrid>
      </Container>
    </Layout>
  );
}
