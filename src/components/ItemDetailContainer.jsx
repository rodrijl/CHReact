import React, { Component } from 'react'

const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error)
                resolve({ 
                    id:"1",
                    name:"Dooko"
                })
            else
                reject()
        }, 2000)     
    })
}

export default class ItemDetailContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { hola:{ }}
       
      }

    componentDidMount(){
        getTodo()
        .then(data => {
            this.setState(
                {
                    hola : data
                }
            )
        })
    }

    render() {
        return (
            <div>
                {this.state.hola.id}
                {this.state.hola.name}
            </div>
        )
    }
}
