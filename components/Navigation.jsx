const Navigation = ({ href, title, icon }) => {
  return (
    <a
      href={href}
      className="flex gap-4 items-center p-2 hover:bg-zinc-600 w-full"
    >
      {icon}
      {title}
    </a>
  );
};

export default Navigation;
