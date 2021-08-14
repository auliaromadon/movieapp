import React from "react"

class List extends React.Component{
    render(){
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5">
                            <img src={this.props.image} className="img"
                            height="200" width="200" alt={this.props.title}/>
                        </div>

                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                { this.props.title }
                            </h5>
                            <h6 className="text-danger">
                                Rating: { this.props.rating}
                            </h6>
                            <h6 className="text-danger">
                                Actors: { this.props.actors_name}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default List;