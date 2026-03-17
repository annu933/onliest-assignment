

import React from "react";

const Flower = ({ petalColor, centerColor, radius, petalCount }) => {
    const petals = Array.from({ length: petalCount }, (_, i) => {
        const angle = (i * 2 * Math.PI) / petalCount;
        return {
            cx: 60 + 30 * Math.cos(angle),
            cy: 60 + 30 * Math.sin(angle),
        };
    });

    return (
        <svg
            width="250"
            height="250"
            viewBox="0 0 120 120"
            id="flower-svg"
        >
            <circle cx="60" cy="60" r="10" fill={centerColor} />

            {petals.map((p, i) => (
                <circle
                    key={i}
                    cx={p.cx}
                    cy={p.cy}
                    r={radius}
                    fill={petalColor}
                />
            ))}
        </svg>
    );
};

export default Flower;