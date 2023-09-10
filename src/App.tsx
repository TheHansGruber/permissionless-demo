import { useAccount } from 'wagmi'
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { NftImage } from './components/NftImage'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>Demo App</h1>

      <ConnectButton />

      {isConnected && (
        <>
          <NftImage />
        </>
      )}
    </>
  )
}
