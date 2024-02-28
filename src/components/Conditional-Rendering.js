
const AdminPanel = () => {
    return (
        <h1>This is AdminPanel</h1>
    )
}

const LoginForm = () => {
    return (
        <h1>This is LoginForm</h1>
    )
}


const ConditionalRendering = () => {
    
    let isLogged = false;
    
    return (
        <>
            {isLogged ? <AdminPanel/> : <LoginForm/>}
        </>
    )
}

export default ConditionalRendering

