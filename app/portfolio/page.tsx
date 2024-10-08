"use client";

const PortfolioPage: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#fff', color: '#333', transition: 'background-color 0.3s, color 0.3s' }}>
            <div style={{ margin: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <title>Artur Tashbolotov</title>
                </div>

                <main style={{ padding: '2vh', maxWidth: '60%', margin: '0 auto' }}>
                    <section style={{ marginBottom: '5vh' }}>
                        <p style={{ marginBottom: '1vh' }}>
                            You can view my detailed portfolio in the embedded Google Doc below:
                        </p>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#f9f9f9', border: '1px solid #ccc', borderRadius: '8px' }}>
                            <iframe
                                src="https://docs.google.com/document/d/13URoN20YF60CvgGrQQFPuR062cWhpOhIjHPafMhKyHc/preview"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: '#000' }}> <b>Skills</b> </h2>
                        <p>
                            I have skills in the following technologies:
                        </p>
                        <ul>
                            <li>JavaScript / TypeScript</li>
                            <li>React / Next.js</li>
                            <li>Python / Django</li>
                            <li>HTML / CSS / Tailwind</li>
                            <li>Git / GitHub</li>
                            <li>Linux / Networking</li>
                            <li>Rust / Tauri</li>
                        </ul>
                    </section>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: '#000' }}> <b>Contact</b> </h2>
                        <p>
                            Feel free to reach out to me via email at <a href="mailto:artostash@gmail.com" style={{ color: '#0070f3' }}>artostash@gmail.com</a>.
                        </p>
                    </section>
                </main>
                <footer style={{ margin: '1rem', borderTop: '1px solid #ccc', padding: '20px', textAlign: 'center', color: '#666' }}>
                    &copy; {new Date().getFullYear()} Artur Tashbolotov
                </footer>
            </div>
        </div>
    );
};

export default PortfolioPage;
