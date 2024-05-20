import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Default title for all",
    template: "%s |Codevolution",
  },
  description: "Root Layout Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
