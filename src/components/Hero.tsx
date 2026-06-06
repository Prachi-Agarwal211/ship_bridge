import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      >
        <source src="/hero section/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.glassBox}>
          <h1>Welcome to <span className={styles.highlight}>Shipbridge Logistics</span></h1>
          <p className={styles.subtitle}>Your premier partner in comprehensive logistics solutions.</p>
          
          <ul className={styles.benefits}>
            <li>
              <span className={styles.check}>✓</span>
              Delivering the Right Way. Every Time.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              Seamless Shipping. Stronger Brands.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              Built for Scale, Speed & Reliability.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
