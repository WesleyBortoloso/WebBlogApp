import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items:center;

  .title {
    padding: 40px 0;
  }

  .wrapper{
    display: flex;
    width: 100%;

    .posts {
      background: red;
      width: 70%;
    }
  }
`;
