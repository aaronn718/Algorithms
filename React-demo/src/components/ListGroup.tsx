import { useState } from "react";
import { MouseEvent } from "react";

function ListGroup(items: string[]) {
    // const items = [
    //     "Washington",
    //     "California",
    //     "Texas",
    //     "Florida",
    // ];

    //const handleClick = (index: number) => {console.log(index)};
    //const [state, setState] = useState(initialValue);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li key={item} className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                            onClick={() => setSelectedIndex(index)}>{item}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default ListGroup;