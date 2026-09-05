import { useEffect, useRef } from "react";

interface SparklesProps {
  className?: string;
  /**
   * Anzahl der Partikel.
   */
  density?: number;
  /**
   * Partikel reagieren auf die Mausposition.
   */
  mousemove?: boolean;
  /**
   * Farbe der Punkte. Default: Akzent-Rot der Marke.
   */
  color?: string;
}

export default function Sparkles({
  className,
  density = 800,
  mousemove = false,
  color = "#e5493a",
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x = 0;
      y = 0;
      radius = 0;
      baseAlpha = 0;
      twinkleSpeed = 0;
      twinklePhase = 0;
      vx = 0;
      vy = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.1 + 0.3;
        this.baseAlpha = Math.random() * 0.6 + 0.25;
        this.twinkleSpeed = Math.random() * 0.02 + 0.006;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.vx = (Math.random() - 0.5) * 0.12;
        this.vy = (Math.random() - 0.5) * 0.12;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.x += this.vx;
        this.y += this.vy;

        if (mousemove) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 90;
          if (dist < radius) {
            const force = (radius - dist) / radius;
            const safeDist = dist || 1;
            this.x += (dx / safeDist) * force * 1.6;
            this.y += (dy / safeDist) * force * 1.6;
          }
        }

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        const twinkle = (Math.sin(this.twinklePhase) + 1) / 2;
        const alpha = this.baseAlpha * (0.4 + twinkle * 0.6);
        context.beginPath();
        context.fillStyle = color;
        context.globalAlpha = alpha;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      for (let i = 0; i < density; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    if (mousemove) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mousemove) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, mousemove, color]);

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
