import "/styles/globals.css";

export const metadata = {
  title: "Hugo Simões",
  description: "My Profissional Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-300">{children}</body>
    </html>
  );
}
