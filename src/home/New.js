import React from 'react'
import styles from '../styles/New.module.css'
import eveningDress from '../resources/eveningdress.jpg'

function New() {
  return (
    <div className={styles.new}>
      <header className={styles.header}>
        <dl>
          <dt>
            New
          </dt>
          <dd>
            You've never seen it before
          </dd>
        </dl>
        <aside>
          View all
        </aside>
      </header>
      <section>
        <figure>
          <img src={eveningDress} className={styles.product} />
          <span className={styles.discount}>
            NEW
          </span>
          <figcaption>
            <p className={styles.model}>
              Dorotty Perkins
            </p>
            <p className={styles.name}>
              Evening Dress
            </p>
            <p className={styles.price}>
              <s>
                15$
              </s>
              12$
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={eveningDress} className={styles.product} />
          <span className={styles.discount}>
            NEW
          </span>
          <figcaption>
            <p className={styles.model}>
              Dorotty Perkins
            </p>
            <p className={styles.name}>
              Evening Dress
            </p>
            <p className={styles.price}>
              <s>
                15$
              </s>
              12$
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={eveningDress} className={styles.product} />
          <span className={styles.discount}>
            NEW
          </span>
          <figcaption>
            <p className={styles.model}>
              Dorotty Perkins
            </p>
            <p className={styles.name}>
              Evening Dress
            </p>
            <p className={styles.price}>
              <s>
                15$
              </s>
              12$
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={eveningDress} className={styles.product} />
          <span className={styles.discount}>
            NEW
          </span>
          <figcaption>
            <p className={styles.model}>
              Dorotty Perkins
            </p>
            <p className={styles.name}>
              Evening Dress
            </p>
            <p className={styles.price}>
              <s>
                15$
              </s>
              12$
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={eveningDress} className={styles.product} />
          <span className={styles.discount}>
            NEW
          </span>
          <figcaption>
            <p className={styles.model}>
              Dorotty Perkins
            </p>
            <p className={styles.name}>
              Evening Dress
            </p>
            <p className={styles.price}>
              <s>
                15$
              </s>
              12$
            </p>
          </figcaption>
        </figure>
      </section>
    </div>
  )
}

export default New