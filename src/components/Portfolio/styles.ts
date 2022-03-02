import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 60px;
  > h1 {
    text-align: center;
    margin-bottom: 60px;
    font-weight: 300;
    span {
      color: #787cff;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 0 15px;

  display: flex;
  flex-wrap: wrap;
`;
