export default function About() {
  return (
    <div className="w-full container mx-auto p-[5%]">
      <div className="text-center">
        <p className="relative inline-block mb-5 text-white text-2xl font-bold box px-0 py-1 bg-[#fcc018]">
          Who We Are
        </p>
      </div>
      <p>
        Computer Science and Engineering Club at ASTU (CSEC ASTU) is a
        student-driven intiative dedicated to advancing knowledge, fostering
        innovation, and building practical skills in the field of computer
        science and software engineering. Our Mission is to inspire creativity,
        enocurage collaboration, and empoer students to shape the future of
        technology.
      </p>

      {/* Mission Vision and Values */}
      <div className="flex gap-5 shadow-xl">
        <div className="bg-[#fff] p-5 box w-1/3 relative rounded-lg ">
          <p className="text-center text-5xl font-bold">M</p>
          <p className="border-b text-2xl py-3 font-bold text-center">
            Our Mission
          </p>
          <p className="p-2">
            "To inspire innovation, foster collaboration, and equip students
            with the skills and knowledge needed to excel in the dynamic fields
            of computer science and engineering."
          </p>
        </div>

        <div className="bg-[#fff] p-5 box w-1/3">
          <p className="text-center text-5xl font-bold">Q</p>
          <p className="border-b text-2xl py-3 font-bold text-center">
            Our Vision
          </p>
          <p>
            Our vision is to become a leading hub for the next generation of
            tech leaders, fostering expertise in competitive programming,
            cybersecurity, data science, and development.
          </p>
        </div>
        <div className="bg-[#fff] p-5 box w-1/3">
          <p className="text-center text-5xl font-bold">V</p>
          <p className="border-b text-2xl py-3 font-bold text-center">Values</p>
          <p>
            <b>Innovation:</b> We embrace creativity and encourage
            out-of-the-box thinking.
            <br />
            <b>Collaboration:</b> We believe in teamwork and the power of shared
            knowledge.
            <br />
            <b>Excellence:</b> We strive for the highest standards in all that
            we do.
            <br />
            <b>Integrity:</b> We act with honesty and uphold strong ethical
            principles.
            <br />
            <b>Diversity:</b> We value different perspectives and welcome
            everyone with a passion for learning.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
