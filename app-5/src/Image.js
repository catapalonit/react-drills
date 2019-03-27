import React, { Component } from "react";

export default function Image(props) {
    return (
        <div>
            <img src={props.myImage} alt="this is a picture of something havent decided what yet though" />
        </div>
    )
};