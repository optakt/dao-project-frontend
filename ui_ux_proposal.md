# UI/UX Study on DAO Simple Project (interface)

## Abstract

For the DAO Simple Project it’s needed a system to allow a comunity to make proposals on differents topics. Each of this proposals will be summited as a PROPOSAL for beign accepted or rejected by the comunity. After some Voting Period (predefined by the DAO -tentatively 14 days) (TIMELOCK). After this time ends could differents scenarios could happend: The Proposal reach a minimun qorum required (tentatively half + 1 of the total of Users) and was approved or it was denied or in case this minimun quorum was not obtained, the proposal will be denied. The system will allow this behavior based on a Smart Contract and using IPFS for the storage of the Proposals.

## Authorization

For the very basic beginning the DAO will contain hardcoded a list with of users (addresses) allowed to perform any operation on the system.

## Views

We are planning to build a Single Page Application based on ReactJS/Web3 technologie. It will handle all the interactions based on One Main page this page will contain the following sections:

- `App Bar`: Top horizontal Bar fixed allways in the top position of the screen.
  - It will contain the main logo of the Organization
  - It will also contain the Main Authentication mechanism for the App: The ability of wallet connection
  - Using this Button a modal will be shown to allow the User to connect its wallet (Metamask) either using a browser installed extension or showing a QR code to be scaned for a mobile device.
- `Create a Proposal`: This section will contain the the Button that allow any authenticated and authorized User to create a Proposal.
  - It will ask from the User to write a Title and this field will be mandatory and will have a maximun size defined by the DAO (tentatively 255 chars).
  - It will ask from the User to write a Body of the proposal and will have a maximun size defined by the DAO (tentatively 500 chars).
  - This Body has to support Markdown Text format.
  - Once subtmited it will be added to this proposal the user IPFS hash as a indetifier of whom created it and a TimeLock.
- `List of Proposals`: This section will contain the list of all Proposals that have been Approved or are Running currently.
  - It will also should allow to see the ones that has been Rejected.
  - On Clicking on one Item a Modal will be shown with the details of this Proposal
- `Modal Detail of Proposal`: It contains all the information of a Proposal.
  - It will shown the Title of the Proposal
  - It will shown the Body of the Proposal
  - It will shown the Hash of the author of the Proposal
  - If it is a Running Proposal (OPEN) it will allow to vote to authenticated Users
  - If it is a Finished Proposal (CLOSED) it will allow to see the current voting result

## Draft behavior

One option to considerate is adding a Special State called DRAFT, where a Proposal can be shared with a selected (tentatively all) number of Users and this users could make any feedback in a form of voting/commenting (max 255 chars).

Once their TimeLock is finish, the Proposal will pass to state OPEN or CLOSED if it was approved by the minimun quorum.
