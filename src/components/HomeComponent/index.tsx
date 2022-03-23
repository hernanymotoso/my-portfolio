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

const HomeComponent: React.FC = () => (
  // console.log('teste');

  <Container>
    {/* <RemoveScrollBar /> */}
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
              <a
                href="https://www.linkedin.com/in/hernanymotoso/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hernanymotoso"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hernanymotoso/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/hernanymotoso.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCmhyW3VLjtmYn-9fNoFvJqA"
                target="_blank"
                rel="noreferrer"
              >
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
export default HomeComponent;
