import React from 'react';
import decodeString from '../utils/decodeString';
import {Link } from 'gatsby';

export default function Customcard(props) {
    
          
        const title = decodeString(props.post.title);  
        const artistName = title.split("–")[1];
        const trackName =  title.split("–")[0];
        let content = decodeString(props.post.content); 
        console.log('Post content -->', content);
      
        return (
       
            <div className="custom-card" >
                    <div className="custom-card--img">
                        <div className="custom-card--info">
                            <ul className="custom-card--labels d-flex">
                                <li><span className="badge badge-pill badge-warning"><i className="la la-star"></i></span></li>
                            </ul>
                            <div className="dropdown dropdown-icon">
                                <span role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ion-md-more"></i>
                                </span>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item">
                                        <span className="dropdown-link favorite">
                                            <i className="la la-heart-o"></i>
                                        </span>
                                    </li>
                                    <li className="dropdown-item">
                                        <span className="dropdown-link">
                                            <i className="la la-plus"></i>
                                        </span>
                                    </li>
                                    <li className="dropdown-item">
                                        <span className="dropdown-link">
                                            <i className="la la-download"></i>
                                        </span>
                                    </li>
                                    <li className="dropdown-item">
                                        <span className="dropdown-link">
                                            <i className="la la-share-alt"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span className="external" data-audio='{"name": "I Love You Mummy", "artist": "Arebica Luna", "album": "Mummy", "url": "../assets/audio/ringtone-1.mp3", "cover_art_url": "../assets/images/cover/small/1.jpg"}'>
                            <img src={props.jetpack_featured_media_url} alt="I Love You Mummy" className="card-img--radius-lg"/>
                        </span>
                    </div>

                    <Link to={props.slug}>
                        <h6 className="truncate">{trackName}</h6>
                        <p className="truncate">{artistName}</p>
                    </Link>
            </div>
        )
   
 }