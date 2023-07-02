import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './DocumentForm.css';

function UpdateCourse() {
  let navigate = useNavigate();
  const { courseId } = useParams();

  const [course, setCourse] = useState({
    courseCode: '',
    courseTitle: '',
    courseYear: '',
    courseLevel: ''
  });

  const { courseCode, courseTitle, courseYear, courseLevel } = course;

  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCourse();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:8080/Course/updateCourse/${courseId}`, course);
    navigate('/courset');
  }

  const loadCourse = async () => {
    const fetch = await axios.get(`http://localhost:8080/Course/getCourseById/${courseId}`);
    setCourse(fetch.data);
  }

  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Update Course</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Course</li>
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
                      <div className="col-sm-4">
                        <div className="form-container">
                          <h3>Update Course</h3>
                          <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                              <label htmlFor="courseCode">
                                Course Code
                              </label>
                              <input
                                name="courseCode"
                                type="text"
                                value={courseCode}
                                placeholder=""
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseTitle">
                                Course Title
                              </label>
                              <input
                                name="courseTitle"
                                type="text"
                                value={courseTitle}
                                placeholder=""
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseYear">
                                Course Year
                              </label>
                              <input
                                name="courseYear"
                                type="text"
                                value={courseYear}
                                placeholder=""
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseLevel">
                                Course Level
                              </label>
                              <input
                                name="courseLevel"
                                type="text"
                                value={courseLevel}
                                placeholder=""
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                            <div className="flex flex-row items-center space-x-4 -space-x-reverse mb-4">
                              <Link
                                to="/document"
                                className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                type="submit"
                              >
                                Cancel
                              </Link>
                              <button
                                // onClick={() => showAlert()}
                                className="btn btn-block btn-outline-primary btn-sm bg-sky-400 hover:bg-sky-600"
                                type="submit"
                                style={{ width: "200%" }}
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default UpdateCourse;
