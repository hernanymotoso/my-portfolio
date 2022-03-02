import styled, { keyframes } from 'styled-components';

// Animations
const colorSlide = keyframes`
  0%{
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    /* background-color: transparent; */
    background-color: #787cff;
  }
  29.99% {
    background-color: #fff;
    background-position: 0% 0%;
  }
  30% {
    background-color: #787cff;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #787cff;
  }
  59% {
    background-color: #fff;
    background-position: 0% 0%;
  }
  60% {
    background-color: #787cff;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #787cff;
  }
  90%, 100% {
    background-color: #fff;
  }




`;

const colorText = keyframes`
  21% {
    color: rgba(255,255,255,0.08);
  }
  30% {
    color: #fff;
  }
  51% {
    color: rgba(255,255,255,0.08);
  }
  60% {
    color: #fff;
  }
  81% {
    color: rgba(255,255,255,0.08);
  }
  90% {
    color: #fff;
  }

`;
/*
// const trackBallSlide = keyframes`
//   0%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   6%{
//     opacity: 1;
//     transform: scale(0.9) translateY(5px);
//   }
//   14%{
//     opacity: 0;
//     transform: scale(0.4) translateY(40px);
//   }
//   15%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   19%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   28%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   29.99%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   30%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   36%{
//     opacity: 1;
//     transform: scale(0.9) translateY(5px);
//   }
//   44%{
//     opacity: 0;
//     transform: scale(0.4) translateY(40px);
//   }
//   45%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   49%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   58%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   59.99%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   60%{
//     opacity: 1;
//     transform: scale(0.9) translateY(5px);
//   }
//   66%{
//     opacity: 1;
//     transform: scale(0.9) translateY(5px);
//   }
//   74%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   75%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   79%{
//     opacity: 0;
//     transform: scale(0.4) translateY(-20px);
//   }
//   88%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
//   100%{
//     opacity: 1;
//     transform: scale(1) translateY(-20px);
//   }
// `;

*/
const nudgeMouse = keyframes`
  0%{
    transform: translateY(0);
  }
  20%{
    transform: translateY(8px);
  }
  30%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(8px);
  }
  60%{
    transform: translateY(0);
  }
  80%{
    transform: translateY(8px);
  }
  90%{
    transform: translateY(0);
  }

`;

const nudgeText = keyframes`
  0%{
    transform: translateY(0);
  }
  20%{
    transform: translateY(2px);
  }
  30%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(2px);
  }
  60%{
    transform: translateY(0);
  }
  80%{
    transform: translateY(2px);
  }
  90%{
    transform: translateY(0);
  }
`;
const trackBallSlide = keyframes`
   0%{
    transform: translateY(-14px);
  }
  20%{
    transform: translateY(8px);
  }
  30%{
    transform: translateY(14px);
  }
  50%{
    transform: translateY(8px);
  }
  60%{
    transform: translateY(14px);
  }
  80%{
    transform: translateY(8px);
  }90%{
    transform: translateY(14px);
  }
  100%{
    transform: translateY(-14px);
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;

  > p {
    margin-top: 15px;
    letter-spacing: 12px;
    color: #fff;
    text-indent: 12px;

    animation: ${colorText} 5s ease-out infinite,
      ${nudgeText} 5s ease-out infinite;
  }
`;

export const ScrollBtn = styled.div`
  cursor: pointer;
  width: 26px;
  height: 50px;
  position: relative;
  background: #787cff
    linear-gradient(transparent 0%, transparent 50%, #ffffff 50%, #ffffff 100%);
  background-size: 100% 200%;
  border-radius: 100px;
  animation: ${colorSlide} 5s linear infinite,
    ${nudgeMouse} 5s ease-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }

  &::before {
    width: 22px;
    height: 46px;
    background-color: #787cff;
    border-radius: 100px;
  }
  &::after {
    background-color: #fff;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    animation: ${trackBallSlide} 5s linear infinite;
  }
`;
