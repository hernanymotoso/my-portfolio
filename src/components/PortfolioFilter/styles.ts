import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 900px; */
  > ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;

    @media screen and (max-width: 370px) {
      flex-direction: column;
      justify-content: center;
    }

    > li {
      transition: all 0.4s;
      & + li {
        margin-left: 40px;

        @media screen and (max-width: 432px) {
          margin-left: 30px;
        }
        @media screen and (max-width: 370px) {
          margin-left: 0px;
          margin-top: 20px;
        }
      }

      > button {
        font-family: 'Roboto', sans-serif;
        background: transparent;
        border: 0;
        font-size: 20px;
        font-weight: 300;
        transition: color 0.2s;

        @media screen and (max-width: 432px) {
          font-size: 18px;
        }
      }
    }
  }
`;
