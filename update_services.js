const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// Add missing imports
code = code.replace(
  /import \{ Phone, CheckCircle2/,
  "import { Monitor, Battery, Recycle, FileText, Truck, BarChart3, Phone, CheckCircle2"
);

// Replace Services Grid
const oldServices = `              {[
                { name: 'E-Waste Management' },
                { name: 'Lithium Battery Recycling' },
                { name: 'Plastic Waste Recycling' },
                { name: 'Paper Recycling' },
                { name: 'Green Metal Recovery' },
                { name: 'EPR Consulting' },
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-50 shadow-md">
                    <div className="w-full h-full bg-green-100 flex items-center justify-center p-4">
                      {/* Generative fallback using gradient */}
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-300 to-green-100"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm max-w-[120px]">{service.name}</h3>
                </div>
              ))}`;

const newServices = `              {[
                { name: 'E-Waste Management', icon: Monitor },
                { name: 'Lithium Battery Recycling', icon: Battery },
                { name: 'Plastic Waste Recycling', icon: Recycle },
                { name: 'Paper Recycling', icon: FileText },
                { name: 'Green Metal Recovery', icon: Truck },
                { name: 'EPR Consulting', icon: BarChart3 },
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-32 h-32 rounded-full mb-4 border-4 border-green-50 shadow-md bg-white flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <service.icon size={48} strokeWidth={1.5} className="text-green-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm max-w-[120px]">{service.name}</h3>
                </div>
              ))}`;

code = code.replace(oldServices, newServices);

fs.writeFileSync('app/page.tsx', code);
console.log('Services updated.');
