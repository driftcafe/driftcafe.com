import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <article className="container" style={{ flex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
                <header style={{ marginBottom: "2rem", maxWidth: "800px" }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{project.title}</h1>
                    <p style={{ fontSize: "1.25rem", color: "var(--muted)" }}>{project.company} · {project.category}</p>
                </header>

                <div style={{ display: "grid", gap: "3rem" }}>
                    <div style={{ background: "var(--gray-100)", aspectRatio: "16/9", width: "100%", borderRadius: "14px", overflow: "hidden", position: "relative" }}>
                        {project.image ? (
                            project.image.includes('youtube.com') || project.image.includes('youtu.be') ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={project.image.replace('watch?v=', 'embed/')}
                                    title={project.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                />
                            ) : (
                                <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} unoptimized />
                            )
                        ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>
                                Hero Image Placeholder
                            </div>
                        )}
                    </div>

                    <div style={{ width: "100%" }}>
                        <div style={{ maxWidth: "90%" }}>
                            <p style={{ fontSize: "2rem", lineHeight: "1.2", color: "var(--foreground)", marginBottom: "4rem", fontWeight: "400", letterSpacing: "-0.03em" }}>
                                {project.description}
                            </p>

                            <div style={{ textAlign: "left", marginBottom: "5rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
                                    <div>
                                        <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Role</span>
                                        <span style={{ fontSize: "1.2rem" }}>{project.role}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Team</span>
                                        <span style={{ fontSize: "1.2rem" }}>{project.team}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Timeline</span>
                                        <span style={{ fontSize: "1.2rem" }}>{project.timeline}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Impact</span>
                                        <span style={{ fontSize: "1.2rem" }}>{project.outcome}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ maxWidth: "90%" }}>
                            {project.content ? (
                                <div className="prose" dangerouslySetInnerHTML={{ __html: project.content }} />
                            ) : (
                                <p>Content coming soon.</p>
                            )}
                        </div>
                    </div>

                    <div style={{ marginTop: "6rem", textAlign: "center" }}>
                        <Link href="/work" className="view-all-link" style={{ fontSize: "1rem" }}>
                            &larr; Back to Work
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </div >
    );
}
