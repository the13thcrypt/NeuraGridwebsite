import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './FancyButton.css'; // We'll create this next

const FancyButton = ({
  children,
  className = '',
  onClick,
  glowColor = '132, 0, 255', // Default glow color (purple)
  lightColor = '255, 255, 255', // Default light color (white)
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
  hoverBackgroundColor = 'rgba(255, 255, 255, 0.15)',
  textColor = '#ffffff',
  borderColor = 'rgba(255, 255, 255, 0.2)',
  borderRadius = '99px',
  width = '220px',
  height = '60px',
  // Disable animations based on prop or mobile detection
  disableAnimations = false
}) => {
  const buttonRef = useRef(null);
  const glowRef = useRef(null); // Ref for the animated glow effect
  const backgroundRef = useRef(null); // Ref for the inner background fill
  const isMobile = window.innerWidth <= 768; // Simple mobile check

  useEffect(() => {
    if (!buttonRef.current || disableAnimations || isMobile) return;

    const button = buttonRef.current;
    const glowElement = glowRef.current;
    const backgroundElement = backgroundRef.current;

    // Set initial CSS variables for styling
    button.style.setProperty('--btn-glow-color', glowColor);
    button.style.setProperty('--btn-light-color', lightColor);
    button.style.setProperty('--btn-bg-color', backgroundColor);
    button.style.setProperty('--btn-hover-bg-color', hoverBackgroundColor);
    button.style.setProperty('--btn-text-color', textColor);
    button.style.setProperty('--btn-border-color', borderColor);
    button.style.setProperty('--btn-border-radius', borderRadius);
    button.style.setProperty('--btn-width', width);
    button.style.setProperty('--btn-height', height);


    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Parallax effect for the button itself
      const sensitivity = 0.05;
      const offsetX = (x - rect.width / 2) * sensitivity;
      const offsetY = (y - rect.height / 2) * sensitivity;
      gsap.to(button, {
        x: offsetX,
        y: offsetY,
        duration: 0.2,
        ease: "power1.out"
      });

      // Radial gradient for the inner glow
      if (glowElement) {
        glowElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${lightColor}, 0.2) 0%, transparent 60%)`;
      }
    };

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.02, // Subtle scale up
        boxShadow: `0 0 25px rgba(${glowColor}, 0.4), 0 0 10px rgba(${lightColor}, 0.2)`,
        borderColor: `rgba(${glowColor}, 0.6)`,
        duration: 0.3,
        ease: "power2.out"
      });
      if (backgroundElement) {
        gsap.to(backgroundElement, {
          opacity: 1, // Make background more opaque on hover
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: 'none',
        borderColor: borderColor, // Reset to original border color
        duration: 0.3,
        ease: "power2.out"
      });
      if (glowElement) {
        glowElement.style.background = 'transparent'; // Hide inner glow
      }
      if (backgroundElement) {
        gsap.to(backgroundElement, {
          opacity: 0, // Reset background opacity
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glowColor, lightColor, backgroundColor, hoverBackgroundColor, textColor, borderColor, borderRadius, width, height, disableAnimations, isMobile]);

  return (
    <button
      ref={buttonRef}
      className={`fancy-button ${className}`}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        color: textColor,
        border: `1px solid ${borderColor}`,
        background: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Inner background fill for hover effect */}
      <div ref={backgroundRef} className="fancy-button__background" style={{ background: hoverBackgroundColor, opacity: 0 }}></div>
      {/* Animated glow effect */}
      <div ref={glowRef} className="fancy-button__glow"></div>
      <span className="fancy-button__text">{children}</span>
    </button>
  );
};

export default FancyButton;