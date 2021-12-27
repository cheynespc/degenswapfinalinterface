# 🛢 Jet Swap Exchange

[JetSwap](https://fantom.jetswap.finance) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC) and Polygon. It is fast, cheap, and allows anyone to participate.

This repo is responsible for the **exchange** interface of the AMM: [exchangejetswap](https://fantom-exchange.jetswap.finance/#/swap)


# Deployment Guide
Here's how to modify and build Jetswap exchange project
## 1. Update WINGS token contract address
Go to ``` src/constants/constants/token/pancakeswap.json ```, search for WINGS token and change its address to the new deployed contract address.

## 2. Build project for deployment
Run this commands to build the project files
``` 
yarn
yarn build
```
Then you will get a ``` build ``` folder to deploy on [exchange.jetswap.finance](https://exchange.jetswap.finance)
