import { MenuEntry } from 'loopswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://degenhaus-serfarmsnpools.netlify.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'The Grow Room',
    icon: 'PoolIcon',
    href: 'https://degenhaus-serfarmsnpools.netlify.app/farms',
  },
  {
    label: 'Token Charts',
    icon: 'InfoIcon',
    items: [
      
      {
        label: 'Analytics',
        href: 'https://kek.tools/t/0x9f3c6e1bd483cd977df9b36734e1cd684f1be621?pair=0xae5fa70b5dc414fd1e0b9241bd34b67369eaa02d',

      },
      {
        label: 'Dope on KEK',
        href: 'https://kek.tools/t/0x9f3c6e1bd483cd977df9b36734e1cd684f1be621?pair=0xae5fa70b5dc414fd1e0b9241bd34b67369eaa02d',
      },
      {
        label: 'Trip on KEK',
        href: 'https://kek.tools/t/0xd948efcc99be419ca9bdace89b2bec31edf13adb',

      },
      {
        label: 'Blow on KEK',
        href: 'https://kek.tools/t/0x63C4DbC02c6198daaE6adac6190d575541E2E2e0',

      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Documents',
        href: 'https://docs.degen.haus',
      },
      {
        label: 'Blog',
        href: 'https://degen.haus/blog',
      },
      {
        label: 'Main Site Degen Haus',
        href: 'https://degen.haus',
      },
      {
        label: 'Party Form',
        href: 'https://www.degen.haus/party-deals',
      },
    ],
},
]

export default config
