import React, { useEffect, useState } from 'react'
import ring from '../../assets/img/rings.png'
import where from '../../assets/img/where.jpg'
import first from '../../assets/img/first.jpg'
import second from '../../assets/img/second.jpg'
import third from '../../assets/img/third.jpg'
import logo from "../../assets/img/logo.jpg"

function Main(props) {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-12-11`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    const [inviteSec, setInviteSec] = useState({ arr: [] });
    const onClickInvitation = (value) => {
        let arr = []
        if (value == "first") {
            arr.push(<img src={first} id="expandedImg" style={{ width: "100%" }} />)
            setInviteSec(prev => { prev.arr = arr; return ({ ...prev }) })
        }
        else if (value == "second") {
            arr.push(<img src={second} id="expandedImg" style={{ width: "100%" }} />)
            setInviteSec(prev => { prev.arr = arr; return ({ ...prev }) })
        } else if (value == "third") {
            arr.push(<img src={third} id="expandedImg" style={{ width: "100%" }} />)
            setInviteSec(prev => { prev.arr = arr; return ({ ...prev }) })
        } else {
            arr.push(<img src={logo} id="expandedImg" style={{ width: "100%", display: 'block !important' }} />)
            setInviteSec(prev => { prev.arr = arr; return ({ ...prev }) })
        }
    }

    return (
        <>
            {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
            <section id="home" className="herowrap js-fullheight" style={{ height: '361px', backgroundImage: "url(https://preview.colorlib.com/theme/twohearts/images/xbg_1.jpg.pagespeed.ic.IVKaXXduVM.webp)", backgroundSize: "cover", backgroundPosition: "50% 0%" }}
                data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row js-fullheight justify-content-center d-flex align-items-center" style={{ height: "91px" }}>
                        <div class="col-md-12">
                            <div class="text text-center">

                                <div class="icon d-flex align-items-center justify-content-center">
                                    <img src={ring} class="ring ring-accessibility"></img>

                                </div>
                                <h1>Mohanraj &amp; Karthika</h1>
                                <span class="subheading">Are Getting Married</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ftco-intro">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div id="timer" class="d-sm-flex">
                                <div class="time time-2 d-flex align-items-center text-center"><h3 class="w-100">Save <br />the Day</h3></div>
                                <div class="time" id="days">{timeLeft.days}<span>Days</span></div>
                                <div class="time" id="hours">{timeLeft.hours}<span>Hours</span></div>
                                <div class="time" id="minutes">{timeLeft.minutes}<span>Minutes</span></div>
                                <div class="time" id="seconds">{timeLeft.seconds}<span>Seconds</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ftco-section bg-section" id="groom-bride-section">
                <div class="container">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-12 text-center heading-section  fadeInUp ">
                            <span class="subheading">Invitation</span>
                            <h2 class="mb-3">S. Mohanraj &amp; J. Karthika </h2>
                            <span class="subheading">Reception 11-12-2022 6:30 pm </span>
                            <span class="subheading">Wedding   12-12-2022 9:15 am to 10:15 am</span>
                        </div>
                    </div>

                    <div class="row-img">
                        <div class="column">
                            <img src={third} onClick={() => onClickInvitation('third')} alt="Mountains" style={{ width: "100%" }} />
                        </div>
                        <div class="column">
                            <img src={first} onClick={() => onClickInvitation('first')} alt="Nature" style={{ width: "100%" }} />
                        </div>
                        <div class="column">
                            <img src={second} onClick={() => onClickInvitation('second')} alt="Snow" style={{ width: "100%" }} />
                        </div>
                        <div class="column">
                            <img src={logo} onClick={() => onClickInvitation('logo')} alt="Lights" style={{ width: "100%" }} />
                        </div>
                    </div>


                </div>
            </section>
            <section class="ftco-section ftco-love" id="lovestory-section" style={{ backgroundImage: "url(images/xbg_2.jpg.pagespeed.ic.Qk76_jKxrb.webp)" }}>
                <div class="container">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-12 text-center heading-section  fadeInUp ">
                            {/* <span class="subheading">Invitation</span> */}
                            {/* <h2 class="mb-3">Invitation</h2> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div className="row-img">
                                <div class="container-img">
                                    <span class="closebtn">&times;</span>
                                    {/* <img id="expandedImg" style={{ width: "100%" }} /> */}
                                    {inviteSec.arr.length ? inviteSec.arr : <img src={first} id="expandedImg" style={{ width: "100%" }} />}
                                    <div id="imgtext" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div className='row'>
                    <div class="col-md-5  d-flex fadeInUp ftco-animated">
                        <img src={where}></img>
                    </div>
                    <div class="col-md-7 py-5 pl-md-5">
                        <div class="row py-md-4 " style={{ paddingLeft: '100px' }}>
                            <div class="col-md-12 text-center heading-section pb-4  fadeInUp ">
                                <span class="subheading">Planning</span>
                                <h2 class="mb-3">When &amp; Where</h2>
                            </div>
                            <div class="col-md-6 d-flex  fadeInUp ">
                                <div class="place img">
                                    <div class="text text-center">
                                        <div class="icon d-flex align-items-center justify-content-center"><i class="fa fa-building" aria-hidden="true"></i></div>
                                        <h3>The Reception</h3>
                                        <p><span> December, 11, 2022 (Sunday) </span><br /><span>06:30 pm-11:00 pm</span></p>
                                        <p><span>ARUL MURUGAN TOWERS(1st Floor) <br />
                                            JAYALAKSHMI ANJANEYAR MAHAL
                                            200 Feet Radial Road, Pallavaram,  Chennai - 600117</span></p>
                                        <p><a href="#">80561 35035</a></p>
                                        <p><a target="_blank" href="https://www.google.com/maps/dir/13.0705617,80.2655838/arul+murugan+towers/@13.0134752,80.1326666,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525e35f5bb152d:0x5a5b497b087d8b57!2m2!1d80.1747988!2d12.9517416" class="btn-custom">See Map</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex  fadeInUp ">
                                <div class="place img">
                                    <div class="text text-center">
                                        <div class="icon d-flex align-items-center justify-content-center"><i class="fa fa-free-code-camp" aria-hidden="true"></i></div>
                                        <h3>The Wedding Ceremony</h3>
                                        <p><span>December, 12, 2022</span><br /><span>02:00 pm-10:00 pm</span></p>
                                        <p><span>ARUL MURUGAN TOWERS(1st Floor) <br />
                                            JAYALAKSHMI ANJANEYAR MAHAL
                                            200 Feet Radial Road, Pallavaram,  Chennai - 600117</span></p>
                                        <p><a href="#">80561 35035</a></p>
                                        <p><a target="_blank" href="https://www.google.com/maps/dir/13.0705617,80.2655838/arul+murugan+towers/@13.0134752,80.1326666,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525e35f5bb152d:0x5a5b497b087d8b57!2m2!1d80.1747988!2d12.9517416" class="btn-custom">See Map</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <br />
            <br />
        </>
    )
}
export default Main