import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the card hover animation
const cardHoverAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  }
`;

export const Card = styled.article`
  /* Remove the absolute positioning */
  max-width: 370px;
  margin: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: inline-block; /* Display cards in a row */
  vertical-align: top; /* Align cards to the top of the container */
  width: calc(33.33% - 16px); /* Three cards per row with some spacing */

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    animation: ${cardHoverAnimation} 0.3s ease;
  }
`

export const CardThumb = styled.header`
  height: 235px;
  overflow: hidden;
  background-color: #000;
  transition: height 0.3s;

  img {
    display: block;
    opacity: 1;
    transition: opacity 0.3s, transform 0.3s;
    transform: scale(1);
  }

  ${Card}:hover & img {
    opacity: 0.6;
    transform: scale(1.2);
  }

  ${Card}:hover & {
    height: 90px;
  }
`

export const CardDate = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  padding-top: 10px;
  color: #fff;
  text-align: center;
  line-height: 13px;
  font-weight: bold;
  background-color: #ef5a31;
  border-radius: 50%;
`

export const CardDateDay = styled.span`
  display: block;
  font-size: 14px;
`

export const CardDateMonth = styled.span`
  display: block;
  font-size: 10px;
  text-transform: uppercase;
`;

export const CardBody = styled.div`
  position: relative;
  padding: 26px;
`

export const CardCategory = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  height: 25px;
  padding: 0 15px;
  color: #fff;
  font-size: 11px;
  line-height: 25px;
  background-color: #ef5a31;
  text-transform: uppercase;
`

export const CardTitle = styled.h2`
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 22px;
  color: #000;
  font-weight: bold;
`

export const CardSubtitle = styled.div`
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 15px;
  color: #ef5a31;
`

export const CardDescription = styled.p`
  color: #666c74;
  font-size: 14px;
  line-height: 27px;
`

export const CardFooter = styled.footer`
  position: absolute;
  bottom: 20px;
  left: 26px;
  right: 26px;
  font-size: 11px;
  color: #a3a9ab;
`

export const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
`

export const IconComment = styled.span`
  width: 14px;
  height: 14px;
  margin-top: -6px;
`

export const IconTime = styled.span`
  width: 10px;
  height: 17px;
  margin-top: -6px;
`


