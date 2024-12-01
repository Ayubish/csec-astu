import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex max-lg:flex-col min-h-screen w-full p-[5%] items-center justify-between ">
      <div>
        <h1 className="text-8xl font-bold grido p-10 pr-20">
          <p>Think,</p>
          <p>Create,</p>
          <p className="relative bg-[#fcc018] box inline-block">Solve</p>
        </h1>
        <p className="text-xl font-medium mt-5">
          Join our community of passionate learners, creators, and
          problem-solvers at ASTU.
        </p>
      </div>
      <div className="relative w-1/2 h-auto">
        <Image
          src={"/battle-with-brain.jpg"}
          layout="responsive"
          width={0}
          height={0}
          alt="battle-with-brain"
          className="relative object-contain"
        />
      </div>
    </div>
  );
}
