import React from "react"
import styles from './styles'
import { uniswapLogo } from "./assets"
import { useEthers } from '@usedapp/core'
import { Exchange, Loader, WalletButton } from "./components"
import { usePools } from './hooks'

const App = () => {
  const { account } = useEthers()
  const [loading, pools] = usePools()

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap-logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap 2.0</h1>
          <p className={styles.subTitle}>Exchange Tokens in seconds</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {
                  account ? loading ? <Loader title={'Loading pools, Please wait!'} /> : <Exchange pools={pools} /> : <Loader title='Please connect your wallet.' />
                }
                {/* <p className='text-white'>{account}</p> */}
              </div>
              <div className="blue_gradient" />


            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default App;