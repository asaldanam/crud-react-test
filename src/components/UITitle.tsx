import styled from "styled-components";
import theme, { tablet } from "core/theme";
import decorationImg from "assets/decoration.svg";

export const Title = styled.h1`
  /* border-bottom: 1px solid var(--color-medium); */
  background-color: ${theme.color.sky};
  margin: 0 -1rem;
  font-size: 0.8125rem;
  padding: 0.375rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  :before {
    content: "";
    display: block;
    position: absolute;
    opacity: 0.1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url(${decorationImg});
  }
  ${tablet} {
    text-transform: none;
    text-align: left;
    padding: 0 0 0.25rem 0;
    font-weight: normal;
    font-size: 1.5rem;
    margin: 2rem 0 0 0;
    background: unset;
    :before {
      display: none;
    }
  }
`;
