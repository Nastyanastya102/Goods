import styled from 'styled-components';

export const BouhtItem = styled.section`
  font-family: 'DM Mono', monospace;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,0.86);
  .container {
    width: 80%;
    margin: 5% auto;
  }
  .empty_basket{
    width: 100%;
    background-color: #eee;
    height: 50vh;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 25px;
  }
  ul {
    position: relative;
    height: 70px;
    align-items: center;
    list-style-type: none;
    display: flex;
    background-color: #eee;
  }
  ul:first-child {
    color: #8a8a8a;
    li:first-child {
      color: #000;
    }
  }
  .sale {
    position: absolute;
    top: -4%;
    left: -2%;
    background: orange;
	  color: white;
	  height: 2.5rem;
	  width: 2.5rem;
	  text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 300;
    line-height: 2.5rem;
    transform: rotate(-20deg);
    &:before,
	  &:after {
	  	content:"";
	  	position: absolute;
	  	background: inherit;
	  	height: inherit;
	  	width: inherit;
	  	top: 0;
	  	left: 0;
	  	z-index: -1;
	  	transform: rotate(30deg);
	  }
	  &:after {
	  	transform: rotate(60deg);
	  }
  }
  li {
    width: 25%;
    text-align: center;
  }
  li:first-child {
    font-size: 1.4rem;
  }
  li: last-child {
    flex-shrink: 2;
  }
  .shoping_card {
    height: 100px;
    padding: 0 3%;
  }
  .total {
    display: inline-block;
    width: 100%;
    text-align: end;
    font-size: 25px;
    font-weight: 800;
    padding: 3% 0;
    color: #ffc107;
    text-decoration: underline;
  }
  img {
    width: 120px;
  }
  i {
    margin-left: 5px;
    cursor: pointer;
  }
  i: hover {
    opacity: .5;
  }
  i:first-child {
    margin-right: 5px;
  }
  i img {
    width: 15px;
  }
  .delete {
    width: 25px;
  }
`;
