import React, { useState } from "react";

function UserProfile() {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(25);
    const [isEmployed, setIsEmployed] = useState(false);

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Employed: {isEmployed ? "Yes" : "No"}</h3>
            <button onClick={() => setName("Jane Smith")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            <button onClick={() => setIsEmployed(!isEmployed)}>
                Toggle Employment
            </button>
        </div>
    );
}

export default UserProfile;
