import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Page Background Wrapper */}
      <div className="page-background p-8 flex justify-center items-start">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
          {/* Page Title */}
          <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">About CredifAi</h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            CredifAi is an AI-powered platform dedicated to detecting misinformation across 
            multiple sources including text, images, videos, and links. Our mission is to 
            promote truth and empower users to make informed decisions in the digital world.
          </p>

          {/* Sections Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Vision */}
            <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Vision</h3>
              <p className="text-gray-700 text-sm">
                To create a world where reliable information is easily accessible and misinformation is minimized.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-green-600">Mission</h3>
              <p className="text-gray-700 text-sm">
                To provide advanced AI tools that detect, analyze, and flag misinformation from multiple sources in real-time.
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">Features</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Text credibility analysis</li>
                <li>Image verification</li>
                <li>Video authenticity check</li>
                <li>Quick reporting & alerts</li>
                  <li>Current News Updates</li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              CredifAi is continuously evolving to adapt to new challenges in the fight against misinformation. 
              Join us in promoting a smarter, safer digital world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
