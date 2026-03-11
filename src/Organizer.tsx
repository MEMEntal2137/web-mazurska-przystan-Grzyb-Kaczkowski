import React from "react";

interface OrganizerProps{
    children: React.ReactNode // Dowolny JSX lub wartość dopuszczalna w JSX
}

const Organizer: React.FC<OrganizerProps> = ({ children }) => {
    return (
        <div style={{maxHeight: "100vh", maxWidth: "100%", background: "green", flexWrap: "wrap"}}>
            {children}
        </div>
    )
}

export default Organizer