import {Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Product Manager",
  description: "Manage your products here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}

