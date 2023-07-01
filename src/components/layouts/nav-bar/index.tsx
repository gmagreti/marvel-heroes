import { Container } from "../container";

import * as Styled from "./styles";

type NavLink = {
  href: string;
  name: string;
};

type NavBarProps = {
  navLinks: NavLink[];
};

export function NavBar({ navLinks }: NavBarProps) {
  return (
    <Styled.Root>
      <Container>
        <Styled.NavList>
          {navLinks.map((navItem) => (
            <li key={navItem.name}>
              <Styled.NavLink href={navItem.href}>
                {navItem.name}
              </Styled.NavLink>
            </li>
          ))}
        </Styled.NavList>
      </Container>
    </Styled.Root>
  );
}
