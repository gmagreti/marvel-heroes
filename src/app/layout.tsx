import { Inter } from "next/font/google";
import { Footer, Header, NavBar } from "~/components/layouts";
import StyledComponentsRegistry from "~/lib/registry";
import { navLinksMock } from "~/mocks/nav-links";

import "~/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marvel Heroes",
  description: "Application to list marvel heroes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <NavBar navLinks={navLinksMock} />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
