import React, { useEffect, useState } from 'react';

interface AnimatedLogoProps {
    onAnimationComplete?: () => void;
    theme?: 'light' | 'dark';
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
    onAnimationComplete,
    theme = 'dark'
}) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Auto-complete after animation finishes
    useEffect(() => {
        if (isAnimated && onAnimationComplete) {
            const completeTimer = setTimeout(() => {
                onAnimationComplete();
            }, 2500); // Total animation duration
            return () => clearTimeout(completeTimer);
        }
    }, [isAnimated, onAnimationComplete]);

    // Define color palettes
    const lightColors = {
        bg: '#f0f2f5',
        pillBg: '#000000',
        mainText: '#FFFFFF',
        subText: '#000000',
        shadowStart: 'rgba(0,0,0,0.2)',
        shadowPeak: 'rgba(0,0,0,0.35)'
    };

    const darkColors = {
        bg: '#0a0a0a',
        pillBg: '#FFFFFF',
        mainText: '#000000',
        subText: '#FFFFFF',
        shadowStart: 'rgba(255,255,255,0.15)',
        shadowPeak: 'rgba(255,255,255,0.35)'
    };

    const activeColors = theme === 'light' ? lightColors : darkColors;

    return (
        <div style={{ ...styles.mainContainer, backgroundColor: activeColors.bg }}>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Montserrat:wght@700&display=swap');

          :root {
            --shadow-start: ${activeColors.shadowStart};
            --shadow-peak: ${activeColors.shadowPeak};
          }

          @keyframes expandPill {
            0% { width: 50px; opacity: 0; transform: scaleX(0.8); }
            60% { width: 250px; opacity: 1; transform: scaleX(1.05); }
            100% { width: 240px; opacity: 1; transform: scaleX(1); }
          }

          /* Larger expansion for desktop */
          @media (min-width: 640px) {
            @keyframes expandPill {
              0% { width: 50px; opacity: 0; transform: scaleX(0.8); }
              60% { width: 350px; opacity: 1; transform: scaleX(1.05); }
              100% { width: 330px; opacity: 1; transform: scaleX(1); }
            }
          }

          @keyframes slideUpReveal {
            0% { transform: translateY(110%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes fadeInDrop {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes subtlePulseThemeAware {
            0% { box-shadow: 0 5px 15px var(--shadow-start); }
            50% { box-shadow: 0 8px 25px var(--shadow-peak); }
            100% { box-shadow: 0 5px 15px var(--shadow-start); }
          }
        `}
            </style>

            <div style={styles.logoWrapper}>
                {/* Pill Container */}
                <div
                    style={{
                        ...styles.pillContainer,
                        backgroundColor: activeColors.pillBg,
                        animation: isAnimated ? 'expandPill 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, subtlePulseThemeAware 3s ease-in-out 1s infinite' : 'none',
                        opacity: isAnimated ? 1 : 0,
                    }}
                >
                    <div style={styles.textOverflowWrapper}>
                        <h1
                            style={{
                                ...styles.mainText,
                                color: activeColors.mainText,
                                animation: isAnimated ? 'slideUpReveal 0.6s ease-out 0.4s forwards' : 'none',
                                opacity: 0,
                            }}
                        >
                            TECTONIC
                        </h1>
                    </div>
                </div>

                {/* Subtext */}
                <div style={styles.subTextContainer}>
                    <h2
                        style={{
                            ...styles.subText,
                            color: activeColors.subText,
                            animation: isAnimated ? 'fadeInDrop 0.8s ease-out 0.7s forwards' : 'none',
                            opacity: 0,
                        }}
                    >
                        FOUNDATION OF FUTURE
                    </h2>
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: 'background-color 0.3s ease',
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px', // Reduced from 60px for mobile
    },
    pillContainer: {
        borderRadius: '100px',
        padding: '10px 0px', // Reduced from 14px for mobile
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        willChange: 'width, transform, box-shadow, background-color',
        transition: 'background-color 0.3s ease',
    },
    textOverflowWrapper: {
        overflow: 'hidden',
        padding: '0 20px', // Reduced from 40px for mobile
    },
    mainText: {
        fontFamily: '"Orbitron", sans-serif',
        fontWeight: '900',
        fontSize: 'clamp(24px, 6vw, 42px)', // Responsive: 24px on mobile, 42px on desktop
        margin: 0,
        letterSpacing: 'clamp(1px, 0.5vw, 3px)', // Responsive letter spacing
        textTransform: 'uppercase',
        lineHeight: '1',
        transition: 'color 0.3s ease',
    },
    subTextContainer: {
        marginTop: '8px', // Reduced from 12px for mobile
        overflow: 'hidden',
    },
    subText: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(10px, 2.5vw, 15px)', // Responsive: 10px on mobile, 15px on desktop
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: 'clamp(0.3px, 0.1vw, 0.5px)', // Responsive letter spacing
        transition: 'color 0.3s ease',
    }
};

export default AnimatedLogo;
