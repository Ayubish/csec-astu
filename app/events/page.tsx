import Image from "next/image";
import { FaCalendarAlt, FaClock, FaHistory } from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

export default function EventsPage() {
  // Dummy data for events
  const weeklyEvents = [
    {
      title: "Weekly Contest",
      day: "Every Tuesday",
      time: "8:00 PM - 10:00 PM",
    },
    {
      title: "Contest Analysis",
      day: "Every Wednesday",
      time: "8:00 PM - 10:00 PM",
    },
    {
      title: "Tutorial",
      day: "Every Saturday",
      time: "2:00 PM - 4:00 PM",
    },
  ];

  const upcomingEvents = [
    {
      title: "CTF Night",
      date: "December 09, 2024",
      time: "07 :00 PM",
      location: "B508, R10, ASTU",
      description:
        "Are you ready to put your hacking skills to the test and solve the challenges? Join us for a CTF Night exclusively for all ASTU students! 🔐✨",
      image: "/ctf-night-dec-2024.jpg",
    },
    // {
    //   title: "Data Science Bootcamp",
    //   date: "January 20, 2025",
    //   location: "Room 305, Computer Science Building",
    //   description: "Learn the fundamentals of data analysis and visualization.",
    //   image: "/zoro.png",
    // },
  ];

  const pastEvents = [
    {
      title: "Ace The A2SV Interview",
      date: "November 25, 2024",
      description:
        "Join us this Monday, Nov 25, at 1:30 PM LT for insider tips and expert advice from Fekede Alamayehu — former CPD member and now the Head of Education at A2SV!",

      location: "Block 508, R10",
      image: "/ace-a2sv-interview-nov-2024.jpg",
    },
    {
      title: "🚀 Data Deep Dive: A Seminar with Meba",
      date: "November 16, 2024",
      description:
        "Meba, our former member and CSEC ASTU executive, will walk us through her incredible journey in data science — from her Bachelor’s studies 🏫 to her Master’s in Data Science 🎓 and the real-world job market 💼.",
      location: "Block 508, R10",
      image: "/data-deep-dive-nov-2024.jpg",
    },
    {
      title: "Hack The Box Meetup: Adama, ET Edition",
      date: "November 2, 2024",
      description:
        "We’re thrilled to invite you to an exclusive Hack The Box Meetup held in Adama City at ASTU Hosted by Hack The Box, in collaboration with Menas Cyber Solutions and CSEC ASTU Cybersecurity Division.",
      location: "Block 508, R10",
      image: "/hack-the-box-nov-2024.jpg",
    },
    {
      title: "Eye-Opening Seminar on Data Science 101 with ZINDI! 📊✨",
      date: "October 31, 2024",
      description:
        "Discover the World of Data Science, AI, and Machine Learning – Don’t miss this opportunity to learn the essentials and get your questions answered by experts from ZINDI! ",
      location: "Block 508, R10",
      image: "/data-science-seminar-oct-2024.jpg",
    },
    {
      title: "Seminar with UI Expert Naol Chala! 🎨✨",
      date: "October 24, 2024",
      description:
        "Level Up Your Design & UI Skills – Don't miss this chance to learn from the best! Naol Chala will be sharing pro tips, design insights, and best practices to take your UI skills to the next level.  ",
      location: "Block 508, R10",
      image: "/seminar-with-ui-expert-oct-2024.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
          Events
        </h1>

        {/* Weekly Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaClock className="mr-3 text-blue-600" /> Weekly Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-700">{event.day}</p>
                <p className="text-gray-500">{event.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCalendarAlt className="mr-3 text-blue-600" /> Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex max-md:flex-col gap-2 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  width={500}
                  height={500}
                  src={event.image}
                  alt={event.title}
                  className="w-2/5 max-md:w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {event.date}, {event.time}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-gray-700 pt-2 mt-2 border-t mb-2 flex gap-2 items-center">
                    <FaLocationDot />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaHistory className="mr-3 text-blue-600" /> Past Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="flex max-md:flex-col gap-2 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  width={500}
                  height={500}
                  src={event.image}
                  alt={event.title}
                  className="w-2/5 max-md:w-full h-auto object-cover"
                />
                <div className="p-6 pt-3">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-gray-700 pt-2 mt-2 border-t mb-2 flex gap-2 items-center">
                    <FaLocationDot />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
