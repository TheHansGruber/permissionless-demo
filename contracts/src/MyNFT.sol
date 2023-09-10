// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string private backgroundColor = "";

    struct Logo {
        string backgroundColor;
        string foregroundColor;
        uint256 degrees;
    }

    Logo[] private logos;

    struct Parts {
        string part1;
        string part2;
        string part3;
        string part4;
        string part5;
        string part6;
        string part7;
        string part8;
        string part9;
        string part10;
        string part11;
    }

    Parts private parts;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        parts = Parts(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -70 445 445" fill="none">',
            '<rect x="-70" y="-70" width="445" height="445" fill="',
            '" style="stroke: #000000"/>',
            '<g transform="rotate(',
            ', 73, 73)"><g><circle cx="73" cy="73" r="73" fill="',
            '"/><path d="M73.323 123.729C101.617 123.729 124.553 100.832 124.553 72.5875C124.553 44.343 101.617 21.4463 73.323 21.4463C46.4795 21.4463 24.4581 42.0558 22.271 68.2887H89.9859V76.8864H22.271C24.4581 103.119 46.4795 123.729 73.323 123.729Z" fill="',
            '"/></g></g>',
            '<g transform="translate(155, 0) rotate(',
            '<g transform="translate(0, 155) rotate(',
            '<g transform="translate(155, 155) rotate(',
            '</svg>'
        );
        for (uint256 i = 0; i < 4; i++) {
            logos.push(Logo("#0052FF", "#FFFFFF", 0));
        }
    }

    function mint() public {
        _safeMint(msg.sender, totalSupply());
    }

    function tokenURI(uint256 _tokenId) override public view returns (string memory) {
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "NFT: ', toString(_tokenId), '", "description": "Onchain NFT", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(generateSVG())), '"}'))));
        return string(abi.encodePacked('data:application/json;base64,', json));
    }

    function generateSVG() internal view returns (string memory) {
        string[4] memory logoSVGs;
        for (uint256 i = 0; i < logos.length; i++) {
            logoSVGs[i] = generateLogoSVG(logos[i]);
        }

        string memory svg;

        {
            svg = string(
                abi.encodePacked(
                    parts.part1,
                    parts.part2,
                    backgroundColor,
                    parts.part3,
                    parts.part4,
                    logoSVGs[0],
                    parts.part8
                )
            );
        }

        {
            svg = string(
                abi.encodePacked(
                    svg,            
                    logoSVGs[1],
                    parts.part9,
                    logoSVGs[2],
                    parts.part10,
                    logoSVGs[3],
                    parts.part11
                )
            );
        }

        return svg;
    }

    function generateLogoSVG(Logo memory logo) internal view returns (string memory) {
        string memory svg =
            string(abi.encodePacked(
                toString(logo.degrees), parts.part5,
                logo.backgroundColor, parts.part6,
                logo.foregroundColor, parts.part7
            ));
        return svg;
    }

    function setBackgroundColor(string memory _backgroundColor) public {
        backgroundColor = _backgroundColor;
    }

    function setLogo(uint256 index, string memory _backgroundColor, string memory _foregroundColor, uint256 _degrees) internal {
        require(isHexString(_backgroundColor), "Invalid hex string");
        require(isHexString(_foregroundColor), "Invalid hex string");
        Logo storage logo = logos[index];
        logo.backgroundColor = _backgroundColor;
        logo.foregroundColor = _foregroundColor;
        logo.degrees = _degrees;
    }

    function setLogoBackground(uint256 index, string memory _backgroundColor) internal {
        require(isHexString(_backgroundColor), "Invalid hex string");
        Logo storage logo = logos[index];
        logo.backgroundColor = _backgroundColor;
    }

    function setLogoForeground(uint256 index, string memory _foregroundColor) internal {
        require(isHexString(_foregroundColor), "Invalid hex string");
        Logo storage logo = logos[index];
        logo.foregroundColor = _foregroundColor;
    }

    function setLogoDegrees(uint256 index, uint256 _degrees) internal {
        Logo storage logo = logos[index];
        logo.degrees = _degrees;
    }

    function setLogo1(string memory _backgroundColor, string memory _foregroundColor, uint256 _degrees) public {
        setLogo(0, _backgroundColor, _foregroundColor, _degrees);
    }

    function setLogo2(string memory _backgroundColor, string memory _foregroundColor, uint256 _degrees) public {
        setLogo(1, _backgroundColor, _foregroundColor, _degrees);
    }

    function setLogo3(string memory _backgroundColor, string memory _foregroundColor, uint256 _degrees) public {
        setLogo(3, _backgroundColor, _foregroundColor, _degrees);
    }

    function setLogo4(string memory _backgroundColor, string memory _foregroundColor, uint256 _degrees) public {
        setLogo(4, _backgroundColor, _foregroundColor, _degrees);
    }

    function setLogo1Background(string memory _backgroundColor) public {
        setLogoBackground(0, _backgroundColor);
    }

    function setLogo1Foreground(string memory _foregroundColor) public {
        setLogoForeground(0, _foregroundColor);
    }
    
    function setLogo1Degrees(uint256 _degrees) public {
        setLogoDegrees(0, _degrees);
    }

    function setLogo2Background(string memory _backgroundColor) public {
        setLogoBackground(1, _backgroundColor);
    }

    function setLogo2Foreground(string memory _foregroundColor) public {
        setLogoForeground(1, _foregroundColor);
    }
    
    function setLogo2Degrees(uint256 _degrees) public {
        setLogoDegrees(1, _degrees);
    }

    function setLogo3Background(string memory _backgroundColor) public {
        setLogoBackground(2, _backgroundColor);
    }

    function setLogo3Foreground(string memory _foregroundColor) public {
        setLogoForeground(2, _foregroundColor);
    }

    function setLogo3Degrees(uint256 _degrees) public {
        setLogoDegrees(2, _degrees);
    }

    function setLogo4Background(string memory _backgroundColor) public {
        setLogoBackground(3, _backgroundColor);
    }

    function setLogo4Foreground(string memory _foregroundColor) public {
        setLogoForeground(3, _foregroundColor);
    }

    function setLogo4Degrees(uint256 _degrees) public {
        setLogoDegrees(3, _degrees);
    }
    function toString(uint256 _number) internal pure returns (string memory) {
        if (_number == 0) {
            return "0";
        }
        uint256 temp = _number;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (_number != 0) {
            digits--;
            buffer[digits] = bytes1(uint8(48 + (_number % 10)));
            _number /= 10;
        }
        return string(buffer);
    }

    function isHexString(string memory _input) internal pure returns (bool) {
        if (bytes(_input).length % 2 == 0) {
            return false;
        }
        if (bytes(_input)[0] != bytes1('#')) {
            return false;
        }
        for (uint i = 1; i < bytes(_input).length; i++) {
            bytes1 char = bytes(_input)[i];
            if (
                !(char >= bytes1('0') && char <= bytes1('9')) &&
                !(char >= bytes1('a') && char <= bytes1('f')) &&
                !(char >= bytes1('A') && char <= bytes1('F'))
            ) {
                return false;
            }
        }
        return true;
    }
}