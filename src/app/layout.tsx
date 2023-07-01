import { Inter } from "next/font/google";
import { Header, NavBar } from "~/components/layouts";
import ThemeProvider from "~/context/ThemeProvider";
import StyledComponentsRegistry from "~/lib/registry";
import { navLinks } from "~/mocks/nav-links";

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
          <ThemeProvider>
            <Header />
            <NavBar navLinks={navLinks} />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
