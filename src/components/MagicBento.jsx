import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './MagicBento.css';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';

// Default data used if no 'cardData' prop is provided
const defaultCardData = [
  { color: '#060010', title: 'Analytics', description: 'Track user behavior', label: 'Insights' },
  { color: '#060010', title: 'Dashboard', description: 'Centralized data view', label: 'Overview' },
  { color: '#060010', title: 'Collaboration', description: 'Work together seamlessly', label: 'Teamwork' },
  { color: '#060010', title: 'Automation', description: 'Streamline workflows', label: 'Efficiency' },
  { color: '#060010', title: 'Integration', description: 'Connect favorite tools', label: 'Connectivity' },
  { color: '#060010', title: 'Security', description: 'Enterprise-grade protection', label: 'Protection' }
];

// Helper sub-components
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `position: absolute; width: 4px; height: 4px; border-radius: 50%; background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6); pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;`;
  return el;
};
const calculateSpotlightValues = radius => ({ proximity: radius * 0.5, fadeDistance: radius * 0.75 });
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;
  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({ children, className = '', disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false, onClick }) => {
  const cardRef = useRef(null);
  const handleInteraction = useCallback((event) => {
    const element = cardRef.current;
    if (!element || disableAnimations) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (event.type === 'click') {
      if (onClick) onClick(event);
      if (clickEffect) {
        const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
        const ripple = document.createElement('div');
        ripple.style.cssText = `position: absolute; width: ${maxDistance * 2}px; height: ${maxDistance * 2}px; border-radius: 50%; background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%); left: ${x - maxDistance}px; top: ${y - maxDistance}px; pointer-events: none; z-index: 1000;`;
        element.appendChild(ripple);
        gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
      }
    } else if (event.type === 'mousemove') {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      }
      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;
        gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
      }
    }
  }, [disableAnimations, onClick, clickEffect, enableTilt, enableMagnetism, glowColor]);
  const handleMouseEnter = useCallback(() => {
    if (enableTilt) gsap.to(cardRef.current, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
  }, [enableTilt]);
  const handleMouseLeave = useCallback(() => {
    if (enableTilt) gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
    if (enableMagnetism) gsap.to(cardRef.current, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
  }, [enableTilt, enableMagnetism]);
  return (
    <div ref={cardRef} className={`${className} particle-container`} style={{ ...style, position: 'relative', overflow: 'hidden' }} onClick={handleInteraction} onMouseMove={handleInteraction} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
};

const GlobalSpotlight = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
  const spotlightRef = useRef(null);
  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `position: fixed; width: 800px; height: 800px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(${glowColor}, 0.15) 0%, rgba(${glowColor}, 0.08) 15%, rgba(${glowColor}, 0.04) 25%, rgba(${glowColor}, 0.02) 40%, rgba(${glowColor}, 0.01) 65%, transparent 70%); z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;`;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;
    const handleMouseMove = e => {
      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;
      gridRef.current.querySelectorAll('.card').forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);
        minDistance = Math.min(minDistance, effectiveDistance);
        let glowIntensity = 0;
        if (effectiveDistance <= proximity) glowIntensity = 1;
        else if (effectiveDistance <= fadeDistance) glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });
      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      spotlightRef.current?.remove();
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);
  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (<div className="card-grid bento-section" ref={gridRef}>{children}</div>);

const MagicBento = ({
  cardData,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef(null);
  const navigate = useNavigate();
  const dataToRender = cardData || defaultCardData;

  // --- MODIFIED --- This is the corrected click handler logic
  const handleCardClick = (url) => {
    // Do nothing if there's no URL or it's a placeholder
    if (!url || url === '#') {
      return;
    }

    // Check if the URL is for an external site
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // Open external links in a new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal page navigation
      navigate(url);
    }
  };

  return (
    <>
      {enableSpotlight && (<GlobalSpotlight gridRef={gridRef} disableAnimations={disableAnimations} enabled={enableSpotlight} spotlightRadius={spotlightRadius} glowColor={glowColor}/>)}
      <BentoCardGrid gridRef={gridRef}>
        {dataToRender.map((card, index) => {
          const cardProps = { className: `card ${textAutoHide ? 'card--text-autohide' : ''} ${enableBorderGlow ? 'card--border-glow' : ''}`, style: { backgroundColor: card.color, '--glow-color': glowColor, cursor: card.url && card.url !== '#' ? 'pointer' : 'default' } };
          return enableStars ? (
            <ParticleCard key={index} {...cardProps} disableAnimations={disableAnimations} particleCount={particleCount} glowColor={glowColor} enableTilt={enableTilt} clickEffect={clickEffect} enableMagnetism={enableMagnetism} onClick={() => handleCardClick(card.url)}>
              <div className="card__header"><div className="card__label">{card.label}</div></div>
              <div className="card__content"><h2 className="card__title">{card.title}</h2><p className="card__description">{card.description}</p></div>
            </ParticleCard>
          ) : (
            <div key={index} {...cardProps} onClick={() => handleCardClick(card.url)}>
              <div className="card__header"><div className="card__label">{card.label}</div></div>
              <div className="card__content"><h2 className="card__title">{card.title}</h2><p className="card__description">{card.description}</p></div>
            </div>
          );
        })}
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;

