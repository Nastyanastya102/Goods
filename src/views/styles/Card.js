import styled from 'styled-components';

export const CardWrapper = styled.section`
  position: relative;
  font-family: 'DM Mono', monospace;
  background-color: #fff;
  text-align: center;
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-bottom: 15%;
  }
  h2 {
    font-size: 50px;
    padding: 6% 0;
  }
`;

export const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
  min-height: 200px;
  max-width: 280px;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 10px;
  color: #333;
    :hover {
      background: #eee;
    }
  h3 {
    font-size: 25px;
  }
  span {
    font-size: 19px;
    font-weight: 600
  }
`;

export const CardButton = styled.button`
  border: none;
  background: #e55;
  color: #fff;
  padding: .7rem;
  width: 80%;
  margin: 5% auto;
  outline: none;
  cursor: pointer;
    :hover {
      background: #ccc;
      color: #e55;
    }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;
