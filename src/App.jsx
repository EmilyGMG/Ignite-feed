import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
         <Sidebar />
        <main>
          <Post 
            author="author name"
            content="lorem text"
          />
          <Post 
            author="author name 2"
            content="lorem text 2"
          />
        </main>
      </div>
    </>
  )
}

export default App
