import React, { useState, useEffect, useRef } from 'react'
import { chevronDown } from '../assets'
import styles from '../styles'
import { useOnClickOutside, useAmountsOut } from '../utils/helpers'
import { formatUnits } from 'ethers/lib/utils'

const AmountOut = ({ fromToken,
    toToken,
    amountIn,
    pairContract,
    currencyValue,
    onSelect,
    currencies }) => {
    const [showList, setShowList] = useState(false)
    const [activeCurreny, setActiveCurrency] = useState("Select")
    const ref = useRef()
    const amountOut = useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0

    useOnClickOutside(ref, () => setShowList(false))

    useEffect(() => {

        if (Object.keys(currencies)?.includes(currencyValue)) {
            setActiveCurrency(currencies[currencyValue])
        } else {
            setActiveCurrency('Select')
        }

    }, [currencies, currencyValue])


    return (
        <div className={styles.amountContainer}>
            <input
                className={styles.amountInput}
                disabled
                placeholder='0-0'
                type='number'
                value={formatUnits(amountOut)}
            />

            <div className='relative' onClick={() => setShowList((prev) => !prev)}>
                <button className={styles.currencyButton}>
                    {activeCurreny} ETH
                    <img className={`w-4, h-4 object-contain ml-2 ${showList ? 'rotate-180' : 'rotate-0'}`} src={chevronDown} alt='chevronDown' />
                </button>

                {
                    showList && <ul ref={ref} className={styles.currencyList}>
                        {
                            Object.entries(currencies)?.map(([token, tokenName], index) => (
                                <li
                                    onClick={() => {
                                        if (typeof onSelect === 'function') onSelect(token)
                                        setActiveCurrency(tokenName)
                                        setShowList(false)
                                    }}
                                    key={index}
                                    className={styles.currencyListItem}
                                >
                                    {tokenName}
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>

        </div>
    )
}

export default AmountOut