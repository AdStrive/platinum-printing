import "./globals.scss";

export const metadata = {
  title: "Platinum Printing Solutions",
  description: "Website for platinum printing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
