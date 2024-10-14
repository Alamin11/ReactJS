function Header(){
    return (
        <nav className="navbar">
            <h1 className="navbar-left">Prowesd IT</h1>
            <ul className="navbar-links">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li className="cart-icon"><a href="#"><i class="las la-shopping-cart navbar-right"></i></a></li>
            </ul>
            
           
        </nav>
    );
}
export default Header