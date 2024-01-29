import SideBar from "@/components/SideBar";

import "/styles/globals.css";

export const metadata = {
  title: "Hugo Simões",
  description: "My Profissional Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-300 h-screen flex">
        <SideBar />
        <div className="flex flex-col flex-1 mt-16 mx-80  items-start">
          {children}
        </div>
      </body>
    </html>
  );
}
