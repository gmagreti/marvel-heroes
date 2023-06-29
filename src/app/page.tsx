"use client";
import { useCallback, useEffect } from "react";
import { styled } from "styled-components";
import CharactersService from "~/services/characters";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Home() {
  const loadCharacters = useCallback(async () => {
    const charactersList = await CharactersService.listCharacters();

    console.log("charactersList", charactersList);
  }, []);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return <Title>Marvel Heroes</Title>;
}
