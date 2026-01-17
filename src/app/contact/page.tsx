import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="container" style={{ flex: 1, paddingTop: "4rem", paddingBottom: "4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}>Get in Touch.</h1>
                    <p style={{ fontSize: "1.5rem", marginBottom: "3rem", color: "var(--muted)" }}>
                        Currently open to new opportunities and collaborations.
                    </p>
                    <a
                        href="mailto:hello@driftcafe.com"
                        style={{
                            fontSize: "2rem",
                            borderBottom: "2px solid var(--foreground)",
                            paddingBottom: "5px"
                        }}
                    >
                        hello@driftcafe.com
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
