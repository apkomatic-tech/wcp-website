import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled.button`
  appearance: none;
  border-radius: 3px;
  border: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 1rem 1.5rem;
  text-decoration: none;
  text-align: center;
  transition: 100ms ease;
  background-color: ${(props) =>
    props.primary ? "var(--primary)" : "var(--secondary)"};
  color: ${(props) => (props.primary ? "var(--white)" : "var(--white)")};
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
  transition: 300ms ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-left: 0.5rem;
    font-size: 120%;
    transition: 100ms ease;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${(props) => (props.primary ? "var(--white)" : "var(--white)")};
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
  }
  &:hover svg,
  &:focus svg {
    transform: translateX(3px);
  }
`;
const ButtonLink = Button.withComponent(Link);
const ButtonLinkExternal = Button.withComponent("a");

export { Button, ButtonLink, ButtonLinkExternal };
