import React from "react"
import Navbar from "../component/navbar"
import Data from "../component/data";
import { base_url } from "../config.js";
import axios from "axios"

export default class Actor extends React.Component{
    constructor(){
        super()
        this.state = {
            actors: [],
            token: "",
        }

        // if (localStorage.getItem("token")) {
        //     this.state.token = localStorage.getItem("token")
        // } else {
        //     window.location = "/login"
        // }

        this.headerConfig.bind(this)
    }

    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header
    }

    getActor = () => {
        let url = base_url + "/actors"
        axios.get(url, this.headerConfig())
        .then(response=> {
            this.setState({actors: response.data})
        })
        .catch(error => {
            if (error.response) {
                if(error.response.status) {
                    window.alert(error.response.data.message)
                    this.props.history.push("/login")
                }
            }else{
                console.log(error);
            }
        })
    }

    componentDidMount(){
        this.getActor()
    }

    render(){
        return (
            <div>
               <Navbar />
               <div className="container">
                   <h3 className="text-bold text-info mt-2">Actor Data</h3>
                   <div className="row">
                       { this.state.actors.map( item => (
                           <Data
                           key = {item.id}
                           dateOfBirth = {item.dateOfBirth}
                           nationality = {item.nationality}
                           name = {item.name}
                           movies = {item.movies}
                            />
                       )) }
                   </div>
                </div>
            </div>
        )
    }
}
