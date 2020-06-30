import React from 'react';

export default function Customcard(props) {
    const title  = props.post;
    console.log('Card Post ->',title.title);
    // const artist = post.title.rendered;
    // console.log(`Artist: ${artist}`);
    return (
       
            <div className="custom-card" >
                    <div className="custom-card--img">
                        <div className="custom-card--info">
                            <ul className="custom-card--labels d-flex">
                                <li><span className="badge badge-pill badge-warning"><i className="la la-star"></i></span></li>
                            </ul>
                            <div className="dropdown dropdown-icon">
                                <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ion-md-more"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item">
                                        <a href="javascript:void(0);" className="dropdown-link favorite">
                                            <i className="la la-heart-o"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="javascript:void(0);" className="dropdown-link">
                                            <i className="la la-plus"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="javascript:void(0);" className="dropdown-link">
                                            <i className="la la-download"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="javascript:void(0);" className="dropdown-link">
                                            <i className="la la-share-alt"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="javascript:void(0);" className="external" data-audio='{"name": "I Love You Mummy", "artist": "Arebica Luna", "album": "Mummy", "url": "../assets/audio/ringtone-1.mp3", "cover_art_url": "../assets/images/cover/small/1.jpg"}'>
                            <img src="../assets/images/cover/large/1.jpg" alt="I Love You Mummy" className="card-img--radius-lg"/>
                        </a>
                    </div>

                    <a href="song-details.html" className="custom-card--link mt-2">
                        <h6>I Love You Mummy</h6>
                        <p>Arebica Luna</p>
                    </a>
            </div>
        
    )
}