const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

const productList = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>
)

const RenderingLists = () => {
    return (
        <ul>{productList}</ul>
    )
}


export default RenderingLists

