import { Button } from '@mui/material'
import './AppBar.scss'
import LogoIcon from 'assets/optakt-logo-black.svg'

function AppBar() {
    return (
        <div className='appBarWrapper'>
            <div className='logoContainer'>
                <img src={LogoIcon} alt='google logo' />
            </div>
            <div className='connectSection'>

                <Button variant='outlined' color='primary'>
                    Connect Wallet
                </Button>
            </div>

        </div>
    )
}

export default AppBar