import ItemPoll from 'components/ItemPoll/ItemPoll'
import { useMainContext } from 'context/MainContext'
import './ListOfPolls.scss'

function ListOfPolls() {
  const { pollList } = useMainContext();

  return (
    <div className='listOfPollsWrapper'>
        {
            pollList.map(poll => (
                <ItemPoll key={poll.id} poll={poll} />
            ))
        }
    </div>
  )
}

export default ListOfPolls