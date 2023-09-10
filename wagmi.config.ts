import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      deployments: {
        MyNFT: {
          [chains.baseGoerli.id]: '0xac88df20c094bef2fba5beed1cb623d5138f601c',
        },
      },
      project: './contracts',
    }),
    react(),
  ],
})
