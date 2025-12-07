import "./globals.css";

export const metadata = {
  title: "My CV",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
