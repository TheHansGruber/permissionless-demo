import { useAccount } from 'wagmi'
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Account } from './components/Account'
// import { Connect } from './components/Connect'
// import { Counter } from './components/Counter'
// import { NetworkSwitcher } from './components/NetworkSwitcher'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>Demo App</h1>

      <ConnectButton />

      {isConnected && (
        <>
          <Account />
        </>
      )}
    </>
  )
}
