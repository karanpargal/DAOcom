//SPDX-License-Identifier: MIT
pragma solidity >0.7.0 <=0.9.0;

contract Salary{

    function paySalary(address payable employee, uint256 salary) public payable{
        require(salary>0,"Salary should be more than 0");
        employee.transfer(salary);
    }

}