"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <header style={{ padding: '1.5rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Image src="/logo.png" alt="Josh Campbell" width={28} height={28} className="logo" />
                </Link>
                <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem' }}>
                    <Link
                        href="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/work"
                        className={`nav-link ${isActive('/work') ? 'active' : ''}`}
                    >
                        Work
                    </Link>
                    <Link
                        href="/about"
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
