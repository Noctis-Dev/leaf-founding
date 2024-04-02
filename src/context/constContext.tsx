
import { EnkryptSVG, PolkadotSVG, SubWalletSVG, TalismanSVG, NovaSVG } from '../utils/assets';

export const WALLET_ID_LOCAL_STORAGE_KEY = 'wallet';

const isNovaWallet = window?.walletExtension?.isNovaWallet;

export const WALLET = {
  'polkadot-js': {
    name: isNovaWallet ? 'Nova Wallet' : 'Polkadot JS',
    SVG: isNovaWallet ? NovaSVG : PolkadotSVG,
  },
  'subwallet-js': { name: 'SubWallet', SVG: SubWalletSVG },
  talisman: { name: 'Talisman', SVG: TalismanSVG },
  enkrypt: { name: 'Enkrypt', SVG: EnkryptSVG },
};

export const WALLETS = Object.entries(WALLET) as Entries<typeof WALLET>;



const ADDRESS = {
    NODE: import.meta.env.VITE_NODE_ADDRESS,
};
  
const LOCAL_STORAGE = {
    ACCOUNT: 'account',
};
  
export { ADDRESS, LOCAL_STORAGE };