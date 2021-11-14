const Form = ({galleries})=>(
<form>
  <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="name"/>
  </div>
  <div className="mb-3">
    <label for="price" className="form-label">Price</label>
    <input type="number" step="0.01" className="form-control" id="price"/>
  </div>
  <div className="mb-3">
    <label for="description ">Description</label><br/><br/>
    <textarea id="description"></textarea>
    
  </div>
  <div className="mb-3">
    <label for="gallery" className="form-label">Select Gallery</label>
    <select className="form-select" aria-label="Default select example">
       
  
    </select>
  </div>
  <button type="submit" className="btn btn-success">Save</button>
</form>
)
export default Form