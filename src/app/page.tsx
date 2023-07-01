import { Container, ListCards } from "~/components/layouts";
import { listCardsMock } from "~/mocks/list-cards";

export default function Home() {
  return (
    <Container>
      <h1>The content is coming</h1>

      {listCardsMock.map(({ cards, href, title }) => (
        <ListCards key={title} cards={cards} href={href} title={title} />
      ))}
    </Container>
  );
}
