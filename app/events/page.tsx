import { FaCalendarAlt, FaClock, FaHistory } from "react-icons/fa";

export default function EventsPage() {
  // Dummy data for events
  const weeklyEvents = [
    {
      title: "Algorithm Study Group",
      day: "Every Monday",
      time: "6:00 PM - 8:00 PM",
    },
    {
      title: "Cybersecurity Lab",
      day: "Every Wednesday",
      time: "5:00 PM - 7:00 PM",
    },
    {
      title: "Web Development Workshop",
      day: "Every Friday",
      time: "4:00 PM - 6:00 PM",
    },
  ];

  const upcomingEvents = [
    {
      title: "Hackathon 2024",
      date: "January 10, 2025",
      location: "Main Auditorium, ASTU",
      description: "A 48-hour hackathon for tackling real-world challenges.",
      image: "zoro.png",
    },
    {
      title: "Data Science Bootcamp",
      date: "January 20, 2025",
      location: "Room 305, Computer Science Building",
      description: "Learn the fundamentals of data analysis and visualization.",
      image: "/zoro.png",
    },
  ];

  const pastEvents = [
    {
      title: "Intro to Python Programming",
      date: "November 1, 2024",
      location: "Room 204, Computer Science Building",
      image: "zoro.png",
    },
    {
      title: "CTF Challenge: Cybersecurity Special",
      date: "October 15, 2024",
      location: "Innovation Lab, ASTU",
      image: "zoro.png",
    },
    {
      title: "AI and Ethics Seminar",
      date: "September 30, 2024",
      location: "Lecture Hall 2, ASTU",
      image: "/zoro.png",
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
                className="flex gap-5 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-2/5 h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{event.date}</p>
                  <p className="text-gray-500 mb-2">{event.location}</p>
                  <p className="text-gray-600">{event.description}</p>
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
                className="flex gap-5 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-2/5 h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{event.date}</p>
                  <p className="text-gray-500">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
