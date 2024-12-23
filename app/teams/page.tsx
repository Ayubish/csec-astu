import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function TeamPage() {
  // Dummy data for team members
  const teamMembers = [
    {
      name: "Kiya Kebe",
      role: "President",
      image: "/kiya-kebe-2024.jpg",
      social: {
        linkedin: "https://linkedin.com/in/kiyakebe",
        github: "https://github.com/kiyakebe",
      },
    },
    {
      name: "Nebiyu Musbah",
      role: "Vice President",
      image: "/nebiyu-musbah-2024.jpg",
      social: {
        github: "https://github.com/neba378",
        linkedin: "https://linkedin.com/in/nebiyu-musbah",
      },
    },
    {
      name: "Abdi Esayas",
      role: "Competetive Programming Dividion Head",
      image: "/abdi-esayas-2024.jpg",
      social: {
        github: "https://github.com/abdiesu04",
        linkedin: "https://linkedin.com/in/abdiesu04",
        twitter: "https://twitter.com/abdiesu04",
      },
    },
    {
      name: "Fasil Hawulite",
      role: "Development Division Head",
      image: "/fasil-hawulite-2024.jpg",
      social: {
        github: "https://github.com/fasill",
        twitter: "https://twitter.com/fasilhawultie",

        linkedin: "https://linkedin.com/in/fasil-hawultie",
      },
    },
    {
      name: "Abdulaziz Isa",
      role: "Capacity Building Division Head",
      image: "/abdulaziz-isa-2024.jpg",
      social: {
        github: "https://github.com/abdulaziz-isa",
        linkedin: "https://www.linkedin.com/in/abdulaziz-isa-1696b027a",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
          Our Executives
        </h1>
        {/* Navigate year */}
        <div className="flex p-3 max-w-96 justify-between items-center gap-10 justify-self-center text-xl">
          <FaAngleLeft />
          <p>2024/2025</p>
          <FaAngleRight />
        </div>
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex gap-5 bg-white rounded-lg shadow-md overflow-hidden p-2"
            >
              <Image
                width={300}
                height={300}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                {/* Social Media Links */}
                <div className="flex gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
