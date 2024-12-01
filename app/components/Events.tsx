import { FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

export default function Events() {
  const events = [
    {
      title: "Tech Talk: The Future of AI",
      date: "December 15, 2024",
      description:
        "A session about the potential impacts and challenges of AI on society.",
      link: "/events/tech-talk-ai",
    },
    {
      title: "Hackathon 2024",
      date: "January 10-12, 2025",
      description:
        "An intense 48-hour hackathon focused on solving real-world problems.",
      link: "/events/hackathon-2024",
    },
    {
      title: "Cybersecurity Awareness Workshop",
      date: "February 5, 2025",
      description:
        "Learn how to protect yourself from the latest cybersecurity threats.",
      link: "/events/cybersecurity-workshop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
          Upcoming Events
        </h2>

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4">
                <FaCalendarAlt className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {event.title}
              </h3>
              <p className="text-gray-700 mb-4">{event.date}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a
                href={event.link}
                className="text-blue-600 hover:text-purple-600 font-medium"
              >
                Learn More <FaInfoCircle className="inline" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
