import React from "react"
export default function Header(props) {
  return (
    <header id="header" className="bg-warning scrolled">
          <div className="d-flex align-items-center">
              <button type="button" className="btn toggle-menu mr-3" id="openSidebar">
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
              <form action="#" id="searchForm">
                    <button type="button" className="btn ion-ios-search"></button>
                    <input type="text" placeholder="Search..." id="searchInput" className="form-control"/>
              </form>

              <ul className="header-options d-flex align-items-center">
                    <li>
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#lang" className="language">
                            <span>Language</span>
                            <img src="../assets/images/svg/translate.svg" alt=""/>
                        </a>
                    </li>
                    <li className="dropdown fade-in">
                        <a href="javascript:void(0);" className="d-flex align-items-center py-2" role="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-sm avatar-circle"><img src="assets/images/users/thumb.jpg" alt="user"/></div>
                            <span className="pl-2">Halo Admin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                            <a className="dropdown-item" href="profile.html"><i className="ion-md-contact"></i> <span>Profile</span></a>
                            <a className="dropdown-item" href="plan.html"><i className="ion-md-radio-button-off"></i> <span>Your Plan</span></a>
                            <a className="dropdown-item" href="settings.html"><i className="ion-md-settings"></i> <span>Settings</span></a>
                            <div className="dropdown-divider"></div>
                            <div className="px-4 py-2">
                                <a href="#" className="btn btn-sm btn-air btn-pill btn-danger">Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
          </div>
          
    </header>
  )
}