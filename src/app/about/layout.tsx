import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Default title for all",
    template: "%s |Codevolution",
  },
  description: "Root Layout Next.js",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
