import React, { useEffect, useState } from 'react';
import './Trainee.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import Sidebar from './Sidebar';

const ReportGenerator = () => {
  const { userID } = useParams();
  const [trainee, setTrainee] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrainee, setFilteredTrainee] = useState([]);

  useEffect(() => {
    loadTrainee();
  }, []);

  useEffect(() => {
    filterTrainee();
  }, [searchQuery, trainee]);

  

  const loadTrainee = async () => {
    const response = await axios.get("http://localhost:8085/trainee/getTrainees");
    setTrainee(response.data);
  };

  const deleteTrainee = async (userID) => {
    await axios.delete(`http://localhost:8085/trainee/delete/${userID}`);
    loadTrainee();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterTrainee = () => {
    const filtered = trainee.filter((item) => {
      // Customize the filtering logic based on your data structure
      return (
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredTrainee(filtered);
  };

  const traineeData = searchQuery ? filteredTrainee : trainee;

  const handlePrintAndDownload = () => {
    const pdfFileName = 'report.pdf';
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
        </head>
        <body>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>MiddleName</th>
                <th>LastName</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Reg No</th>
              </tr>
            </thead>
            <tbody>
              ${traineeData
                .map(
                  (trainee, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${trainee.firstName}</td>
                    <td>${trainee.middleName}</td>
                    <td>${trainee.lastName}</td>
                    <td>${trainee.username}</td>
                    <td>${trainee.email}</td>
                    <td>${trainee.address}</td>
                    <td>${trainee.phoneNumber}</td>
                    <td>${trainee.regNo}</td>
                  </tr>
                `
                )
                .join('')}
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.addEventListener('afterprint', () => {
      printWindow.close();
      const link = document.createElement('a');
      link.href = `data:application/pdf;base64,${window.btoa(
        printWindow.document.documentElement.outerHTML
      )}`;
      link.download = pdfFileName;
      link.click();
    });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper col-sm-40">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb">
              <div className="col-sm-12">
                <h1>Report</h1>
              </div>
              <div className="col-sm-12">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Trainee</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content" id="f">
          <div className="container-fluid" id="f">
            <div className="row">
              <div className="col-50">
                <div className="card">
                  <div className="card-header">
                    <div className="">
                      <div className="di-flex">
                        <div>
                        <button
                          type="button"
                          className="btn btn-block btn-outline-success btn-sm"
                          onClick={handlePrintAndDownload}
                        >
                          <i className="fa fa-plus-alt"></i> Report
                        </button>
                        
                        </div>
                        &nbsp; &nbsp;
                        <Link to="/trainee">
                          <button
                            type="button"
                            className="btn btn-block btn-outline-success btn-sm"
                          >
                            <i className="fas fa-arrow-left"></i> Back
                          </button>
                        </Link>
                        &nbsp; &nbsp;
                       
                      </div>
                    </div>
                    &nbsp;
                    <div className="table-container col-sm table-wrapper ">
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      <table className="table col-sm-10 table">
                        <thead>
                          <tr>
                            <th id="age">ID</th>
                            <th id="n">Firstname</th>
                            <th id="n">MiddleName</th>
                            <th id="n">LastName</th>
                            <th id="us">Username</th>
                            <th id="f">Email</th>
                            <th id="n">Address</th>
                            <th id="us">Phone No</th>
                            <th id="us">Reg No</th>
                          </tr>
                        </thead>
                        <tbody>
                          {traineeData.map((trainee, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{trainee.firstName}</td>
                              <td>{trainee.middleName}</td>
                              <td>{trainee.lastName}</td>
                              <td>{trainee.username}</td>
                              <td>{trainee.email}</td>
                              <td>{trainee.address}</td>
                              <td>{trainee.phoneNumber}</td>
                              <td>{trainee.regNo}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportGenerator;
