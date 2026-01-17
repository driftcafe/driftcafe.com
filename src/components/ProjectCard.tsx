import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    slug: string;
    image?: string;
    timeline?: string;
}

export default function ProjectCard({ title, description, slug, image, timeline }: ProjectCardProps) {
    let displayImage = image;

    if (image && (image.includes('youtube.com') || image.includes('youtu.be'))) {
        try {
            if (image.startsWith('http')) {
                const url = new URL(image);
                const videoId = url.searchParams.get('v');
                if (videoId) {
                    displayImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                }
            }
        } catch (e) {
            // Fallback to original image
        }
    }

    return (
        <Link href={`/work/${slug}`} className="project-card" style={{ display: 'block', textDecoration: 'none' }}>
            <div style={{ background: '#1A1A1A', aspectRatio: '16/9', borderRadius: '14px', position: 'relative', overflow: 'hidden' }}>
                {/* Placeholder for image if not provided */}
                {displayImage ? (
                    <>
                        <Image src={displayImage} alt={title} fill style={{ objectFit: 'cover' }} className="card-image" />
                        {/* Dark tint overlay for legibility */}
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
                        {/* Extra gradient for top-left text area */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(0,0,0,0.5), transparent)' }} />
                    </>
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
                        Preview
                    </div>
                )}

                <div className="card-content" style={{ position: 'absolute', top: 0, left: 0, padding: '2rem', zIndex: 10 }}>
                    <h3 style={{ fontSize: '1.5em', marginBottom: '0.25rem', color: '#FFFFFF', fontWeight: '500' }}>{title}</h3>
                    <p style={{ color: '#CCCCCC', fontSize: '1rem' }}>{description}</p>
                </div>
            </div>
        </Link>
    );
}
