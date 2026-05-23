import Link from 'next/link';
import { footerCompanyLinks, footerExploreLinks } from '@/data/navigation';
import { siteConfig } from '@/lib/site-config';

const towns = [
  { label: 'Lincoln', href: '/town-guides/lincoln' },
  { label: 'Skegness', href: '/town-guides/skegness' },
  { label: 'Stamford', href: '/town-guides/stamford' },
  { label: 'Louth', href: '/town-guides/louth' },
  { label: 'Boston', href: '/town-guides/boston' },
  { label: 'Spalding', href: '/town-guides/spalding' },
  { label: 'Horncastle', href: '/town-guides/horncastle' },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="dsn-foot" role="contentinfo">
      <div className="dsn-foot-grid">
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12 }}>
            Lincs <em style={{ fontStyle: 'italic', color: 'oklch(0.78 0.10 145)' }}>Staycation</em> Guide
          </h4>
          <p
            style={{
              color: 'oklch(0.78 0.01 250)',
              fontSize: 13.5,
              lineHeight: 1.55,
              marginBottom: 16,
              maxWidth: '36ch',
            }}
          >
            {siteConfig.description} {siteConfig.footerDisclaimer}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '5px 9px',
                background: 'oklch(0.30 0.018 250)',
                borderRadius: 999,
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '.04em',
              }}
            >
              EST. {siteConfig.establishedYear}
            </span>
            <span
              style={{
                padding: '5px 9px',
                background: 'oklch(0.30 0.018 250)',
                borderRadius: 999,
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '.04em',
              }}
            >
              {siteConfig.location.toUpperCase()}
            </span>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          {footerExploreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Towns</h4>
          {towns.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>For business</h4>
          {siteConfig.businessLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <div style={{ height: 14 }} />
          <h4>Company</h4>
          {footerCompanyLinks.slice(0, 5).map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="dsn-foot-bottom">
        <span>&copy; {year} {siteConfig.name}. An independent travel publication.</span>
        <span style={{ display: 'flex', gap: 18 }}>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/editorial-policy">Editorial</Link>
        </span>
      </div>
    </footer>
  );
}
