import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import TypingTextAnimation from 'react-typing-text-animation';
import {
  Container,
  Content,
  ProfilePic,
  ProfileText,
  Socials,
  AnimationContainer,
} from './styles';

import ScrollDownButton from '../ScrollDownButton';

const HomeComponent: React.FC = () => {
  console.log('teste');

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ProfilePic />
          <ProfileText>
            <h1>I&apos;m Hernany</h1>
            <TypingTextAnimation
              text="Full-Stack Developer "
              delay={70}
              cursorDuration="1s"
              reverse
              delayOnReverse={50}
              brakeBeforeReverse={12500}
            />
          </ProfileText>
          <Socials>
            <ul>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </Socials>
          <ScrollDownButton />
          {/* MouseDown BTN */}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default HomeComponent;
