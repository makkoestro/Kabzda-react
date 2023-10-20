import React, {useState} from "react";



export function UncontrolledRating() {
            let [value, setValue]=useState(0)

        return (
            <div>
                <Star setValueState={() => setValue(1)} selected={value > 0} />
                <Star setValueState={() => setValue(2)} selected={value > 1} />
                <Star setValueState={() => setValue(3)} selected={value > 2} />
                <Star setValueState={() => setValue(4)} selected={value > 3} />
                <Star setValueState={() => setValue(5)} selected={value > 4} />
            </div>
        );


}

type StarPropsType = {
    selected: boolean
    setValueState: () => void
}

function Star(props:StarPropsType) {
    const { setValueState,  selected}=props
    return (
        <span onClick={() => {setValueState()}}>
            {selected ? <b>Star</b> : 'Star'}
        </span>
    )


}