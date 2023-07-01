"use client";
import Image from "next/image";
import * as Styled from "./styles";

export type CardProps = {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
};

export function Card({ description, title, href, imageUrl }: CardProps) {
  return (
    <Styled.Root href={href}>
      <Image src={imageUrl} alt={title} width="287" height="400" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Styled.Root>
  );
}
