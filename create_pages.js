const fs = require('fs');
['business-solutions', 'about-us', 'sustainability', 'careers', 'request-quote'].forEach(page => {
  const content = `import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 capitalize text-gray-900">${page.replace('-', ' ')}</h1>
      <p className="text-gray-600 mb-8">This page is under construction. More data will be added soon.</p>
      <Link href="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-medium">
        Go Back Home
      </Link>
    </div>
  );
}`;
  fs.writeFileSync('app/' + page + '/page.tsx', content);
});
