import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, RotateCw, Hand } from 'lucide-react';

interface Product3DCoverflowProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

// 8 Featured Notebook Products
const COVERFLOW_ITEMS = [
  {
    id: 'prod-01',
    name: 'Center Pinned Exercise Books',
    category: 'School & Institutional',
    image: '/products/Products/Exercise Books.jpg',
    tag: '54–80 GSM',
  },
  {
    id: 'prod-02',
    name: 'Hardbound Counter Books',
    category: 'Commercial & Ledger',
    image: '/products/Products/Counter Books.jpg',
    tag: '1 to 4 Quire',
  },
  {
    id: 'prod-03',
    name: 'Classic Composition Books',
    category: 'US & Global Academic',
    image: '/products/Products/Composition Books.jpg',
    tag: 'Center Sewn',
  },
  {
    id: 'prod-04',
    name: 'Double Wire O-Ring Notebooks',
    category: 'Executive & Corporate',
    image: '/products/Products/Double wire notebook.jpg',
    tag: '360° Lay-Flat',
  },
  {
    id: 'prod-05',
    name: 'Spiral Bound Notebooks',
    category: 'Student & Office',
    image: '/products/Products/Spiral Notebooks.jpg',
    tag: 'Micro-Perforated',
  },
  {
    id: 'prod-06',
    name: 'Writing Pads & Legal Notepads',
    category: 'Legal & Enterprise',
    image: '/products/Products/Notepads.jpg',
    tag: 'Tear-Off Gummed',
  },
  {
    id: 'prod-07',
    name: 'Section-Sewn Handbound Registers',
    category: 'Heavy-Duty Industrial',
    image: '/products/Products/handbound.jpg',
    tag: 'Greyboard Core',
  },
  {
    id: 'prod-08',
    name: 'Art & Sketch Drawing Books',
    category: 'Fine Art & Design',
    image: '/products/Sketchbook_.jpg',
    tag: '140+ GSM Cartridge',
  },
];

