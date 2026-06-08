'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '@/data/services';
import MagneticButton from '@/components/animations/MagneticButton';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = height > 0 ? (winScroll / height) * 100 : 0;
        document.documentElement.style.setProperty('--scroll-progress', `${Math.min(progress, 100)}%`);
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
      <div className={styles.scrollProgress} style={{ width: 'var(--scroll-progress, 0%)' }} />
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
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
                  {SERVICES_DATA.map((service) => {
                    const iconMap: Record<string, string> = {
                      household: "🏠",
                      office: "🏢",
                      warehouse: "🏭",
                      local: "🚚",
                      vehicle: "🚗",
                      exhibition: "🎪"
                    };
                    return (
                      <Link key={service.id} href={`/services/${service.id}`} className={styles.megaMenuItem}>
                        <div className={styles.megaMenuIcon}>{iconMap[service.id] || "📦"}</div>
                        <div className={styles.megaMenuContent}>
                          <h4>{service.title}</h4>
                          <p>{service.subtitle}</p>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
