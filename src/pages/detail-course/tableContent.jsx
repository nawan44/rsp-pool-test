import React from 'react';
import NavMenu from '../../component/navMenu';
import '../style/list-course.css';
import '../style/detail-course.css';
// import Axios from 'axios';
import htmlcss from '../../asset/list-corse/htmlcss.png';
import { Table } from 'reactstrap';


class TableContent extends React.Component {

    render() {
        return (
            <div className="container-table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="4" className="th-title">HTML Dasar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="check"><i class='fas fa-check-circle'></i></td>
                            <td><i class='fab fa-youtube'></i> Pengenalan HTML</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="check"><i class='fas fa-check-circle'></i></td>
                            <td><i class='fab fa-youtube'></i> Atribiut Tag HTML</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="check"><i class='fas fa-check-circle'></i></td>
                            <td><i class='fab fa-youtube'></i> Text Editor</td>
                            <td></td>
                        </tr>
                    </tbody>


                </Table>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="4" className="th-title">CSS Dasar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="check"><i class='fas fa-check-circle'></i></td>
                            <td><i class='fab fa-youtube'></i> Pengenalan CSS</td>
                            <td> <span className="badge-table">Start</span></td>
                        </tr>
                        <tr>
                            <td className="check"><i class='fas fa-check-circle'></i></td>
                            <td><i class='fab fa-youtube'></i> Menulis CSS 1 </td>
                            <td> <span className="badge-table">Start</span></td>
                        </tr>
                        <tr>
                            <td className="check"><i class='fas fa-check-circle'></i></td>
                            <td><i class='fab fa-youtube'></i>Menulis CSS 2</td>
                            <td> <span className="badge-table">Start</span></td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default TableContent;