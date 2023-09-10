import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      deployments: {
        MyNFT: {
          [chains.baseGoerli.id]: '0xa26598928e7a402e745f9fe048ec7404189303e2',
        },
      },
      project: './contracts',
    }),
    react(),
  ],
})
