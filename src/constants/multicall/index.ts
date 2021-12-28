import { ChainId } from 'jetswap-sdk-fantom'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x60b4ca945A88008F2058C633d576a581Fb882D72'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
