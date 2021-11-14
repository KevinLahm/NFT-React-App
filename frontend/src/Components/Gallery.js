import { NavLink } from "react-router-dom"

 const Gallery = ({ gallery }) => ( 
    <div className="col-md-3 wrap">
            <div key={gallery.id} className="card" style={{ width: "18rem" }}>
                <div className="card-title text-center bg-info">
                    {gallery.title}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">
                        <NavLink  to={`/gallery/${gallery.id}`}>View Arts</NavLink>
                    </li>
                </ul>
            </div>
        </div>
)

export default Gallery;