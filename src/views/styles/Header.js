import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 100vh;
    button {
      background-color: transparent;
      border: 0;
      position: fixed;
      top: 2%;
    }
    h1 {
      text-align: center;
      font-weight: normal;
      color: #fff;
      text-transform: uppercase;
      font-size: 8em;
      white-space: nowrap;
      z-index: 1000;
      font-family: 'Bangers', cursive;
      text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.7);
    }
    h2 {
      font-family: 'Titillium Web', sans-serif;
      text-align: center;
      font-size: 5vw;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: bold;
      color: white;
      text-shadow: 0 1px 2px rgba(black,.15);
    }
    img {
      width: 40px;
    }
    span {
    height: 1.2rem;
    width: 1.2rem;
    font-size: .7rem;
    border: 2px solid #FFC107;
    border-radius: 100%;
    background: #f9da48;
    color: #FF5722;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -20%;
    bottom: 0;
    }
`;