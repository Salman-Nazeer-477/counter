import Prayer from './Prayer'
import './App.css'


function App() {
  const prayers = [
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
  ]
  return (
    <>
      {prayers.map(prayer => {
        return <Prayer prayerText={prayer.prayerText} />
      })}
    </>
  )
}

export default App
