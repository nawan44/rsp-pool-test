import React from 'react';
import NavMenu from '../../component/navMenu';
import '../style/list-course.css';
import '../style/detail-course.css';
// import Axios from 'axios';
import htmlcss from '../../asset/list-corse/htmlcss.png';
import { Progress } from 'reactstrap';


class DetailCourse extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         data: []
    //     };
    // }
    // componentDidMount() {
    //     Axios.get("https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json").then(res => {
    //         this.setState({ data: res.data });
    //     });
    // }
    render() {
        return (
            <div className="container-list-course">
                <div className="header-list-course">
                    <NavMenu />
                </div>
                <div className="detail-course">
                    <div className="detail-course-left">
                        <img src={htmlcss} />
                        <h1>HTML & CSS Introduction</h1>
                        <div className="detail-course-progres">
                            <Progress color="warning" value={75} />
                            <div className="detail-course-text">
                                <h6>70%</h6>
                                <h6>COMPLETE</h6>
                            </div>
                        </div>

                        <p>
                            <div className="course-curriculum"><i class='far fa-file-alt'></i>   Course Curriculum</div>
                            <div className="course-curriculum"><i class='fas fa-child'></i>  Your Instructor</div>
                        </p>

                    </div>
                    {/* <div className="detail-course-right">
                        Course Curriculum
                    </div> */}

                </div>

            </div>
        );
    }
}
export default DetailCourse;