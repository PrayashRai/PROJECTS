import Constants from "../api/Constants";


const Product = (props) => {
  const { _id, productName, image, mrp, price, unit } = props.data;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          src={Constants.IMAGE_URL + image}
          alt=""
          className="card-top-img"
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{unit}</p>
          <h2>
            <span>&#8377;</span> {price}
            <span>
              <del>
                <span>&#8377;</span>
                {mrp}
              </del>
            </span>
          </h2>
          <a href="#" className="btn btn-primary btn-block">
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
