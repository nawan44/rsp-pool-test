import React from 'react';
import NavMenu from '../../component/navMenu';
import '../style/list-course.css';
import '../style/detail-course.css';
// import Axios from 'axios';
import htmlcss from '../../asset/list-corse/htmlcss.png';
import { Progress } from 'reactstrap';
import TableContent from './tableContent';


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
                        <div className="detail-course-left1" >
                            <h1>HTML & CSS Introduction</h1>
                            <div className="detail-course-progres">
                                <Progress color="warning" value={50} />
                            </div>
                            <div className="detail-course-text">
                                <h6>50%</h6>
                                <h6>COMPLETE</h6>
                            </div>
                            <div className="course-curriculum"><i class='fas fa-id-card'></i>   Course Curriculum</div>
                            <div className="your-instructor"><i class='fas fa-user-alt'></i>  Your Instructor</div>

                        </div>




                    </div>
                    <div className="detail-course-right">
                        <h1>Course Curriculum</h1>
                        <div className="detail-course-right1">
                            <div className="start">
                                <h1>
                                    Start next lecture

                                    <i class='fas fa-angle-right'></i>
                                </h1>
                            </div>
                        </div>
                        <div className="detail-course-right2">
                            <TableContent />
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}
export default DetailCourse;