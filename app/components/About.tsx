import { FaHandshake, FaUsersGear } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";

export default function About() {
  return (
    <div className="p-[5%]">
      <div className="text-center">
        <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
          Who We Are
        </p>
      </div>

      <p className="max-w-[900px] mx-auto">
        Computer Science and Engineering Club at ASTU (CSEC ASTU) is a
        student-driven intiative dedicated to advancing knowledge, fostering
        innovation, and building practical skills in the field of computer
        science and software engineering. Our Mission is to inspire creativity,
        enocurage collaboration, and empoer students to shape the future of
        technology.
      </p>

      {/* Mission Vision and Values */}
      <div className="grid grid-cols-3 max-lg:grid-cols-1 justify-between gap-5 mt-5">
        <div className="bg-white bg-opacity-70 backdrop:blur-lg border border-[rgba(255,255,255, 0.3)] p-5 rounded-lg ">
          <p className="p-1 rounded-full inline-block mx-auto text-center justify-self-center bg-gradient-to-br from-purple-500 to-green-500">
            <FaUsersGear
              size={50}
              className="text-center justify-self-center text-blue-500 bg-white rounded-full p-2"
            />
          </p>
          <p className="border-b text-2xl py-3 font-bold text-center">
            Our Mission
          </p>
          <p className="p-2">
            To inspire innovation, foster collaboration, and equip students with
            the skills and knowledge needed to excel in the dynamic fields of
            computer science and engineering.
          </p>
        </div>

        <div className="bg-[#fff] p-5">
          <GiLightBulb
            size={50}
            className="text-center justify-self-center text-indigo-500"
          />
          <p className="border-b text-2xl py-3 font-bold text-center">
            Our Vision
          </p>
          <p>
            Our vision is to become a leading hub for the next generation of
            tech leaders, fostering expertise in competitive programming,
            cybersecurity, data science, and development.
          </p>
        </div>

        <div className="bg-[#fff] p-5">
          <FaHandshake
            size={50}
            className="text-center justify-self-center text-yellow-500"
          />
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
          </p>
        </div>
      </div>
    </div>
  );
}
