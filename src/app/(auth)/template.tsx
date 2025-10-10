"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "16px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "200px",
          }}
        />
      </div>

      <nav style={{ marginBottom: "24px" }}>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              href={link.href}
              key={link.name}
              style={{
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#000" : "#3b82f6", // text-blue-500
                marginRight: "16px",
                textDecoration: "none",
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div>{children}</div>
    </div>
  );
}
