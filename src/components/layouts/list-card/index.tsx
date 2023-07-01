import { Card, CardProps } from "~/components/card";

import * as Styled from "./styles";

import Link from "next/link";

type ListCards = {
  title: string;
  href: string;
  cards: CardProps[];
};

export function ListCards({ cards, href, title }: ListCards) {
  return (
    <Styled.Root>
      <Styled.Header>
        <h2>{title}</h2>
        <Link href={href}>Ver mais</Link>
      </Styled.Header>

      <Styled.ListContainer>
        {cards.map(({ description, title, href, imageUrl }) => (
          <Card
            key={title}
            description={description}
            title={title}
            href={href}
            imageUrl={imageUrl}
          />
        ))}
      </Styled.ListContainer>
    </Styled.Root>
  );
}
