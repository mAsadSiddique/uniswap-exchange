import React from "react"
import styles from './styles'
import { uniswapLogo } from "./assets"
import { useEthers } from '@usedapp/core'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.headers}>
          <img src={uniswapLogo} alt="uniswap-logo" className="h-16 w-16 object-contain" />
        </header>
      </div>
    </div>)
}

export default App;