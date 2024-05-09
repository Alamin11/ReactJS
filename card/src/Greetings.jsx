function Greetings(props) {
    const welcome = <h2 className="welcomeMsg">Welcome, you have successfully logged in!</h2>
    const loginPrompt = <h2 className="loginPrompt">Please give correct credentials</h2>;
    return (
        props.isLoggedIn ? welcome : loginPrompt
    );
}
export default Greetings