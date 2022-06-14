import { format, isValid } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import './ItemPoll.scss'

function ItemPoll({ poll }) {

  console.log({ poll })
  return (

    <div className='itemPollWrapper'>
      <div className='itemPollGeneral'>
        <div className='itemPollAuthor'>
          {poll.proposal}
        </div>
        {isValid(new Date(poll.timeLock)) &&
          <div className='itemPollTimeLock'>
            {`TimeLock: ${format(new Date(poll.timeLock), 'PPPppp')}`}
          </div>}
      </div>
      <div className='itemPollTitle'>
        {poll.title}
      </div>

      <div className='itemPollDescription'>
        <ReactMarkdown children={poll.body} />

      </div>
    </div>

  )
}

export default ItemPoll