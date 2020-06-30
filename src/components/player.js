import React from 'react';

export default function Player() {
    return (
        <div id="audioPlayer" className="player-warning">

            <div id="progress-container">
                <input type="range" className="amplitude-song-slider"/>
                <progress className="audio-progress audio-progress--played amplitude-song-played-progress"></progress>
                <progress className="audio-progress audio-progress--buffered amplitude-buffered-progress" value="0"></progress>
            </div>
       
            <div className="audio">
                <div className="song-image"><img data-amplitude-song-info="cover_art_url" src="../assets/images/cover/small/1.jpg" alt=""/></div>
                <div className="song-info pl-3">
                    <span className="song-name d-inline-block text-truncate" data-amplitude-song-info="name"></span>
                    <span className="song-artists d-block text-muted" data-amplitude-song-info="artist"></span>
                </div>
            </div>
        
            <div className="audio-controls">
                <div className="audio-controls--left d-flex mr-auto">
                    <button className="btn btn-icon-only amplitude-repeat"><i className="la la-refresh"></i></button>
                </div>
                <div className="audio-controls--main d-flex">
                    <button className="btn btn-icon-only amplitude-prev"><i className="la la-step-backward"></i></button>
                    <button className="btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause">
                        <i className="la la-play"></i>
                        {/* <i className="la la-pause"></i> */}
                    </button>
                    <button className="btn btn-icon-only amplitude-next"><i className="la la-step-forward"></i></button>
                </div>
                <div className="audio-controls--right d-flex ml-auto">
                    <button className="btn btn-icon-only amplitude-shuffle amplitude-shuffle-off"><i className="la la-random"></i></button>
                </div>
            </div>
       
            <div className="audio-info d-flex align-items-center pr-4">
                    <span className="mr-4">
                        <span className="amplitude-current-minutes" ></span>:<span className="amplitude-current-seconds"></span> /
                        <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
                    </span>
                <div className="audio-volume dropdown">
                    <button className="btn btn-icon-only" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ion-md-volume-low"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right volume-dropdown-menu">
                        <input type="range" className="amplitude-volume-slider" value="100"/>
                    </div>
                </div>

                <div className="dropleft">
                    <button className="btn btn-icon-only" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="la la-ellipsis-v"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item">
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-heart-o"></i> <span>Favorite</span>
                            </a>
                        </li>
                        <li className="dropdown-item">
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-plus"></i> <span>Add to Playlist</span>
                            </a>
                        </li>
                        <li className="dropdown-item">
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-download"></i> <span>Download</span>
                            </a>
                        </li>
                        <li className="dropdown-item">
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-share-alt"></i> <span>Share</span>
                            </a>
                        </li>
                        <li className="dropdown-item">
                            <a href="song-details.html" className="dropdown-link">
                                <i className="la la-info-circle"></i>
                                <span>Song Info</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-icon-only" id="playList"><i className="ion-md-musical-note"></i></button>
            </div>
    </div>
    )
}