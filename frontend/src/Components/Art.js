const Art = ({ art: {id, name, price, description }, collection = ""}) => {
    return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header bg-info">
                    <h5 className="card-title text-center">{name}</h5>    
                </div>
                <div className="card-body">
                    <p className="card-text"><span className="bold">Price:</span> {price}</p>
                    <p className="card-text"><span className="bold">Description:</span> {description}</p>
                    <p className="card-text"><span className="bold">Collection:</span> {collection}</p>
                    <button className="btn-alert align-center" >Delete</button>
                </div>
            </div>
    )
};

export default Art;