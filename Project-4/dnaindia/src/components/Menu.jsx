import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
const Menu = () =>{
    // <Link to="/dashboard/newproduct"><Btn>Upload New Product</Btn></Link>
    return (
        <div className='menu'>
            <Link to="/latestnews">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg' alt=""></img>
                <p>Latest News</p>
            </div>
            </Link>
            <Link to="/ipl">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-cricket.svg' alt=""></img>
                <p>IPL 2022</p>
            </div>
            </Link>
            <Link to="/video">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg' alt=""></img>
                <p>Videos</p>
            </div>
            </Link>
            <Link to="/explainers">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg' alt=""></img>
                <p>Explainers</p>
            </div>
            </Link>
            <Link to="/india">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-india.svg' alt=""></img>
                <p>India</p>
            </div>
            </Link>
            <Link to="/entertainment">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg' alt=""></img>
                <p>Entertainment</p>
            </div>
            </Link>
            <Link to="/entertainment">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-business.svg' alt=""></img>
                <p>Business</p>
            </div>
            </Link>
            <Link to="/cricket">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-cricket.svg' alt=""></img>
                <p>Cricket</p>
            </div>
            </Link>
            <Link to="/cricket">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg' alt="" ></img>
                <p>Photos</p>
            </div>
            </Link>
            <Link to="/world">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-world.svg' alt=""></img>
                <p>World</p>
            </div>
            </Link>
            <Link to="/technology">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-tech.svg' alt=""></img>
                <p>Technology</p>
            </div>
            </Link>
            <Link to="/lifestyle">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg' alt=""></img>
                <p>Life Style</p>
            </div>
            </Link>
            <Link to="/education">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-education.svg' alt=""></img>
                <p>Education</p>
            </div>
            </Link>
            <Link to="/health">
            <div className='menu-box'>
                <img src='https://english.cdn.zeenews.com/static/public/icons/icons-health.svg' alt=""></img>
                <p>Health</p>
            </div>
            </Link>
        </div>
    );
};

export default Menu;