import React, { useRef, useEffect, useState } from 'react';
import { Section } from '../types';
import MyStory from './MyStory';

interface HomeProps {
    onNavigate: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const roles = ["Product Manager", "Data Analyst", "Project Manager", "Product Analyst", "Business Analyst", "Tech Enthusiast"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing animation effect
    useEffect(() => {
        const handleTyping = () => {
            const fullRole = roles[currentRoleIndex];
            if (isDeleting) {
                setDisplayedRole(fullRole.substring(0, displayedRole.length - 1));
            } else {
                setDisplayedRole(fullRole.substring(0, displayedRole.length + 1));
            }

            if (!isDeleting && displayedRole === fullRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedRole === '') {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const typingSpeed = isDeleting ? 100 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedRole, isDeleting, currentRoleIndex, roles]);


    // Canvas particle animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const speedX = (Math.random() * 0.5 - 0.25);
                const speedY = (Math.random() * 0.5 - 0.25);
                particles.push(new Particle(x, y, size, speedX, speedY));
            }
        };
        
        const connect = () => {
            if (!ctx) return;
            let opacityValue = 1;
            const connectionDistance = (canvas.width / 7) * (canvas.height / 7);

            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);
                    if (distance < connectionDistance) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(148, 163, 184, ${opacityValue})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
            for (let i = 0; i < particles.length; i++) {
                const distance = ((particles[i].x - mouse.x) ** 2) + ((particles[i].y - mouse.y) ** 2);
                 if (distance < connectionDistance) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(20, 184, 166, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', (event) => { mouse.x = event.clientX; mouse.y = event.clientY; });
        canvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-background">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
                <div className="relative z-10 p-4 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-on-surface tracking-wider uppercase">
                        Sofiat Ajide
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-primary font-medium h-8">
                        {displayedRole}
                        <span className="animate-pulse">|</span>
                    </p>
                    <button
                        onClick={() => onNavigate('Projects')}
                        className="mt-8 inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-focus transition-all duration-300 transform hover:scale-105"
                    >
                        View My Work
                    </button>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <a href="#my-story" className="animate-bounce text-on-surface-secondary hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </section>
            <MyStory />
        </>
    );
};

export default Home;
