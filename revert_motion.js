const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto mb-20">',
    '<div className="text-center max-w-4xl mx-auto mb-20">'
);
code = code.replace(
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto mb-20">',
    '<div className="text-center max-w-4xl mx-auto mb-20" style={{opacity: 1}}>'
);
code = code.replace(
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end mb-20">',
    '<div className="flex flex-col md:flex-row justify-between items-end mb-20">'
);
code = code.replace(
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">',
    '<div className="text-center max-w-3xl mx-auto mb-20">'
);
code = code.replace(
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end mb-20">',
    '<div className="flex flex-col md:flex-row justify-between items-end mb-20">'
);

fs.writeFileSync('app/page.tsx', code);
console.log('Reverted broken motion tags');
