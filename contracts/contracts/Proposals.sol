// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Proposals {

    //struct for proposals storage
    struct Proposal {
        string title;
        string description;
        address createdBy;
    }

    Proposal[] public proposals;

    //function to add proposals

    function createProposal(string memory _title,
        string memory _description
        ) public {
        
        // create new proposal

        Proposal memory newProposal = Proposal(
            {
                title: _title,
                description: _description,
                createdBy: msg.sender
            }
        );

        // add new proposal to proposal list
        proposals.push(newProposal);

    }

    //function to retrieve all proposals
    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}