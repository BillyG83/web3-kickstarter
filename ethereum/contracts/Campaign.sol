pragma solidity ^0.4.26;
// web3 kickstarter clone experiment by billgil

// FACTORY
contract CampignFactory {
    address[] public deployedCampaigns;

    function createCamapign(uint minimumContribution) public {
        address newCampaign = new Campaign(minimumContribution, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}
// END FACTORY

// CONTRACT
contract Campaign {
    // data types
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversTotal;

    // protects functions from being called by non namangers
    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }

    // protects functions from being called by non approvers
    modifier approverOnly() {
        require(approvers[msg.sender]);
        _;
    }

    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    // function to add approvers to the mapping
    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversTotal++;
    }

    // function to create a new request and add it to the array of requests
    function createRequest(
        string description,
        uint value,
        address recipient
    ) public managerOnly {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }

    // allows contriuters (approvers) to votes once if they approve a request
    function approveRequest(uint index) public approverOnly {
        Request storage request = requests[index];
        // has this address voted on this request already
        require(!request.approvals[msg.sender]);
        request.approvalCount++;
    }

    // manager can call to end voting and send funds to the recipient
    function finalizeRequest(uint index) public managerOnly {
        Request storage request = requests[index];
        require(!request.complete);
        // request approvals are greater than 50% of total possible approvers
        require(request.approvalCount > (approversTotal / 2));
        request.complete = true;
        request.recipient.transfer(request.value);
    }
}
// END CONTRACT
