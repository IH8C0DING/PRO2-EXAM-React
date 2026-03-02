import { useState, useEffect } from 'react';
import { PlantCard } from '../components/PlantCard';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

const STORAGE_KEY = 'flowerplant-my-plants';

export function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlant, setEditingPlant] = useState(null);
  const [formData, setFormData] = useState({
    commonName: '',
    scientificName: '',
    light: '',
    watering: '',
    soil: '',
    level: 'Beginner',
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedPlants = JSON.parse(stored);
        setPlants(parsedPlants);
      } catch {
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    let filtered = plants;

    if (filterLevel !== 'all') {
      filtered = filtered.filter(plant => plant.level === filterLevel);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(plant =>
        plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPlants(filtered);
  }, [plants, filterLevel, searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.commonName.trim()) {
      return;
    }

    if (editingPlant) {
      setPlants(plants.map(p => p.id === editingPlant.id ? { ...formData, id: editingPlant.id } : p));
    } else {
      const newPlant = {
        ...formData,
        id: Date.now().toString(),
      };
      setPlants([...plants, newPlant]);
    }

    resetForm();
  };

  const handleEdit = (plant) => {
    setEditingPlant(plant);
    setFormData({
      commonName: plant.commonName,
      scientificName: plant.scientificName,
      light: plant.light,
      watering: plant.watering,
      soil: plant.soil,
      level: plant.level,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setPlants(plants.filter(p => p.id !== id));
  };

  const resetForm = () => {
    setFormData({
      commonName: '',
      scientificName: '',
      light: '',
      watering: '',
      soil: '',
      level: 'Beginner',
    });
    setEditingPlant(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Plant Collection</h1>
          <p className="text-gray-600 text-lg">
            Manage your personal plant collection. Add, edit, and track all your plants in one place.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <Label htmlFor="search">Search Plants</Label>
              <Input
                id="search"
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="w-48">
              <Label htmlFor="filter">Filter by Level</Label>
              <Select value={filterLevel} onValueChange={setFilterLevel}>
                <SelectTrigger id="filter" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-green-600" onClick={() => setEditingPlant(null)}>
                  <Plus className="mr-2" size={20} />
                  Add Plant
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingPlant ? 'Edit Plant' : 'Add New Plant'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="commonName">Common Name *</Label>
                      <Input
                        id="commonName"
                        value={formData.commonName}
                        onChange={(e) => setFormData({ ...formData, commonName: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="scientificName">Scientific Name</Label>
                      <Input
                        id="scientificName"
                        value={formData.scientificName}
                        onChange={(e) => setFormData({ ...formData, scientificName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="light">Light Requirements</Label>
                    <Input
                      id="light"
                      value={formData.light}
                      onChange={(e) => setFormData({ ...formData, light: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="watering">Watering Schedule</Label>
                    <Input
                      id="watering"
                      value={formData.watering}
                      onChange={(e) => setFormData({ ...formData, watering: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="soil">Soil Type</Label>
                    <Input
                      id="soil"
                      value={formData.soil}
                      onChange={(e) => setFormData({ ...formData, soil: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="level">Difficulty Level</Label>
                    <Select
                      value={formData.level}
                      onValueChange={(value) => setFormData({ ...formData, level: value })}
                    >
                      <SelectTrigger id="level">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1 bg-green-600">
                      {editingPlant ? 'Update Plant' : 'Add Plant'}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {filteredPlants.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="max-w-md mx-auto">
              {plants.length === 0 ? (
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    No plants yet
                  </h3>
                  <p className="text-gray-600">
                    Start building your plant collection by adding your first plant.
                  </p>
                </>
              ) : (
                <>
                  <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Plus className="text-gray-400" size={48} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    No plants match your filters
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <div key={plant.id} className="relative">
                <PlantCard plant={plant} />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleEdit(plant)}
                    className="bg-white shadow-md"
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(plant.id)}
                    className="shadow-md"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}