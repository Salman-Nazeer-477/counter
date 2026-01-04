import Prayer from './Prayer'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [prayers, setPrayers] = useState(() => {
    const localValue = localStorage.getItem("prayers")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("prayers", JSON.stringify(prayers))
  }, [prayers])
  const [newPrayerText, setNewPrayerText] = useState("")

  function addNewPrayerText(newPrayerText) {
    setPrayers(prayers => {
      if (newPrayerText === "") return prayers
      return [
        ...prayers,
        {
          prayerText: newPrayerText,
          prayerId: crypto.randomUUID()
        },
      ]
    })
    setNewPrayerText("")
  }

  function deletePrayer(id) {
    setPrayers(prayers => {
      return prayers.filter(prayer => prayer.prayerId !== id)
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    addNewPrayerText(newPrayerText)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={newPrayerText}
          type="text"
          onChange={(e) => setNewPrayerText(e.target.value)}
        />
        <button>Add</button>
      </form>
      {
        prayers.map(prayer => {
          return <Prayer 
            deletePrayer={deletePrayer}
            key={prayer.prayerId}
            prayerText={prayer.prayerText}
            prayerId={prayer.prayerId} 
          />
        })}
    </>
  )
}

export default App
