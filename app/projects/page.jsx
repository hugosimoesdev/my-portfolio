import React from "react";
import { GanttChartSquare } from "lucide-react";

const Projects = () => {
  return (
    <main className="container">
      <div className="flex w-fit gap-3 items-center border rounded-3xl py-2 px-4">
        <GanttChartSquare size={16} />
        <p className="text-xs uppercase">Projects</p>
      </div>
    </main>
  );
};

export default Projects;
P