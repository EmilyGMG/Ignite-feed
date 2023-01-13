import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://plus.unsplash.com/premium_photo-1669930763060-799cb8e82293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

          <div className={styles.authorInfo}>
            <strong>Name user</strong>
            <span>web Developer</span>
          </div>
        </div>

        <time dataTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Texto demonstrativo</p>
        <p>Texto demonstrativo2</p>
        <p><a href=""> #novoprojeto</a></p>
      </div>
    </article>
  )
}
