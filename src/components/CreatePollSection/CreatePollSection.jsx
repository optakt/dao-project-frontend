
import { Button } from '@mui/material'
import './CreatePollSection.scss'

function CreatePollSection() {
    return (
        <div className='createPollSectionWrapper'>
            <Button variant='outlined' color='primary'>
                Create Poll
            </Button>
        </div>
    )
}

export default CreatePollSection