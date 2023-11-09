// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract DetectFake {
    address owner;
    struct product {
        uint status;
        string brand;
        string model;
        string description;
        string manufacturerName;
        string manufacturerLocation;
        string manufacturerTimestamp;
        string retailer;
        string[] customers;
    }

    // A struct which helps create a new customer
    struct customer {
        string name;
        string phone;
        string[] code;
        bool isValue;
    }

    struct retailer {
        string name;
        string location;
    }

    mapping (uint => product) productList;
    mapping (uint => customer) customerList;
    mapping (uint => retailer) retailerList;

    uint public mapLen = 0;
    uint[15] public nums;
    uint[] public codeList;

    function getProductCodes() public view returns(uint[] memory){
        return codeList;
    }
    function getNums() public view returns(uint[15] memory){
        return nums;
    }
    function pushNums(uint num) public payable {
        // return 1;
        nums[mapLen] = num;
        mapLen = mapLen+1;
    }
    // Function to create a new code for the product
    function makeProduct(uint _code, string memory _brand, string memory _model, uint _status, string memory _description, string memory _manufacturerName, string memory _manufacturerLocation) public payable returns (uint) {
        product memory newCode;
        newCode.brand = _brand;
        newCode.model = _model;
        newCode.status = _status;
        newCode.description = _description;
        newCode.manufacturerName = _manufacturerName;
        newCode.manufacturerLocation = _manufacturerLocation;
        // newCode.manufacturerTimestamp = _manufacturerTimestamp;
        productList[_code] = newCode;
        codeList.push(1022);
        // mapLen = mapLen+1;
        return 1;
    }

    // Function for showing product details if the person scanning the product is not the owner
    function getNotOwnedCodeDetails(uint _code) public view returns (string memory, string memory, uint, string memory, string memory, string memory) {
        return (productList[_code].brand, productList[_code].model, productList[_code].status, productList[_code].description, productList[_code].manufacturerName, productList[_code].manufacturerLocation);
    }

    // Function for showing product details if the person scanning the product is the owner
    // function getOwnedCodeDetails(uint _code) public view returns (string memory, string memory) {
    //     return (retailerList[productList[_code].retailer].name, retailerList[productList[_code].retailer].location);
    // }

    // Function for creating a new retailer
    function addRetailerToCode(uint _code, string memory _hashedEmailRetailer) public payable returns (uint) {
        productList[_code].retailer = _hashedEmailRetailer;
        return 1;
    }

    // Function for creating a new customer
    // function createCustomer(string memory _hashedEmail, string memory _name, string memory _phone) public payable returns (bool) {
    //     if (customerList[_hashedEmail].isValue) {
    //         return false;
    //     }
    //     customer memory newCustomer;
    //     newCustomer.name = _name;
    //     newCustomer.phone = _phone;
    //     newCustomer.isValue = true;
    //     customerList[_hashedEmail] = newCustomer;
    //     return true;
    // }

    function getCustomerDetails(uint _code) public view returns (string memory, string memory) {
        return (customerList[_code].name, customerList[_code].phone);
    }

    function createRetailer(uint _hashedEmail, string memory _retailerName, string memory _retailerLocation) public payable returns (uint) {
        retailer memory newRetailer;
        newRetailer.name = _retailerName;
        newRetailer.location = _retailerLocation;
        retailerList[_hashedEmail] = newRetailer;
        return 1;
    }

    function getRetailerDetails(uint _code) public view returns (string memory, string memory) {
        return (retailerList[_code].name, retailerList[_code].location);
    }

}