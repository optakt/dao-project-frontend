import { Button, Modal, TextField } from '@mui/material'
import { useMainContext } from 'context/MainContext';
import { useState } from 'react';
import './CreatePollSection.scss'

const placeholderBody = `## Summary

Insert your summary here

## Body
  
Insert your main proposal here

## Conclusion
  
Insert your conclusion here`;

function CreatePollSection() {

    const { account, insertPoll } = useMainContext();
    
    const [modalOpen, setModalOpen] = useState(false)
    const [titleProposal, setTitleProposal] = useState('')
    const [bodyProposal, setBodyProposal] = useState('')

    const openModal = () => { setModalOpen(true) };
    const closeModal = (e, reason) => { reason !== 'backdropClick' && setModalOpen(false) };

    const createProposal = async () => {
        const poll = {
            title: titleProposal,
            body: bodyProposal,
            proposal: account
        }
        await insertPoll(poll);

        closeModal();

    };
    return (
        <div className='createPollSectionWrapper'>
            <Modal
                open={modalOpen}
                onClose={closeModal}
                disableEscapeKeyDown
                disableAutoFocus
            >

                <div className='pollBody'>

                    <div className='closeButton' onClick={closeModal}>&times;</div>


                    <div className='author'>{`Proposal: ${account}`}</div>
                    <TextField
                        autoFocus
                        label="Title"
                        placeholder='Title of Proposal'
                        fullWidth
                        variant="outlined"
                        value={titleProposal}
                        onChange={(e) => setTitleProposal(e.target.value)}
                        margin="normal"
                        required
                    />

                    <TextField
                        label="Body"
                        multiline
                        fullWidth
                        rows={10}
                        placeholder={placeholderBody}
                        variant="outlined"
                        value={bodyProposal}
                        onChange={(e) => setBodyProposal(e.target.value)}
                        margin="normal"
                    />
                    <div className='modalFooter'>
                        <Button
                            variant='outlined'
                            color='primary'
                            disabled={!titleProposal}
                            onClick={createProposal}
                        >
                            Create Poll
                        </Button>
                    </div>
                </div>
            </Modal>

            <Button variant='outlined' color='primary' disabled={!account} onClick={openModal}>
                Create Poll
            </Button>
        </div>
    )
}

export default CreatePollSection