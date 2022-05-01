import React from 'react'
import styles from '../styles/Sale.module.css'
import eveningDress from '../resources/eveningdress.jpg'

function Sale() {
  return (
    <div className={styles.sale}>
      <header className={styles.header}>
        <dl>
          <dt>
            Sale
          </dt>
          <dd>
            Super sales
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
            -20%
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
            -20%
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
            -20%
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
            -20%
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
            -20%
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

export default Sale