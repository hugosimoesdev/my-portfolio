import React from "react";

const TimeLineItem = ({ date, title, description, local }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-zinc-50"></div>
      <h3 className="text-xl font-semibold text-zinc-300">{title}</h3>
      <time className="mb-1 text-sm font-bold leading-none text-zinc-500">
        {date} at {local}
      </time>
      <p className="mb-4 text-sm text-justify text-zinc-300 ">{description}</p>
    </li>
  );
};

export default TimeLineItem;
