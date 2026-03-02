import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  return (
    <div>
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About FlowerPlant
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Empowering plant enthusiasts worldwide with knowledge, tools, and community
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/obout.jpg"
                alt="FlowerPlant community gardeners"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Eye className="text-blue-600 mb-6 mx-auto" size={40} />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To create a world where everyone, regardless of experience level, can successfully 
                  grow and care for plants, fostering a deeper connection with nature and promoting 
                  sustainable living practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Target className="text-green-600 mb-6 mx-auto" size={40} />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, reliable, and comprehensive plant care resources that empower 
                  individuals to cultivate thriving indoor and outdoor gardens. We aim to simplify plant 
                  care through education and innovative tools.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Heart className="text-purple-600 mb-6 mx-auto" size={40} />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h2>
                <p className="text-gray-700 leading-relaxed">
                  FlowerPlant exists to bridge the gap between plant enthusiasts and expert knowledge. 
                  We believe that nurturing plants enriches lives, improves well-being, and creates 
                  greener, healthier communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}