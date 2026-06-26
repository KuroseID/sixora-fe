import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Sixora",
  description: "Register your account",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
