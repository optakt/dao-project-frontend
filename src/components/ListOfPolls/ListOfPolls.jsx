import ItemPoll from 'components/ItemPoll/ItemPoll'
import { listOfPolls } from '__tests__/FAKE_listOfPolls'
import './ListOfPolls.scss'

function ListOfPolls({ polls=listOfPolls }) {
  return (
    <div className='listOfPollsWrapper'>
        {
            polls.map(poll => (
                <ItemPoll key={poll.id} poll={poll} />
            ))
        }
    </div>
  )
}

export default ListOfPolls