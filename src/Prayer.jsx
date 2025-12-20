import { useEffect, useState } from "react";

export default function Prayer(props){
    const [count, setCount] = useState(() => {
        const localValue = localStorage.getItem(`${props.prayerText}`)
        if(localValue === null) return 0
        return Number(localValue)
    })

    useEffect(()=>{
        localStorage.setItem(`${props.prayerText}`, String(count))
    }, [count])

    return (
        <>
            <div className="prayer-component">
                <span className="prayer-content">
                    <p className="prayer-text">{props.prayerText}</p>
                    <button className="red" onClick={() => props.deletePrayer(props.prayerId)}>X</button>
                    <button className="red" onClick={() => setCount(0)}>C</button>
                    <button onClick={() => setCount(count + 1)}>{count}</button>
                </span>
            </div>
        </>
    )
}
