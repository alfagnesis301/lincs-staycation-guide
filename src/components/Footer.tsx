import Link from 'next/link';
import { footerExploreLinks, footerBusinessLinks, footerCompanyLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Lincs Staycation Guide - Home">
              <span className="text-2xl" role="img" aria-label="Compass icon">🧭</span>
              <span className="font-heading text-lg font-bold">
                Lincs <span className="text-sage-light">Staycation</span> Guide
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A practical local travel guide helping visitors and residents discover places to stay, eat and explore across Lincolnshire.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand mb-4">Explore</h3>
            <ul className="space-y-2.5" role="list">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Businesses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand mb-4">For Businesses</h3>
            <ul className="space-y-2.5" role="list">
              {footerBusinessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand mb-4">Company</h3>
            <ul className="space-y-2.5" role="list">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} Lincs Staycation Guide. Independent local travel directory for Lincolnshire.
          </p>
        </div>
      </div>
    </footer>
  );
}
