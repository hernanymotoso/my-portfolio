import styled, { keyframes, css } from 'styled-components';
import { shade, transparentize } from 'polished';

interface IContainerProps {
  imgUrl: any;
}
interface IContentProps {
  contentOpacity: string;
}

export const Container = styled.div<IContainerProps>`
  width: 33.33%;
  height: 250px;
  background-color: #787cff;
  /* border: 1px solid #ccc; */
  transition: all 0.4s;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 860px) {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const appearFromBottom = {
  in: keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  out: keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 1;
      transform: translateY(20px);
    }
  `,
};

const appearFromTop = {
  in: keyframes`
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
      to {
        opacity: 1;
      transform: translateY(0);
    }
  `,
  out: keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  `,
};

const contentOpacity = {
  in: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      background-color: #787cff
    }
  `,
  out: keyframes`
    from{
     opacity: 1;
     background-color: #787cff
   }
    to {
      opacity: 0;
    }

  `,
};

export const Content = styled.div<IContentProps>`
  width: 100%;
  height: 100%;
  /* transition: opacity 0.5s; */
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  ${props =>
    props.contentOpacity === 'opacityOut' &&
    css`
      animation: ${contentOpacity.out} 0.8s both;

      > h1 {
        animation: ${appearFromTop.out} 0.8s both;
      }
      > p {
        animation: ${appearFromBottom.out} 0.8s both;
      }
    `}

  ${props =>
    props.contentOpacity === 'opacityIn' &&
    css`
      animation: ${contentOpacity.in} 0.8s both;

      > h1 {
        animation: ${appearFromTop.in} 0.8s both;
      }
      > p {
        animation: ${appearFromBottom.in} 0.8s both;
      }
    `}

  > h1 {
    color: #fff;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: ${shade(0.2, '#ffffff')};
    }
  }
  > p {
    color: #fff;
    cursor: pointer;

    &:hover {
      color: ${shade(0.2, '#ffffff')};
    }
  }

  > svg {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    &:hover {
      color: ${shade(0.2, '#ffffff')};
    }
    /* transition: opacity 2s; */
  }
`;
