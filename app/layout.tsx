import { ReactNode } from "react";
import ClientRoot from "../components/ClientRoot";

export const metadata = {
  title: 'Researcher AI',
  description: 'Your app description',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-muted">
        <ClientRoot>
          {children}
        </ClientRoot>
      </body>
    </html>
  );
}