import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getPages } from '../services';

const Categories = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages().then((newPages) => {
      SetPages(newPages);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Pages</h3>
      {pages.map((category, index) => (
        <Link key={index} href={`/page/${page.slug}`}>
          <span className={`cursor-pointer block ${(index === pages.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{page.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Pages;
