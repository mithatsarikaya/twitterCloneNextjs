import "./globals.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";

export const metadata = {
  title: "Nwitter - Twitter from nuuklu",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AuthProvider>
        <body className="bg-white text-black">{children}</body>
      </AuthProvider>
    </html>
  );
}
