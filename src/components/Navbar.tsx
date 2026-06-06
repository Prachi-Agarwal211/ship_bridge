import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { SERVICES_DATA } from '@/data/services';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image 
            src="/hero section/logo.jpeg" 
            alt="Company Logo" 
            width={80} 
            height={80} 
            className={styles.logo}
          />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li className={styles.dropdownContainer}>
          <Link href="/#services" className={styles.dropdownTrigger}>
            Services <span className={styles.chevron}>▼</span>
          </Link>
          <ul className={styles.dropdownMenu}>
            {SERVICES_DATA.map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li><Link href="/product">Product</Link></li>
        <li><Link href="/about">Company</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/franchise">Franchise</Link></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className={styles.placeholder}></div>
    </nav>
  );
};

export default Navbar;
