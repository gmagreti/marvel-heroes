"use client";
import { useCallback, useEffect } from "react";
import { styled } from "styled-components";
import { Header } from "~/components/layouts";
import { charactersService } from "../services/characters";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Home() {
  const loadCharacters = useCallback(async () => {
    const charactersList = await charactersService.listCharacters();

    console.log("charactersList", charactersList);
  }, []);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      <Header />
      <Title>Marvel Heroes</Title>
    </>
  );
}
