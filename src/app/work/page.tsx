import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Work() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="container" style={{ flex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
                <h1 style={{ fontSize: "3rem", marginBottom: "3rem" }}>Work</h1>
                <div className="grid">
                    {projects.map((project) => (
                        <div key={project.slug} className="col-mobile-full" style={{ gridColumn: "span 6" }}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
