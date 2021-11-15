const Art = ({ art: {id, name, price, description, gallery }, collection = ""}) => {
    return (
            <>
                <div className="card-header bg-info">
                    <h5 className="card-title text-center text-white">{name}</h5>    
                </div>
                <div className="card-body">
                    <p className="card-text"><span className="bold">Price:</span> {price}</p>
                    <p className="card-text"><span className="bold">Description:</span> {description}</p>
                </div>
            </>
    )
};

export default Art;