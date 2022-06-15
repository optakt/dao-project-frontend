# UI/UX Study on DAO Simple Project (interface)

## Abstract

For the DAO Simple Project it’s needed a system to allow a comunity to make proposals on differents topics. Each of this proposals will be summited as a POLL for beign accepted or rejected by the comunity. After some predefined Time ends (TIMELOCK). After this time end could happend some differents scenarios: The Poll reach a minimun qorum required and was approved or it was denied or in case this minimun quorum was not obtained, the proposal will be denied. The system will allow this behavior based on a Smart Contract and using IPFS for the storage of the Polls.

## Views

We are planning to build a Single Page Application based on ReactJS/Web3 technologie. It will handle all the interactions based on One Main page this page will contain the following sections:

- `App Bar`: Top horizontal Bar fixed allways in the top position of the screen.
  - It will contain the main logo of the Organization
  - It will also contain the Main Authentication mechanism for the App: The ability of wallet connection
  - Using this Button a modal will be shown to allow the User to connect its wallet (Metamask) either using a browser installed extension or showing a QR code to be scaned for a mobile device. 
- `Create a Poll`: This section will contain the the Button that allow any authenticated and authorized User to create a Poll.
  - It will ask from the User to write a Title and this field will be mandatory.
  - It will ask from the User to write a Body of the proposal.
  - This Body has to support Markdown Text format.
  - Once subtmited it will be added to this proposal the user IPFS hash as a indetifier of whom created it and a TimeLock.
- `List of Polls`: This section will contain the list of all Polls that have been Approved or are Running currently.
  - It will also should allow to see the ones that has been Rejected.
  - On Clicking on one Item a Modal will be shown with the details of this Poll
- `Modal Detail of Poll`: It contains all the information of a Poll.
  - It will shown the Title of the Poll
  - It will shown the Body of the Poll
  - It will shown the Hash of the author of the Poll
  - If it is a Running Poll (OPEN) it will allow to vote to authenticated Users
  - If it is a Running Poll (OPEN) it will allow to see the current voting result to authenticated Users
  - If it is a Finished Poll (CLOSED) it will allow to see the current voting result 
