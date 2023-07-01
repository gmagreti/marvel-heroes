"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const Root = styled(Link)`
  max-width: 294.31px;
  width: max-content;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  border: 3px solid rgb(58, 60, 72);
  border-radius: 10px;
  transition: 0.2s ease-in;

  img {
    width: auto;
    border-radius: 7px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: 3px solid rgb(58, 60, 72);

    transition: 0.2s ease-in;

    &:hover {
      border-color: #ec1c23;
    }
  }

  h2 {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #d8d8d8;
  }

  & > div {
    padding: 10px;
  }

  &:hover {
    border-color: #ec1c23;
    -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.36);
    box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.36);
    transform: scale(1.01);
  }
`;
