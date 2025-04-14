import React from 'react';
import { personalInfo } from '../Data';

const Info = () => {
    return (
        <>
            {personalInfo.map(({ title, description }, index) => (
                <li className="info-item" key={index}>
                    <span className="info-title">{title}</span>
                    <span className="info-descroption">{description}</span>
                </li>
            ))}
        </>
    );
};

export default Info;