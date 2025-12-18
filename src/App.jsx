import Prayer from './Prayer'
import { useState } from 'react'
import './App.css'


function App() {
  const [prayers, setPrayers] = useState([
    {
      prayerText: "Subhanallah",
    },
    {
      prayerText: "Alhamdullillah",
    },
    {
      prayerText: "Allahu Akbar",
    },
    {
      prayerText: "La Ilaha Illallah"
    }
  ])
  const [newPrayerText, setNewPrayerText] = useState("")
  function addNewPrayerText(newPrayerText){
    setPrayers(prayers => {
      if(newPrayerText === "") return prayers
      return [
        ...prayers,
        {
          prayerText: newPrayerText
        },
      ]
    }
  }
  function handleSubmit(){
    e.preventDefault()
    addNewPrayer(newPrayerText)
  }
  return (
    <>
      <form>
        <input type="text" onChange={(e)=>setNewPrayerText(e.target.value)}>
        <button onClick={handleSubmit}></button>
      </form>
      {prayers.map(prayer => {
        return <Prayer prayerText={prayer.prayerText} />
      })}
    </>
  )
}

export default App