export const Product3DCoverflow: React.FC<Product3DCoverflowProps> = ({ onNavigate }) => {
  const count = COVERFLOW_ITEMS.length;
  const angleStep = 360 / count; // 45 degrees per item

  // angle in degrees (can rotate continuously 360, 720, etc.)
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    x: number;
    angle: number;
    time: number;
    lastX: number;
    velocity: number;
  }>({
    x: 0,
    angle: 0,
    time: 0,
    lastX: 0,
    velocity: 0,
  });

  const animFrameRef = useRef<number | null>(null);
  const targetAngleRef = useRef<number>(0);
  const currentAngleRef = useRef<number>(0);

  // Sync ref
  useEffect(() => {
    currentAngleRef.current = rotationAngle;
  }, [rotationAngle]);

  // Spring animation to target angle
  const startSpringAnimation = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const step = () => {
      const diff = targetAngleRef.current - currentAngleRef.current;
      if (Math.abs(diff) > 0.05) {
        currentAngleRef.current += diff * 0.12; // smooth damping
        setRotationAngle(currentAngleRef.current);
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        currentAngleRef.current = targetAngleRef.current;
        setRotationAngle(targetAngleRef.current);
        animFrameRef.current = null;
      }
    };
    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  const snapToAngle = useCallback((target: number) => {
    targetAngleRef.current = target;
    startSpringAnimation();
  }, [startSpringAnimation]);

  const snapToNearestSlot = useCallback((extraRotations = 0) => {
    const cur = currentAngleRef.current;
    // Each slot is at index * angleStep
    // When carousel rotates by -cur, slot closest to front is round(cur / angleStep)
    const nearestSlot = Math.round(cur / angleStep) + extraRotations;
    snapToAngle(nearestSlot * angleStep);
  }, [angleStep, snapToAngle]);

  // Gentle 360 Auto-Rotation when not dragging or hovering
  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      targetAngleRef.current += angleStep;
      startSpringAnimation();
    }, 4500);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging, angleStep, startSpringAnimation]);

  // Handle pointer down (mouse or touch)
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setDragProgress(false);
    setAutoRotate(false);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    dragStartRef.current = {
      x: clientX,
      angle: currentAngleRef.current,
      time: performance.now(),
      lastX: clientX,
      velocity: 0,
    };
  };

  // Handle pointer move
  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = clientX - dragStartRef.current.x;
    if (Math.abs(deltaX) > 5) {
      setDragProgress(true);
    }

    // Drag 3px = 1 degree rotation in 360 space
    const angleDelta = deltaX * 0.32;
    const newAngle = dragStartRef.current.angle + angleDelta;

    const now = performance.now();
    const dt = now - dragStartRef.current.time;
    if (dt > 16) {
      dragStartRef.current.velocity = (clientX - dragStartRef.current.lastX) / dt;
      dragStartRef.current.lastX = clientX;
      dragStartRef.current.time = now;
    }

    currentAngleRef.current = newAngle;
    setRotationAngle(newAngle);
  };

  // Handle pointer up with momentum flick
  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const velocity = dragStartRef.current.velocity;
    // Apply inertia fling
    const flingAngle = velocity * 40;
    const projected = currentAngleRef.current + flingAngle;
    const nearestSlot = Math.round(projected / angleStep);

    snapToAngle(nearestSlot * angleStep);
  };

  const onMouseDown = (e: React.MouseEvent) => handlePointerDown(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handlePointerMove(e.clientX);
  const onMouseUp = () => handlePointerUp();

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) handlePointerDown(e.touches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX);
  };
  const onTouchEnd = () => handlePointerUp();

  // Next / Prev 360 slot rotation
  const rotateNext = () => {
    setAutoRotate(false);
    const nearestSlot = Math.round(currentAngleRef.current / angleStep);
    snapToAngle((nearestSlot - 1) * angleStep);
  };

  const rotatePrev = () => {
    setAutoRotate(false);
    const nearestSlot = Math.round(currentAngleRef.current / angleStep);
    snapToAngle((nearestSlot + 1) * angleStep);
  };

  // Determine which card is facing the front viewer right now
  const normalizedAngle = ((currentAngleRef.current % 360) + 360) % 360;
  // Item i is in front when (i * angleStep + currentAngle) % 360 == 0
  // Therefore active index = round((-currentAngle % 360 + 360) % 360 / angleStep) % count
  const activeIndex = Math.round(((-currentAngleRef.current % 360) + 360000) % 360 / angleStep) % count;
  const activeProduct = COVERFLOW_ITEMS[activeIndex];

  // In a 360 cylinder with 8 items, tuned radius gives spacious, uncluttered breathing room
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const cylinderRadius = isMobile ? 240 : 360;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-between py-2 sm:py-4 select-none overflow-hidden"
      onMouseEnter={() => setAutoRotate(false)}
      onMouseLeave={() => {
        if (!isDragging) setAutoRotate(true);
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* 3D 360 Carousel Viewport */}
      <div
        className="relative w-full flex-1 flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
        style={{
          perspective: isMobile ? '900px' : '1400px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* Revolving 3D Cylinder Anchor */}
        <div
          className="relative w-full h-[280px] sm:h-[340px] md:h-[390px] flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationAngle}deg)`,
            transition: isDragging ? 'none' : 'transform 0.05s linear',
          }}
        >
          {COVERFLOW_ITEMS.map((item, i) => {
            const itemAngle = i * angleStep; // 0, 45, 90, 135, 180, 225, 270, 315

            // Compute relative rotation angle from the front (camera view)
            const angleFromFront = ((itemAngle + rotationAngle) % 360 + 540) % 360 - 180;
            const absAngle = Math.abs(angleFromFront);

            // Front facing cards are brighter and larger; back cards are darker and recessed
            const isFrontCard = absAngle < 40;
            const opacity = Math.max(0.28, Math.cos((absAngle * Math.PI) / 180) * 0.75 + 0.25);
            const scale = Math.max(0.72, 1 - (absAngle / 180) * 0.32);

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  if (dragProgress) {
                    e.stopPropagation();
                    return;
                  }
                  // Clicking any card brings it straight to the front in 360 space without redirecting
                  if (absAngle > 10) {
                    setAutoRotate(false);
                    const currentRot = currentAngleRef.current;
                    const delta = -angleFromFront;
                    snapToAngle(currentRot + delta);
                  }
                }}
                className="absolute top-0 bottom-0 my-auto w-[190px] sm:w-[250px] md:w-[290px] h-[260px] sm:h-[320px] md:h-[370px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  // Position each card around the 360 cylinder ring
                  transform: `rotateY(${itemAngle}deg) translateZ(${cylinderRadius}px) scale(${scale})`,
                  opacity,
                  boxShadow: isFrontCard
                    ? '0 25px 50px -10px rgba(0, 0, 0, 0.8), 0 0 40px rgba(240, 232, 70, 0.35)'
                    : '0 15px 30px -10px rgba(0, 0, 0, 0.6)',
                  border: isFrontCard
                    ? '2px solid rgba(240, 232, 70, 0.85)'
                    : '1px solid rgba(255, 255, 255, 0.25)',
                  backfaceVisibility: 'visible',
                  transition: isDragging ? 'none' : 'box-shadow 0.3s ease, border 0.3s ease, opacity 0.2s ease',
                }}
              >
                {/* Book Card Container */}
                <div className="relative w-full h-full bg-slate-900 group">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    draggable={false}
                    className="w-full h-full object-cover object-center pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Clean Ambient Gradient (No text overlays obscuring the book cover) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: isFrontCard
                        ? 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 60%, rgba(0,0,0,0.35) 100%)'
                        : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clean, Elegant Bottom Bar (No redundant text or instructional clutter) */}
      <div className="relative z-30 w-full max-w-2xl px-4 flex flex-col items-center mt-3 pointer-events-auto">
        
        {/* Single Focused Title */}
        <div className="text-center mb-3">
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-white tracking-tight drop-shadow-md">
            {activeProduct.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-body font-medium mt-0.5">
            {activeProduct.category}
          </p>
        </div>

        {/* Minimalist 360 Dots Navigation */}
        <div className="flex items-center gap-2">
          {COVERFLOW_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAutoRotate(false);
                const currentRot = currentAngleRef.current;
                const itemAngle = i * angleStep;
                const angleFromFront = ((itemAngle + currentRot) % 360 + 540) % 360 - 180;
                snapToAngle(currentRot - angleFromFront);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-7 bg-[#f0e846] shadow-[0_0_10px_#f0e846]'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Select book ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
