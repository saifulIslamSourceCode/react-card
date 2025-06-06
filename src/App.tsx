import './App.css'
import Card from './Card'
import Button from './Buttons/Buttoon'

function App() {
  return (
    <>
      <main>
        <Card name="Name 1" age={30} isStudent={true}/>
        <Card name="Name 2" age={20} isStudent={false}/>
        <Card name="name 3" age={25} isStudent={true}/>
        <Card />
        <Card />
      </main>
      <Button />
    </>
  )
}

export default App
