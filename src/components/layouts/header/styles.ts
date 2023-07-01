"use client";
import styled from "styled-components";
import { Container } from "../container";

export const Root = styled.div`
  background-color: #202020;
  padding: 10px 0;

  ${Container} {
    display: flex;
    justify-content: center;
  }
`;
