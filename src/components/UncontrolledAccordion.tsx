import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {!props.collapsed &&  <AccordionBody/>}
            </div>
        );

}

type AccordionTitlePropsType = {
    title:string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>;
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