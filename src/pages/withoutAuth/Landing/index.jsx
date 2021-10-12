import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';
import {
  LandingContainer,
  SectionContent,
  LeftContainer,
  RightContainer,
} from './styles';
import logo from '../../../assets/foodie-logo.svg';
import hamburger from '../../../assets/hamburger.svg';

export default function Landing() {
  return (
    <LandingContainer>
      <SectionContent>
        <LeftContainer>
          <img src={logo} alt="Foodie logo" />
          <h1>
            Descubra, crie, compartilhe
            <br />
            receitas com todo o <span>mundo!</span>
          </h1>
        </LeftContainer>

        <RightContainer>
          <img className="svg-hamburger" src={hamburger} alt="Hamburger" />
          <Link to="/login">
            <button>
              Conectar-se <IoArrowForwardOutline size={26} />
            </button>
          </Link>
        </RightContainer>
      </SectionContent>
    </LandingContainer>
  );
}
