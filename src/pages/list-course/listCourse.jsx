import React from 'react';
import NavMenu from '../../component/navMenu';
import '../style/list-course.css';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, InputGroup, InputGroupAddon, Button, Input, Badge } from 'reactstrap';
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
                                <DropdownItem>Web Frontend   <Badge pill>14</Badge></DropdownItem>
                                <DropdownItem>Backend</DropdownItem>
                                <DropdownItem>PHP  <Badge pill>3</Badge></DropdownItem>
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
                <div className="row-course"  >
                    <NavLink href="/detail-course">
                        <CardCourse />

                    </NavLink>
                </div>
                <div className="row-course"><PaginationListCourse /></div>
            </div>
        );
    }
}
export default ListCourse;