import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {

    return (
        <div className='bg-mainBrand flex flex-col lg:flex-row justify-between content-center items-center md:top-0 md:z-100 md:fixed w-full'>
            <div>
                <Link to={'/'}>
                    <header>
                        <h1 className='uppercase text-base md:text-2xl lg:text-4xl text-backGround font-medium md:p-8'>
                            InfraEsctructura <span className='text-lightShades'>Médica</span>
                        </h1>
                    </header>
                </Link>
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}

export default Header