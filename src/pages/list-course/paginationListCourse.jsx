import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationListCourse = (props) => {
    return (
        <div className="container-pagination">
            <Pagination className="pagination-style" size="lg" aria-label="Page navigation PaginationListCourse">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
        </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
        </PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink href="#">
                        3
        </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>
    );
}

export default PaginationListCourse;