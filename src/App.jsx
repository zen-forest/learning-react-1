import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {
  
  return(
    <>
      <Student/>
      <Student name="Larry" />
      <Student name="Tim" age={33}/>
      <Student name="Joe" age={24} />
      <Student name="Tom" age={16} isStudent={true}/>
      <Student name="Patrick" age={33} isStudent={true}/>
   </>
  );

}

export default App
