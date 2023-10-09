import logo from '../../assets/calculator.jpeg';

const Header = () =>{
    return(
        <header className= "header">
            <img className="logo" src ={logo} alt ="logo"/>
            <h2>Investment calculator</h2>
        </header>
    );
};

export default Header;