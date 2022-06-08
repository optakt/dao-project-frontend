
import './ItemPoll.scss'

function ItemPoll({ poll }) {
  return (

    <div className='itemPollWrapper'>
      <div className='itemPollTitle'>
        {poll.title}
      </div>
      <div className='itemPollDescription'>
        {poll.description}
      </div>
    </div>

  )
}

export default ItemPoll