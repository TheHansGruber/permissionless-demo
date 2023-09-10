// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {MyNFT} from "../src/MyNFT.sol";

import {Script} from "forge-std/Script.sol";

contract MyNFTScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        MyNFT myNft = new MyNFT("My NFT", "NFT");

        vm.stopBroadcast();
    }
}