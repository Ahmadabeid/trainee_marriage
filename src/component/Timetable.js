import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Timetable.css";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "../server/axiosClient";

function Timetable() {
  const { timeTableId } = useParams();
  const [timeTable, setTimeTable] = useState([]);

  useEffect(() => {
    loadTimeTable();
  }, []);

<<<<<<< HEAD
  const loadTimeTable = async () => {
    const fetch = await axios.get("timetable/getTimetables");
    setTimeTable(fetch.data);
  };

  const deleteTimeTable = async (timeTableId) => {
    await axios.delete(`timetable/delete/${timeTableId}`);
=======
  
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}

  const loadTimeTable =async()=>{
    const fetch = await axios.get("http://localhost:8085/timetable/getTimetables",{headers});
    setTimeTable(fetch.data);
  };

  const deleteTimeTable =async(timeTableId)=>{
    await axios.delete(`http://localhost:8085/timetable/delete/${timeTableId}`,{headers});
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
    loadTimeTable();
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Timetable</h1>
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to={'#'}>Home</NavLink>
                    
                  </li>
                  <li className="breadcrumb-item active">Timetable</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    {/* <Link to='course'> */}
                    <div className="col-sm-2">
                      <Link to="/timetablerender">
                        <button
                          type="button"
                          className="btn btn-block btn-outline-success btn-sm "
                        >
                          <i className="fa fa-plus-alt"></i> Add Timetable
                        </button>
                      </Link>
                    </div>
                    {/* </Link> */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Title</th>
                          <th>Venue</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {timeTable.map((timeTable, index) => (
                          <tr key={index}>
                            <td key={index}>{index + 1}</td>
                            <td>{timeTable.ttDate}</td>
                            <td>{timeTable.ttTime}</td>
                            <td>{timeTable.ttTitle}</td>
                            <td>{timeTable.ttVenue}</td>

                            <td>
                              &nbsp;&nbsp;
                              <Link
                                to={`/viewTimetable/${timeTable.timeTableId}`}
                                class="btn btn-info"
                              >
                                <span className="glyphicon glaphycon-check-alt"></span>
                                <i className="fas fa-eye"></i>
                              </Link>
                              &nbsp;&nbsp;
                              <Link
                                to={`/updateTimetable/${timeTable.timeTableId}`}
                                className="btn btn-primary"
                              >
                                <span className="glyphicon glaphycon-check-alt"></span>
                                <i className="fa fa-edit"></i>
                              </Link>
                              &nbsp;
                              <button
                                type="button"
                                className=" trash btn btn-danger col-sm-2"
                                onClick={() =>
                                  deleteTimeTable(timeTable.timeTableId)
                                }
                              >
                                <span className="glyphicon glaphycon-trash-alt"></span>
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Timetable;
