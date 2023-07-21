import React from "react";
import { Link } from "react-router-dom";

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
                                        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
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

                                <div className="slides-1 swiper">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Let's grow your business together</h3>
                                                <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
                                                <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                                                <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Aliquid non alias minus</h3>
                                                <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                                                <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
                                                <h4 className="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.</h4>
                                                <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
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

                <section id="team" className="team">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Our Team</h2>

                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="images/team/team-1.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"></i></Link>
                                            <Link to=""><i className="bi bi-facebook"></i></Link>
                                            <Link to=""><i className="bi bi-instagram"></i></Link>
                                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="images/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"></i></Link>
                                            <Link to=""><i className="bi bi-facebook"></i></Link>
                                            <Link to=""><i className="bi bi-instagram"></i></Link>
                                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="images/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"></i></Link>
                                            <Link to=""><i className="bi bi-facebook"></i></Link>
                                            <Link to=""><i className="bi bi-instagram"></i></Link>
                                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="images/team/team-4.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"></i></Link>
                                            <Link to=""><i className="bi bi-facebook"></i></Link>
                                            <Link to=""><i className="bi bi-instagram"></i></Link>
                                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default About;