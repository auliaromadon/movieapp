import React from "react"

export default class Data extends React.Component{
    render(){
        return (
            <div className="card col-sm-12 my-1">
                <div className="card-body row">
                    <div className="col-sm-10">
                        {/* description */}
                        <h5 className="text-bold">Nama: {this.props.name}</h5>
                        <h6>Date of Birth: {this.props.dateOfBirth}</h6>
                        <h6>Nationality: {this.props.nationality}</h6>
                        <h6>Movies: {this.props.movies}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
