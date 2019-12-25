import React from 'react';
const wrapper =WrappedComponent=>
{class HOC extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={
            data:[]
    
        };
    }
componentDidMount(){
    fetch(this.props.datasource)
    .then(res=>res.json())
    .then(user=>this.setState({data:user.slice(0,3)}));
}
   
render()


{
    const {datasource,...otherprops}=this.props;
    return this.state.data.length <1 ? <h1>loading</h1>:
    <WrappedComponent data={this.state.data} {...otherprops} />
}

}
return HOC;

}

export default wrapper;