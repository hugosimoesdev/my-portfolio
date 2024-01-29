import SideBar from "@/components/SideBar";
import "/styles/globals.css";

export const metadata = {
  title: "Hugo Simões",
  description: "My Profissional Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-300 h-screen flex" >
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
