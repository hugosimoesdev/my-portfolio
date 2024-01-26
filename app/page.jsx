import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Card from "@/components/Card";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="app">
      <Card />
      <div className="container">
        <Welcome />
        <About />
        <Project />
        <Contact />
      </div>
      <Nav />
    </main>
  );
}
