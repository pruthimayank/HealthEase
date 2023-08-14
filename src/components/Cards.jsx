export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.iN}</h4>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.iC}</h6>
        <p className="card-text">
          <b>Description:</b> <i>{props.iD}</i>
        </p>
      </div>
    </div>
  );
}
