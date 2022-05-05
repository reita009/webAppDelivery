import React from "react";
import { LinkArea, LinkIncon } from './styled';

export default ({icon, link}) =>{
    return(
        <>
            <LinkArea href={link}>
                <LinkIncon src={icon}/>
            </LinkArea>
        </>
    )
}