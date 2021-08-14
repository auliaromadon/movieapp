import React from "react"
// import Navbar from "../component/navbar"
import List  from "../component/list"
import { base_url, movies_image_url } from "../config.js";
import axios from "axios"

export default class Movie extends React.Component{
    constructor(){
        super()
        this.state = {
            movies: [],
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

    getMovie = () => {
        let url = base_url + "/movies"
        axios.get(url, this.headerConfig())
        .then(response=> {
            this.setState({movies: response.data})
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
        this.getMovie()
    }

    render(){
        return (
            <div>
               {/* <Navbar /> */}
               <div className="container">
                   <h3 className="text-bold text-info mt-2">Movie List</h3>
                   <div className="row">
                       { this.state.movies.map( item => (
                           <List
                           key = {item.id}
                           title = {item.title}
                           rating = {item.rating}
                           actors = {item.actors_name}
                            />
                       )) }
                   </div>
                </div>
            </div>
        )
    }
}
