import styled from 'styled-components';
import React from 'react';
import Fade from 'react-reveal'
import Header from './Header';
import DownArrow from '../images/down-arrow.svg';

const Home = ({ bg, title, Btn1, Btn2 }) => {
  return (
    <Container bg={bg}>
      <Header />
      <Fade bottom>
        <Heading>
          <h1>{title}</h1>
          <p>Order Online for Touchless Deliver</p>
        </Heading>
      </Fade>
      <Fade bottom>
        <ButtonGroup>
          <li>
            <a href="#">{Btn1}</a>
          </li>
          {Btn2 && (
            <li>
              <a href="#">{Btn2}</a>
            </li>
          )}

          <Down>
            <img src={DownArrow} alt="down" />
          </Down>
        </ButtonGroup>
      </Fade>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  scroll-snap-align: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Heading = styled.div`
  width: 100%;
  text-align:center;
  height: 200px;
  padding-top: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
  }
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;
const ButtonGroup = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
    opacity: 85%;
    cursor: pointer;
    border-radius: 100px;
    margin: 10px;
  }
  li:nth-child(1) {
    background-color: #393c41;
    a {
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 200px;
    li {
      width: 250px;
    }
  }
`;

const Down = styled.div`
  width: 30px;
  position: absolute;
  bottom: 10px;
  height: 30px;
  animation: bounce 1s ease infinite;

  img {
    height: 100%;
  }
`;
