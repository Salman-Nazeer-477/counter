import { useEffect, useState } from "react";

export default function Prayer(props){
    return (
        <>
            <div className="prayer-component">
                <span className="prayer-content">
                    <p className="prayer-text">{props.prayerText}</p>
                    <button className="red" onClick={() => props.deletePrayer(props.prayerId)}>X</button>
                    <button className="red" onClick={() => props.updateCount(props.prayerId, 0)}>C</button>
                    <button onClick={() => props.updateCount(props.prayerId, props.count + 1)}>{props.count}</button>
                </span>
            </div>
        </>
    )
}
