function Schedule() {
  return (
    <div className="schedule-root">
      <div className="schedule-header">
        <div className="schedule-title">Today’s schedule</div>
        <div className="schedule-calender">See All</div>
      </div>
      <div className="schedule-container">
        <div className="schedule-details schedule-border-1">
          <h1 className="schedule-details-title">
            Meeting with suppliers from Kuta Bali
          </h1>
          <p className="schedule-time">14.00-15.00</p>
          <p className="schedule-location">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="schedule-details schedule-border-2">
          <h1 className="schedule-details-title">
            Check operation at Giga Factory 1
          </h1>
          <p className="schedule-time">18.00-20.00</p>
          <p className="schedule-location">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
