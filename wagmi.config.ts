import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      deployments: {
        MyNFT: {
          [chains.baseGoerli.id]: '0x98fa892913006a636052c3c48c2b2f59c2ef39c0',
        },
      },
      project: './contracts',
    }),
    react(),
  ],
})
