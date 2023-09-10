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
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
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
// MyNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export const myNftABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
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
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
      { name: '_degrees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLogo',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: '_backgroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogoBackground',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: '_degrees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLogoDegrees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: '_foregroundColor', internalType: 'string', type: 'string' },
    ],
    name: 'setLogoForeground',
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
] as const

/**
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export const myNftAddress = {
  84531: '0xa26598928e7a402E745f9Fe048Ec7404189303e2',
} as const

/**
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export const myNftConfig = { address: myNftAddress, abi: myNftABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"ownerOf"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function useMyNftSetLogo<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogo'
        >['request']['abi'],
        'setLogo',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setLogo' }
    : UseContractWriteConfig<typeof myNftABI, 'setLogo', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogo'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogo', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogoBackground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function useMyNftSetLogoBackground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogoBackground'
        >['request']['abi'],
        'setLogoBackground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogoBackground'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogoBackground', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogoBackground'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogoBackground', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogoBackground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogoDegrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function useMyNftSetLogoDegrees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogoDegrees'
        >['request']['abi'],
        'setLogoDegrees',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogoDegrees'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogoDegrees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogoDegrees'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogoDegrees', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogoDegrees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogoForeground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function useMyNftSetLogoForeground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof myNftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof myNftABI,
          'setLogoForeground'
        >['request']['abi'],
        'setLogoForeground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setLogoForeground'
      }
    : UseContractWriteConfig<typeof myNftABI, 'setLogoForeground', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setLogoForeground'
      } = {} as any,
) {
  return useContractWrite<typeof myNftABI, 'setLogoForeground', TMode>({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogoForeground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogo"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function usePrepareMyNftSetLogo(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogo',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogo'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogoBackground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function usePrepareMyNftSetLogoBackground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogoBackground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogoBackground',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogoBackground'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogoDegrees"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function usePrepareMyNftSetLogoDegrees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogoDegrees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogoDegrees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogoDegrees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"setLogoForeground"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
 */
export function usePrepareMyNftSetLogoForeground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof myNftABI, 'setLogoForeground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof myNftAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: myNftABI,
    address: myNftAddress[84531],
    functionName: 'setLogoForeground',
    ...config,
  } as UsePrepareContractWriteConfig<typeof myNftABI, 'setLogoForeground'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link myNftABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link myNftABI}__ and `eventName` set to `"Transfer"`.
 *
 * [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xa26598928e7a402e745f9fe048ec7404189303e2)
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
