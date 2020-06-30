import React from 'react';
import decodeString from '../utils/decodeString';
import {Link } from 'gatsby';

export default function Customcard(props) {
    
    const post  = props.post;
    
    if(post.alternative_id) {
      
        const title = decodeString(post.title.rendered);  
        const artistName = title.split("–")[1];
        const trackName =  title.split("–")[0];
      
        return (
       
            <div className="custom-card" >
                    <div className="custom-card--img">
                        <div className="custom-card--info">
                            <ul className="custom-card--labels d-flex">
                                <li><span className="badge badge-pill badge-warning"><i className="la la-star"></i></span></li>
                            </ul>
                            <div className="dropdown dropdown-icon">
                                <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ion-md-more"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link favorite">
                                            <i className="la la-heart-o"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">
                                            <i className="la la-plus"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">
                                            <i className="la la-download"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">
                                            <i className="la la-share-alt"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" className="external" data-audio='{"name": "I Love You Mummy", "artist": "Arebica Luna", "album": "Mummy", "url": "../assets/audio/ringtone-1.mp3", "cover_art_url": "../assets/images/cover/small/1.jpg"}'>
                            <img src={post.jetpack_featured_media_url} alt="I Love You Mummy" className="card-img--radius-lg"/>
                        </a>
                    </div>

                    <Link to={post.slug}>
                        <h6 className="truncate">{trackName}</h6>
                        <p className="truncate">{artistName}</p>
                    </Link>
            </div>
        )
    } else { 
        return (<></>)
    }
 }