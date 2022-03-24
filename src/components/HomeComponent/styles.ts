import styled, { keyframes } from 'styled-components';

// import HomeBG from 'https://lh4.googleusercontent.com/WGFrP4_87JMY6KkqFF08ziAvvqC-W9ltC6oljwjJTO8xuswCaHPHxI1BZnF8UEcpflyT4YlXoKwYO-8L0NgF=w729-h637-rw';
import HomeBG from '../../assets/images/HomeBG.png';
import ProfileLogo from '../../assets/images/profileLogo.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${HomeBG});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  /* canvas {

  } */
  .pCanvas {
    position: static !important;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;

  animation: ${appearFromBottom} 1s;
`;

export const ProfilePic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-image: url('https://media-exp1.licdn.com/dms/image/C4E03AQGWeb7xfJ1_vg/profile-displayphoto-shrink_200_200/0/1642632546736?e=1653523200&v=beta&t=xRYhKIJf5tgYCdE_YcpQPDfiMz3Q-tSjPjH3-lYJz0s');
  background-repeat: no-repeat;
  background-size: 115%;
  background-position: 50% 30%;
  /* background-size: 00%; */
`;
export const ProfileText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  > div {
    font-weight: 300;
    font-size: 20px;
  }

  margin-top: 20px;
  h1 {
    font-size: 45px;
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }
`;

// To hover effect in btc
const socialBtnEffect = keyframes`
 0%{
  left: -110%;
  top: 90%;
 }50%{
  left: 10%;
  top: -30%;

 }100%{
  top: -10%;
  left: -10%;
 }
`;
export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* margin-bottom: 100px; */
  /* width: 250px; */

  margin-top: 20px;

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    /* max-width: 250px; */
    width: 250px;

    a {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.08);
      /* transition: border 0.2s; */
      transition: background-color 0.5s;
      width: 38px;
      height: 38px;
      border-radius: 28%;
      text-decoration: none;
      > svg {
        color: #fff;
        transition: 0.2s linear;
      }

      &:hover {
        /* background-color: #787cff; */
        border: 0;

        > svg {
          transform: scale(1.2);
        }
      }

      // To hover effect in btc
      &::before {
        content: '';
        position: absolute;
        width: 120%;
        height: 120%;
        background: #787cff;
        transform: rotate(45deg);
        left: -110%;
        top: 90%;
      }
      // To hover effect in btc
      &:hover::before {
        animation: ${socialBtnEffect} 0.7s 1;
        top: -10%;
        left: -10%;
      }
    }
  }
`;
