import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="h-screen flex">
      <SideBar/>
      <main className="flex-1"></main>
    </div>
  );
}
