import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="container page-enter" style={{ flex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
                <div className="grid">
                    <div style={{ gridColumn: "span 8" }}>
                        <h1 style={{ fontSize: "3rem", marginBottom: "3rem" }}>About</h1>

                        <div className="prose">
                            <p>
                                I'm a product designer who turns AI capabilities into trustworthy products. At Vianai, I was one of five people who built an experimental GenAI platform for conversational data analysis. That experiment validated product-market fit, became our flagship offering (hila), and scaled the team from 5 to 50+ people.
                            </p>
                            <p>
                                I prototype with code (React and TypeScript), which means I can quickly test interaction patterns and work directly with engineering teams. This technical foundation lets me design with a realistic understanding of what's possible—and what's worth building.
                            </p>

                            <div style={{ margin: "3rem 0" }}>
                                <Image
                                    src="/about-1.png"
                                    alt="Prototyping in VR and Home Banking"
                                    width={1200}
                                    height={600}
                                    style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                                />
                            </div>

                            <p>
                                I'm drawn to problems at the frontier of AI interaction design: How do we make AI reasoning transparent? How do we give users agency over AI behavior? How do we design trust into systems that are inherently probabilistic?
                            </p>
                            <p>
                                Outside of work, I'm a coffee enthusiast with a home espresso setup that's probably overkill, and I'm building a mobile AI app for financial coaching. I'm based in Seattle.
                            </p>

                            <div style={{ marginTop: "3rem" }}>
                                <Image
                                    src="/about-2.png"
                                    alt="Life in Seattle"
                                    width={1200}
                                    height={600}
                                    style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
