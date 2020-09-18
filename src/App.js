import React, { useEffect, useState } from "react";
import "lodash";
import "./App.css";
import { getMissionData } from "./redux/actions/missionActions";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/card";
import Menu from "./components/menu";
import ReactPaginate from "react-paginate";
const years = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020
];

function App(props) {
  const missionRecord = useSelector(state => state.missionData);
  const dispatch = useDispatch();
  const { missionData, loading, error } = missionRecord;
  const [pageCount, setPageCount] = useState(0);
  const [year, setYear] = useState(0);
  const [lunch, setLunch] = useState("");
  const [landing, setLanding] = useState("");

  useEffect(() => {
    dispatch(getMissionData(0, "", "", pageCount));
  }, []);

  useEffect(() => {
    dispatch(getMissionData(year, lunch, landing, pageCount));
  }, [year, lunch, landing,pageCount]);

  const onClickYear = (data, source) => {
    if (source === "year") {
      setYear(data);
      setPageCount(0);
    } else if (source === "launch") {
      setLunch(data.toString());
      setLanding("");
      setYear(0);
      setPageCount(0);
    } else if (source === "landing") {
      setLanding(data.toString());
      setLunch("");
      setYear(0);
      setPageCount(0);
    }
  };

  const handleChangePage = (e) => {
    setPageCount( e.selected+1);
  };

  return (
    <div style={{ display: "grid"}}>
      <header>
        <h2>SPACEX PROGRAM</h2>
        </header>
      <main className="page-container">
        <aside>
          <Menu years={years} onClickYear={onClickYear} />
        </aside>
        <article>
        {loading ? <div className="loader"/>:
         missionData.length == 0 ?<div className="no_data_found"><h4>No data Found</h4></div> : <div className="App">
            {missionData.map((mission,id) => {
              return (
                <Card
                  key={id}
                  mission_id={mission.mission_id}
                  mission_name={mission.mission_name}
                  imgUrl={mission.links.mission_patch}
                  launch_year={mission.launch_year}
                  launch_success={mission.launch_success}
                />
              );
            })}
          </div>}
        </article>
      </main>
      <footer>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handleChangePage}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </footer>
    </div>
  );
}

export default App;
