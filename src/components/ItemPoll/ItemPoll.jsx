import ReactMarkdown from 'react-markdown'
import './ItemPoll.scss'

function ItemPoll({ poll }) {

  console.log({ poll })
  return (

    <div className='itemPollWrapper'>
      <div className='itemPollAuthor'>
        {poll.proposal}
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