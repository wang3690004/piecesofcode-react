import React from 'react'

interface State{
    test:string
}
interface Prop{
    bb:string|number
}

class Login extends React.Component<Prop,State>{
    State:State={
        test:'3333'
    }
    render():any{
        return <div>{this.State.test}{this.props.bb}</div>
    }
}

export default Login