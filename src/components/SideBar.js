import React, { useEffect } from 'react';
import './SideBar.css';
import { CiUser } from 'react-icons/ci';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { CiWavePulse1 } from 'react-icons/ci';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineFire } from 'react-icons/ai';
import { IoPieChartOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';

import Logo from '../Assets/Logo.png';

const Sidebar = () => {
  useEffect(() => {
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));

    return () => {};
  }, []);

  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div className="me-4">
          <img src={Logo} alt="Logo" style={{ width: '40px' }} />
        </div>

        <div>
          <a href="#" className="nav_logo">
            <CiUser className="bx bx-layer nav_logo-icon" />
            <span className="nav_logo-name">BBBootstrap</span>
          </a>
          <div className="nav_list">
            <a href="#" className="nav_link active">
              <IoCloudUploadOutline className="bx bx-grid-alt nav_icon" />
              <span className="nav_name">Dashboard</span>
            </a>
            <a href="#" className="nav_link">
              <CiWavePulse1 className="bx bx-user nav_icon" />
              <span className="nav_name">Users</span>
            </a>
            <a href="#" className="nav_link">
              <MdOutlinePhotoLibrary className="bx bx-message-square-detail nav_icon" />
              <span className="nav_name">Messages</span>
            </a>
            <a href="#" className="nav_link">
              <SlCalender className="bx bx-bookmark nav_icon" />
              <span className="nav_name">Bookmark</span>
            </a>
            <a href="#" className="nav_link">
              <AiOutlineFire className="bx bx-folder nav_icon" />
              <span className="nav_name">Files</span>
            </a>
            <a href="#" className="nav_link">
              <IoPieChartOutline className="bx bx-bar-chart-alt-2 nav_icon" />
              <span className="nav_name">Stats</span>
            </a>
          </div>
        </div>
        <a href="#" className="nav_link">
          <IoSettingsOutline className="bx bx-log-out nav_icon" />
          <span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
