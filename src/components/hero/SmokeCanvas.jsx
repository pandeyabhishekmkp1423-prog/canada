import { useEffect, useRef, useState } from "react";
import styles from "./SmokeCanvas.module.css";

export default function SmokeCanvas() {
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let isPaused = false;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      isPaused = document.hidden;
      if (!isPaused) animId = requestAnimationFrame(render);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // 14 soft smoke particle nodes
    const particles = Array.from({ length: 14 }).map((_, i) => ({
      x: (width / 14) * i + (Math.random() - 0.5) * 80,
      y: height * 0.4 + (Math.random() - 0.5) * (height * 0.4),
      radius: Math.min(width, height) * (0.35 + Math.random() * 0.25),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.15,
      baseAlpha: 0.04 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const render = () => {
      if (isPaused) return;
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(t + p.phase) * 0.3;
        p.y += p.vy + Math.cos(t * 0.7 + p.phase) * 0.2;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const pulseAlpha = p.baseAlpha * (0.8 + 0.2 * Math.sin(t + p.phase));
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(31, 95, 191, ${pulseAlpha * 1.5})`);
        grad.addColorStop(0.5, `rgba(16, 36, 58, ${pulseAlpha})`);
        grad.addColorStop(1, "rgba(11, 23, 36, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reducedMotion]);

  return (
    <div className={styles.canvasContainer} aria-hidden="true">
      <div className={styles.fallbackGradient} />
      {!reducedMotion && <canvas ref={canvasRef} className={styles.canvas} />}
      <div className={styles.noiseOverlay} />
    </div>
  );
}
