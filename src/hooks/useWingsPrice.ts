import { useEffect, useState, useCallback } from 'react'
import { AbiItem } from 'web3-utils'
import { getWeb3NoAccount } from 'utils/web3'
import UniV2LPABI from 'constants/abis/UniV2LP.json'
import BigNumber from 'bignumber.js'
import useBlock from './useBlock'

const web3 = getWeb3NoAccount()
const FantomUSDTPairAddress = '0x6038719d253603971b0df8d03de7ee17bd93ff1a'
const FantomUsdtPairContract = new web3.eth.Contract(UniV2LPABI as unknown as AbiItem, FantomUSDTPairAddress)

const WingsFantomPairAddress = '0xe7e90f5a767406eff87fdad7eb07ef407922ec1d'
const WingsFantomPairContract = new web3.eth.Contract(UniV2LPABI as unknown as AbiItem, WingsFantomPairAddress)

const useWingsPrice = () => {
  const [price, setPrice] = useState(0)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    try {
      const fantomObj = await FantomUsdtPairContract.methods.getReserves().call();
      if (!new BigNumber(fantomObj._reserve1).eq(new BigNumber(0))) {
        const fantomPrice = new BigNumber(fantomObj._reserve0).div(fantomObj._reserve1).times(1e12)
        const wingsObj = await WingsFantomPairContract.methods.getReserves().call();
        if (!new BigNumber(wingsObj._reserve1).eq(new BigNumber(0))) {
          const wingsPrice = new BigNumber(wingsObj._reserve0).div(wingsObj._reserve1).times(fantomPrice)
          if (!wingsPrice.isEqualTo(price)) {
            setPrice(wingsPrice.toNumber())
          }
        }
      }
    } catch (e) {
      setPrice(0)
     }
  }, [price])

  useEffect(() => {
    if (FantomUsdtPairContract && WingsFantomPairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block])

  return price
}

export default useWingsPrice
