import Card from './Card.jsx'
import Greetings from './Greetings.jsx'
import Mybutton from './Hooks.jsx';
import MyComponent from './MyComponent.jsx';

function App() {
  return (
    <>
      <Greetings isLoggedIn={true} />
      <Card name="Putlur bap" age={12} isStudent={true} />
      <Card name="Ariz" age={15} isStudent={true} />
      <Card name="Farhan" age={16} isStudent={true} />
      <Card name="Imtinan" age={18} isStudent={true} />
      <Card name="Boring study" age={22} isStudent={false} />
      <Card name="Day Dreamers" age={28} isStudent={false} />
      <Mybutton />
      <MyComponent />
    </>
  );
}

export default App
