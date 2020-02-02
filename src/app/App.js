import React, { Component } from 'react';

import Head from './Head'

import {format} from 'timeago.js'



class App extends Component {


constructor(){
    super()

    this.state = {

        data:[]
    }
}



 componentDidMount(){
    setInterval( async()=>{
        const res     =   await fetch('http://openlibrary.org/recentchanges.json?limit=10')
        const data    =  await res.json()
        const format =  this.formatData(data)
         this.setState({
             data: format
         })
 
    },1000);
}


formatData(data){

  return data.map((data, i)=>{
         return{
            "when":format(data.timestamp),
            "who":data.author.key,
            "description":data.comment
         } 
          
    })
}

    render() {
               return (
            <div className="container p-4">
                <h1> {this.props.title} </h1>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {this.props.head.map((element, i) => {
                                return <Head key={i} titulo={element} />
                            })}
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.data.map((row, i) => {

                            return <tr key={i}>
                                  <td>{row.when}</td>
                                  <td>{row.who}</td>
                                  <td>{row.description}</td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }

}


export default App