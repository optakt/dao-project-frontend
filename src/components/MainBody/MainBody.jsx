import CreatePollSection from 'components/CreatePollSection/CreatePollSection'
import ListOfPolls from 'components/ListOfPolls/ListOfPolls'
import './MainBody.scss'

function MainBody() {
  return (
    <div className='mainBodyWrapper'>
        <CreatePollSection />
        <ListOfPolls />
    </div>
  )
}

export default MainBody