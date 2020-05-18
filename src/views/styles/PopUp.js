import styled from 'styled-components';

export const BouhtItem = styled.section`
  font-family: 'DM Mono', monospace;
  display: flex;
  flex-direction: column;
  .container {
    width: 80%;
    margin: 5% auto;
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
    top: 2%;
    right: 0;
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
  .shoping_card {
    height: 100px;
  }
  .total {
    display: inline-block;
    width: 100%;
    text-align: end;
    font-size: 25px;
    font-weight: 800;
    padding: 3% 0;
  }
  img {
    width: 120px;
  }
`;