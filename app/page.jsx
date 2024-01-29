import Image from "next/image";
import { Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex gap-14 flex-col">
      <div className="flex w-fit gap-3 items-center border rounded-3xl py-2 px-4">
        <HomeIcon size={16} />
        <p className="text-[12px]">INTRODUCE</p>
      </div>
      <p className="text-7xl leading-tight">
        Say Hi from <span className="text-red-600">Hugo</span>, <br />
        Web Developer
      </p>
      <p className="text-zinc-400 text-j">
        Hello and welcome to my website. <br/><br/>Here, you'll discover everything about
        my professional journey. Feel free to get to know me better. <br/><br/>I'm a
        junior web developer with a degree in computer science, actively seeking
        job opportunities. <br/><br/>I code beautifully simple things and i love what i
        do. Just simple like that! <br/>
        Thanks, see you soon.
      </p>
    </div>
  );
}
