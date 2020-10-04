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
  margin-top: 13vh;
`;

export const Content = styled.div`
  width: 17.5em;
  height: 23em;
  margin: 1em;
  display: flex;
  flex-direction: column;
`;

export const Cover = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoverContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #FFB85C;
  border-top-left-radius: .5em;
  border-top-right-radius: .5em;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Information = styled.div`
  background-color: #F0F0F5;
  height: 45%;
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em;
`;

export const Title = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #3D3D4D;
`;

export const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #3D3D4D;
  margin-bottom: .5em;
  margin-top: .5em;
`;

export const Subdescription = styled.div``;

export const Currency = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;
  color: #39B100;
`;

export const Value = styled(Currency)`
  font-weight: bold;
`;

export const Actions = styled.div`
  background-color: #E4E4EB;
  height: 17%;
  border-bottom-left-radius: .5em;
  border-bottom-right-radius: .5em;
`;

export const ActionsContent = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 33%;
  height: 100%;
  justify-content: space-evenly;
`;

export const Icons = styled.button`
  cursor: pointer;
  outline: none;
  padding: 0;
  border: none;
  background-color: white;
  height: 2.5em;
  width: 2.5em;
  border-radius: .5em;
`;

export const useStyles = () => ({
  price: {
    marginLeft: 'margin-left: 2.5px;',
  },
});
