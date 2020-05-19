import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  .modal_content {
    position: relative;
    max-width: 370px;
    height: 100%;
    margin: 0 0 0 auto;
    padding: 40px 20px;
    background: #fff;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7%;
  }
  img {
    width: 70%;
  }
  input {
    padding: 2% 4%;
    margin-top: 15px;
  }
  .proposition {
    color: red;
    font-size: 23px;
    font-weight: 600;
    text-shadow: 2px 0px 1px #1a1717;
  }
`;
