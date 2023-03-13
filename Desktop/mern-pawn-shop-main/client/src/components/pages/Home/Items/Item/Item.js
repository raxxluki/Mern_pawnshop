const Item = ({item}) => {
    return <>
        <h3>Item {item.name}</h3>
        <div>{item.description}</div>
        <div>Price ${item.price}</div>
    </>
}

export default Item;