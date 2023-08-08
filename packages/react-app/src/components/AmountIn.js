import React, { useState, useEffect, useRef } from 'react'
import { chevronDown } from '../assets'
import styles from '../styles'
import { useOnClickOutside } from '../utils/helpers'

const AmountIn = ({ value, onChange, currencyValue, onSelect, currencies, isSwapping }) => {
    const [showList, setShowList] = useState(false)
    const [activeCurreny, setActiveCurrency] = useState("Select")
    const ref = useRef()

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
                disabled={isSwapping}
                onChange={(e) => typeof onChange === 'function' && onChange(e.target.value)}
                placeholder='0-0'
                type='number'
                value={value}
            />

            <div
                className='relative'
                onClick={() => setShowList((prev) => !prev)}>
                <button className={styles.currencyButton}>
                    {activeCurreny} ETH
                    <img
                        className={`w-4, h-4 object-contain ml-2 ${showList ? 'rotate-180' : 'rotate-0'}`}
                        src={chevronDown}
                        alt='chevronDown' />
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
                                    className={`${styles.currencyListItem} ${activeCurreny === tokenName ? 'bg-site-dim2' : ''} cursor-pointer`}
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

export default AmountIn