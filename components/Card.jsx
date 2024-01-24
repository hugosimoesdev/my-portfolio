import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="card">
      <div className="flex gap-[40px] items-center">
        <p className="logo">Hugo</p>
        <p className="text-[14px] text-end">
          Web & Mobile <br /> Developer
        </p>
      </div>
      <Image src="/hugo.jpg" width={300} height={150} className="rounded-3xl" />
      <div className="text-center text-[16px]">
        <p>hugosimoescontato@gmail.com</p>
        <p>Based in São Paulo, BR</p>
      </div>
      <p className="text-zinc-500 text-[12px] text-center">
        © 2024 Hugo, All Rights Reserved
      </p>
      <div className="flex gap-6 items-center justify-center">
        <Image src="/icons/github.svg" width={30} height={30} />
        <Image src="/icons/linkedin.svg" width={40} height={40} />
        <Image src="/icons/twitter.svg" width={30} height={30} />
        <Image src="/icons/instagram.svg" width={30} height={30} />
      </div>
    </div>
  );
};

export default Card;
