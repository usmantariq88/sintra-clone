import styles from "./BrainHeader.module.css";

export default function BrainHeader() {
  return (
    <section className={styles.section}>
      <div className={styles.paddingGlobal}>
        <div className={styles.containerLarge}>
          <div className={styles.textAlignCenter}>
            <div className={styles.textBlock}>
              <h2 className={styles.heading}>
                They learn your business. Just like real workers.
              </h2>

              <div className={styles.spacer} />

              <p className={styles.paragraph}>
                Onboard your AI employees by sharing your brand context. Add documents, provide tone
                of voice, branded guidelines, and explain your business values. Every interaction
                adds to their understanding, so outputs stay consistent, on-brand, and aligned with
                how your business actually operates.
                <br />
                &zwj;
                <br />
                As your business grows, your AI workers grow with it - they learn from new work,
                adapt to requested changes, and improve over time without retraining or setup. Work
                with digital employee team that evolves alongside you, not tools you constantly have
                to reconfigure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
