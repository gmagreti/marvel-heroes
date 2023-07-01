"use client";
import { Container } from "~layouts";
import { LogoMarvel } from "~/components/icons";

import * as Styled from "./styles";

export function Header() {
  return (
    <Styled.Root>
      <Container>
        <LogoMarvel />
      </Container>
    </Styled.Root>
  );
}
