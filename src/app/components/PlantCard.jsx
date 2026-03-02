import { Droplets, Sun, Sprout } from 'lucide-react';

export function PlantCard({ plant }) {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-600';
      case 'Intermediate':
        return 'text-yellow-600';
      case 'Expert':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {plant.imageUrl && (
        <img 
          src={plant.imageUrl} 
          alt={plant.commonName}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{plant.commonName}</h3>
          <p className="text-sm italic text-gray-600">{plant.scientificName}</p>
          <p className={`text-sm font-medium mt-1 ${getLevelColor(plant.level)}`}>
            {plant.level}
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Sun className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-gray-700">Light</p>
              <p className="text-sm text-gray-600">{plant.light}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Droplets className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-gray-700">Watering</p>
              <p className="text-sm text-gray-600">{plant.watering}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Sprout className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-gray-700">Soil</p>
              <p className="text-sm text-gray-600">{plant.soil}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}