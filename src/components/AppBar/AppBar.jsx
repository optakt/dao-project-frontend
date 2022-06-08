
import './AppBar.scss'
import LogoIcon from 'assets/optakt-logo-black.svg'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'

function AppBar() {
    return (
        <div className='appBarWrapper'>
            <div className='logoContainer'>
                <img src={LogoIcon} alt='google logo' />
            </div>
            <div className='connectSection'>

                <ConnectWallet />
            </div>

        </div>
    )
}

export default AppBar