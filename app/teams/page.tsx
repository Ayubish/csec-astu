import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function TeamPage() {
  // Dummy data for team members
  const teamMembers = [
    {
      name: "John Doe",
      role: "President",
      image: "/zoro.png",
      social: {
        linkedin: "https://linkedin.com/in/john-doe",
        github: "https://github.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      image: "/zoro.png",
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/jane-smith",
      },
    },
    {
      name: "Alex Johnson",
      role: "Secretary",
      image: "/zoro.png",
      social: {
        github: "https://github.com/alexjohnson",
      },
    },
    {
      name: "Emily Carter",
      role: "Treasurer",
      image: "/zoro.png",
      social: {
        linkedin: "https://linkedin.com/in/emily-carter",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
          Our Executives
        </h1>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex gap-5 bg-white rounded-lg shadow-md overflow-hidden p-2"
            >
              <img
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
