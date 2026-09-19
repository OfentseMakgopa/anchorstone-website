import "./globals.css";

export const metadata = {
  title: "Anchorstone Partners — Business Turnaround & Recapitalisation",
  description:
    "We arrange bank financing for struggling businesses and take a direct stake in their turnaround — as an equity partner, or by taking over operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
