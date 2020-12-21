import React from 'react';
import '../style/list-course.css';
import { Card, CardImg, CardBody, CardTitle, Row, Progress } from 'reactstrap';
import htmlcss from '../../asset/list-corse/htmlcss.png';
import harlita from '../../asset/list-corse/harlita.png';


class CardCourse extends React.Component {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardImg top width="100%" src={htmlcss} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="card-title">HTML & CSS Introduction</CardTitle>
                        <Progress className="progress" color="warning" value={75} />
                        <Row className="row-content">
                            <div className="col-foto">
                                <img className="foto-mentor" src={harlita} />
                            </div>
                            <div className="col-nama" >Harlita Keni Damonti</div>
                            <div className="col-progres">
                                <div className="text-center">70%
                                <p>COMPLETE</p>
                                </div>

                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default CardCourse;