import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './GlareHover.css';

const GlareHover = ({
  children,
  width = 'auto',
  height = 'auto',
  background = 'transparent',
  hoverBackground = 'rgba(255, 255, 255, 0.1)', // New prop
  borderRadius = '8px',
  borderColor = 'rgba(255, 255, 255, 0.2)',
  glowColor = '132, 0, 255', // Default glow color
  shadowColor = 'rgba(132, 0, 255, 0.15)', // New prop
  disableAnimations = false // New prop for mobile disable
}) => {
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || disableAnimations || isMobile) return;

    const container = containerRef.current;
    const glare = glareRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update glare position
      gsap.to(glare, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.1,
        ease: 'power1.out',
      });

      // Update glare background for the moving light effect
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${glowColor.split(',').slice(0, 3).join(',')}, 0.2) 0%, transparent 70%)`;
    };

    const handleMouseEnter = () => {
      gsap.to(container, {
        scale: 1.05,
        borderColor: `rgba(${glowColor.split(',').slice(0, 3).join(',')}, 0.6)`,
        backgroundColor: hoverBackground, // Use new hoverBackground
        boxShadow: `0 0 20px ${shadowColor}`, // Use new shadowColor
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(glare, { opacity: 1, duration: 0.3 }); // Show glare
    };

    const handleMouseLeave = () => {
      gsap.to(container, {
        scale: 1,
        borderColor: borderColor, // Reset to original border
        backgroundColor: background, // Reset to original background
        boxShadow: 'none',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(glare, { opacity: 0, duration: 0.3 }); // Hide glare
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [background, hoverBackground, borderRadius, borderColor, glowColor, shadowColor, disableAnimations, isMobile]);


  return (
    <div
      ref={containerRef}
      className="glare-hover-container"
      style={{
        width: width,
        height: height,
        background: background,
        borderRadius: borderRadius,
        border: `1px solid ${borderColor}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div
        ref={glareRef}
        className="glare-effect"
        style={{
          position: 'absolute',
          width: '200%', // Larger than container for full effect
          height: '200%',
          borderRadius: '50%',
          opacity: 0,
          pointerEvents: 'none',
          mixBlendMode: 'soft-light', // For a subtle light effect
          transform: 'translate(-50%, -50%)', // Center the glare relative to its own size
          transition: 'opacity 0.3s ease',
        }}
      ></div>
      <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        {children}
      </div>
    </div>
  );
};

export default GlareHover;