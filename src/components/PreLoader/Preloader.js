import React from 'react';
import "./Preloader.css";

const Preloader = ({loading}) => {
    if (loading) {
        return (
            <>
                <div className="cover">
                    <div className="logo">
                    </div>
                </div>
                
            </>
        );
    } else {
        return "";
    }
};

export default Preloader;