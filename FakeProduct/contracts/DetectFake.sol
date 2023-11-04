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

    mapping (string => product) productList;
    mapping (string => customer) customerList;
    mapping (string => retailer) retailerList;
    /*
    function createOwner() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function whoIsOwner() public view returns (address) {
        return owner;
    }
*/
    // Function to create a new code for the product
    function makeProduct(string memory _code, string memory _brand, string memory _model, uint _status, string memory _description, string memory _manufacturerName, string memory _manufacturerLocation) public payable returns (uint) {
        product memory newCode;
        newCode.brand = _brand;
        newCode.model = _model;
        newCode.status = _status;
        newCode.description = _description;
        newCode.manufacturerName = _manufacturerName;
        newCode.manufacturerLocation = _manufacturerLocation;
        // newCode.manufacturerTimestamp = _manufacturerTimestamp;
        productList[_code] = newCode;
        return 1;
    }

    // Function for showing product details if the person scanning the product is not the owner
    function getNotOwnedCodeDetails(string memory _code) public view returns (string memory, string memory, uint, string memory, string memory, string memory, string memory) {
        return (productList[_code].brand, productList[_code].model, productList[_code].status, productList[_code].description, productList[_code].manufacturerName, productList[_code].manufacturerLocation, productList[_code].manufacturerTimestamp);
    }

    // Function for showing product details if the person scanning the product is the owner
    function getOwnedCodeDetails(string memory _code) public view returns (string memory, string memory) {
        return (retailerList[productList[_code].retailer].name, retailerList[productList[_code].retailer].location);
    }

    // Function for creating a new retailer
    function addRetailerToCode(string memory _code, string memory _hashedEmailRetailer) public payable returns (uint) {
        productList[_code].retailer = _hashedEmailRetailer;
        return 1;
    }

    // Function for creating a new customer
    function createCustomer(string memory _hashedEmail, string memory _name, string memory _phone) public payable returns (bool) {
        if (customerList[_hashedEmail].isValue) {
            return false;
        }
        customer memory newCustomer;
        newCustomer.name = _name;
        newCustomer.phone = _phone;
        newCustomer.isValue = true;
        customerList[_hashedEmail] = newCustomer;
        return true;
    }

    function getCustomerDetails(string memory _code) public view returns (string memory, string memory) {
        return (customerList[_code].name, customerList[_code].phone);
    }

    function createRetailer(string memory _hashedEmail, string memory _retailerName, string memory _retailerLocation) public payable returns (uint) {
        retailer memory newRetailer;
        newRetailer.name = _retailerName;
        newRetailer.location = _retailerLocation;
        retailerList[_hashedEmail] = newRetailer;
        return 1;
    }

    function getRetailerDetails(string memory _code) public view returns (string memory, string memory) {
        return (retailerList[_code].name, retailerList[_code].location);
    }

}