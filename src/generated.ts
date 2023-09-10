import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
  Address,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'testmethodss',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableABI = [
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathABI = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MyNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export const myNftABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setBackgroundColor',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
      { name: '_degrees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLogo1',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo1Background',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_degrees', internalType: 'uint256', type: 'uint256' }],
    name: 'setLogo1Degrees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo1Foreground',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
      { name: '_degrees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLogo2',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo2Background',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_degrees', internalType: 'uint256', type: 'uint256' }],
    name: 'setLogo2Degrees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo2Foreground',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
      { name: '_degrees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLogo3',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo3Background',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_degrees', internalType: 'uint256', type: 'uint256' }],
    name: 'setLogo3Degrees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo3Foreground',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
      { name: '_degrees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLogo4',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo4Background',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_degrees', internalType: 'uint256', type: 'uint256' }],
    name: 'setLogo4Degrees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogo4Foreground',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export const myNftAddress = {
  84531: '0x98FA892913006A636052C3c48C2b2F59C2EF39C0',
} as const

/**
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export const myNftConfig = { address: myNftAddress, abi: myNftABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MyToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const myTokenABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'baseTokenURI', internalType: 'string', type: 'string' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'svgData', internalType: 'string', type: 'string' },
    ],
    name: 'mintWithSVG',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newBaseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"number"`.
 */
