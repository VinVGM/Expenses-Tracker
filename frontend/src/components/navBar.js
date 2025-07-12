import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
            
                <Link to='/'>
                    <h1>Expense Daddy</h1>
                </Link>

                <nav>
                    <div className='nav-links'>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </nav>
            
            
            </div>
        </header>
    )
}


export default Navbar