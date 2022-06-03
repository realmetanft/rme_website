import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/NewNfts/BlackLogo.png";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/"></Link>
      <img
        style={{ marginTop: 10 }}
        width={45}
        height={66}
        src={img}
        alt={"RME Universe"}
      />
    </LogoText>
  );
};

export default Logo;
