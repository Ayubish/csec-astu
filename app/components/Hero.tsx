import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex max-lg:flex-col gap-5 min-h-screen w-full grido pt-10 px-[5%] bg-[url('/battle-with-brain.jpg')] items-center justify-between ">
      <div>
        <h1 className="text-8xl font-bold p-10">
          <p>Think,</p>
          <p>Create,</p>
          <p className="relative px-3 bg-[#fcc018] box inline-block">Solve</p>
        </h1>
        <p className="text-xl font-medium mt-5 max-w-[80%]">
          A community of passionate learners, creators, and problem-solvers at
          ASTU.
        </p>
        <button className="py-1 px-12 rounded-full mt-5 text-xl border border-blue-500 hover:bg-blue-500 hover:text-white">
          <p>Join Us</p>
        </button>
      </div>
      <div className="flex items-center relative wall">
        <Image
          src={"/battle-with-brain.jpg"}
          width={500}
          height={500}
          alt="Studentd-on-contest"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
