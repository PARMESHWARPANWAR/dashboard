function DataCard(props) {
  return (
    <div
      className="data-card mx-auto md:mx-0 py-[1.25rem] px-[1.5625rem] rounded-[1.25rem] bg-[#DDEFE0] flex justify-between"
      style={{ background: `${props.background}` }}
    >
      <div className="flex flex-col mt-[1.5625rem] gap-[0.3124rem]">
        <div className="font-sans not-italic font-normal text-sm text-[#000000]">
          {props.title}
        </div>
        <div className="data-card-number not-italic text-[#000000] text-2xl font-bold">
          {props.number}
        </div>
      </div>
      <div className="data-card-icon">
        <img src={props.dataIconPath} alt="data-icon"></img>
      </div>
    </div>
  );
}

export default DataCard;
