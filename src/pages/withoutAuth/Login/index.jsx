import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { LoginForm } from '../../../components/LoginForm';
import LandingHeader from '../../../components/LandingHeader';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { Directions, LoginWrapper } from './styles';

import { loginAction } from '../../../store/user';

export function Login() {
  const dispatch = useDispatch();

  const { signInErrorStatus } = useSelector(state => state.user);

  const [isBlockScreen, setIsBlockScreen] = useState(false);

  function handleForm(formData) {
    setIsBlockScreen(true);

    return dispatch(loginAction(formData));
  }

  useEffect(() => {
    if (!signInErrorStatus) return;

    setIsBlockScreen(false);
  }, [signInErrorStatus]);

  return (
    <LoginWrapper>
      <LandingHeader />

      <Directions>
        <h1>
          Olá,
          <br />
          Faça o seu login!
        </h1>

        <div>
          <span>Você é novo por aqui?</span>
          <br />
          <Link to="/register">
            Vamos criar uma nova conta <IoArrowForwardOutline size={16} />
          </Link>
        </div>
      </Directions>

      <LoginForm handleGetData={handleForm} />
    </LoginWrapper>
  );
}
