import React, { useRef, useState } from 'react';
import '@styles/footer.css'
import gsap, { Linear } from 'gsap';
import c_right from "@assets/c-right.svg";
import instagram from "@assets/instagram.svg";
import facebook from "@assets/facebook.svg";
import pinterest from "@assets/pinterest.svg";
import vimeo from "@assets/vimeo.svg";

const FOOTERLINKS = [
    {
        header: 'Customer care',
        links: [
            {
                name: 'FAQs',
                to: "/faqs"
            },
            {
                name: 'Contact Us',
                to: "/contact-us"
            },
            {
                name: 'Shipping & Delivery',
                to: "/shipping-delivery"
            },
            {
                name: 'Returns & Exchanges',
                to: "/returns-exchanges"
            },
            {
                name: 'Acknowledgement of Country',
                to: "/country-acknowledgement"
            },
            {
                name: 'Corporate Gifting',
                to: "/corporate-gifting"
            },
        ]
    },
    {
        header: 'Information',
        links: [
            {
                name: 'Our Story',
                to: "/our-story"
            },
            {
                name: 'Careers',
                to: "/careers"
            },
            {
                name: 'Terms / Privacy',
                to: "/terms-privacy"
            },
            {
                name: 'Site Map',
                to: "/site-map"
            }
        ]
    },
    {
        header: 'Social',
        links: [
            {
                name: 'Instagram',
                to: "/instagram",
                icon: instagram
            },
            {
                name: 'Facebook',
                to: "/facebook",
                icon: facebook
            },
            {
                name: 'Pinterest',
                to: "/pinterest",
                icon: pinterest
            },
            {
                name: 'Vimeo',
                to: "/vimeo",
                icon: vimeo
            }
        ]
    },
]

const Footer = () => {
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const subscribeWrapperRef = useRef()
    const subscribeBtnRef = useRef()
    const subscribeInputRef = useRef()
    const subscribeTxtRef = useRef()
    const checkInboxTxtRef = useRef()

    function submitEmail() {
        if (emailSubmitted || !email) return;
        if (!email.includes("@")) {
            detectInvalidEmail()
            return
        }
        showSubmitted()
    }

    function detectInvalidEmail() {
        const errorText = document.querySelector(".errorText")

        const textTL = gsap.timeline();

        const wrapperTL = gsap.timeline({
            defaults: {
                duration: .1
            }
        });

        textTL.to(errorText, {
            visibility: 'visible',
            color: 'white',
            immediateRender: false,
            yoyo: true,
            repeat: 3,
            duration: .2,
        })
            .to(errorText, {
                color: 'red',
                visibility: 'visible',
            })
            .to(errorText, {
                visibility: 'hidden',
            }, ">+1.5")

        wrapperTL.to(subscribeWrapperRef.current, {
            translateX: 10,
        })
            .to(subscribeWrapperRef.current, {
                translateX: -10,
            }).to(subscribeWrapperRef.current, {
                translateX: 10,
            })
            .to(subscribeWrapperRef.current, {
                translateX: -10,
            }).to(subscribeWrapperRef.current, {
                translateX: 10,
            })
            .to(subscribeWrapperRef.current, {
                translateX: -10,
            })
            .to(subscribeWrapperRef.current, {
                translateX: 0,
            })
    }

    function showSubmitted() {
        let btnWidth = subscribeBtnRef.current?.offsetWidth;

        const checkIcon = document.querySelector(".checkIcon")

        const tl = gsap.timeline()

        tl.to(subscribeWrapperRef.current, {
            width: btnWidth,
            duration: .3,
            ease: Linear.easeIn
        })
            .to(subscribeInputRef.current, {
                width: 0,
                duration: .3,
                ease: Linear.easeIn
            }, "<")
            .to(subscribeInputRef.current, {
                display: 'none',
                duration: .3
            }, ">-0.3")
            .to(subscribeTxtRef.current, {
                display: "none",
                duration: 0
            })
            .to(checkIcon, {
                display: "flex",
                duration: 0
            })
            .to(checkIcon, {
                display: "none",
                duration: 0,
            }, ">+1.5")
            .to(checkInboxTxtRef.current, {
                display: "flex",
                duration: 0,
            }, "<")

        setEmailSubmitted(true)
    }

    function changeIconColor(action) {
        const checkIconPath = document.querySelector(".checkIconPath");

        if (action == 'enter') {
            gsap.to(checkIconPath, {
                fill: 'white',
                duration: 1
            })
        } else {
            gsap.to(checkIconPath, {
                fill: '#35AF09',
                duration: 1
            })
        }
    }
    
    function scrollToTop() {
        // if page is home page scroll to top
        // else navigate to home page
        
        let scrollOptions = {
            top: 0,
            behavior: "smooth",
        }

        // window.scrollTo(scrollOptions);
    }


    return (
        <div className='footer'>
            <div className="footer_top">
                <div ref={subscribeWrapperRef} className="mailSubscription_wrapper">
                    <input ref={subscribeInputRef} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' className="input_cont" />
                    <div
                        ref={subscribeBtnRef}
                        onMouseEnter={() => changeIconColor('enter')}
                        onMouseLeave={() => changeIconColor('leave')}
                        className="subscribe_btn"
                        onClick={submitEmail}
                    >
                        <p ref={subscribeTxtRef}>Subscribe</p>
                        <p ref={checkInboxTxtRef} className="cInbox">Check your inbox</p>
                        <CheckIcon />
                        <div className="sbtn_filler_rect"></div>
                    </div>
                </div>
                <p className="errorText">Input a valid email address</p>
            </div>
            <div className="footer_middle">
                <div className="fm_leftWrapper">
                    <p className="brandName" onClick={scrollToTop}>STYLAR</p>
                </div>
                <div className="fm_rightWrapper">
                    {FOOTERLINKS?.map((flInfo, i) => (
                        <div key={i} className="fm_rw_innerCont">
                            <p className="fm_rw_title">{flInfo?.header}</p>
                            <div className="fm_rw_link_cont">
                                {flInfo?.links?.map((linkInfo, i) => (
                                <div key={i} className="linTxt_div">
                                    {linkInfo?.icon && (
                                        <img src={linkInfo?.icon} alt="social icon" className="fm_linkIcon" />
                                    )}
                                    <a href={`${linkInfo?.to}`}>{linkInfo.name}</a>
                                    <hr className="fm_link_underline" />
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer_bottom">
                <a href='https://mjstudios.com' target="_blank" className="fb_innerWrapper">
                    <img src={c_right} alt="copyright" className="c_rightIcon" />
                    <p>Muftaudeen Jimoh</p>
                    <hr className="cright_underline" />
                </a>
            </div>
        </div>
    )
}

export default Footer;


const CheckIcon = () => (
    <svg className="checkIcon" viewBox="0 0 107 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="checkIconPath" d="M86.6207 0L77.2965 9.72963L39.7293 47.2968L28.7835 36.7564L19.0539 27.0268L0 46.0806L9.72963 55.8102L29.9997 76.0803L39.3239 85.8099L49.0536 76.0803L96.3504 28.7835L106.08 19.0539L86.6207 0Z" fill='#35AF09' />
    </svg>

)