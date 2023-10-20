import React from "react";

export function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}
function AccordionTitle() {
    return <h3>Меню</h3>;
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