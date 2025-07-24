import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const starsRef = useRef();

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create regular stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = `star ${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
      }

      // Create shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 3 + 's';
        shootingStar.style.animationDuration = (3 + Math.random() * 2) + 's';
        starsContainer.appendChild(shootingStar);
      }
    };

    createStars();
  }, []);

  return (
    <div className="space-background">
      <div className="stars" ref={starsRef}></div>
    </div>
  );
};

export default SpaceBackground;