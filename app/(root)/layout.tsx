
import React from "react";
import Navbar from "../../components/Navbar";
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className="font-sans">
            <Navbar />
            {children}
        </main>
    );
}

export default RootLayout;