import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  margin-right: 20px;
`;
export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  padding: 0;
  margin: 5px;
  background-color: rgba(1, 0, 0, 0.4);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  border-color: transparent;
  svg {
    width: 35px;
    height: 35px;
    color: white;
    &:hover,
    &:focus {
      color: rgba(254, 60, 1, 0.9);
      transform: scale(1.25);
    }
  }
`;
