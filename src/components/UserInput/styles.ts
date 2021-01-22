import styled from "styled-components";
import { Ellipse } from "../../assets/iconsSvg";

export const Container = styled.div`
  display: flex;

  width: min(90%, 1225px);
`;

export const Input = styled.input`
  width: 80%;
  padding-left: 2rem;
  font-size: 16px;

  background: #ffffff;
  border: 1px solid #232323;
  border-radius: 6px 0px 0px 6px;

  &::placeholder {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: #616161;
  }
`;

export const Button = styled.button`
  height: 36px;
  width: 20%;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px 12px 12px 0px;

  transition: 0.4s;

  &:hover {
    background: var(--secondary-color);
  }

  &:hover svg {
    fill: #ffffff;
  }
`;

export const EllipseIcon = styled(Ellipse)`
  padding: 0 4px;
  transition: 0.4s;

  fill: var(--secondary-color);
`;
