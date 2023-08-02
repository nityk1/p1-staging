import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
function About() {
    let BG1 = {
        background: 'url(images/why-us-bg.jpg)'
    }
    let BG2 = {
        background: 'url(images/about-header.jpg)'
    }

    return (
        <>
            <main id="main">
                <div className="breadcrumbs d-flex align-items-center" style={BG2}>
                    <div className="container position-relative d-flex flex-column align-items-center">
                        <h2>About</h2>
                        <ol>
                            <li><Link to="index.html">Home</Link></li>
                            <li>About</li>
                        </ol>
                    </div>
                </div>

                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row gy-4" data-aos="fade-up">
                            <div className="col-lg-4">
                                <img src="images/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8">
                                <div className="content ps-lg-5">
                                    <h3>Voluptatem dignissimos provident quasi</h3>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    </p>
                                    <ul>
                                        <li><CheckCircleFill /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><CheckCircleFill /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><CheckCircleFill /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Why Choose Us</h2>

                        </div>

                        <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-xl-5 img-bg" style={BG1}></div>
                            <div className="col-xl-7 slides  position-relative">
                                <Swiper
                                    cssMode={true}
                                    loop={true}
                                    autoplay={true}
                                    navigation={true}
                                    pagination={true}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div class="item">
                                            <h3 class="mb-3">Let's grow your business together</h3>
                                            <h4 class="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="item">
                                            <h3 class="mb-3">Let's grow your business together</h3>
                                            <h4 class="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="item">
                                            <h3 class="mb-3">Let's grow your business together</h3>
                                            <h4 class="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="item">
                                            <h3 class="mb-3">Let's grow your business together</h3>
                                            <h4 class="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="call-to-action" className="call-to-action">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h3>Ut fugiat aliquam aut non</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <Link className="cta-btn" to="#">Call To Action</Link>
                            </div>
                        </div>

                    </div>
                </section>


            </main>

        </>
    )
}

export default About;