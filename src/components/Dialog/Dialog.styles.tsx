import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  height: 1em;
  padding: 1.5em;
`;

export const ModalContent = styled.div`
  display: flex;
  height: 23em;
  padding: 1.5em;
  flex-direction: column;

  @media (max-width: 768px) {
      height: 100%;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 1em;

  @media (max-width: 768px) {
    margin-bottom: 2em;
  }
`;

export const ModalTitle = styled.span`
  color: #000000;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

export const TwoInputsInLine = styled.div`
  display:flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ModalInputBase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
`;

export const ModalInputContent = styled(ModalInputBase)`
  width: 100%;
`;

export const ModalInputSmallContent = styled(ModalInputBase)`
  width: 13em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalLabel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #6C6C80;
`;

export const ModalInput = styled.input`
  margin-top: .5em;
  max-width: 644px;
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #3D3D4D;
  padding: 1em;
`;

export const DiagoloForm = styled.form``;

export const ButtonContainer = styled.span``;

export const StyledDialog = styled(Dialog)`
  & > .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.7);
  }

  & > .MuiDialog-container {
    height: 90%;
  }

  & > .MuiDialog-container > .MuiPaper-root {
    display: flex;
    flex-direction: column;
    background-color: #F0F0F5;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: .5em;
    min-width: 44em;
    height: 35em;

    @media (max-width: 768px) {
      min-width: 90%;
      min-height: 100%;
      display: flex;
      align-items: center;
      margin-top: 2em;
    }
  }
`;

export const useStyles = () => ({
  smallSize: {
    width: '13em;',
  },
});
