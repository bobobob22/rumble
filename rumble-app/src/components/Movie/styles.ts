import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100vh;
  background: ${(props) => props.theme.color.main};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  ${(props) => props.theme.breakpoints.up('md')} {
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
   margin-top: 2rem;
   margin-bottom: 1rem;
   font-size: 1.2rem;
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
  font-style: italic;
`;
