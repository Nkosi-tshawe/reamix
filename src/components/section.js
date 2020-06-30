import React from 'react';
import SectionHeading from './section-heading';
import Carousel from './carousel';

export default function Section(props){
    // console.log('Section Props ->',props)
    return(
        <section className="section">
            <SectionHeading title={props.title} subtitle={props.subtitle} page={props.page}/>
            <Carousel  posts={props.posts}/>
        </section>
    )
}