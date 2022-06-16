import React, { Component } from 'react'
import farhinaapu from '../Components/public/image/farhinaapu.jpg';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={farhinaapu}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi!  </h1>
                    <p id="paragarph1">  Myself Farhina Rahman Mahi.<br/>I'm from Bangladesh  and I love to create my own world by drawings.<br/> I draw my thoughts in a shape of art.  <br/>
                    </p>
                    <br/>
                    <br/>
                    {/* <a id="logo" href="https://www.contentstack.com/" ><img src={cse} width="30" height="30" alt="cselogo"/></a>  */}
                    
            </section>
        )
    }
}

export default Banner


