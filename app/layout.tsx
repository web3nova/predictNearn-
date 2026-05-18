import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "PredictEarn - Decentralized Prediction Markets",
  description: "Bet on sports, entertainment, crypto & more. Real-time odds, instant payouts on Celo.",
  openGraph: {
    title: "PredictEarn",
    description: "Decentralized Prediction Markets on Celo",
    url: "https://predictearn.xyz",
    siteName: "PredictEarn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PredictEarn",
    description: "Decentralized Prediction Markets on Celo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 100%;
            height: 100%;
            overflow-x: hidden;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            background: #060809;
            color: rgba(255, 255, 255, 0.88);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}