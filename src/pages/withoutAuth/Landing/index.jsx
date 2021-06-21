import React from 'react';

import LandingHeader from '../../../components/LandingHeader';
import LandingFooter from '../../../components/LandingFooter';
import SubmitButton from '../../../components/SubmitButton';
import Wrapper from '../../../components/Wrapper';

import hamburger from '../../../assets/hamburger.svg';
import cooking from '../../../assets/cooking.svg';
import healthy from '../../../assets/healthy.svg';
import diet from '../../../assets/diet.svg';
import eatingTogether from '../../../assets/eating-together.svg';

import { LandingContainer, SectionContent, GridLayout, Flex } from './styles';

export default function Landing() {
  return (
    <LandingContainer>
      <LandingHeader hasSignInButton />

      <SectionContent>
        <Wrapper>
          <GridLayout>
            <h1>
              Are you foodie? <br />
              So you're also in the <span>right</span> place!
            </h1>
            <img className="svg-image" src={hamburger} alt="Hamburger" />
          </GridLayout>
        </Wrapper>
      </SectionContent>

      <SectionContent>
        <Wrapper>
          <GridLayout>
            <h1 className="right">
              Mainly if you're passionate about <span>cooking!</span> <br />
              You'll fall in love with the options.
            </h1>
            <img className="svg-image left" src={cooking} alt="Cooking" />
          </GridLayout>
        </Wrapper>
      </SectionContent>

      <SectionContent>
        <Wrapper>
          <GridLayout>
            <h1>
              There are lots of healthy recipes,
              <br />
              all waiting to be cooked by <span>you!</span>
            </h1>
            <img className="svg-image" src={healthy} alt="Healthy" />
          </GridLayout>
        </Wrapper>
      </SectionContent>

      <SectionContent>
        <Wrapper>
          <GridLayout>
            <h1 className="right">
              No limits for you who have a diet,
              <br />
              you'll find <span>whatever</span> you want!
            </h1>
            <img className="svg-image left" src={diet} alt="Diet" />
          </GridLayout>
        </Wrapper>
      </SectionContent>

      <SectionContent>
        <Wrapper>
          <Flex>
            <GridLayout>
              <h1>
                Discover new recipes,
                <br />
                share with those you know and so much <span>more...</span>
              </h1>
              <img
                className="svg-image"
                src={eatingTogether}
                alt="Eating Together"
              />
            </GridLayout>

            <SubmitButton>Start now</SubmitButton>
          </Flex>
        </Wrapper>
      </SectionContent>

      <LandingFooter />
    </LandingContainer>
  );
}
