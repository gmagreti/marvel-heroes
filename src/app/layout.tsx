import { Inter } from "next/font/google";

import StyledComponentsRegistry from "~/lib/registry";
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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
