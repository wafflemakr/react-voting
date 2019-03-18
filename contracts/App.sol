pragma solidity 0.5.0;

import "./Ownable.sol";
import "./SafeMath.sol";

/// @title Vote for a Candidatte
/// @notice One vote per eth address
contract App is Ownable {

    using SafeMath for uint256;
    using SafeMath for uint8;

    /// @notice Estructura para la info de un Candidato
    struct Candidate {
        uint8 id;
        string name;
        uint256 voteCount;
    }

    /// @notice Store voters addresses
    mapping(address => bool) public voters;

    /// @notice Approved addresses
    mapping(address => bool) public approved;
    
    /// @notice Store Candidates
    /// @return candidate by ID
    mapping(uint8 => Candidate) public candidates;
    
    /// @notice Store number of candidates
    uint8 public totalCandidates;

    /// @notice Define an event when a vote is registered
    event Voted (
        uint8 indexed _candidateId, address _voter
    );

    /// @notice Define an event when a vote is registered
    event RequestApproval (
        uint256 indexed _id, address _voter
    );

     /// @notice Define an event when a vote is registered
    event VoterApproved (
        address _voter
    );

    /// @notice Define an event when a vote is registered
    event CandidateAdded (
        uint8 indexed _candidateId, string _name
    );
    
    /// @notice Add default candidates    
    /// @dev function that runs only when deployed
    constructor () public {
        addCandidate("Vitalik Buterin");
        addCandidate("Satoshi Nakamoto");
        addCandidate("Changpeng Zhao");
        addCandidate("Nick Szabo");
    }
    
    /// @notice Creat new Candidate
    /// @dev Only owner of contract can call this
    function addCandidate (string memory _name) public onlyOwner {
        totalCandidates ++;
        candidates[totalCandidates] = Candidate(totalCandidates, _name, 0);
        emit CandidateAdded(totalCandidates, _name);
    }

    function registerVoter(uint256 _voterID) public {
        emit RequestApproval(_voterID, msg.sender);
    }

    //After comparing data sent to DB, owner approves voter
    function approveVoter(address _approvedAddr) public onlyOwner{
        approved[_approvedAddr] = true;
        emit VoterApproved(_approvedAddr);
    }
    
    /// @notice Register Vote
    /// @param  _candidateId only need the id to vote
    /// @dev reverts if sender has already voted 
    function vote (uint8 _candidateId) public {
        require(!voters[msg.sender], "you have already voted");
        require(_candidateId > 0 && _candidateId <= totalCandidates, "not a valid candidate Id");
        require(approved[msg.sender],"You need to register your ID first");
        
        voters[msg.sender] = true;

        candidates[_candidateId].voteCount ++;

        /// @notice Emitir evento de voto hecho
        emit Voted(_candidateId, msg.sender);
    }
}
