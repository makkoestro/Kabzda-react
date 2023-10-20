import React, {useState} from "react";

type AccordionPropsType = {
    title: string

}
export function UncontrolledAccordion(props: AccordionPropsType) {

    const {title}=props

    const [collapsed, setCollapsed]=useState(true)
        return (
            <div>
                <AccordionTitle title={title} onClick={() => {setCollapsed(!collapsed)}}/>
                {!collapsed &&  <AccordionBody />}

            </div>
        );
}

type AccordionTitlePropsType = {
    title:string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>;

}

function AccordionBody() {
    const liItems = [1, 2, 3]
    return (
        <ul>
            {liItems.map(elem => {
                return (
                    <li>{elem}</li>
                )
            })}
        </ul>
    );
}