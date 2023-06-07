import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import DataCard from "../DataCard/DataCard";
import Schedule from "../Schedule/Schedule";
import TopProducts from "../TopProducts/TopProducts";
import Sidebar from "../Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-root">
      <div className="dashboard-page-container flex w-full md:m-[2.5rem]">
        <div className="md:w-[20vw] w-full max-w-full mr-0  md:mr-[3.75rem] md:max-w-[17.5rem] hidden md:flex">
          <Sidebar />
        </div>
        <div className="md:ml-10 mt-4 w-[95%] mx-auto md:mx-0 md:w-[74vw] mb-16 md:mb-0">
          <div className="flex flex-col items-start w-full gap-[2.5rem]">
            <Header />
            <div className="w-full flex justify-between flex-wrap gap-[2.25rem]">
              <DataCard
                dataIconPath="./camera.svg"
                background="#DDEFE0"
                title="Total Revenues"
                number="$2,129,430"
              />
              <DataCard
                dataIconPath="./pin.svg"
                background="#F4ECDD"
                title="Total Transactions"
                number="1,150"
              />
              <DataCard
                dataIconPath="./like.svg"
                background="#EFDADA"
                title="Total Likes"
                number="9,721"
              />
              <DataCard
                dataIconPath="./user.svg"
                background="#DEE0EF"
                title="Total Users"
                number="892"
              />
            </div>
            <div className="w-full">
              <Chart />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between gap-[2.5rem]">
              <div className="w-full md:w-1/2">
                <TopProducts />
              </div>
              <div className="w-full md:w-1/2">
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
