export default function HeroGpt() {
  return (
    <section className="bg-gradient-to-r h-screen grid items-center from-blue-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to CSEC ASTU
        </h1>
        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8">
          Empowering students in Computer Science and Engineering to innovate,
          collaborate, and excel.
        </p>
        {/* Upcoming Events */}
        <div className="bg-white text-blue-600 rounded-lg shadow-md py-4 px-6 inline-block">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Event</h2>
          <p className="text-sm md:text-base">
            <strong>Hackathon 2024</strong> – January 15, 2024
          </p>
          <a
            href="/events"
            className="text-blue-600 hover:text-purple-600 font-medium mt-2 block"
          >
            View All Events &rarr;
          </a>
        </div>
        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="#about-us"
            className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-blue-100 font-medium"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-3 ml-4 rounded-md shadow-md hover:bg-purple-700 font-medium"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
