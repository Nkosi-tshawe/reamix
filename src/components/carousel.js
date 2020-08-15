import React,{useEffect,useRef} from 'react';
import CustomCard from './custom-card';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './carouse.module.css';

const settings ={
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true},
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,  
            },
            1440: {
              slidesPerView:5,
              spaceBetween: 20,  
            }
          }
    }

export default function Carousel(props) {

    const swiper = useRef(null);
    const posts = props.posts.nodes;
    useEffect(()=>{
        swiper.current= new Swiper('.swiper-container',settings);
        },[]);
        console.log('Posts ->',posts);    
    return (
               <div className="swiper-container" style={{width:'100%',height:'100%',overflow:'hidden'}}>       
                  <div className="swiper-wrapper">
                     { posts && posts.map((post,index)=>(
                        <div className="swiper-slide" key={index}>
                            <CustomCard key={index} post={post} />    
                        </div>
                     )) }
                  </div>
              </div>
    )
}