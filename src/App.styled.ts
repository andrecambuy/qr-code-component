import React from "react";
import styled from "styled-components";

/* background-color: ${(props) => props.theme.grayshblue}; */

// - Mobile: 375px
// - Desktop: 1440px

// - Font size (paragraph): 15px

// - Family: [Outfit](https://fonts.google.com/specimen/Outfit)
// - Weights: 400, 700

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.lightgray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 350px;
  background-color: ${(props) => props.theme.whitecolor};
  margin: auto;
  border-radius: 20px;
  -webkit-box-shadow: 2px 5px 16px 0px #0b325e,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 2px 5px 16px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const QRCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
  margin: 25px auto;
  border-radius: 20px;
`;

export const Content = styled.div`
  margin: 10px 40px;
  text-align: center;
  font-size: 15px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.darkblue};
  font-weight: 700;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.grayshblue};
  font-weight: 400;
`;
