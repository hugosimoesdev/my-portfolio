import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="flex gap-[10px] item-center light-border">
        <Image src="/icons/home.svg" width={16} height={16} />
        <p className="text-[12px]">INTRODUCE</p>
      </div>
      <p className="text-[78px] leading-[90px]">
        Say Hi from <span className="text-red-600">Hugo</span>, <br />
        Web Developer
      </p>
      <p className="text-zinc-500">
        I code beautifully simple things and i love what i do.
        <br />
      Just simple like that!
      </p>
    </section>
  );
};

export default Welcome;
