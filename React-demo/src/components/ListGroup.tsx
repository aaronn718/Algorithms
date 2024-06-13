
function ListGroup() {
    const items = [
        "Washington",
        "California",
        "Texas",
        "Florida",
    ];


    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {
                    items.map((item) => (
                        <li key={item} className="list-group-item">{item}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default ListGroup;