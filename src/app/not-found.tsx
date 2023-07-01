import Link from "next/link";
import { Container } from "~/components/layouts";

export default function NotFound() {
  return (
    <Container>
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </Container>
  );
}
