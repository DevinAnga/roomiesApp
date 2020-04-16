import React from "react";
import styled from "styled-components";
import ee from "event-emitter";

const Container = styled.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${ props => props.top }px;
    right: 16px;
    z-index: 999;
    transition: top .5s ease;
`;

//make a new emitter event 
const emitter = new ee();

//make the emitter function "notify" available outside of page
export const notify = (msg) => {
    //notification = key, with callback function
    emitter.emit('notification', msg);
}

export default class Notificaions extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            top: -100,
            msg: "",
        };

        this.timeout = null;

        //when the button is clicked call onShow
        emitter.on('notification', (msg) => {
            this.onShow(msg);
        });
    }

    //if the submit button is clicked multiple times, show notification
    onShow = (msg) => {
        if(this.timeout){
            clearTimeout(this.timeout);
            this.setState({ top: -100 }, () => {
                this.timeout = setTimeout( () => {
                    this.showNotification(msg);
                }, 500);
            });
        }else {
            this.showNotification(msg);
        }
    }

    //notification will  display 60px from top then disappear after 3000 seconds 
    showNotification = () => {
        this.setState({
            top: 60,
        },            () => {
                this.timeout = setTimeout(() => {
                    this.setState({ 
                        top: -100,
                    });
                }, 3000);
            });
    }
        


    render(){
        return(
                //depending on the state, the notification will either be displayed or hidden
                <Container top={this.state.top}>Registration Confirmation Sent</Container>
            
        );
    }
}

