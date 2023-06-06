function DataCard(props) {
  return (
    <div className="data-card" style={{ background: `${props.background}` }}>
      <div className="data-card-info">
        <div className="data-card-title">{props.title}</div>
        <div className="data-card-number">{props.number}</div>
      </div>
      <div className="data-card-icon">
        <img src={props.dataIconPath} alt="data-icon"></img>
      </div>
    </div>
  );
}

export default DataCard;
