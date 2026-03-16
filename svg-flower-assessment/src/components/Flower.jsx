import React from "react";

const Flower = () => {
    return (
        <svg width="200" height="200" viewBox="0 0 120 120">

            {/* Center */}
            <circle cx="60" cy="60" r="10" fill="orange" />

            {/* Petals */}
            <circle cx="60" cy="30" r="20" fill="red" />
            <circle cx="90" cy="60" r="20" fill="red" />
            <circle cx="60" cy="90" r="20" fill="red" />
            <circle cx="30" cy="60" r="20" fill="red" />

            {/* Additional petal */}
            <circle cx="80" cy="40" r="20" fill="red" />

        </svg>
    );
};

export default Flower;