export function useCounterNumber<
  TFunctionName extends 'number',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    functionName: 'number',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function useCounterIncrement<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'increment'
        >['request']['abi'],
        'increment',
        TMode
      > & { functionName?: 'increment' }
    : UseContractWriteConfig<typeof counterABI, 'increment', TMode> & {
        abi?: never
        functionName?: 'increment'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'increment', TMode>({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function useCounterSetNumber<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'setNumber'
        >['request']['abi'],
        'setNumber',
        TMode
      > & { functionName?: 'setNumber' }
    : UseContractWriteConfig<typeof counterABI, 'setNumber', TMode> & {
        abi?: never
        functionName?: 'setNumber'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'setNumber', TMode>({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"testmethodss"`.
 */
export function useCounterTestmethodss<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'testmethodss'
        >['request']['abi'],
        'testmethodss',
        TMode
      > & { functionName?: 'testmethodss' }
    : UseContractWriteConfig<typeof counterABI, 'testmethodss', TMode> & {
        abi?: never
        functionName?: 'testmethodss'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'testmethodss', TMode>({
    abi: counterABI,
    functionName: 'testmethodss',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function usePrepareCounterIncrement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'increment'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'increment'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function usePrepareCounterSetNumber(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"testmethodss"`.
 */
export function usePrepareCounterTestmethodss(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'testmethodss'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'testmethodss',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'testmethodss'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof counterABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: counterABI,
    ...config,
  } as UseContractEventConfig<typeof counterABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__ and `eventName` set to `"Transfer"`.
 */
export function useCounterTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof counterABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: counterABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof counterABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__.
 */
export function useErc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc165ABI, ...config } as UseContractReadConfig<
    typeof erc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({
    abi: erc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function useErc721EnumerableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721EnumerableBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721EnumerableGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721EnumerableIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"name"`.
 */
export function useErc721EnumerableName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721EnumerableOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721EnumerableSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721EnumerableSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useErc721EnumerableTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useErc721EnumerableTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721EnumerableTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc721EnumerableTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function useErc721EnumerableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721EnumerableABI, TFunctionName, TMode>({
    abi: erc721EnumerableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721EnumerableApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721EnumerableABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721EnumerableABI, 'approve', TMode>({
    abi: erc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721EnumerableSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc721EnumerableABI,
    'safeTransferFrom',
    TMode
  >({
    abi: erc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721EnumerableSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc721EnumerableABI,
    'setApprovalForAll',
    TMode
  >({
    abi: erc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721EnumerableTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721EnumerableABI, 'transferFrom', TMode>({
    abi: erc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function usePrepareErc721EnumerableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721EnumerableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721EnumerableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721EnumerableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721EnumerableABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721EnumerableABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721EnumerableSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721EnumerableABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721EnumerableABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721EnumerableSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721EnumerableABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721EnumerableABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721EnumerableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721EnumerableABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721EnumerableABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function useErc721EnumerableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721EnumerableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721EnumerableApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721EnumerableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function useIerc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, TFunctionName, TMode>({
    abi: ierc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'approve', TMode>({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'safeTransferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'setApprovalForAll', TMode>({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'transferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function usePrepareIerc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function useIerc721EnumerableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721EnumerableBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721EnumerableGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721EnumerableIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721EnumerableOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721EnumerableSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useIerc721EnumerableTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useIerc721EnumerableTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc721EnumerableTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function useIerc721EnumerableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721EnumerableABI, TFunctionName, TMode>({
    abi: ierc721EnumerableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721EnumerableApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721EnumerableABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721EnumerableABI, 'approve', TMode>({
    abi: ierc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721EnumerableSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721EnumerableABI,
    'safeTransferFrom',
    TMode
  >({
    abi: ierc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721EnumerableSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721EnumerableABI,
    'setApprovalForAll',
    TMode
  >({
    abi: ierc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721EnumerableTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721EnumerableABI, 'transferFrom', TMode>({
    abi: ierc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function usePrepareIerc721EnumerableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721EnumerableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721EnumerableSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721EnumerableABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721EnumerableSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721EnumerableABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721EnumerableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function useIerc721EnumerableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721EnumerableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721EnumerableApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721EnumerableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721MetadataGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721MetadataIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc721MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721MetadataOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721MetadataSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc721MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useIerc721MetadataTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, TFunctionName, TMode>({
    abi: ierc721MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'approve', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721MetadataSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'safeTransferFrom', TMode>(
    {
      abi: ierc721MetadataABI,
      functionName: 'safeTransferFrom',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721MetadataSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721MetadataABI,
    'setApprovalForAll',
    TMode
  >({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'transferFrom', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function usePrepareIerc721MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721MetadataSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721MetadataSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721MetadataApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function useIerc721ReceiverWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, TFunctionName, TMode>({
    abi: ierc721ReceiverABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721ReceiverOnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        'onERC721Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, 'onERC721Received', TMode>(
    {
      abi: ierc721ReceiverABI,
      functionName: 'onERC721Received',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function usePrepareIerc721ReceiverWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721ReceiverOnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721ReceiverABI,
      'onERC721Received'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721ReceiverABI,
    'onERC721Received'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"balanceOf"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"getApproved"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"isApprovedForAll"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"name"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"owner"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"ownerOf"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"symbol"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"tokenByIndex"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"tokenURI"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"totalSupply"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof myNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractRead({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof myNftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof myNftABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof myNftABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, TFunctionName, TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"approve"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftApprove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof myNftABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'approve', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"mint"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftMint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof myNftABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'mint' }
    : UseContractWriteConfig<typeof myNftABI, 'mint', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'mint', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftRenounceOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<typeof myNftABI, 'renounceOwnership', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'renounceOwnership', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<typeof myNftABI, 'safeTransferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'safeTransferFrom', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setApprovalForAll', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setApprovalForAll', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setBackgroundColor"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetBackgroundColor<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setBackgroundColor'
        >['request']['abi'],
        'setBackgroundColor',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setBackgroundColor'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setBackgroundColor', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setBackgroundColor'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setBackgroundColor', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setBackgroundColor',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo1<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo1'
        >['request']['abi'],
        'setLogo1',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setLogo1' }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo1', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo1'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo1', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo1Background<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo1Background'
        >['request']['abi'],
        'setLogo1Background',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo1Background'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo1Background', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo1Background'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo1Background', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1Background',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo1Degrees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo1Degrees'
        >['request']['abi'],
        'setLogo1Degrees',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo1Degrees'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo1Degrees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo1Degrees'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo1Degrees', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1Degrees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo1Foreground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo1Foreground'
        >['request']['abi'],
        'setLogo1Foreground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo1Foreground'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo1Foreground', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo1Foreground'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo1Foreground', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1Foreground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo2<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo2'
        >['request']['abi'],
        'setLogo2',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setLogo2' }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo2', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo2'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo2', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo2Background<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo2Background'
        >['request']['abi'],
        'setLogo2Background',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo2Background'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo2Background', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo2Background'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo2Background', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2Background',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo2Degrees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo2Degrees'
        >['request']['abi'],
        'setLogo2Degrees',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo2Degrees'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo2Degrees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo2Degrees'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo2Degrees', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2Degrees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo2Foreground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo2Foreground'
        >['request']['abi'],
        'setLogo2Foreground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo2Foreground'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo2Foreground', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo2Foreground'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo2Foreground', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2Foreground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo3<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo3'
        >['request']['abi'],
        'setLogo3',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setLogo3' }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo3', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo3'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo3', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo3Background<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo3Background'
        >['request']['abi'],
        'setLogo3Background',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo3Background'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo3Background', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo3Background'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo3Background', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3Background',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo3Degrees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo3Degrees'
        >['request']['abi'],
        'setLogo3Degrees',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo3Degrees'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo3Degrees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo3Degrees'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo3Degrees', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3Degrees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo3Foreground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo3Foreground'
        >['request']['abi'],
        'setLogo3Foreground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo3Foreground'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo3Foreground', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo3Foreground'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo3Foreground', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3Foreground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo4<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo4'
        >['request']['abi'],
        'setLogo4',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setLogo4' }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo4', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo4'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo4', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo4Background<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo4Background'
        >['request']['abi'],
        'setLogo4Background',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo4Background'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo4Background', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo4Background'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo4Background', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4Background',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo4Degrees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo4Degrees'
        >['request']['abi'],
        'setLogo4Degrees',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo4Degrees'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo4Degrees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo4Degrees'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo4Degrees', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4Degrees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftSetLogo4Foreground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo4Foreground'
        >['request']['abi'],
        'setLogo4Foreground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogo4Foreground'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo4Foreground', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo4Foreground'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo4Foreground', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4Foreground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<typeof myNftABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'transferFrom', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<typeof myNftABI, 'transferOwnership', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'transferOwnership', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"approve"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"mint"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'safeTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setApprovalForAll'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setBackgroundColor"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetBackgroundColor(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setBackgroundColor'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setBackgroundColor',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setBackgroundColor'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo1(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo1Background(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1Background'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1Background',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1Background'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo1Degrees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1Degrees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1Degrees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1Degrees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo1Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo1Foreground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1Foreground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo1Foreground',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo1Foreground'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo2(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo2Background(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2Background'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2Background',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2Background'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo2Degrees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2Degrees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2Degrees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2Degrees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo2Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo2Foreground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2Foreground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo2Foreground',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo2Foreground'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo3(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo3Background(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3Background'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3Background',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3Background'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo3Degrees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3Degrees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3Degrees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3Degrees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo3Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo3Foreground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3Foreground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo3Foreground',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo3Foreground'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo4(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4Background"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo4Background(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4Background'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4Background',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4Background'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4Degrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo4Degrees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4Degrees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4Degrees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4Degrees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo4Foreground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftSetLogo4Foreground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4Foreground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo4Foreground',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo4Foreground'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function usePrepareMyNftTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof myNftABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractEvent({
    abi: myNftABI,
    address: myNftAddress[84531],
    ...config,
  } as UseContractEventConfig<typeof myNftABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__ and `eventName` set to `"Approval"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof myNftABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractEvent({
    abi: myNftABI,
    address: myNftAddress[84531],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof myNftABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__ and `eventName` set to `"ApprovalForAll"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof myNftABI, 'ApprovalForAll'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractEvent({
    abi: myNftABI,
    address: myNftAddress[84531],
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof myNftABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof myNftABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractEvent({
    abi: myNftABI,
    address: myNftAddress[84531],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof myNftABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__ and `eventName` set to `"Transfer"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x98fa892913006a636052c3c48c2b2f59c2ef39c0)
 */
export function useMyNftTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof myNftABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return useContractEvent({
    abi: myNftABI,
    address: myNftAddress[84531],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof myNftABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__.
 */
export function useMyTokenRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMyTokenBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"getApproved"`.
 */
export function useMyTokenGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"getSVG"`.
 */
export function useMyTokenGetSvg<
  TFunctionName extends 'getSVG',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'getSVG',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useMyTokenIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"name"`.
 */
export function useMyTokenName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"owner"`.
 */
export function useMyTokenOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useMyTokenOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useMyTokenSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"symbol"`.
 */
export function useMyTokenSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useMyTokenTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useMyTokenTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useMyTokenTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useMyTokenTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof myTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: myTokenABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof myTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__.
 */
export function useMyTokenWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof myTokenABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof myTokenABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, TFunctionName, TMode>({
    abi: myTokenABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"approve"`.
 */
export function useMyTokenApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof myTokenABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'approve', TMode>({
    abi: myTokenABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"mintWithSVG"`.
 */
export function useMyTokenMintWithSvg<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'mintWithSVG'
        >['request']['abi'],
        'mintWithSVG',
        TMode
      > & { functionName?: 'mintWithSVG' }
    : UseContractWriteConfig<typeof myTokenABI, 'mintWithSVG', TMode> & {
        abi?: never
        functionName?: 'mintWithSVG'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'mintWithSVG', TMode>({
    abi: myTokenABI,
    functionName: 'mintWithSVG',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useMyTokenRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof myTokenABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'renounceOwnership', TMode>({
    abi: myTokenABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useMyTokenSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof myTokenABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'safeTransferFrom', TMode>({
    abi: myTokenABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useMyTokenSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof myTokenABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'setApprovalForAll', TMode>({
    abi: myTokenABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"setBaseURI"`.
 */
export function useMyTokenSetBaseUri<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'setBaseURI'
        >['request']['abi'],
        'setBaseURI',
        TMode
      > & { functionName?: 'setBaseURI' }
    : UseContractWriteConfig<typeof myTokenABI, 'setBaseURI', TMode> & {
        abi?: never
        functionName?: 'setBaseURI'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'setBaseURI', TMode>({
    abi: myTokenABI,
    functionName: 'setBaseURI',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMyTokenTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof myTokenABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'transferFrom', TMode>({
    abi: myTokenABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useMyTokenTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myTokenABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof myTokenABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof myTokenABI, 'transferOwnership', TMode>({
    abi: myTokenABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__.
 */
export function usePrepareMyTokenWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMyTokenApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"mintWithSVG"`.
 */
export function usePrepareMyTokenMintWithSvg(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'mintWithSVG'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'mintWithSVG',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'mintWithSVG'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareMyTokenRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareMyTokenSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareMyTokenSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"setBaseURI"`.
 */
export function usePrepareMyTokenSetBaseUri(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'setBaseURI'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'setBaseURI',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'setBaseURI'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMyTokenTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myTokenABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareMyTokenTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myTokenABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: myTokenABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myTokenABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myTokenABI}__.
 */
export function useMyTokenEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof myTokenABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: myTokenABI,
    ...config,
  } as UseContractEventConfig<typeof myTokenABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myTokenABI}__ and `eventName` set to `"Approval"`.
 */
export function useMyTokenApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof myTokenABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: myTokenABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof myTokenABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myTokenABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useMyTokenApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof myTokenABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: myTokenABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof myTokenABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myTokenABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useMyTokenOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof myTokenABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: myTokenABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof myTokenABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myTokenABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMyTokenTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof myTokenABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: myTokenABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof myTokenABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnableOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownableABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, TFunctionName, TMode>({
    abi: ownableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'renounceOwnership', TMode>({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'transferOwnership', TMode>({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function usePrepareOwnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    ...config,
  } as UseContractEventConfig<typeof ownableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__.
 */
export function useTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: testABI, ...config } as UseContractReadConfig<
    typeof testABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useTestIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'IS_TEST',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testABI}__.
 */
export function useTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof testABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof testABI, TFunctionName, TMode>({
    abi: testABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"failed"`.
 */
export function useTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testABI, 'failed'>['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof testABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof testABI, 'failed', TMode>({
    abi: testABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testABI}__.
 */
export function usePrepareTestWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof testABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testABI, 'failed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testABI, 'failed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__.
 */
export function useTestEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof testABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({ abi: testABI, ...config } as UseContractEventConfig<
    typeof testABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log"`.
 */
export function useTestLogEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_address"`.
 */
export function useTestLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_address',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_array"`.
 */
export function useTestLogArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_array',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useTestLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_bytes',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useTestLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_bytes32',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_int"`.
 */
export function useTestLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_address',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useTestLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_array',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_bytes',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_bytes32',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_decimal_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_decimal_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_decimal_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_decimal_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_decimal_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_string',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_string"`.
 */
export function useTestLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_string',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_uint"`.
 */
export function useTestLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"logs"`.
 */
export function useTestLogsEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'logs'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'logs',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'logs'>)
}
