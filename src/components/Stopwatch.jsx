import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Flag, RotateCcw, Monitor } from 'lucide-react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 10);
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
    };

    const handleLap = () => {
        if (time > 0) {
            setLaps(prev => [time, ...prev]);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    return (
        <div className="stopwatch-container glass-panel" style={{
            minHeight: '60vh',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderRadius: '24px',
            maxWidth: '800px',
            width: '100%',
            margin: '0 auto'
        }}>
            {/* Scanline Effect */}
            <div className="scanline"></div>

            <div className="timer-display" style={{ fontFamily: 'Fira Code, monospace', fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 700, color: 'var(--portfolio)', textShadow: '0 0 30px rgba(46, 213, 115, 0.4)', marginBottom: '2rem', zIndex: 2 }}>
                {formatTime(time)}
            </div>

            <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Start/Pause Button - Green Gradient */}
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    style={{
                        background: isRunning
                            ? 'linear-gradient(135deg, #10b981, #059669)'
                            : 'linear-gradient(135deg, #059669, #047857)',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: isRunning
                            ? '0 0 20px rgba(16, 185, 129, 0.5), 0 4px 15px rgba(0,0,0,0.3)'
                            : '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease',
                        minWidth: '140px',
                        justifyContent: 'center'
                    }}
                >
                    {isRunning ? <Pause size={22} /> : <Play size={22} />}
                    {isRunning ? 'Pausar' : 'Iniciar'}
                </button>

                {/* Reset Button - Red Gradient */}
                <button
                    onClick={handleReset}
                    style={{
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease',
                        minWidth: '140px',
                        justifyContent: 'center'
                    }}
                >
                    <RotateCcw size={22} /> Resetar
                </button>

                {/* Lap Button - Blue Gradient */}
                <button
                    onClick={handleLap}
                    style={{
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease',
                        minWidth: '140px',
                        justifyContent: 'center'
                    }}
                >
                    <Flag size={22} /> Volta
                </button>
            </div>

            <div className="laps-container" style={{ width: '100%', maxWidth: '600px', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '1.5rem', maxHeight: '300px', overflowY: 'auto' }}>
                {laps.length === 0 ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Nenhuma volta registrada
                    </div>
                ) : (
                    laps.map((lapTime, index) => (
                        <div key={index} className="lap-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                            <span className="lap-number">#{String(laps.length - index).padStart(2, '0')}</span>
                            <span className="lap-time" style={{ color: 'var(--portfolio)', fontWeight: 600 }}>{formatTime(lapTime)}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Stopwatch;
