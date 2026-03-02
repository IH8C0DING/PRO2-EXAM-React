import { predefinedPlants } from '../data/predefinedPlants';
import { PlantCard } from '../components/PlantCard';
import { Leaf, Droplets, Sun } from 'lucide-react';

export function Home() {
  return (
    <div>
      <section className="relative bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to FlowerPlant
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Your trusted community for plant care and gardening. Whether you're a seasoned gardener 
                or just starting your green journey, FlowerPlant helps you nurture and grow your indoor 
                and outdoor plant collection with expert guidance and care tips.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="Indoor plants in natural light"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plant Care Basics
          </h2>
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Sun className="text-yellow-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Light Requirements</h3>
              <p className="text-gray-700">
                Different plants need different amounts of light. Always check your plant's specific needs.
              </p>
            </div>

            <div className="text-center">
              <Droplets className="text-blue-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Watering Schedule</h3>
              <p className="text-gray-700">
                Most plants prefer to dry out slightly between waterings. Check the soil moisture before watering.
              </p>
            </div>

            <div className="text-center">
              <Leaf className="text-green-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Soil & Nutrients</h3>
              <p className="text-gray-700">
                Well-draining soil prevents root rot. Regular fertilizing during growing season keeps plants thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="plant-guides" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plant Care Guides
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {predefinedPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}