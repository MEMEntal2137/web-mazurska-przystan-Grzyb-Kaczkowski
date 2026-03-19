import React from "react";
interface OrganizerProps{
    children: React.ReactNode
}

const Organizer: React.FC<OrganizerProps> = ({ children }) => {
    return (
        <div style={{width:"100%",height:"100%", display:"flex", flexDirection:"row"}}>
            {children}
        </div>
    )
}

export default Organizer