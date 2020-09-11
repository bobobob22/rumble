import styled from 'styled-components';


export const Root = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100vh;
  background: #c2c2c2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  @media all and (min-width: 768px) {
    max-width: 500px;
    max-height: 600px;
  }
`;

export const MovieWrapper = styled.div`
  padding: 10px;
  max-width: 90%;
  height: 90%;
  width: 100%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
   text-align: center;
`;

export const ImageWrapper = styled.div`
  max-width: 200px;
`;

export const MovieImage = styled.img`
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: auto;
  margin-bottom: 30px;
`;

export const Summary = styled.p`

`;
