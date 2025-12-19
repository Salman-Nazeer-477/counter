import Prayer from './Prayer'
import { useState, useEffect } from 'react'
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
    })
    setNewPrayerText("")
  }
  function handleSubmit(e){
    e.preventDefault()
    addNewPrayerText(newPrayerText)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          value={newPrayerText} 
          type="text" 
          onChange={(e)=>setNewPrayerText(e.target.value)} 
        />
        <button>Add</button>
      </form>
      {
        prayers.map(prayer => {
          return <Prayer prayerText={prayer.prayerText} />
      })}
    </>
  )
}

export default App
