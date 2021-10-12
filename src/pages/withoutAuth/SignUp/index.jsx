import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SignUpForm } from '../../../components/SignUpForm/index';
import LandingHeader from '../../../components/LandingHeader';

import { IoArrowBackOutline } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../../store/user';

import AppTitle from '../../../components/AppTitle';
import { SignUpContainer, Directions, ErrorMessage } from './styles';

import BlockLoadingScreen from '../../../components/BlockLoadingScreen';

export default function SignUp() {
  const dispatch = useDispatch();

  const { errorMessage } = useSelector(state => state.user);
  const [isBlockScreen, setIsBlockScreen] = useState(false);

  function handleForm(account) {
    setIsBlockScreen(true);

    return dispatch(registerAction(account));
  }

  useEffect(() => {
    if (!errorMessage) return;

    setIsBlockScreen(false);
  }, [errorMessage]);

  return (
    <SignUpContainer>
      {isBlockScreen && <BlockLoadingScreen />}
      <LandingHeader />

      <Directions>
        <AppTitle>
          Olá, <br />
          Registre-se agora!
        </AppTitle>

        <div>
          <span>Já possui uma conta?</span>
          <br />
          <Link to="/signin">
            <IoArrowBackOutline size={16} /> Quero fazer login
          </Link>
        </div>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Directions>

      <SignUpForm handleGetData={handleForm} />
    </SignUpContainer>
  );
}
