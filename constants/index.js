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

export const navLinks = [
  {
    href: "/",
    title: "Home",
    icon: <HomeIcon width={20} strokeWidth={1.5} />,
  },
  {
    href: "/resume",
    title: "Resume",
    icon: <Briefcase width={20} strokeWidth={1.5} />,
  },
  {
    href: "/projects",
    title: "Projects",
    icon: <GanttChartSquare width={20} strokeWidth={1.5} />,
  },
  {
    href: "/contact",
    title: "Contact",
    icon: <Contact width={20} strokeWidth={1.5} />,
  },
];

export const socialLinks = [
  {
    href: "https://github.com/hugosimoesdev",
    icon: <Github width={15} strokeWidth={1} />,
  },
  {
    href: "https://twitter.com/hugosimoesdev",
    icon: <Twitter width={15} strokeWidth={1} />,
  },
  {
    href: "https://www.linkedin.com/in/hugosimoess/",
    icon: <Linkedin width={15} strokeWidth={1} />,
  },
  {
    href: "https://www.instagram.com/hugosimoes_",
    icon: <Instagram width={15} strokeWidth={1} />,
  },
];
