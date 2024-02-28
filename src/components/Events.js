const Events = () => {

    const handleClick = () => {
        alert('you clicked me!');
    }

    return (
        <>
            <button onClick={handleClick}>
                press me 
            </button>
        </>
    )
}

export default Events