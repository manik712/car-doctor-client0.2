import axios from 'axios';




const Add = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const NewProduct = {
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      image,
    };

    
    axios.post('http://localhost:8000/addProducts', 
      NewProduct
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  
  };



  











  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h4>{}</h4>
        <h3 className="text-3xl font-extrabold text-center">Add</h3>
        <form onSubmit={handleAddProduct}>
          {/* form row */}
          <div className=" md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  defaultValue={name}
                  type="text"
                  placeholder="Enter Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  name="brandName"
                  defaultValue={""}
                  type="text"
                  placeholder="Enter Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row */}
          <div className=" md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  // defaultValue={type}
                  name="type"
                  type="text"
                  placeholder="Enter Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  // defaultValue={price}
                  name="price"
                  type="text"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row */}
          <div className=" md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  // defaultValue={shortDescription}
                  name="shortDescription"
                  type="text"
                  placeholder="Enter Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  // defaultValue={rating}
                  name="rating"
                  type="text"
                  placeholder="Enter Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row */}
          <div className="mb-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  // defaultValue={image}
                  name="image"
                  type="photo"
                  placeholder="Enter image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Vew details"
            className="btn btn-secondary"
          />
        </form>
      </div>
    </div>
  );
};

export default Add;
