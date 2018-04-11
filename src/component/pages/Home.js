import React from 'react';
import SubHeader from "../sections/SubHeader";
import Main from "../sections/Main";


export default class Home extends React.Component{
    render(){
        return(
            <main role="main">
                <SubHeader/>
                <Main/>
            </main>
        )
    }
}