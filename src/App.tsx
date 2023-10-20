import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    console.log("App is rendering");
    const names = ['Lex', 'Evgen', 'Yaroslav']
    const users = [{id: 1,  name: 'Lex'}, {id: 2,name: 'Evgen'}, {id: 3,name: 'Yaroslav'}]
    const liElements = names.map(name => <li>{name}</li>)
    const liUsers = users.map(user => <li key={user.id}> {user.name}</li>)
    let [value, setValue]=useState<RatingValueType>(0)
    let[accordionCollapsed,setAccordionCollapsed]=useState<boolean>(true)
    let [switchOn, setSwitchOn]=useState<boolean>(false)
    return (
        <div className="App">

            {/*<ul>*/}
            {/*    /!*{liElements}*!/*/}
            {/*    {liUsers}*/}
            {/*</ul>*/}
            {/*<Title title={"Hello there!:)"}/>*/}

            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<Accordion title="Menu 2" collapsed={false}/>*/}
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion title={'Uncontrolled accordion'}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={value} onClick={setValue}/>*/}
            <Accordion title="Menu" collapsed={accordionCollapsed} onClick={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<OnOff onClick={setOn} on={on}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type TitlePropsType = {
    title: string;
};

function Title(props: TitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;
