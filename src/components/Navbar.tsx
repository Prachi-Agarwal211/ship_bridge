'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '@/data/services';
import { INDUSTRIES_DATA } from '@/data/industries';
import MagneticButton from '@/components/animations/MagneticButton';
import styles from './Navbar.module.css';

const ServiceIcon = ({ id }: { id: string }) => {
  const cls = styles.megaMenuSvgIcon;
  switch (id) {
    case 'household':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
    case 'office':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>;
    case 'warehouse':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.35A2 2 0 013.26 6.5l8-3.2a2 2 0 011.48 0l8 3.2A2 2 0 0122 8.35z"/><path d="M6 18h12"/><path d="M6 14h12"/></svg>;
    case 'local':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
    case 'vehicle':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>;
    case 'exhibition':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
    default:
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>;
  }
};

const IndustryIcon = ({ id }: { id: string }) => {
  const cls = styles.megaMenuSvgIcon;
  switch (id) {
    case 'fmcg':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>;
    case 'healthcare':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>;
    case 'automotive':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>;
    case 'ecommerce':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
    case 'apparel':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2 12 5 8 2 3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>;
    case 'engineering':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;
    case 'hitech':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    case 'books':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>;
    case 'alliance':
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
    default:
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>;
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 80);

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = height > 0 ? (scrollY / height) * 100 : 0;
        document.documentElement.style.setProperty('--scroll-progress', `${Math.min(progress, 100)}%`);

        // Hide on scroll down, show on scroll up
        if (scrollY > 100) {
          setHidden(scrollY > lastScrollY.current);
        } else {
          setHidden(false);
        }
        lastScrollY.current = scrollY;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className={`${styles.scrollProgress} ${hidden ? styles.hidden : ''}`} style={{ width: 'var(--scroll-progress, 0%)' }} />
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${hidden && !menuOpen ? styles.hidden : ''}`}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logoContainer}>
            <Image 
              src="/logo/logo_new.png" 
              alt="ShipBridge Logo" 
              width={80} 
              height={80} 
              className={styles.logo}
              sizes="80px"
              priority
            />
            <div className={styles.brandText}>
              <span className={styles.brandName}>SHIPBRIDGE</span>
              <span className={styles.brandTag}>LOGISTICS</span>
            </div>
          </Link>

          <ul className={styles.desktopLinks}>
            <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
            
            <li className={styles.dropdownContainer}>
              <button className={styles.dropdownTrigger}>
                Services <span className={styles.chevron}>▼</span>
              </button>
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuInner}>
                  {SERVICES_DATA.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`} className={styles.megaMenuItem}>
                      <div className={styles.megaMenuIcon}><ServiceIcon id={service.id} /></div>
                      <div className={styles.megaMenuContent}>
                        <h4>{service.title}</h4>
                        <p>{service.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className={styles.dropdownContainer}>
              <button className={styles.dropdownTrigger}>
                Industries <span className={styles.chevron}>▼</span>
              </button>
              <div className={`${styles.megaMenu} ${styles.wideMenu}`}>
                <div className={`${styles.megaMenuInner} ${styles.fourColGrid}`}>
                  {INDUSTRIES_DATA.map((industry) => {
                    const hasDedicatedPage = ['apparel', 'books', 'healthcare', 'fmcg', 'automotive', 'engineering', 'hitech', 'alliance'].includes(industry.id);
                    const linkHref = hasDedicatedPage ? `/industries/${industry.id}` : `/services/household#booking-form?industry=${industry.id}`;
                    return (
                      <Link key={industry.id} href={linkHref} className={styles.megaMenuItem}>
                        <div className={styles.megaMenuIcon}><IndustryIcon id={industry.id} /></div>
                        <div className={styles.megaMenuContent}>
                          <h4>{industry.title}</h4>
                          <p>{industry.subtitle}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
            <li><Link href="/product" className={pathname === '/product' ? styles.active : ''}>Product</Link></li>
            <li><Link href="/about" className={pathname === '/about' ? styles.active : ''}>Company</Link></li>
            <li><Link href="/careers" className={pathname === '/careers' ? styles.active : ''}>Careers</Link></li>
            <li><Link href="/franchise" className={pathname === '/franchise' ? styles.active : ''}>Franchise</Link></li>
          </ul>

          <div className={styles.navActions}>
            <MagneticButton strength={25}>
              <Link href="/services/household#booking-form" className={`${styles.ctaBtn} global-btn`}>
                <span className="global-btn-text">Get a Quote</span>
              </Link>
            </MagneticButton>
            
            <button 
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className={styles.mobileLinks}>
              {['Home', 'Product', 'About', 'Careers', 'Franchise'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={styles.mobileMenuLink}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <div className={styles.mobileServicesDivider}>SERVICES</div>
              <div className={styles.mobileServicesGrid}>
                {SERVICES_DATA.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    <Link href={`/services/${service.id}`} className={styles.mobileServiceChip}>
                      {service.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className={styles.mobileServicesDivider}>INDUSTRIES</div>
              <div className={styles.mobileServicesGrid}>
                {INDUSTRIES_DATA.map((industry, i) => {
                  const hasDedicatedPage = ['apparel', 'books', 'healthcare', 'fmcg', 'automotive', 'engineering', 'hitech', 'alliance'].includes(industry.id);
                  const linkHref = hasDedicatedPage ? `/industries/${industry.id}` : `/services/household#booking-form?industry=${industry.id}`;
                  return (
                    <motion.div
                      key={industry.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                    >
                      <Link href={linkHref} className={styles.mobileServiceChip}>
                        {industry.icon} {industry.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
