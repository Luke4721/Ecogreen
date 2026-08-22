const fs = require('fs');

let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

const newSection = `
        {/* Strategic Locations Section */}
        <div className="w-full max-w-5xl mx-auto mt-16 pt-12 border-t border-gray-200/60 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Strategic Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategically positioned to manage high-volume enterprise logistics. Our dual-facility infrastructure combines massive processing capacity with unparalleled operational efficiency, ensuring rapid, secure, and fully compliant material recovery for our partners across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mathura Facility */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border-b-4 border-green-500 flex flex-col h-full">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">Mathura Facility</h3>
                <p className="text-green-400 font-bold text-sm tracking-wider uppercase mb-4">PLANT 1</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Khasra No.193/1, 199/1 and 199/2, Noorpur Bangar Bajna,<br/>
                  Tehsil Maant, Mathura, Uttar Pradesh, 281201
                </p>
              </div>
              <div className="h-48 w-full bg-gray-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113045.09700342939!2d77.58169145!3d27.702008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39735d10d9f0f865%3A0x6b8bc795dd33a41e!2sBajna%2C%20Uttar%20Pradesh%20281201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
                ></iframe>
              </div>
            </div>

            {/* Greater Noida Facility */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border-b-4 border-green-500 flex flex-col h-full">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">Greater Noida Facility</h3>
                <p className="text-green-400 font-bold text-sm tracking-wider uppercase mb-4">PLANT 2 & REGISTERED OFFICE</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  B-036, 1 EXTENTION, KASNA ECOTECH,<br/>
                  Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201308
                </p>
              </div>
              <div className="h-48 w-full bg-gray-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56077.92556531398!2d77.49887195!3d28.4687574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1b777a83d47%3A0xc3cfc3143c4a22b!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
`;

code = code.replace('</main>', newSection + '\n      </main>');

fs.writeFileSync('app/request-quote/page.tsx', code);
console.log('Appended successfully');
