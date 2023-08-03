import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Courset = () => {
<<<<<<< HEAD
  const instance = axios.create({
    baseURL: 'http://localhost:8085/',
    timeout: 1000,
    headers: {'Authorization': 'Basic QWhtYWQ6MTIz'}
  });
  const {courseId} = useParams();
  const[course, setCourse]=useState([]);
=======
  const { courseId } = useParams()
  const [course, setCourse] = useState([])
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816

  useEffect(() => {
    // loadCourse();
  }, [])

<<<<<<< HEAD
  

  const loadCourse =async()=>{
    const fetch = await instance.get("course/getCourses");
    setCourse(fetch.data);
  };

  const deleteCourse =async(courseId)=>{
    await instance.delete(`course/deleteCourseById/${courseId}`);
    loadCourse();
  };
=======
  const headers = {
    Authorization: `Basic QWhtYWQ6MTIz`,
  }

  const loadCourse = async () => {
    const fetch = await axios.get('http://localhost:8085/course/getCourses', {
      headers,
    })
    setCourse(fetch.data)
  }

  const deleteCourse = async (courseId) => {
    await axios.delete(
      `http://localhost:8085/course/deleteCourseById/${courseId}`,
      { headers }
    )
    loadCourse()
  }
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Course List</h1>
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
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
                    <div className="col-sm-2">
                      <Link to="/courseForm">
                        <button
                          type="button"
                          class="btn btn-block btn-outline-success btn-sm "
                        >
                          <i class="fa fa-plus-alt"></i> Add Course
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th> Course Code</th>
                          <th>Course Title</th>
                          <th>Course Year</th>
                          <th>Course Level</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.map((course, index) => (
                          <tr>
                            <td key={index}>{index + 1}</td>
                            <td>{course.courseCode}</td>
                            <td>{course.courseTitle}</td>
                            <td> {course.courseYear}</td>
                            <td>{course.courseLevel}</td>
                            <td>
                              <Link
                                to={`/viewCourse/${course.courseId}`}
                                class="btn btn-info"
                              >
                                <span class="glyphicon glaphycon-check-alt"></span>
                                <i class="fas fa-eye"></i>
                              </Link>
                              &nbsp;
                              <Link
                                to={`/updateCourse/${course.courseId}`}
                                class="btn btn-primary"
                              >
                                <span class="glyphicon glaphycon-check-alt"></span>
                                <i class="fa fa-edit"></i>
                              </Link>
                              &nbsp;
                              <button
                                type="button"
                                className=" trash btn btn-danger col-sm-2"
                                onClick={() => deleteCourse(course.courseId)}
                              >
                                <span className="glyphicon glaphycon-trash-alt"></span>
                                <i class="fas fa-trash-alt"></i>
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
  )
}

export default Courset
