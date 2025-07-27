import Link from 'next/link';

export default function Custom404() {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Oopsy - You're Lost!!!</h3>

            <blockquote style={styles.quote}>
                “Just be silly sometimes, life ain't that serious you know!.” - Deo
            </blockquote>

            <p style={styles.funFact}>
                Fun fact: 404 is also an area code in Atlanta.
            </p>


            <Link href="/" style={styles.link}>
                ← Back to home
            </Link>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        padding: '0 1rem',
    },
    heading: {
        fontSize: '3rem',
        marginBottom: '1rem',
    },
    quote: {
        fontSize: '1.25rem',
        fontStyle: 'italic',
        color: '#555',
        margin: '1.5rem 0',
        maxWidth: '500px',
        borderLeft: '4px solid #ccc',
        paddingLeft: '1rem',
    },
    funFact: {
        fontSize: '1rem',
        color: '#d90429', // red but not too harsh
        marginBottom: '2rem',
    },
    link: {
        fontSize: '1rem',
        color: '#0070f3',
        textDecoration: 'none',
    },
};
