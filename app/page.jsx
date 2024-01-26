import Image from "next/image";
import {
  Home as HomeIcon,
  Briefcase,
  GanttChartSquare,
  Contact,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex">
      <aside className="w-64 border-r">
        <div className="flex-col">
          <div className="flex flex-1 flex-col items-center gap-5 p-4 mx-2">
            <div className="flex items-center justify-between w-full">
              <p className="font-bold text-3xl">Hugo</p>
              <p className="text-sm text-end">Web Developer</p>
            </div>
            <Image
              src="/hugo.jpg"
              width={200}
              height={50}
              className="rounded-3xl"
            />
          </div>
          <nav className="flex flex-col items-start justify-center mx-4 gap-2 text-sm">
            <a
              href=""
              className="flex gap-4 items-center p-2 hover:bg-zinc-600 w-full"
            >
              <HomeIcon width={20} strokeWidth={1.5} />
              Home
            </a>
            <a
              href=""
              className="flex gap-4 items-center p-2 hover:bg-zinc-600 w-full"
            >
              <Briefcase width={20} strokeWidth={1.5} />
              Resume
            </a>
            <a
              href=""
              className="flex gap-4 items-center p-2 hover:bg-zinc-600 w-full"
            >
              <GanttChartSquare width={20} strokeWidth={1.5} />
              Projects
            </a>
            <a
              href=""
              className="flex gap-4 items-center p-2 hover:bg-zinc-600 w-full"
            >
              <Contact width={20} strokeWidth={1.5} />
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center justify-between mt-20 mx-7">
          <Link
            href="https://github.com/hugosimoesdev"
            className="border rounded-full px-3 py-2 hover:bg-zinc-600"
          >
            <Github width={15} strokeWidth={1} />
          </Link>
          <Link
            href="https://twitter.com/hugosimoesdev"
            className="border rounded-full px-3 py-2 hover:bg-zinc-600"
          >
            <Twitter width={15} strokeWidth={1} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hugosimoess/"
            className="border rounded-full px-3 py-2 hover:bg-zinc-600"
          >
            <Linkedin width={15} strokeWidth={1} />
          </Link>
          <Link
            href="https://www.instagram.com/hugosimoes_"
            className="border rounded-full px-3 py-2 hover:bg-zinc-600"
          >
            <Instagram width={15} strokeWidth={1} />
          </Link>
        </div>
      </aside>
      <main className="flex-1">main</main>
    </div>
  );
}
