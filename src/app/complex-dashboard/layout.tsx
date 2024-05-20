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
  login: ReactNode;
}>;

export default function ComplexDashboardLayout({
  children,
  user,
  revenue,
  notifications,
  login,
}: ComplexDashboardLayoutProps) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            height: "200px",
            border: "0.5px dotted black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <>{children}</>
          <>{user}</>
          <>{revenue}</>
          <>{notifications}</>
        </div>
      </body>
    </html>
  ) : (
    login
  );
}
