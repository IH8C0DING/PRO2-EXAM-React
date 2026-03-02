import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-3">
            <MapPin className="text-green-400 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="text-gray-300 text-sm">
                123 Botanical Lane<br />
                Green City, 2345<br />
                Copenhagen, Denmark
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-3">
            <Mail className="text-green-400 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold mb-1">Email</p>
              <a 
                href="mailto:flowplant123@flowerplant2026.dk" 
                className="text-gray-300 text-sm"
              >
                flowplant123@flowerplant2026.dk
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-3">
            <Phone className="text-green-400 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold mb-1">Mobile</p>
              <a 
                href="tel:+452076765" 
                className="text-gray-300 text-sm"
              >
                +45 2076765
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FlowerPlant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}