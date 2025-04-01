import React, { useEffect, useRef } from 'react';
import WrapperParticles from './styles/WrapperParticles';

const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const createParticle = (x: number, y: number, size: number, speedX: number, speedY: number, color: string) => {
      let particleX = x;
      let particleY = y;

      const draw = () => {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      };

      const update = () => {
        particleX += speedX;
        particleY += speedY;

        if (particleX + size > canvas.width || particleX - size < 0) {
          speedX = -speedX;
        }
        if (particleY + size > canvas.height || particleY - size < 0) {
          speedY = -speedY;
        }

        draw();
      };

      return { draw, update };
    };

    const particles: { draw: () => void; update: () => void }[] = [];
    const numParticles = 40;
    const colors = ["#a7f9ab"]; 

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 1.5 + 1; 
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(createParticle(x, y, size, speedX, speedY, color));
    }

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => particle.update());
        requestAnimationFrame(animate);
      }
    };

    animate();
    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <WrapperParticles ref={canvasRef} />
    );
}

export default Particles;