pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Colors is ERC721Full {
   string[] public colors;
   mapping(string => bool) _colorsExists;

  constructor() ERC721Full("Colors", "CO") public {
  }

   function mint(string memory _colors) public {
     require(!_colorsExists[_colors]);
     uint _id = colors.push(_colors);
     _mint(msg.sender, _id);
     _colorsExists[_colors] = true;
   }
}