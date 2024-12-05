import React from "react";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaBriefcase,
  FaAward,
  FaUsers,
} from "react-icons/fa";

export default function WhyJoin() {
  const benefits = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-blue-500" />,
      title: "Skill Development",
      description:
        "Gain hands-on experience through tutorials, contests, and hackathons.",
    },
    {
      icon: <FaHandshake size={40} className="text-green-500" />,
      title: "Networking",
      description:
        "Connect with mentors, peers, and industry professionals to expand your network.",
    },
    {
      icon: <FaBriefcase size={40} className="text-indigo-500" />,
      title: "Career Advancement",
      description:
        "Enhance your resume with real-world projects and competitions.",
    },
    {
      icon: <FaUsers size={40} className="text-yellow-500" />,
      title: "Leadership Opportunities",
      description:
        "Lead teams and projects to build essential leadership skills.",
    },
    {
      icon: <FaAward size={40} className="text-red-500" />,
      title: "Recognition",
      description:
        "Earn awards and leaderboard recognition for your achievements.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-8" id="benefits">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Why Join CSEC ASTU?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial Carousel */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold mb-6">What Our Members Say</h3>
        <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory px-4">
          <div className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-lg snap-center">
            <p className="italic">
              CSEC ASTU has completely transformed my career journey. From the
              hands-on contests to the supportive network, I feel empowered!
            </p>
            <p className="mt-4 font-semibold">- John Doe</p>
          </div>
          <div className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-lg snap-center">
            <p className="italic">
              I’ve gained invaluable experience, improved my skills, and built
              meaningful connections.
            </p>
            <p className="mt-4 font-semibold">- Jane Smith</p>
          </div>
          <div className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-lg snap-center">
            <p className="italic">
              CSEC ASTU’s hackathons and leadership opportunities have taken my
              growth to the next level.
            </p>
            <p className="mt-4 font-semibold">- Alex Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
}
