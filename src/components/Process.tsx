import styles from './Process.module.css';

const Process = () => {
  return (
    <section className={styles.processSection}>
      {/* Animated Glowing Glassmorphism Background Blobs */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      <div className={styles.container}>
        {/* Top Horizontal Divider Line */}
        <div className={styles.dividerLine}></div>

        {/* Process Cards Grid */}
        <div className={styles.processGrid}>
          {/* Card 1: Packing */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Packing</h3>
            <div className={styles.cardBox}>
              <svg 
                viewBox="0 0 100 100" 
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Big wheel */}
                <circle cx="36" cy="78" r="11" fill="currentColor" />
                {/* Thick Frame */}
                <path 
                  d="M23 18c-2.2 0-4 1.8-4 4s1.8 4 4 4h5.2l17.8 47.6c.7 1.8 2.4 3 4.3 3h26.7c2.2 0 4-1.8 4-4s-1.8-4-4-4H53.5L37.4 26H46c2.2 0 4-1.8 4-4s-1.8-4-4-4H23z" 
                  fill="currentColor" 
                />
                {/* Large Box */}
                <rect 
                  x="44" 
                  y="30" 
                  width="30" 
                  height="30" 
                  rx="3" 
                  transform="rotate(21 44 30)" 
                  fill="currentColor" 
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Moving */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Moving</h3>
            <div className={styles.cardBox}>
              <svg 
                viewBox="0 0 100 100" 
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left carrier skeleton */}
                <circle cx="28" cy="28" r="6.5" fill="currentColor" />
                <path 
                  d="M28 36l3 16" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M31 52l-8 20" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M31 52l6 20" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M30 43l12 2" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                {/* Right carrier skeleton */}
                <circle cx="72" cy="28" r="6.5" fill="currentColor" />
                <path 
                  d="M72 36l-3 16" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M69 52l-6 20" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M69 52l8 20" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M70 43l-12 2" 
                  stroke="currentColor" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                {/* Cardboard Box */}
                <rect 
                  x="42" 
                  y="40" 
                  width="16" 
                  height="15" 
                  rx="2.5" 
                  fill="currentColor" 
                />
              </svg>
            </div>
          </div>

          {/* Card 3: Shifting */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Shifting</h3>
            <div className={styles.cardBox}>
              <svg 
                viewBox="0 0 100 100" 
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cargo body */}
                <rect x="15" y="28" width="50" height="34" rx="4" fill="currentColor" />
                {/* Cab */}
                <path 
                  d="M65 36h12l9 12 v14 h-21 z" 
                  fill="currentColor" 
                />
                {/* Window */}
                <path d="M68 39h7l5 9h-12z" fill="rgba(255, 255, 255, 0.15)" />
                {/* Wheels */}
                <circle cx="30" cy="72" r="9" fill="currentColor" />
                <circle cx="66" cy="72" r="9" fill="currentColor" />
                {/* Wheel hubs */}
                <circle cx="30" cy="72" r="3" fill="rgba(255, 255, 255, 0.15)" />
                <circle cx="66" cy="72" r="3" fill="rgba(255, 255, 255, 0.15)" />
              </svg>
            </div>
          </div>

          {/* Card 4: Delivery */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Delivery</h3>
            <div className={styles.cardBox}>
              <svg 
                viewBox="0 0 100 100" 
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bottom base box part */}
                <path 
                  d="M22 46c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v20c0 5.5-4.5 10-10 10H32c-5.5 0-10-4.5-10-10V46z" 
                  fill="currentColor" 
                />
                {/* Top flaps */}
                {/* Left flap */}
                <path 
                  d="M22 34c0-5.5 4.5-10 10-10h15v12H22v-2z" 
                  fill="currentColor" 
                />
                {/* Right flap */}
                <path 
                  d="M53 24h15c5.5 0 10 4.5 10 10v2H53V24z" 
                  fill="currentColor" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider Line */}
        <div className={styles.dividerLineBottom}></div>
      </div>
    </section>
  );
};

export default Process;
