import React, {useEffect, useState} from 'react'; 

const Header = () =>{

    const [d, setDate] = useState(new Date()); 
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    useEffect(() => {
        const timer = window.setInterval(() => {
          setDate(new Date()); 
        }, 1000);
        return () => {
          window.clearInterval(timer);
        };
      }, []);
    return(
        <div>
                <h2 style = {{fontSize: "4rem",
                              fontWeight: "lighter",
                              marginBottom: "20px",
                              marginTop: "40px"}}>{d.toLocaleTimeString()}</h2>
                <h2 style = {{fontWeight: "lighter"}}>
                    {"Good " + (d.getHours() < 12 && "Morning" || d.getHours() <18 && "Afternoon" || "Evening") + 
                    ", Steve. Today's date is " + (months[d.getMonth()])+ " " + d.getDate() + (d.getDate() > 3 ? "th" : "rd")}
                </h2>
         </div>
    ); 
}

export default Header; 