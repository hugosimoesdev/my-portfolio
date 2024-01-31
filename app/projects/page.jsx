import React from "react";
import { GanttChartSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <main className="container">
      <div className="flex w-fit gap-3 border rounded-3xl py-2 px-4">
        <GanttChartSquare size={16} />
        <p className="text-xs uppercase">Projects</p>
      </div>
      <div className="flex flex-col mt-8">
        <div className="container-project">
          <Image src="/no-image.jpg" width={130} height={100} alt="No image" />
          <Link href="/resume" className="flex-1 h-[100px] p-3">
            <p className="text-lg">Demo Project 1</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet elementum sem, eu consectetur velit. Quisque ac ultricies
              erat.
            </p>
          </Link>
        </div>
        <span className="divider " />
        <div className="w-[800px] p-3 flex item-center justify-center hover:scale-105 hover:duration-300 hover:bg-zinc-700">
          <Image src="/no-image.jpg" width={130} height={100} alt="No image" />
          <Link href="/resume" className="flex-1 h-[100px] p-3">
            <p className="text-lg">Demo Project 2</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet elementum sem, eu consectetur velit. Quisque ac ultricies
              erat.
            </p>
          </Link>
        </div>
        <span className="divider" />
        <div className="w-[800px] p-3 flex item-center justify-center hover:scale-105 hover:duration-300 hover:bg-zinc-700">
          <Image src="/no-image.jpg" width={130} height={100} alt="No image" />
          <Link href="/resume" className="flex-1 h-[100px] p-3">
            <p className="text-lg">Demo Project 3</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet elementum sem, eu consectetur velit. Quisque ac ultricies
              erat.
            </p>
          </Link>
        </div>
        <span className="divider" />
      </div>
    </main>
  );
};

export default Projects;
