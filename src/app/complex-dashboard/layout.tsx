import { Metadata } from "next";
import { PropsWithChildren, ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Codevolution",
    template: "%s | Codevolution",
  },
  description: "Root Layout Next.js",
};
type ComplexDashboardLayoutProps = PropsWithChildren<{
  user: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}>;

export default function ComplexDashboardLayout({
  children,
  user,
  revenue,
  notifications,
}: ComplexDashboardLayoutProps) {
  console.log({ user, revenue, notifications });
  return (
    <html lang="en">
      <body>
        <>{children}</>
        <>{user}</>
        <div>hi</div>
        <>{revenue}</>
        <>{notifications}</>
      </body>
    </html>
  );
}
