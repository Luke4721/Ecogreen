const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Imports
code = code.replace(
  "import ShaderImage from '@/components/ShaderImage';",
  "import AbstractConstruct from '@/components/AbstractConstruct';"
);
code = code.replace(
  "import LiveDataBackground from '@/components/LiveDataBackground';",
  "import StackingWasteGraph from '@/components/StackingWasteGraph';"
);

// 2. Services Array Update (Add type)
const oldArray = `[
              { title: 'E-Waste Management', img: '/services/1.jpg', icon: <MonitorPlay size={32}/>, color: 'from-emerald-400 to-green-600' },
              { title: 'Lithium Battery', img: '/services/2.jpg', icon: <Zap size={32}/>, color: 'from-blue-400 to-indigo-600' },
              { title: 'Plastic Waste', img: '/services/3.jpg', icon: <Droplets size={32}/>, color: 'from-teal-400 to-emerald-600' },
              { title: 'Green Metal Recovery', img: '/services/4.jpg', icon: <Factory size={32}/>, color: 'from-yellow-400 to-amber-600' }
            ]`;
const newArray = `[
              { title: 'E-Waste Management', type: 'ewaste', icon: <MonitorPlay size={32}/>, color: 'from-emerald-400 to-green-600' },
              { title: 'Lithium Battery', type: 'battery', icon: <Zap size={32}/>, color: 'from-blue-400 to-indigo-600' },
              { title: 'Plastic Waste', type: 'plastic', icon: <Droplets size={32}/>, color: 'from-teal-400 to-emerald-600' },
              { title: 'Green Metal Recovery', type: 'metal', icon: <Factory size={32}/>, color: 'from-yellow-400 to-amber-600' }
            ]`;
code = code.replace(oldArray, newArray);

// 3. ShaderImage -> AbstractConstruct
const oldImg = /<ShaderImage src=\{srv\.img\} \/>/g;
const newImg = `<div className="w-full h-full"><AbstractConstruct type={srv.type} /></div>`;
code = code.replace(oldImg, newImg);

// 4. LiveDataBackground -> StackingWasteGraph
code = code.replace(/<LiveDataBackground \/>/g, "<StackingWasteGraph />");

fs.writeFileSync('app/page.tsx', code);
console.log("Updated page.tsx for Phase 4!");
