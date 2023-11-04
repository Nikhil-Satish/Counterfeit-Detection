// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Trial{
    uint a=10;
    uint b=12;
    uint sum = 2;
    mapping(string => uint) public map;
    mapping(uint => string) check;
    // check public ch = check("Nik");
    // check[2] = "NIH";
    // map["nik"] = 3;
    function getResult(uint num1, uint num2) public returns(uint){
        sum=num1+num2;
        return sum;
    }
    function modString(string memory _name) public payable returns (uint){
        map[_name] = sum;
        return map[_name];
    }
    function giveString(string memory _name) public view returns (uint, string memory){
        return (map[_name], "hi");
    }
}