"use client";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import "./style.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div style={{ border: "1px dotted black" }}>
      <>
        {navLinks.map((el) => {
          const isActive = pathname.startsWith(el.href);
          return (
            <Link
              className={`${
                isActive ? "font-bold mr-4" : "text-blue-500 mr-4"
              }`}
              key={el.href}
              href={el.href}
            >
              {el.name}
            </Link>
          );
        })}
      </>
      {children}
    </div>
  );
};

export default AuthLayout;
