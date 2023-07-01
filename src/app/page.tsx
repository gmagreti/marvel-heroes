"use client";
import { Header, NavBar } from "~/components/layouts";
import { navLinks } from "~/mocks/nav-links";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar navLinks={navLinks} />
    </>
  );
}
