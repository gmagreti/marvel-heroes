"use client";
import Link from "next/link";
import styled from "styled-components";

export const Root = styled.div`
  background-color: #202020;
  border-top: 1px solid #393939;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const NavLink = styled(Link)`
  color: #fff;
  padding: 10px 20px;
  display: block;
  border-bottom: 2px solid transparent;
  text-transform: capitalize;

  transition: border-color 0.1s ease-in-out;

  &:hover {
    border-bottom: 2px solid #eb2328;
  }
`;
