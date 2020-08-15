import React from 'react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-img">
        <div className="footer-content">
            <a href="#" className="email">info@listenapp.com</a>
            <div className="platform-btn-inline">
                <a href="#" className="btn btn-dark btn-air platform-btn">
                    <i className="la la-android"></i>
                    <div className="platform-btn-info">
                        <span className="platform-desc">Available on</span>
                        <span className="platform-name">Android</span>
                    </div>
                </a>
                <a href="#" className="btn btn-danger btn-air platform-btn">
                    <i className="la la-apple"></i>
                    <div className="platform-btn-info">
                        <span className="platform-desc">Available on</span>
                        <span className="platform-name">App Store</span>
                    </div>
                </a>
            </div>
        </div>
    </footer>
    )
}