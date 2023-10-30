/* eslint-disable react/prop-types */


const ServicesCard = ({service}) => {
  const {title,img,price}  = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title font-bold">{title}</h2>
     <p className="text-red-600 font-bold"> Price:${price}</p>
    
  </div>
</div>
  );
};

export default ServicesCard;