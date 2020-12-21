import React from 'react';
import NavMenu from '../../component/navMenu';
import '../style/list-course.css';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import CardCourse from './cardCourse';
import PaginationListCourse from './paginationListCourse';


class ListCourse extends React.Component {
    render() {
        return (
            <div className="container-list-course">
                <div className="header-list-course">
                    <NavMenu />
                </div>
                <div className="row-course">
                    <div className="row-category">
                        <h2>
                            Category :
                        </h2>
                        <UncontrolledDropdown>
                            <DropdownToggle caret>
                                All </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>All</DropdownItem>
                                <DropdownItem>Web Frontend</DropdownItem>
                                <DropdownItem>Backend</DropdownItem>
                                <DropdownItem>PHP</DropdownItem>
                                <DropdownItem>Python</DropdownItem>
                                <DropdownItem>REST API</DropdownItem>
                                <DropdownItem>Javascript</DropdownItem>
                                <DropdownItem>Node.Js</DropdownItem>
                                <DropdownItem>CLI</DropdownItem>
                                <DropdownItem>Git</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className="row-course" >
                    <InputGroup>
                        <Input placeholder="Find a course" />
                        <InputGroupAddon addonType="append">
                            <Button ><i class='fas fa-search'></i></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="row-course" >
                    <CardCourse />
                </div>
                <div className="row-course"><PaginationListCourse /></div>
            </div>
        );
    }
}
export default ListCourse;