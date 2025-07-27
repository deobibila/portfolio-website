import Head from 'next/head';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function MadisonPage() {
    const [unlocked, setUnlocked] = useState(false);
    const [input, setInput] = useState('');
    const [confettiDone, setConfettiDone] = useState(false);
    const [inputError, setInputError] = useState(false);


    const correctPassword = '0502';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (input.trim() === '') {
            setInputError(true); // trigger red border
            return;
        }

        if (input === correctPassword) {
            setUnlocked(true);
        } else {
            setInputError(false); // reset border if not blank
            alert("Don't be silly — try again?");
        }
    };


    useEffect(() => {
        if (unlocked && !confettiDone) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
            });
            setConfettiDone(true);
        }
    }, [unlocked, confettiDone]);

    return (

        <>
            {/* Google Font: Caveat */}
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <blockquote
                style={{
                    fontFamily: 'Caveat, cursive',
                    fontSize: '2.2rem',
                    textAlign: 'center',
                    color: '#4b5563',
                    marginTop: '4rem',
                    marginBottom: '1rem',
                }}
            >
                “Life is crazy, but I’m crazier.”
                <footer
                    style={{
                        fontSize: '1rem',
                        marginTop: '0.5rem',
                        color: '#9ca3af',
                    }}
                >
                    — Madison 💜
                </footer>
            </blockquote>
            <div
                style={{
                    maxWidth: '700px',
                    margin: '4rem auto',
                    textAlign: 'center',
                    padding: '2rem',
                    borderRadius: '12px',
                    backgroundColor: unlocked ? '#fff' : '#fdf4ff',
                    border: unlocked ? 'none' : '2px solid #a855f7',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'sans-serif',
                }}
            >
                {!unlocked ? (
                    <>
                        <h2 style={{ color: '#a855f7' }}>
                            Anyway… it’s still not a puppy, as Anya suggested 🐾
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Enter your birthday (MMDD) to open THE surprise 🎁
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    if (inputError && e.target.value.trim() !== '') {
                                        setInputError(false);
                                    }
                                }}
                                placeholder="MMDD"
                                style={{
                                    padding: '0.5rem',
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                    width: '100px',
                                    marginRight: '1rem',
                                    borderRadius: '6px',
                                    border: inputError ? '2px solid red' : '1px solid #ccc',
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#facc15',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                Open
                            </button>
                        </form>
                        <p
                            style={{
                                marginTop: '1.5rem',
                                color: '#a855f7',
                                fontFamily: 'Caveat, cursive',
                                fontSize: '1.25rem',
                            }}
                        >
                            #ForAllTheInsideJokes
                        </p>

                    </>
                ) : (
                    <>
                        <h1
                            style={{
                                color: '#a855f7',
                                fontFamily: 'Caveat, cursive',
                                fontSize: '2.8rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            🥼 For the Incoming Dr. Flew 😎
                        </h1>
                        <blockquote
                            style={{
                                fontStyle: 'italic',
                                color: '#444',
                                backgroundColor: '#fefce8', // soft yellow tint
                                borderLeft: '4px solid #facc15', // bright yellow accent
                                padding: '1rem 1.5rem',
                                margin: '1.5rem auto',
                                borderRadius: '8px',
                                maxWidth: '600px',
                            }}
                        >
                            Just a little something to brighten your day — and maybe make you laugh.
                            <footer style={{ marginTop: '0.75rem', fontWeight: 'bold', textAlign: 'right' }}>
                                — from your biggest supporter, Deo the CEO
                            </footer>
                        </blockquote>
                        <div
                            style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                marginTop: '2rem',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 0 0 4px #facc15',
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/your_video_id_here"
                                title="A Silly Video"
                                style={{
                                    border: 'none',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p style={{
                            marginTop: '2rem',
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            color: '#555'
                        }}>
                            P.S. If this made you smile, that's the best thing I have done so far this year. Thanks for being a quiet kind of light in my life
                        </p>
                    </>
                )}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
                © {new Date().getFullYear()} Deo Bibila. Built with{" "}
                <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-400 hover:underline"
                >
                    Next.js
                </a>{" "}
                + 💻 + ☕
            </p>
        </>
    );
}
