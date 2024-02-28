import ChildrenComponent from './Child.js'

/* example is fetched data from the API */
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];


const  Parent = () => {
    return (  
        <>
            {/* we want to pass data coming from parent component to its children */}
            <ChildrenComponent data={products}/>
        </>
    );
}
 
export default Parent;