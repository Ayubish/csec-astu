import {
  FaLaptopCode,
  FaProjectDiagram,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

export default function Divisions() {
  return (
    <section id="divisions" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
          Our Divisions
        </h2>
        {/* Divisions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Competitive Programming Division */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Competitive Programming
            </h3>
            <p className="text-gray-700">
              Focused on enhancing problem-solving skills through coding
              challenges, competitions, and workshops.
            </p>
            <a
              href="/divisions/competitive-programming"
              className="text-blue-600 hover:text-purple-600 mt-4 inline-block font-medium"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Development Division */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaProjectDiagram className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Development
            </h3>
            <p className="text-gray-700">
              Dedicated to building real-world applications, websites, and
              systems that serve the community and beyond.
            </p>
            <a
              href="/divisions/development"
              className="text-blue-600 hover:text-purple-600 mt-4 inline-block font-medium"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Cybersecurity Division */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Cybersecurity
            </h3>
            <p className="text-gray-700">
              Promotes awareness of security practices, ethical hacking, and
              protection against cyber threats.
            </p>
            <a
              href="/divisions/cybersecurity"
              className="text-blue-600 hover:text-purple-600 mt-4 inline-block font-medium"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Data Science Division */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Data Science
            </h3>
            <p className="text-gray-700">
              Focuses on data analysis, machine learning, and using data to
              derive meaningful insights and predictions.
            </p>
            <a
              href="/divisions/data-science"
              className="text-blue-600 hover:text-purple-600 mt-4 inline-block font-medium"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Capacity Building Division */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Capacity Building
            </h3>
            <p className="text-gray-700">
              Aims to develop skills in students through workshops, seminars,
              and training in various tech fields.
            </p>
            <a
              href="/divisions/capacity-building"
              className="text-blue-600 hover:text-purple-600 mt-4 inline-block font-medium"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
