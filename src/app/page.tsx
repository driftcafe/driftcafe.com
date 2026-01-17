import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main className="container" style={{ flex: 1 }}>
        <section style={{ padding: "4rem 0 4rem" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.5rem", lineHeight: 1.1, fontWeight: "600" }}>
            Hi, I&apos;m Josh.
          </h1>
          <p style={{ fontSize: "1.4rem", maxWidth: "750px", color: "var(--accent)", lineHeight: "1.4" }}>
            I turn AI capabilities into trustworthy products. I’m currently at Vianai designing enterprise GenAI. Previously at Microsoft working on Xbox and Kinect.
            I focus on frontier interaction design, technical prototyping with code, and building trust in AI systems.
          </p>
        </section>

        <section style={{ padding: "0rem 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
            <h2 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--muted)" }}>
              Selected Work
            </h2>
            <Link href="/work" className="view-all-link">View All &rarr;</Link>
          </div>

          <div className="grid">
            {featuredProjects.map((project) => (
              <div key={project.slug} style={{ gridColumn: "span 6" }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
