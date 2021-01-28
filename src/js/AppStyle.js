import styled, { createGlobalStyle }  from "styled-components";

const colors = {
  primary: "#A42323", //red
  secundary: "#FAF9F9", //white
  terciary : "#ECECEC", //gray
  quaternary: "#DEDEDE", //gray more dark
  quinary: "#131111", //black
}

const DefaultCss = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;

    list-style: none;
    line-height: 1.5;
    text-decoration: none;
  }

    html{
    font-size: 20px;    
    font-family: "Sen", sans-serif;

    @media(min-width: 768px) {
      font-size: 18px;
    }

    @media(min-width: 1024px) {
      font-size: 16px;
    }
  }

  body{
    background-color: ${colors.terciary};
    text-align: center;
  }
`;

export { colors, DefaultCss };