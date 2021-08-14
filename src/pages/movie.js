import React, {useState } from "react"
import { Card, Image, Typography  } from 'antd'
import { base_url, movies_image_url } from "../config.js";
import Star from "../component/star/index"
import axios from "axios"

const { Title } = Typography;
const { Meta } = Card;

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
            <>
                    <div
                        hoverable
                        style={{ padding: "2rem", display: 'flex', flexDirection: 'row' }}
                    >
                        { 
                            this.state.movies.map( item => (
                                  <Card
                                        hoverable
                                        style={{ width: 300, margin: '1rem', borderRadius: '50%' }}
                                        cover={<img alt="Movie" src={item.image} height={400} width={300} />}
                                    >
                                        <Meta title={item.title} style={{backgroundColor: "#000000", textAlign: 'center', color: 'white', padding: '1rem'}}/>
                                    </Card>
                            )) 

                       }
                    </div>
                    )
            </>
        )
    }
}
