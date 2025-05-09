import Student from './Student.jsx'
import Header from './Header.jsx'

export default function MyApp() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="main-content">
        <Student name="eley" age={22} isStudent ={true}/>
        <Student name="rowee" age={22} isStudent ={true}/>
        <Student name="aaron" age={22} isStudent ={false}/>
      </div>
    </div>
  );
}