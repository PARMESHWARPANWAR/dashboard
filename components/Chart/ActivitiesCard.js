function ActivitiesCard() {
  return (
    <div className="activities-card">
      <div className="activities-title">
        <b className="activities">Activities</b>
        <div className="date">May - June 2021 v</div>
      </div>
      <div className="users">
        <div className="guest">
          <span className="indicator-guest"></span>
          Guest
        </div>
        <div className="user">
          <span className="indicator-user"></span>
          User
        </div>
      </div>
    </div>
  );
}

export default ActivitiesCard;
