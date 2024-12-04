import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex max-lg:flex-col min-h-screen w-full pt-10 bg-[url('/battle-with-brain.jpg')] p-[5%] items-center justify-between ">
      <div>
        <h1 className="text-8xl font-bold grido p-10">
          <p>Think,</p>
          <p>Create,</p>
          <p className="relative px-3 bg-[#fcc018] box inline-block">Solve</p>
        </h1>
        <p className="text-xl font-medium mt-5">
          Join our community of passionate learners, creators, and
          problem-solvers at ASTU.
        </p>
      </div>
      <div className="relative w-1/2 h-auto">
        <div className="bg-white text-blue-600 rounded-lg shadow-md py-4 px-6 inline-block">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Event</h2>
          <p className="text-sm md:text-base">
            <strong>Hackathon 2024</strong> – January 15, 2024
          </p>
          <a
            href="/events"
            className="text-blue-600 hover:text-purple-600 font-medium mt-2 block"
          >
            View All Events &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
