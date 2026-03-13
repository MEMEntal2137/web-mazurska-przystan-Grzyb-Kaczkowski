import React from "react";
interface OrganizerProps{
    children: React.ReactNode
}

const Organizer: React.FC<OrganizerProps> = ({ children }) => {
    return (
        <div>
        <img src='assets/background.jpg' style={{width:'100%', height:'100%'}} alt="łodzie"/>
        <div style={{maxHeight: "100vh", maxWidth: "100%", flexWrap: "wrap"}}>
            {children}
        </div>
        </div>
    )
}

export default Organizer