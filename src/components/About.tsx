
const AboutPage = () => {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold font-serif text-cyan-900 dark:text-white">
              About Us
            </h1>
            <p className="mt-4 text-cyan-600 dark:text-cyan-400">
              Get to know more about our journey and mission.
            </p>
          </header>
  
          {/* Content Section */}
          <section className="space-y-8">
            {/* Mission Statement */}
            <div>
              <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-200">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                At <span className="font-semibold">Future Syntax</span>, our mission is to empower readers with insightful articles on Artificial Intelligence, Information Technology, and the ever-evolving digital world. 
                We aim to create a platform where innovation meets knowledge.
              </p>
            </div>
  
            {/* Our Story */}
            <div>
              <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-200">
                Our Story
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Founded in 2024, <span className="font-semibold">Future Syntax</span> started as a small project fueled by a passion for technology. 
                Over time, it has grown into a trusted resource for individuals seeking clarity and depth on topics like AI breakthroughs, IT trends, and technological advancements.
              </p>
            </div>
  
            {/* Values */}
            <div>
              <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-200">
                What We Believe
              </h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Knowledge should be accessible to everyone.</li>
                <li>Technology is a force for good when used responsibly.</li>
                <li>Fostering curiosity drives innovation and creativity.</li>
              </ul>
            </div>
          </section>
  
          {/* Team Section (Optional) */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-cyan-800 font-sans dark:text-cyan-200 text-center">
              Meet the Team
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {/* Example Team Members */}
              <div className="text-center">
                {/* <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full"></div> */}
                <h3 className="mt-4 text-lg font-semibold text-cyan-900 dark:text-white">
                  Areeba
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Founder & Developer
                </p>
              </div>
              <div className="text-center">
                {/* <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full"></div> */}
                <h3 className="mt-4 text-lg font-semibold text-cyan-900 dark:text-white">
                  John Doe
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content Writer
                </p>
              </div>
            </div>
          </section>
  
          {/* Call to Action */}
          <footer className="mt-16 text-center">
            <p className="text-gray-700 dark:text-gray-400">
              Want to know more? <a href="/Contact" className="text-blue-500 hover:underline">Contact us</a>.
            </p>
          </footer>
        </div>
      </div>
    )
  }
  
  export default AboutPage
  