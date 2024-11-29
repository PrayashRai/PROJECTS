import Constants from "../api/Constants";


const Category = (props) => {
  const { catId, catName, catImage } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={Constants.IMAGE_URL + catImage} alt="" className="card-top-image" />
        <div className="card-body">
          <h5 className="card-title">{catName}</h5>
          <a href="#" className="btn btn-primary btn-block">
            Select
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;


            
