import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
  return (
   <>
        <div className="popup-mobilemenu-area">
            <div className="inner">
                <div className="mobile-menu-top">
                    <div className="logo">
                        <Link to="index.html">
                            <img className="dark-logo" src="assets/images/logo/logo-black.png" alt="Logo Images"/>
                            <img className="light-logo" src="assets/images/logo/logo-white2.png" alt="Logo Images"/>
                        </Link>
                    
                    </div>
                    <div className="mobile-close">
                        <div className="icon">
                            <i className="fal fa-times"></i>
                        </div>
                    </div>
                </div>
                <ul className="mainmenu">
                    <li className="menu-item-has-children"><a href="#">Home</a>
                        <ul className="axil-submenu">
                            <li><a href="index.html">Home Default</a></li>
                            <li><a href="home-creative-blog.html">Home Creative Blog</a></li>
                            <li><a href="home-seo-blog.html">Home Seo Blog</a></li>
                            <li><a href="home-tech-blog.html">Home Tech Blog</a></li>
                            <li><a href="home-lifestyle-blog.html">Home Lifestyle Blog</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#">Categories</a>
                        <ul className="axil-submenu">
                            <li><a href="post-details.html">Accessibility</a></li>
                            <li><a href="post-details.html">Android Dev</a></li>
                            <li><a href="post-details.html">Accessibility</a></li>
                            <li><a href="post-details.html">Android Dev</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#">Post Format</a>
                        <ul className="axil-submenu">
                            <li><a href="post-format-standard.html">Post Format Standard</a></li>
                            <li><a href="post-format-video.html">Post Format Video</a></li>
                            <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
                            <li><a href="post-format-text.html">Post Format Text Only</a></li>
                            <li><a href="post-layout-1.html">Post Layout One</a></li>
                            <li><a href="post-layout-2.html">Post Layout Two</a></li>
                            <li><a href="post-layout-3.html">Post Layout Three</a></li>
                            <li><a href="post-layout-4.html">Post Layout Four</a></li>
                            <li><a href="post-layout-5.html">Post Layout Five</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#">Pages</a>
                        <ul className="axil-submenu">
                            <li><a href="post-list.html">Post List</a></li>
                            <li><a href="archive.html">Post Archive</a></li>
                            <li><a href="author.html">Author Page</a></li>
                            <li><a href="about.html">About Page</a></li>
                            <li><a href="maintenance.html">Maintenance</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </li>
                    <li><a href="404.html">404 Page</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
                <div className="buy-now-btn">
                    <a href="#">Buy Now <span className="badge">$15</span></a>
                </div>
            </div>
        </div>


        <h1 className="d-none">Home Default Blog</h1>
        <div className="slider-area bg-color-grey">
            <div className="axil-slide slider-style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-activation axil-slick-arrow">
                                
                                <div className="content-block">
                                   
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/gallery-post-01.jpg" alt="Post Images"/>
                                        </a>
                                    </div>
                               
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="DESIGN">DESIGN</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h2 className="title"><a href="post-details.html">4 types of research methods all designers should know</a></h2>
    
                                        <div className="post-meta-wrapper with-button">
                                            <div className="post-meta">
                                                <div className="post-author-avatar border-rounded">
                                                    <img src="assets/images/post-images/author/author-image-3.png" alt="Author Images"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-author-name">
                                                        <a className="hover-flip-item-wrapper" href="author.html">
                                                            <span className="hover-flip-item">
                                                                <span data-text="Rahabi Khan">Rahabi Khan</span>
                                                            </span>
                                                        </a>
                                                    </h6>
                                                    <ul className="post-meta-list">
                                                        <li>Feb 17, 2019</li>
                                                        <li>300k Views</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="social-share-transparent justify-content-end">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fas fa-link"></i></a></li>
                                            </ul>
                                            <div className="read-more-button cerchio">
                                                <a className="axil-button button-rounded hover-flip-item-wrapper" href="post-details.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Read Post">Read Post</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                                <div className="content-block">
                               
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/gallery-post-03.jpg" alt="Post Images"/>
                                        </a>
                                    </div>
    
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="CAREERS">CAREERS</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h2 className="title"><a href="post-details.html">These 5 tips will help you nail your next design presentation</a></h2>

                                      
                                        <div className="post-meta-wrapper with-button">
                                            <div className="post-meta">
                                                <div className="post-author-avatar border-rounded">
                                                    <img src="assets/images/post-images/author/author-image-1.png" alt="Author Images"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-author-name">
                                                        <a className="hover-flip-item-wrapper" href="author.html">
                                                            <span className="hover-flip-item">
                                                                <span data-text="Syed Tahmim">Syed Tahmim</span>
                                                            </span>
                                                        </a>

                                                    </h6>
                                                    <ul className="post-meta-list">
                                                        <li>Feb 17, 2019</li>
                                                        <li>300k Views</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="social-share-transparent justify-content-end">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fas fa-link"></i></a></li>
                                            </ul>
                                            <div className="read-more-button cerchio">
                                                <a className="axil-button button-rounded hover-flip-item-wrapper" href="post-details.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Read Post">Read Post</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                               
                                </div>
                              

                                <div className="content-block">
                       
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/gallery-post-02.jpg" alt="Post Images"/>
                                        </a>
                                    </div>
    
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="DESIGN">DESIGN</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h2 className="title"><a href="post-details.html">iPadOS 14 introduces
                                                new designed specifically for iPad</a></h2>

                                        <div className="post-meta-wrapper with-button">
                                            <div className="post-meta">
                                                <div className="post-author-avatar border-rounded">
                                                    <img src="assets/images/post-images/author/author-image-2.png" alt="Author Images"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-author-name">
                                                        <a className="hover-flip-item-wrapper" href="author.html">
                                                            <span className="hover-flip-item">
                                                                <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                            </span>
                                                        </a>

                                                    </h6>
                                                    <ul className="post-meta-list">
                                                        <li>Feb 17, 2019</li>
                                                        <li>300k Views</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="social-share-transparent justify-content-end">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fas fa-link"></i></a></li>
                                            </ul>
                                            <div className="read-more-button cerchio">
                                                <a className="axil-button button-rounded hover-flip-item-wrapper" href="post-details.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Read Post">Read Post</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                               
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="axil-featured-post axil-section-gap bg-color-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">More Featured Posts.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30">
                        <div className="content-block content-direction-column axil-control is-active post-horizontal thumb-border-rounded">
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="APPLE DESIGN">APPLE DESIGN</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">Apple reimagines the iPhone experience
                                        with iOS 14</a></h4>
                                <div className="post-meta">
                                    <div className="post-author-avatar border-rounded">
                                        <img src="assets/images/post-images/author/author-image-2.png" alt="Author Images"/>
                                    </div>
                                    <div className="content">
                                        <h6 className="post-author-name">
                                            <a className="hover-flip-item-wrapper" href="author.html">
                                                <span className="hover-flip-item">
                                                    <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                </span>
                                            </a>
                                        </h6>
                                        <ul className="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-images-1.jpg" alt="Post Images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30">
                        <div className="content-block content-direction-column axil-control post-horizontal  thumb-border-rounded">
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="TECH">TECH</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">Flutter: the good, the bad and the
                                        ugly</a></h4>
                                <div className="post-meta">
                                    <div className="post-author-avatar border-rounded">
                                        <img src="assets/images/post-images/author/author-image-1.png" alt="Author Images"/>
                                    </div>
                                    <div className="content">
                                        <h6 className="post-author-name">
                                            <a className="hover-flip-item-wrapper" href="author.html">
                                                <span className="hover-flip-item">
                                                    <span data-text="Jone Doe">Jone Doe</span>
                                                </span>
                                            </a>
                                        </h6>
                                        <ul className="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-images-2.jpg" alt="Post Images"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       
        <div className="axil-tab-area axil-section-gap bg-color-white">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="axil-banner mb--30">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img className="w-100" src="assets/images/add-banner/banner-03.png" alt="Banner Images"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">Innovation &#38; Tech</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
               
                            <ul className="axil-tab-button nav nav-tabs mt--20" id="axilTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="tab-one" data-bs-toggle="tab" href="#tabone" role="tab" aria-controls="tab-one" aria-selected="true">Accessibility</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="tab-two" data-bs-toggle="tab" href="#tabtwo" role="tab" aria-controls="tab-two" aria-selected="false">Android Dev </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="tab-three" data-bs-toggle="tab" href="#tabthree" role="tab" aria-controls="tab-three" aria-selected="false">Blockchain</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="tab-four" data-bs-toggle="tab" href="#tabfour" role="tab" aria-controls="tab-four" aria-selected="false">Gadgets</a>
                                </li>
                            </ul>
        
                            <div className="tab-content" id="axilTabContent">
                                <div className="single-tab-content tab-pane fade show active" id="tabone" role="tabpanel" aria-labelledby="tab-one">
                                    <div className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
                                         <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-04.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="APPLE DESIGN">APPLE DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Bold new experience. Same
                                                            Mac magic.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-05.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                      
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="GADGETS">GADGETS</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Creative Game With The New
                                                            DJI Mavic Air 2</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-06.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-07.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                          
                                    </div>
                                </div>

                                <div className="single-tab-content tab-pane fade" id="tabtwo" role="tabpanel" aria-labelledby="tab-two">
                                    <div className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">

                         
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="APPLE DESIGN">APPLE DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Bold new experience. Same
                                                            Mac magic.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-07.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="CASE STUDY">CASE STUDY</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-06.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-05.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-04.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                      

                                    </div>
                                </div>

                                <div className="single-tab-content tab-pane fade" id="tabthree" role="tabpanel" aria-labelledby="tab-three">
                                    <div className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">

                                   
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-04.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Bold new experience.
                                                            Same Mac magic.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-08.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-01.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-02.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </div>

                                <div className="single-tab-content tab-pane fade" id="tabfour" role="tabpanel" aria-labelledby="tab-four">
                                    <div className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">

                                     
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="APPLE DESIGN">APPLE DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Bold new experience.
                                                            Same Mac magic.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-03.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="GADGETS">GADGETS</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air 2</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-02.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                  
                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="GADGETS">GADGETS</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-01.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                            

                                        <div className="slick-single-layout">
                                            <div className="content-block modern-post-style text-center content-block-column">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="GADGETS">GADGETS</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                                            and ready to go.</a></h4>
                                                </div>
                                                <div className="post-thumbnail">
                                                    <a href="post-details.html">
                                                        <img src="assets/images/post-images/post-column-05.jpg" alt="Post Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="axil-categories-list axil-section-gap bg-color-grey">
            <div className="container">
                <div className="row align-items-center mb--30">
                    <div className="col-lg-6 col-md-8 col-sm-8 col-12">
                        <div className="section-title">
                            <h2 className="title">Trending Topics</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-4 col-12">
                        <div className="see-all-topics text-start text-sm-end mt_mobile--20">
                            <a className="axil-link-button" href="#">See All Topics</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                  
                        <div className="list-categories d-flex flex-wrap">

                         
                            <div className="single-cat">
                                <div className="inner">
                                    <a href="#">
                                        <div className="thumbnail">
                                            <img src="assets/images/post-images/post-sm-01.jpg" alt="post categories Images"/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Sports &#38; Fitness </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        
                            <div className="single-cat">
                                <div className="inner">
                                    <a href="#">
                                        <div className="thumbnail">
                                            <img src="assets/images/post-images/post-sm-02.jpg" alt="post categories Images"/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Travel</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                         

                         
                            <div className="single-cat">
                                <div className="inner">
                                    <a href="#">
                                        <div className="thumbnail">
                                            <img src="assets/images/post-images/post-sm-03.jpg" alt="post categories Images"/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">lifestyle</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                       
                            <div className="single-cat">
                                <div className="inner">
                                    <a href="#">
                                        <div className="thumbnail">
                                            <img src="assets/images/post-images/post-sm-04.jpg" alt="post categories Images"/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Health</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        
                            <div className="single-cat">
                                <div className="inner">
                                    <a href="#">
                                        <div className="thumbnail">
                                            <img src="assets/images/post-images/post-sm-05.jpg" alt="post categories Images"/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Animals</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                          
                            <div className="single-cat">
                                <div className="inner">
                                    <a href="#">
                                        <div className="thumbnail">
                                            <img src="assets/images/post-images/post-sm-06.jpg" alt="post categories Images"/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Food &#38; Drink</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        

                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
      
        <div className="axil-trending-post-area axil-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">Most Popular</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                     
                        <ul className="axil-tab-button nav nav-tabs mt--20" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="trend-one" data-bs-toggle="tab" href="#trendone" role="tab" aria-controls="trend-one" aria-selected="true">Accessibility</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="trend-two" data-bs-toggle="tab" href="#trendtwo" role="tab" aria-controls="trend-two" aria-selected="false">Android Dev</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="trend-three" data-bs-toggle="tab" href="#trendthree" role="tab" aria-controls="trend-three" aria-selected="false">Blockchain</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="trend-four" data-bs-toggle="tab" href="#trendfour" role="tab" aria-controls="trend-four" aria-selected="false">Gadgets</a>
                            </li>
                        </ul>
                      
                        <div className="tab-content">

                           
                            <div className="row trend-tab-content tab-pane fade show active" id="trendone" role="tabpanel" aria-labelledby="trend-one">
                                <div className="col-lg-8">
                               
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">01</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Jone Doe">Jone Doe</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-01.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                  
                                    <div className="content-block trend-post post-order-list is-active">
                                        <div className="post-inner">
                                            <span className="post-order-list">02</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="BOOKS">BOOKS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">The underrated design book
                                                        that transformed the way I work</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Jane Afroj">Jane Afroj</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-02.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                               
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">03</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="PROCESS">PROCESS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">Here’s what you should
                                                        (and shouldn’t) do when giving formal feedback</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Israt Ara">Israt Ara</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-03.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                 
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">04</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">6 ways you can make your design more inclusive and equitable</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-04.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>
                       
                            <div className="row trend-tab-content tab-pane fade" id="trendtwo" role="tabpanel" aria-labelledby="trend-two">
                                <div className="col-lg-8">

                                  
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">01</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Jakowar">Jakowar</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-01.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                  
                                    <div className="content-block trend-post post-order-list axil-control is-active">
                                        <div className="post-inner">
                                            <span className="post-order-list">02</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="BOOKS">BOOKS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">The underrated design book
                                                        that transformed the way I work</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Jasika">Jasika</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-02.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                               
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">03</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="PROCESS">PROCESS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">Here’s what you should
                                                        (and shouldn’t) do when giving formal feedback</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Israt Ara">Israt Ara</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-03.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                              
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">04</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="John Jane">John Jane</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-04.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                               
                                </div>
                            </div>
             
                            <div className="row trend-tab-content tab-pane fade" id="trendthree" role="tabpanel" aria-labelledby="trend-two">
                                <div className="col-lg-8">
    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">01</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Najmul">Najmul</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-01.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                   
                                    <div className="content-block trend-post post-order-list axil-control is-active">
                                        <div className="post-inner">
                                            <span className="post-order-list">02</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="BOOKS">BOOKS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">The underrated design book
                                                        that transformed the way I work</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Kanak Lota">Kanak Lota</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-02.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">03</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="PROCESS">PROCESS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">Here’s what you should
                                                        (and shouldn’t) do when giving formal feedback</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Nowsin Afroj">Nowsin Afroj</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-03.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">04</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-04.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                   

                                </div>
                            </div>
                           
                            <div className="row trend-tab-content tab-pane fade" id="trendfour" role="tabpanel" aria-labelledby="trend-two">
                                <div className="col-lg-8">
    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">01</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-01.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div className="content-block trend-post post-order-list axil-control is-active">
                                        <div className="post-inner">
                                            <span className="post-order-list">02</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="BOOKS">BOOKS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">The underrated design book
                                                        that transformed the way I work</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Jasika">Jasika</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-02.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                  
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">03</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="PROCESS">PROCESS</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">Here’s what you should
                                                        (and shouldn’t) do when giving formal feedback</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Najmul Alom">Najmul Alom</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-03.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                               
                                    <div className="content-block trend-post post-order-list axil-control">
                                        <div className="post-inner">
                                            <span className="post-order-list">04</span>
                                            <div className="post-content">
                                                <div className="post-cat">
                                                    <div className="post-cat-list">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="CASE STUDY">CASE STUDY</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="title"><a href="post-details.html">How a developer and
                                                        designer duo at Deutsche Bank keep remote collaboration
                                                        alive</a></h3>
                                                <div className="post-meta-wrapper">
                                                    <div className="post-meta">
                                                        <div className="content">
                                                            <h6 className="post-author-name">
                                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Jakarark">Jakarark</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <ul className="post-meta-list">
                                                                <li>Feb 17, 2019</li>
                                                                <li>3 min read</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="social-share-transparent justify-content-end">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/post-images/trend-post-04.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                         
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    
        <div className="axil-post-grid-area axil-section-gap bg-color-grey">
            <div className="container">
                <div className="row axil-section-gapBottom">
                    <div className="col-lg-12">
                        <div className="axil-social-wrapper bg-color-white radius">
                            <ul className="social-with-text">
                                <li className="twitter"><a href="#"><i className="fab fa-twitter"></i><span>Twitter</span></a></li>
                                <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i><span>Facebook</span></a></li>
                                <li className="instagram"><a href="#"><i className="fab fa-instagram"></i><span>Instagram</span></a></li>
                                <li className="youtube"><a href="#"><i className="fab fa-youtube"></i><span>Youtube</span></a></li>
                                <li className="pinterest"><a href="#"><i className="fab fa-pinterest"></i><span>Pinterest</span></a></li>
                                <li className="discord"><a href="#"><i className="fab fa-discord"></i><span>Discord</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">Most Popular</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ul className="axil-tab-button nav nav-tabs mt--20" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="grid-one" data-bs-toggle="tab" href="#gridone" role="tab" aria-controls="grid-one" aria-selected="true">Accessibility</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="grid-two" data-bs-toggle="tab" href="#gridtwo" role="tab" aria-controls="grid-two" aria-selected="false">Android Dev</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="grid-three" data-bs-toggle="tab" href="#gridthree" role="tab" aria-controls="grid-three" aria-selected="false">Blockchain</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="grid-four" data-bs-toggle="tab" href="#gridfour" role="tab" aria-controls="grid-four" aria-selected="false">Gadgets</a>
                            </li>
                        </ul>
                       
                        <div className="grid-tab-content tab-content mt--10">

                        
                            <div className="single-post-grid tab-pane fade show active" id="gridone" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                                       
                                        <div className="content-block post-grid post-grid-large mt--30">
                                            <div className="post-thumbnail">
                                                <a href="post-details.html">
                                                    <img src="assets/images/post-images/post-grid-01.jpg" alt="Post Images"/>
                                                </a>
                                            </div>
                                            <div className="post-grid-content">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h3 className="title"><a href="post-details.html">Get Ready To Up Your
                                                            Creative Game With The New DJI Mavic Air 2</a></h3>
                                                    <div className="post-meta-wrapper">
                                                        <div className="post-meta">
                                                            <div className="post-author-avatar border-rounded">
                                                                <img src="assets/images/post-images/author/author-image-2.png" alt="Author Images"/>
                                                            </div>
                                                            <div className="content">
                                                                <h6 className="post-author-name">
                                                                    <a className="hover-flip-item-wrapper" href="author.html">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                        </span>
                                                                    </a>
                                                                </h6>
                                                                <ul className="post-meta-list">
                                                                    <li>Feb 17, 2019</li>
                                                                    <li>300k Views</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="social-share-transparent justify-content-end">
                                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                           
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-07.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="LIFESTYLE">LIFESTYLE</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">The underrated
                                                                    design book
                                                                    that transformed the</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                          
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                          
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-08.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="TRAVEL">TRAVEL</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">Apple reimagines
                                                                    the iPhone experience with iOS 14 </a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="single-post-grid tab-pane fade" id="gridtwo" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                                     
                                        <div className="content-block post-grid post-grid-large mt--30">
                                            <div className="post-thumbnail">
                                                <a href="post-details.html">
                                                    <img src="assets/images/post-images/post-grid-09.jpg" alt="Post Images"/>
                                                </a>
                                            </div>
                                            <div className="post-grid-content">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h3 className="title"><a href="post-details.html">Get Ready To Up Your
                                                            Creative Game With The New DJI Mavic Air 2</a></h3>
                                                    <div className="post-meta-wrapper">
                                                        <div className="post-meta">
                                                            <div className="post-author-avatar border-rounded">
                                                                <img src="assets/images/post-images/author/author-image-2.png" alt="Author Images"/>
                                                            </div>
                                                            <div className="content">
                                                                <h6 className="post-author-name">
                                                                    <a className="hover-flip-item-wrapper" href="author.html">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                        </span>
                                                                    </a>
                                                                </h6>
                                                                <ul className="post-meta-list">
                                                                    <li>Feb 17, 2019</li>
                                                                    <li>300k Views</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="social-share-transparent justify-content-end">
                                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                            
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-02.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="LIFESTYLE">LIFESTYLE</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">The underrated
                                                                    design book
                                                                    that transformed the</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                             
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-03.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="TRAVEL">TRAVEL</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">Apple reimagines
                                                                    the
                                                                    iPhone experience with iOS 14 </a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="single-post-grid tab-pane fade" id="gridthree" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                                     
                                        <div className="content-block post-grid post-grid-large mt--30">
                                            <div className="post-thumbnail">
                                                <a href="post-details.html">
                                                    <img src="assets/images/post-images/post-grid-09.jpg" alt="Post Images"/>
                                                </a>
                                            </div>
                                            <div className="post-grid-content">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h3 className="title"><a href="post-details.html">Get Ready To Up Your
                                                            Creative Game With The New DJI Mavic Air 2</a></h3>
                                                    <div className="post-meta-wrapper">
                                                        <div className="post-meta">
                                                            <div className="post-author-avatar border-rounded">
                                                                <img src="assets/images/post-images/author/author-image-2.png" alt="Author Images"/>
                                                            </div>
                                                            <div className="content">
                                                                <h6 className="post-author-name">
                                                                    <a className="hover-flip-item-wrapper" href="author.html">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                        </span>
                                                                    </a>
                                                                </h6>
                                                                <ul className="post-meta-list">
                                                                    <li>Feb 17, 2019</li>
                                                                    <li>300k Views</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="social-share-transparent justify-content-end">
                                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                          
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-07.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="LIFESTYLE">LIFESTYLE</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">The underrated
                                                                    design book
                                                                    that transformed the</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                            
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                           
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-08.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="TRAVEL">TRAVEL</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">Apple reimagines
                                                                    the
                                                                    iPhone experience with iOS 14 </a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="single-post-grid tab-pane fade" id="gridfour" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-12 col-12">

                                        <div className="content-block post-grid post-grid-large mt--30">
                                            <div className="post-thumbnail">
                                                <a href="post-details.html">
                                                    <img src="assets/images/post-images/post-grid-01.jpg" alt="Post Images"/>
                                                </a>
                                            </div>
                                            <div className="post-grid-content">
                                                <div className="post-content">
                                                    <div className="post-cat">
                                                        <div className="post-cat-list">
                                                            <a className="hover-flip-item-wrapper" href="#">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="DESIGN">DESIGN</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <h3 className="title"><a href="post-details.html">Get Ready To Up Your
                                                            Creative Game With The New DJI Mavic Air 2</a></h3>
                                                    <div className="post-meta-wrapper">
                                                        <div className="post-meta">
                                                            <div className="post-author-avatar border-rounded">
                                                                <img src="assets/images/post-images/author/author-image-2.png" alt="Author Images"/>
                                                            </div>
                                                            <div className="content">
                                                                <h6 className="post-author-name">
                                                                    <a className="hover-flip-item-wrapper" href="author.html">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                                        </span>
                                                                    </a>
                                                                </h6>
                                                                <ul className="post-meta-list">
                                                                    <li>Feb 17, 2019</li>
                                                                    <li>300k Views</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="social-share-transparent justify-content-end">
                                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                            
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-02.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="LIFESTYLE">LIFESTYLE</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">The underrated
                                                                    design book
                                                                    that transformed the</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                                              
                                                <div className="content-block post-grid mt--30">
                                                    <div className="post-thumbnail">
                                                        <a href="post-details.html">
                                                            <img src="assets/images/post-images/post-grid-03.jpg" alt="Post Images"/>
                                                        </a>
                                                    </div>
                                                    <div className="post-grid-content">
                                                        <div className="post-content">
                                                            <div className="post-cat">
                                                                <div className="post-cat-list">
                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text="TRAVEL">TRAVEL</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h4 className="title"><a href="post-details.html">Apple reimagines
                                                                    the
                                                                    iPhone experience with iOS 14 </a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
     
        <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xl-8">
                        <div className="axil-banner">
                            <div className="thumbnail">
                                <a href="#">
                                    <img className="w-100" src="assets/images/add-banner/banner-01.png" alt="Banner Images"/>
                                </a>
                            </div>
                        </div>
                   
                        <div className="content-block post-list-view axil-control is-active mt--30">
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-list-11.jpg" alt="Post Images"/>
                                </a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="FOOD">FOOD</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">Security isn’t just a technology problem
                                        it’s about design, too </a></h4>
                                <div className="post-meta-wrapper">
                                    <div className="post-meta">
                                        <div className="content">
                                            <h6 className="post-author-name">
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Jane Ara">Jane Ara</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul className="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>3 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share-transparent justify-content-end">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <div className="content-block post-list-view axil-control mt--30">
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-list-12.jpg" alt="Post Images"/>
                                </a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="LIFESTYLE">LIFESTYLE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">The 1 tool that helps remote teams collaborate better</a></h4>
                                <div className="post-meta-wrapper">
                                    <div className="post-meta">
                                        <div className="content">
                                            <h6 className="post-author-name">
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Fatima Jane">Fatima Jane</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul className="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>3 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share-transparent justify-content-end">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <div className="content-block post-list-view axil-control mt--30">
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-list-15.jpg" alt="Post Images"/>
                                </a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="TRAVEL">TRAVEL</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">Traditional design won’t save us in the COVID-19 era</a></h4>
                                <div className="post-meta-wrapper">
                                    <div className="post-meta">
                                        <div className="content">
                                            <h6 className="post-author-name">
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Esrat Ara">Esrat Ara</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul className="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>3 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share-transparent justify-content-end">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className="content-block post-list-view axil-control mt--30">
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-list-13.jpg" alt="Post Images"/>
                                </a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="DESIGN">DESIGN</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">Get Ready To Up Your Creative Game With The New DJI Mavic Air 2</a></h4>
                                <div className="post-meta-wrapper">
                                    <div className="post-meta">
                                        <div className="content">
                                            <h6 className="post-author-name">
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="John Doe">John Doe</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul className="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>3 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share-transparent justify-content-end">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     
                        <div className="content-block post-list-view axil-control mt--30">
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-list-14.jpg" alt="Post Images"/>
                                </a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="FOOD">FOOD</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h4 className="title"><a href="post-details.html">Security isn’t just a technology problem
                                        it’s about design, too </a></h4>
                                <div className="post-meta-wrapper">
                                    <div className="post-meta">
                                        <div className="content">
                                            <h6 className="post-author-name">
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Asifa Fr">Asifa Fr</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul className="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>3 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share-transparent justify-content-end">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                    <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                    
                        <div className="sidebar-inner">


                            <div className="axil-single-widget widget widget_categories mb--30">
                                <ul>
                                    <li className="cat-item">
                                        <a href="#" className="inner">
                                            <div className="thumbnail">
                                                <img src="assets/images/post-images/category-image-01.jpg" alt=""/>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Tech</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="inner">
                                            <div className="thumbnail">
                                                <img src="assets/images/post-images/category-image-02.jpg" alt=""/>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Style</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="inner">
                                            <div className="thumbnail">
                                                <img src="assets/images/post-images/category-image-03.jpg" alt=""/>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Travel</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="inner">
                                            <div className="thumbnail">
                                                <img src="assets/images/post-images/category-image-04.jpg" alt=""/>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Food</h5>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
      
                            <div className="axil-single-widget widget widget_search mb--30">
                                <h5 className="widget-title">Search</h5>
                                <form action="#">
                                    <div className="axil-search form-group">
                                        <button type="submit" className="search-button"><i className="fal fa-search"></i></button>
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    </div>
                                </form>
                            </div>
                        
                            <div className="axil-single-widget widget widget_postlist mb--30">
                                <h5 className="widget-title">Popular on Blogar</h5>
                            
                                <div className="post-medium-block">

                                  
                                    <div className="content-block post-medium mb--20">
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/small-images/blog-sm-01.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <h6 className="title"><a href="post-details.html">The underrated design book that transformed the way I
                                                    work </a></h6>
                                            <div className="post-meta">
                                                <ul className="post-meta-list">
                                                    <li>Feb 17, 2019</li>
                                                    <li>300k Views</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="content-block post-medium mb--20">
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/small-images/blog-sm-02.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <h6 className="title"><a href="post-details.html">Here’s what you should (and shouldn’t) do when</a>
                                            </h6>
                                            <div className="post-meta">
                                                <ul className="post-meta-list">
                                                    <li>Feb 17, 2019</li>
                                                    <li>300k Views</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    <div className="content-block post-medium mb--20">
                                        <div className="post-thumbnail">
                                            <a href="post-details.html">
                                                <img src="assets/images/small-images/blog-sm-03.jpg" alt="Post Images"/>
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <h6 className="title"><a href="post-details.html">How a developer and designer duo at Deutsche Bank keep
                                                    remote</a></h6>
                                            <div className="post-meta">
                                                <ul className="post-meta-list">
                                                    <li>Feb 17, 2019</li>
                                                    <li>300k Views</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                              
                            </div>
                        
                            <div className="axil-single-widget widget widget_social mb--30">
                                <h5 className="widget-title">Stay In Touch</h5>
                             
                                <ul className="social-icon md-size justify-content-center">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-slack"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                              
                            </div>
                           
                            <div className="axil-single-widget widget widget_instagram mb--30">
                                <h5 className="widget-title">Instagram</h5>

                                <ul className="instagram-post-list-wrapper">
                                    <li className="instagram-post-list">
                                        <a href="#">
                                            <img src="assets/images/small-images/instagram-01.jpg" alt="Instagram Images"/>
                                        </a>
                                    </li>
                                    <li className="instagram-post-list">
                                        <a href="#">
                                            <img src="assets/images/small-images/instagram-02.jpg" alt="Instagram Images"/>
                                        </a>
                                    </li>
                                    <li className="instagram-post-list">
                                        <a href="#">
                                            <img src="assets/images/small-images/instagram-03.jpg" alt="Instagram Images"/>
                                        </a>
                                    </li>
                                    <li className="instagram-post-list">
                                        <a href="#">
                                            <img src="assets/images/small-images/instagram-04.jpg" alt="Instagram Images"/>
                                        </a>
                                    </li>
                                    <li className="instagram-post-list">
                                        <a href="#">
                                            <img src="assets/images/small-images/instagram-05.jpg" alt="Instagram Images"/>
                                        </a>
                                    </li>
                                    <li className="instagram-post-list">
                                        <a href="#">
                                            <img src="assets/images/small-images/instagram-06.jpg" alt="Instagram Images"/>
                                        </a>
                                    </li>
                                </ul>
                    
                            </div>
                         
                        </div>
                   



                    </div>
                </div>
            </div>
        </div>
    
        <div className="axil-video-post-area axil-section-gap bg-color-black">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">Featured Video</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                    
                        <div className="content-block post-default image-rounded mt--30">
                            <div className="post-thumbnail">
                                <a href="post-details.html">
                                    <img src="assets/images/post-images/post-dark-01.jpg" alt="Post Images"/>
                                </a>
                                <a className="video-popup position-top-center" href="post-details.html"><span
                                        className="play-icon"></span></a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                                <span data-text="CAREERS">CAREERS</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h3 className="title"><a href="post-details.html">Security isn’t just a technology problem
                                        it’s about design, too</a></h3>
                                <div className="post-meta-wrapper">
                                    <div className="post-meta">
                                        <div className="content">
                                            <h6 className="post-author-name">
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul className="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>3 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share-transparent justify-content-end">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                        <div className="row">
                         
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="content-block post-default image-rounded mt--30">
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/post-dark-04.jpg" alt="Post Images"/>
                                        </a>
                                        <a className="video-popup size-medium position-top-center" href="post-details.html"><span className="play-icon"></span></a>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="DESIGN">DESIGN</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h5 className="title"><a href="post-details.html">Get Ready To Up Your Creative Game With The </a></h5>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="content-block post-default  image-rounded mt--30">
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/post-dark-03.jpg" alt="Post Images"/>
                                        </a>
                                        <a className="video-popup size-medium position-top-center" href="post-details.html"><span className="play-icon"></span></a>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="LEADERSHIP">LEADERSHIP</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h5 className="title"><a href="post-details.html">Traditional design won’t save us in the COVID-19 era</a></h5>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="content-block post-default image-rounded mt--30">
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/post-dark-04.jpg" alt="Post Images"/>
                                        </a>
                                        <a className="video-popup size-medium position-top-center" href="post-details.html"><span className="play-icon"></span></a>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="PRODUCT UPDATES">PRODUCT UPDATES</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h5 className="title"><a href="post-details.html">New: Freehand Templates, built for the whole team</a></h5>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="content-block post-default image-rounded mt--30">
                                    <div className="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-images/post-dark-05.jpg" alt="Post Images"/>
                                        </a>
                                        <a className="video-popup size-medium position-top-center" href="post-details.html"><span className="play-icon"></span></a>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-cat">
                                            <div className="post-cat-list">
                                                <a className="hover-flip-item-wrapper" href="#">
                                                    <span className="hover-flip-item">
                                                        <span data-text="COLLABORATION">COLLABORATION</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <h5 className="title"><a href="post-details.html">The 1 tool that helps remote teams
                                                collaborate better</a></h5>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="axil-instagram-area axil-section-gap bg-color-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">Instagram</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-lg-12">
                        <ul className="instagram-post-list">
                            <li className="single-post">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-md-01.jpg" alt="Instagram Images"/>
                                    <span className="instagram-button"><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                            <li className="single-post">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-md-02.jpg" alt="Instagram Images"/>
                                    <span className="instagram-button"><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                            <li className="single-post">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-md-03.jpg" alt="Instagram Images"/>
                                    <span className="instagram-button"><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                            <li className="single-post">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-md-04.jpg" alt="Instagram Images"/>
                                    <span className="instagram-button"><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                            <li className="single-post">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-md-05.jpg" alt="Instagram Images"/>
                                    <span className="instagram-button"><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                            <li className="single-post">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-md-06.jpg" alt="Instagram Images"/>
                                    <span className="instagram-button"><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
            <div className="footer-mainmenu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h2 className="title">World</h2>
                                <div className="inner">
                                    <ul className="ft-menu-list">
                                        <li><a href="#">U.N.</a></li>
                                        <li><a href="#">Conflicts</a></li>
                                        <li><a href="#">Terrorism</a></li>
                                        <li><a href="#">Disasters</a></li>
                                        <li><a href="#">Global Economy</a></li>
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Religion</a></li>
                                        <li><a href="#">Scandals</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h2 className="title">Politics</h2>
                                <div className="inner">
                                    <ul className="ft-menu-list">
                                        <li><a href="#">Executive</a></li>
                                        <li><a href="#">Senate</a></li>
                                        <li><a href="#">House</a></li>
                                        <li><a href="#">Judiciary</a></li>
                                        <li><a href="#">Global Economy</a></li>
                                        <li><a href="#">Foreign policy</a></li>
                                        <li><a href="#">Polls</a></li>
                                        <li><a href="#">Elections</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h2 className="title">Entertainment</h2>
                                <div className="inner">
                                    <ul className="ft-menu-list">
                                        <li><a href="#">Celebrity News</a></li>
                                        <li><a href="#">Movies</a></li>
                                        <li><a href="#">TV News</a></li>
                                        <li><a href="#">Disasters</a></li>
                                        <li><a href="#">Music News</a></li>
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Style News</a></li>
                                        <li><a href="#">Entertainment Video</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h2 className="title">Business</h2>
                                <div className="inner">
                                    <ul className="ft-menu-list">
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Conflicts</a></li>
                                        <li><a href="#">Terrorism</a></li>
                                        <li><a href="#">Disasters</a></li>
                                        <li><a href="#">Global Economy</a></li>
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Religion</a></li>
                                        <li><a href="#">Scandals</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h2 className="title">Health</h2>
                                <div className="inner">
                                    <ul className="ft-menu-list">
                                        <li><a href="#">Movies</a></li>
                                        <li><a href="#">Conflicts</a></li>
                                        <li><a href="#">Terrorism</a></li>
                                        <li><a href="#">Disasters</a></li>
                                        <li><a href="#">Global Economy</a></li>
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Religion</a></li>
                                        <li><a href="#">Scandals</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h2 className="title">About</h2>
                                <div className="inner">
                                    <ul className="ft-menu-list">
                                        <li><a href="#">U.N.</a></li>
                                        <li><a href="#">Conflicts</a></li>
                                        <li><a href="#">Terrorism</a></li>
                                        <li><a href="#">Disasters</a></li>
                                        <li><a href="#">Global Economy</a></li>
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Religion</a></li>
                                        <li><a href="#">Scandals</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-4">
                            <div className="logo">
                                <a href="index.html">
                                    <img className="dark-logo" src="assets/images/logo/logo-black.png" alt="Logo Images"/>
                                    <img className="white-logo" src="assets/images/logo/logo-white2.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8">
                         
                            <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                                <ul className="social-icon color-tertiary md-size justify-content-start">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                          
                        </div>

                    </div>
                </div>
            </div>
          

            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-8">
                            <div className="copyright-left">
                                <ul className="mainmenu justify-content-start">
                                    <li>
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                        <span data-text="Contact Us">Contact Us</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                        <span data-text="Terms of Use">Terms of Use</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                        <span data-text="AdChoices">AdChoices</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                        <span data-text="Advertise with Us">Advertise with Us</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover-flip-item-wrapper" href="#">
                                            <span className="hover-flip-item">
                                        <span data-text="Blogar Store">Blogar Store</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="copyright-right text-start text-md-end mt_sm--20">
                                <p className="b3">All Rights Reserved © 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
   
        <a id="backto-top"></a>
    
   

  
   </>
  )
}

export default Home