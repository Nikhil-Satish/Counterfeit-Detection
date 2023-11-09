// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Trial{
    uint a=10;
    uint b=12;
    uint public sum = 2;
    mapping(string => uint) public map;
    mapping(uint => string) check;
    function getResult(uint num1, uint num2) public payable returns(uint){
        sum=num1+num2;
        return sum;
    }
    function modString(string memory _name) public payable{
        map[_name] = sum;
    }
    function getMapVal(string memory _name) public view returns (uint){
        return map[_name];
    }
    function giveString(string memory _name) public view returns (uint, string memory){
        return (map[_name], "hi");
    }
    function modSum() public payable returns(uint){
        sum = sum+3;
        return sum;
    }
    function getSum() public view returns(uint){
        return sum;
    }
}