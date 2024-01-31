import React from "react";
import { Briefcase } from "lucide-react";
import TimeLineItem from "@/components/TimeLineItem";
import ButtonDownload from "@/components/ButtonDownload";

const Resume = () => {
  return (
    <main className="container">
      <div className="flex w-fit gap-3 items-center border rounded-3xl py-2 px-4">
        <Briefcase size={16} />
        <p className="text-xs uppercase">Resume</p>
      </div>
      <p className="text-3xl max-lg:text-xl mx-16">
        Education & <span className="text-red-600">Experience</span>
      </p>
      <div className="flex flex-col justify-start items-center mx-12">
        <ol className="relative z-0 border-s border-gray-200 dark:border-gray-700">
          <TimeLineItem
            title="Founder & Full Stack Developer"
            date="Jul 2023 to Present"
            local="DigiSol"
            description="
            DigiSol is a digital solutions startup specializing in innovative design and advanced technology to enhance partner brands. I've been enganged in the roles of Project Manager and Full Stack Web Developer, focusing on creating user-friendly websites with ReactJS and Wordpress, and prioritizing User Experience."
          />
          <TimeLineItem
            title="Internship"
            date="Apr 2021 to Apr 2022"
            local="Cargill"
            description="
            I interned as a developer at Cargill's Trade & Structured Finance sector, using Java and Microsoft SQL Server for graphical interfaces and database queries. I collaborated with international teams in England, Mexico, India, and the United States, contributing to the company's global financial and risk management solutions in agricultural, food, financial, and energy sectors.
            "
          />
          <TimeLineItem
            title="Bachelor of Computer Science"
            date="Feb 2020 to Dec 2023"
            local="IFSP (Federal Institute of São Paulo)"
          />
        </ol>
      </div>
      <ButtonDownload />
    </main>
  );
};

export default Resume;
