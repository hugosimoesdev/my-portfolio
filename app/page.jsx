import { Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center gap-8 mt-20">
      <div className="flex w-fit gap-3 border rounded-3xl py-2 px-4">
        <HomeIcon size={16} />
        <p className="text-xs uppercase">introduce</p>
      </div>
      <div className="flex flex-col gap-4 mx-16">
        <p className="text-7xl leading-tight max-lg:text-3xl">
          Say Hi from <span className="text-red-600">Hugo</span>, <br />
          Web Developer
        </p>
        <p className="text-zinc-400 text-j">
          Hello and welcome to my website. <br />
          <br />
          Here, you'll discover everything about my professional journey. Feel
          free to get to know me better. <br />
          <br />
          I'm a junior web developer with a degree in computer science, actively
          seeking job opportunities. <br />
          <br />I code beautifully simple things and i love what i do. Just
          simple like that! <br />
          Thanks, see you soon.
        </p>
      </div>
    </main>
  );
}
