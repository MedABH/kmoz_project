


export default function IphoneTime() {
    let time= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})

    return(
        <div style={{transform:'translate(10%, 175%)'}}>
            <small><strong>{time}</strong></small>
        </div>

    )
}