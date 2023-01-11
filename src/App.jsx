import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}></div>
    </>
  )
}

export default App
