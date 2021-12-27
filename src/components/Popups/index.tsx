import React from 'react'
import styled from 'styled-components'
import { Button, Text } from 'loopswap-uikit'
import { TwitterShareButton } from 'react-share'
import { useActivePopups } from '../../state/application/hooks'
import { AutoColumn } from '../Column'
import PopupItem from './PopupItem'

const MobilePopupWrapper = styled.div<{ height: string | number }>`
  position: relative;
  max-width: 100%;
  height: ${({ height }) => height};
  margin: ${({ height }) => (height ? '0 auto;' : 0)};
  margin-bottom: ${({ height }) => (height ? '20px' : 0)}};
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const MobilePopupInner = styled.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }

  .share-wrapper {
    padding: 0px 20px 20px;
    .share-text {
      max-width: 300px;
      margin-bottom: 20px;
    }
  }
`

const FixedPopupColumn = styled(AutoColumn)`
  position: fixed;
  top: 64px;
  right: 1rem;
  max-width: 355px !important;
  width: 100%;
  z-index: 2;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`

export default function Popups() {
  // get all popups
  const activePopups = useActivePopups()
  const content: any = activePopups?.length > 0 ? activePopups[0].content : null
 
  return (
    <>
      <FixedPopupColumn gap="20px">
        {activePopups.map((item) => (
          <PopupItem key={item.key} content={item.content} popKey={item.key} removeAfterMs={item.removeAfterMs} />
        ))}
      </FixedPopupColumn>
      <MobilePopupWrapper height={activePopups?.length > 0 ? 'fit-content' : 0}>
        <MobilePopupInner>
          {activePopups // reverse so new items up front
            .slice(0)
            .reverse()
            .map((item) => (
              <PopupItem key={item.key} content={item.content} popKey={item.key} removeAfterMs={item.removeAfterMs} />
            ))}
          {content && (
            <div className="share-wrapper">
              <Text className="share-text">
                Share your trade on Twitter with a simple click of a button for a chance to win huge weekly prizes.
              </Text>
              <TwitterShareButton
                url="https://fantom.jetswap.finance"
                title={`🚀 I've just ${content.txn.summary.replace('Swap', 'swapped')} on @Jetfuelfinance\n\n`}
                via={` https://ftmscan.com/tx/${content.txn.hash}\n\nShare your trade and enter to win $1,000! 🤑\n#JetswapTrading #jetswap #fantom #ftm`}
                hashtags={[]}
              >
                <Button>
                  Twitter
                  <img src="images/twitter.svg" alt="twitter" style={{ marginLeft: 4 }} />
                </Button>
              </TwitterShareButton>
            </div>
          )}
        </MobilePopupInner>
      </MobilePopupWrapper>
    </>
  )
}