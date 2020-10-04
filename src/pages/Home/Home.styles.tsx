import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: -13vh;
    z-index: 0;

    @media (max-width: 768px) {
      margin-top: -10vh;
    }
`;

export const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 53%;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-right: 1.5em;
  }
`;

export const IconTxt = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 32px;
  color: #FFFFFF;
  margin-left: .3em;
`;

export const Actions = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 7.5em;
  }
`;

export const useStyles = () => ({
  logo: {
    marginBottom: '2rem',
  },
});
