import PropTypes from 'prop-types'

function UserGreeting(props){
const welcomeMsg = <h1 className="welcome-msg">Welcome! {props.userName}</h1>;
const loginPrompt = <h2 className="login-prompt">Please log in first to continue</h2>;
return (props.isLoggedIn? welcomeMsg : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}

export default UserGreeting