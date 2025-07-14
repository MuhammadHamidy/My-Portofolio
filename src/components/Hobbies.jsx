// src/components/Hobbies.jsx
import React from 'react';

const hobbiesData = [
  // Contoh placeholder, tambahkan hobi Anda di sini
  { icon: '🎮', name: 'Gaming' },
  { icon: '📚', name: 'Reading' },
  { icon: '🎧', name: 'Listening to Music' },
];

const Hobbies = () => {
  return (
    <div> {/* Menghapus .section-card dari sini karena sudah di App.jsx */}
      <h2>Hobbies & Interests</h2>
      <div className="hobbies-grid">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <span className="icon">{hobby.icon}</span>
            <span>{hobby.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;