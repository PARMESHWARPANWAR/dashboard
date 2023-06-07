function ActivitiesCard() {
  return (
    <div className="activities-card pl-4 md:pl-0">
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
