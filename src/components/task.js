
const Task = ({Description,handleCheck,Done}) => {
    return (
        <div className="d-flex align-items-center mb-3">
          <p className="m-0 fs-5">{Description}</p>
          <div className="form-check form-switch ms-auto">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkbox-${Description}`}
              checked={Done}
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor={`checkbox-${Description}`}></label>
          </div>
        </div>
      );
}
 
export default Task;