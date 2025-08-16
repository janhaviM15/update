import React from "react";

class Sample1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {fevCar : "kia"};
    }
    componentDidMount()
    {
        setTimeout(()=>
        {
            this.setState({fevCar:"TATA"})
        },1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        document.getElementById("id1").innerHTML="Before updation, favourite car was:"+prevState.fevCar;
    }
    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="After updation, favourite car is:"+this.state.fevCar;
    }
    render()
    {
        return(
            <div>
                <h1>My favourite car is {this.state.fevCar}</h1>

               <div id="id1"> </div>
               <div id="id2"> </div>
               </div>
        );
    }
}
export default Sample1;