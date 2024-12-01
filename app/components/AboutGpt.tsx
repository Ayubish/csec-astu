import { FaBullhorn, FaEye, FaHandHoldingHeart } from "react-icons/fa";

export default function AboutGpt() {
  return (
    <section id="about-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
          About Us
        </h2>
        {/* Mission, Vision, and Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaBullhorn className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Mission
            </h3>
            <p className="text-gray-700">
              To inspire innovation, foster collaboration, and equip students
              with the skills and knowledge needed to excel in the dynamic
              fields of computer science and engineering.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaEye className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Vision
            </h3>
            <p className="text-gray-700">
              To be a leading student community at ASTU, driving technological
              advancement and empowering students to create impactful solutions
              for global challenges.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <FaHandHoldingHeart className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Values
            </h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>
                Innovation: We embrace creativity and encourage out-of-the-box
                thinking.
              </li>
              <li>
                Collaboration: We believe in teamwork and the power of shared
                knowledge.
              </li>
              <li>
                Excellence: We strive for the highest standards in all that we
                do.
              </li>
              <li>
                Integrity: We act with honesty and uphold strong ethical
                principles.
              </li>
              <li>
                Diversity: We value different perspectives and welcome everyone
                with a passion for learning.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
