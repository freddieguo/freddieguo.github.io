import { GlobalStyle } from "./GlobalStyle";

export const metadata = {
  title: "Freddie Guo's Website",
  description: "I turn messy data into clear business stories.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
