import './globals.css';
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: 'Researcher AI',
  description: 'Your app description',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-muted">
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64 ml-16 transition-all">
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}