import React from 'react';
import {Link } from 'gatsby';

export default function SectionHeading(props) {
    return(
        <div className="heading">
                <div className="d-flex flex-wrap align-items-end">
                    <div className="flex-grow-1">
                        <h4>{ props.title}</h4>
                         <p>{ props.subtitle}</p>
                    </div>
                    {  (props.page) ?  <Link to={props.page} className="btn btn-sm btn-pill btn-air btn-warning">View All</Link> : <></>  }
                    
                </div>
                <hr/>
        </div>
    )
}