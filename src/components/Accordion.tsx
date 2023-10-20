import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}
export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle  onClick={props.onClick}  title={props.title}/>
                {!props.collapsed &&  <AccordionBody/>}
            </div>
        );

}

type AccordionTitlePropsType = {
    title:string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick} >{props.title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <div>
                <li>1</li>
            </div>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}