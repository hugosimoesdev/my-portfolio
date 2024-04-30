import "/styles/globals.css";

import SideBar from "@/components/Sidebar";
import Menu from "@/components/Menu";

export const metadata = {
  title: "Hugo Simões",
  description: "My Profissional Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-300">
        <SideBar />
        <Menu />
        {children}
      </body>
    </html>
  );
}
