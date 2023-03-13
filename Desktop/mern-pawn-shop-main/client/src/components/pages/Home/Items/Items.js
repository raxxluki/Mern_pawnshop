import {Item} from "./index";

const Items = () => {
    const items = [
        {
            name:"Item 001",
            description:"Item 001 description",
            price: 1.25
        }
    ];
    const mappedItems = items.map(i => <Item key={i.name} item={i}/>);

    return <>
        <h2>List of items</h2>
        {
            items.length > 0
                ? mappedItems
                : <div>There are 0 items</div>
        }
    </>
}

export default Items;