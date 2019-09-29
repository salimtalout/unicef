pragma solidity ^0.5.11;

contract Validator {
    
    address owner = msg.sender; //by default the owner of the SC is the person who deployed it --> UNICEF
    
    struct Identity
    {
        mapping (address => bool) canCreateNewIdentity;
        uint256 birthDate;
        bytes32 placeOfBirth;
        //bytes32 hashDataFingerPrint;
        bytes32 hashUuidParents;
        bytes32 hashBirthCertificate;
        bytes32 hashPackageInformationOffChain;
        //bytes32 oracleSignature;
        
    }
    
    event newOwner(address actionBy,address newOwner);
    event newValidator(bytes32 uuid,address registerBy, address NewValidator);
    event formerValidator(bytes32 uuid, address deleteBy, address validatorToDelete);
    event addIdentity(bytes32 id, address NewIdentity, uint256 BirthDate, bytes32 PlaceOfBirth, bytes32 HashUuidParents, bytes32 HashBirthCertificate, bytes32 HashPackageInformationOffChain);
    
    mapping (bytes32 => Identity) uuid;
    
    modifier onlyBy(address _account)
    {
        require(
            msg.sender == _account,
            "Sender not authorized."
        );
        // "_;" will be replaced by the actual function
        // body when the modifier is used.
        _;
    }
    
    //Allow to change the owner of the SC
    function changeOwner(address _newOwner)
        public
        onlyBy(owner)
    {
        owner = _newOwner;
        emit newOwner(msg.sender,_newOwner);
    }
    
    //Allow to see the owner of the SC
    function ownerContract () public view returns (address){
        return (owner) ;
    }
    
    //Allow the owner of the SC to give the right to add an identity to a specific address
    function addValidator (bytes32 id, address Register) public onlyBy (owner) returns (bool) {
        uuid[id].canCreateNewIdentity[Register] = true;
        emit newValidator(id,msg.sender, Register);
        return(true);
    }
    
    //Allow the owner of the SC to delete the right to an specific address
    function deleteValidator (bytes32 id, address toDelete) public onlyBy (owner) returns (bool){
        require (uuid[id].canCreateNewIdentity[toDelete] = true);
        uuid[id].canCreateNewIdentity[toDelete] = false;
        emit formerValidator (id,msg.sender, toDelete);
        return(true);
    }
    
    //Allow to see if an address can vote or not
    function canValidate (bytes32 id, address validator) public view returns (bool){
        if (uuid[id].canCreateNewIdentity[validator]== true){
            return (true);
        }
    }
    
    function newIdentity (bytes32 id, address NewIdentity, uint256 BirthDate, bytes32 PlaceOfBirth, bytes32 HashUuidParents, bytes32 HashBirthCertificate, bytes32 HashPackageInformationOffChain) public {
        require (uuid[id].canCreateNewIdentity[msg.sender] = true);
        uuid[id].canCreateNewIdentity[NewIdentity]=false;
        uuid[id].birthDate=BirthDate;
        uuid[id].placeOfBirth=PlaceOfBirth;
        uuid[id].hashUuidParents=HashUuidParents;
        uuid[id].hashBirthCertificate=HashBirthCertificate;
        uuid[id].hashPackageInformationOffChain=HashPackageInformationOffChain;
        emit addIdentity(id, NewIdentity, BirthDate, PlaceOfBirth, HashUuidParents, HashBirthCertificate, HashPackageInformationOffChain);
    }
    
    function updateOffChainInformation (bytes32 id, address validator, bytes32 newHashPackageInformationOffChain) public returns (bool){
        require (uuid[id].canCreateNewIdentity[validator]== true);
        uuid[id].hashPackageInformationOffChain=newHashPackageInformationOffChain;
        return(true);
    }
        

}
