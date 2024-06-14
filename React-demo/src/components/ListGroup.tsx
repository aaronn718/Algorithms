import { useState } from "react";
import { MouseEvent } from "react";

// 
interface Props {
    items: string[],
    heading: string
}

function ListGroup(props: Props) {
    // const items = [
    //     "Washington",
    //     "California",
    //     "Texas",
    //     "Florida",
    // ];

    //const handleClick = (index: number) => {console.log(index)};
    //const [state, setState] = useState(initialValue); setState is the funciton to update state
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{props.heading}</h1>
            <ul className="list-group">
                {
                    props.items.map((item, index) => (
                        <li key={item} className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                            onClick={() => setSelectedIndex(index)}>{item}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default ListGroup;