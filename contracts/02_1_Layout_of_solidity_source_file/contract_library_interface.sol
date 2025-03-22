// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Smart contract example with Interface and Library

interface IGreeter {
    function greet() external view returns (string memory);
}

library Math {
    function add(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }
}

contract MyGreeter is IGreeter {
    using Math for uint;

    string private greeting = "Hello, Solidity!";
    uint public counter;

    // Implements interface function
    function greet() external view override returns (string memory) {
        return greeting;
    }

    // Uses the Math library
    function increaseCounter(uint value) external {
        counter = counter.add(value); // using library function
    }
}
