// src/components/Language.jsx
import React from 'react';

const languages = [
  // Contoh placeholder, tambahkan data bahasa Anda di sini
  { name: 'Indonesian', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
];

const Language = () => {
  return (
    <div> {/* Menghapus .section-card dari sini karena sudah di App.jsx */}
      <h2>Language</h2>
      <ul className="language-list">
        {languages.map((lang, index) => (
          <li key={index} className="language-item">
            <span className="language-name">{lang.name}</span>
            <span className="level">{lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;