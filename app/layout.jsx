import "/styles/globals.css";
import Card from "@/components/Card";

export const metadata = {
  title: "Hugo Simões",
  description: "My Profissional Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Card />
          {children}
        </div>
      </body>
    </html>
  );
}
