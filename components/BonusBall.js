import { useEffect, useRef } from 'react';

export default function BonusBall() {
  const canvasRef = useRef();
  const ballsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create the smaller balls
    for (let i = 0; i < 3; i++) {
      const ball = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: 5,
        color: 'red',
      };
      const ball2 = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: 5,
        color: 'gray',
      };
      ballsRef.current.push(ball, ball2);
    }

    // Animate the smaller balls
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update the smaller balls
      ballsRef.current.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fillStyle = ball.color;

        ctx.fill();

        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.vx *= -1;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.vy *= -1;
        }
      });
    }
    animate();

    // Set the z-index to -1
    canvas.style.zIndex = '-1';
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute' }} />;
}
