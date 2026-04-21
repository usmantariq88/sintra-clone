import styles from "./Present.module.css";

export default function Present() {
  return (
    <section className={styles.presentSection}>
      <div className={styles.presentGlow} />
      <div className={styles.presentGrid}>
        <div className={styles.presentImageCol}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/672384f30ff5f820be7412d1_present-mockup.avif"
            alt=""
            sizes="(max-width: 1023px) 100vw, 720px"
            className={styles.presentImage}
          />
        </div>
        <div className={styles.presentTextCol}>
          <div className={styles.presentTextPanel}>
            <h2 className={styles.presentTitle}>
              Work globally with no extra effort.
            </h2>

            <p className={styles.presentParagraph}>
              <strong className={styles.presentStrong}>
                Speaks in 100+ languages.{" "}
              </strong>
              Sintra&apos;s digital AI employees are built to work across different markets - write
              social media content in Italian, answer German emails, support your Spanish
              e-commerce store, or build websites in French. Forget hiring local teams or buying
              multiple tools. Enter foreign markets with confidence using one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
