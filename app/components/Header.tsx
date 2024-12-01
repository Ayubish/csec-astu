import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-full absolute left-0 right-0 top-0 justify-between p-3">
      <div className="relative rounded w-10 h-10">
        <Image src="/csec-logo.jpg" alt="CSEC ASTU" fill={true} />
      </div>
      <div className="flex gap-3 text-xl ">
        <button>Home</button>
        <button>Divisions</button>
        <button>Events</button>
        <button>Leads</button>
        <button>Sponsors</button>
      </div>
      <button className="py-2 px-4 rounded-3xl text-black border">
        Join CSEC ASTU
      </button>
    </div>
  );
}
