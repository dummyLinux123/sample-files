const user = {
    name : 'Emman',
    Age : 24,
    weight : '69 kg'
}


const DisplayingData = () => {
    return (
        <>
            <h1>Display my user details</h1>

            <h2>my user is  {user.name}</h2>
            <h2>and his age is {user.Age}</h2>
            <h2>his current weight is {user.weight}</h2>
        </>
    )
}

export default DisplayingData
