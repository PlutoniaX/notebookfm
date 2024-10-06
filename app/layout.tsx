import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs';


export const metadata: Metadata = {
  title: "NotebookFM",
  description: "Your personal YouTube notebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="flex">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
