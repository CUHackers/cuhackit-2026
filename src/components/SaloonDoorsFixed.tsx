import React, { useEffect, useState } from 'react';

interface SaloonDoorsProps {
  onComplete?: () => void;
  /** milliseconds to keep the doors on screen after the open animation completes */
  lifeAfterAnimationMs?: number;
  /** 'slide' = simple translate slide open (default), 'swing' = rotateY hinge open */
  mode?: 'slide' | 'swing';
}

const SaloonDoors: React.FC<SaloonDoorsProps> = ({ onComplete, lifeAfterAnimationMs, mode = 'swing' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

  // Config
  const INITIAL_DELAY = 500; // ms
  const ANIMATION_DURATION = 1200; // ms
  const CUBIC_BEZIER = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  const TRANSITION = `transform ${ANIMATION_DURATION}ms ${CUBIC_BEZIER}`;
  const LEFT_ANIMATION_NAME = 'saloon-left-open';
  const RIGHT_ANIMATION_NAME = 'saloon-right-open';

  useEffect(() => {
    const lifeMs = typeof lifeAfterAnimationMs === 'number' && lifeAfterAnimationMs >= 0 ? lifeAfterAnimationMs : 3000;

    const openTimer = setTimeout(() => setIsOpen(true), INITIAL_DELAY);

    const destroyTimer = setTimeout(() => {
      if (onComplete) onComplete();
      setDestroyed(true);
    }, INITIAL_DELAY + ANIMATION_DURATION + lifeMs);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(destroyTimer);
    };
  }, [onComplete, lifeAfterAnimationMs]);

  if (destroyed) return null;

  const leftAnimation = isOpen ? `${LEFT_ANIMATION_NAME} ${ANIMATION_DURATION}ms ${CUBIC_BEZIER} forwards` : 'none';
  const rightAnimation = isOpen ? `${RIGHT_ANIMATION_NAME} ${ANIMATION_DURATION}ms ${CUBIC_BEZIER} forwards` : 'none';

  // compute styles per-mode
  const leftStyle: React.CSSProperties = {};
  const rightStyle: React.CSSProperties = {};

  if (mode === 'slide') {
    leftStyle.willChange = 'transform';
    leftStyle.transform = isOpen ? 'translateX(-110%)' : 'translateX(0)';
    leftStyle.transition = TRANSITION;
    leftStyle.transformStyle = 'preserve-3d';

    rightStyle.willChange = 'transform';
    rightStyle.transform = isOpen ? 'translateX(110%)' : 'translateX(0)';
    rightStyle.transition = TRANSITION;
    rightStyle.transformStyle = 'preserve-3d';
  } else if (mode === 'swing') {
    leftStyle.willChange = 'transform';
    leftStyle.transformOrigin = 'left center';
    leftStyle.transform = isOpen ? 'rotateY(100deg)' : 'rotateY(0deg)';
    leftStyle.transition = isOpen ? 'none' : TRANSITION;
    leftStyle.animation = leftAnimation as any;
    leftStyle.transformStyle = 'preserve-3d';

    rightStyle.willChange = 'transform';
    rightStyle.transformOrigin = 'right center';
    rightStyle.transform = isOpen ? 'rotateY(-100deg)' : 'rotateY(0deg)';
    rightStyle.transition = isOpen ? 'none' : TRANSITION;
    rightStyle.animation = rightAnimation as any;
    rightStyle.transformStyle = 'preserve-3d';
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2147483647, perspective: '1400px' }}>
      {mode === 'swing' && (
        // Define keyframe animations for swinging doors
        <style>{`
          @keyframes ${LEFT_ANIMATION_NAME} {
            0% { transform: rotateY(0deg); }
            40% { transform: rotateY(115deg); }
            60% { transform: rotateY(95deg); }
            100% { transform: rotateY(120deg); }
          }
          @keyframes ${RIGHT_ANIMATION_NAME} {
            0% { transform: rotateY(0deg); }
            40% { transform: rotateY(-115deg); }
            60% { transform: rotateY(-95deg); }
            100% { transform: rotateY(-120deg); }
          }
        `}</style>
      )}

      {/* Left Door (SVG) */}
      <div className={`absolute top-[5vh] left-0 h-[90vh] w-1/2`} style={leftStyle}>
        <img
          src="/assets/LeftDoor.svg"
          alt="Left Saloon Door"
          className="w-full h-full object-cover block"
          style={{ display: 'block', backfaceVisibility: 'hidden', objectPosition: 'top' }}
        />
      </div>

      {/* Right Door (SVG) */}
      <div className={`absolute top-[5vh] right-0 h-[90vh] w-1/2`} style={rightStyle}>
        <img
          src="/assets/RightDoor.svg"
          alt="Right Saloon Door"
          className="w-full h-full object-cover block"
          style={{ display: 'block', backfaceVisibility: 'hidden', objectPosition: 'top' }}
        />
      </div>

    </div>
  );
};

export default SaloonDoors;
