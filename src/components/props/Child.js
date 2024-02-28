const Children = (props) => {
    return ( 
        <>
        <div style={{display:"block"}}>
            {
                props.data.map(everyProduct => 
                    <h1>{everyProduct.title}</h1>
                )
            }
        </div>
           
        </>
     );
}
 
export default Children;