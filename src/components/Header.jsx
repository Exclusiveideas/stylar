import React, { useEffect, useState } from 'react';
import '@styles/header.css'
import expand from '@assets/expand_icon.svg'
import menu from '@assets/menu.svg'
import close_menu from '@assets/close_menu.svg'
import arrow from '@assets/arrow.svg'
import gsap from 'gsap';

const xMenCatDetails = [
    {
        title: 'TOPS',
        sublinks: [
            {
                name: 'All Tops',
                to: '/'
            },
            {
                name: 'Shirts',
                to: '/'
            },
            {
                name: 'Polos',
                to: '/'
            },
            {
                name: 'Long Sleeves Shirts',
                to: '/'
            },
        ]
    },
    {
        title: 'BOTTOM',
        sublinks: [
            {
                name: 'All Bottoms',
                to: '/'
            },
            {
                name: 'Joggers',
                to: '/'
            },
            {
                name: 'Pants',
                to: '/'
            },
            {
                name: 'Sweat Pants',
                to: '/'
            },
        ]
    },
    {
        title: 'OUTWEAR',
        sublinks: [
            {
                name: 'Jacket',
                to: '/'
            },
            {
                name: 'Sherpa',
                to: '/'
            },
        ]
    },
];

const xWomenCatDetails = [
    {
        title: 'TOPS',
        sublinks: [
            {
                name: 'All Tops',
                to: '/'
            },
            {
                name: 'Tees',
                to: '/'
            },
            {
                name: 'Tanks',
                to: '/'
            },
            {
                name: 'Sweat Shirts',
                to: '/'
            },
        ]
    },
    {
        title: 'BOTTOM',
        sublinks: [
            {
                name: 'All Bottoms',
                to: '/'
            },
            {
                name: 'Bike Shorts',
                to: '/'
            },
            {
                name: 'Sweat Pants',
                to: '/'
            },
        ]
    },
    {
        title: 'OUTWEAR',
        sublinks: [
            {
                name: 'Sherpa',
                to: '/'
            },
        ]
    },
];

const Header = () => {
    const [xCat, setXCat] = useState('men');
    const [showCat, setShowCat] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [openInnerNav, setOpenInnerNav] = useState(false);

    function catClicked(cat) {
        if (cat == xCat && showCat == true) {
            setShowCat(false);
            return;
        }

        setXCat(cat)
        setShowCat(true);
    }

    useEffect(() => {
        const expandedCatCont = document.querySelector('.expandedCatCont');

        if (showCat) {
            const tl = gsap.timeline();

            tl.to(expandedCatCont, {
                display: 'flex',
                duration: 0
            })
                .fromTo(expandedCatCont, {
                    top: '130%',
                    opacity: 0,
                    scale: 1.05,
                }, {
                    top: '80%',
                    opacity: 1,
                    duration: 0.2,
                    scale: 1,
                })
        }
        else {
            const tl = gsap.timeline();

            tl.to(expandedCatCont, {
                opacity: 0,
                top: '130%',
                duration: 0.3,
            })
                .to(expandedCatCont, {
                    display: 'none',
                    duration: 0.3
                })

        }
    }, [showCat]);

    function toggleNavbar() {
        setOpenNav(!openNav)
    }

    function toggleInnerNavbar(cat) {
        setOpenInnerNav(!openInnerNav)
        cat && setXCat(cat)
    }

    useEffect(() => {
        const navBar = document.querySelector('.navBar');

        setOpenInnerNav(false)

        if (openNav) {
            gsap.to(navBar, {
                right: 0,
                duration: 0.5,
            })
        }
        else {
            gsap.to(navBar, {
                right: '100%',
                duration: 0.5,
            })
        }
    }, [openNav]);

    useEffect(() => {
        const innerNavBar = document.querySelector('.innerNavBar');

        if (openInnerNav) {
            gsap.to(innerNavBar, {
                left: 0,
                duration: 0.5,
            })
        }
        else {
            gsap.to(innerNavBar, {
                left: '100%',
                duration: 0.5,
            })
        }
    }, [openInnerNav]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            window?.innerWidth >= 600 && setOpenNav(false)
        })

        //   return () => {
        //     window.removeEventListener('resze', )
        //   }

    }, [])




    return (
        <div className='header'>
            <div className='header_innerWrapper'>
                <div className="header_left">
                    <div className="left_ind_cont" onClick={() => catClicked('men')}>
                        <p>Men</p>
                        <img src={expand} alt="expand icon" className="down_icon" />
                    </div>
                    <div className="left_ind_cont" onClick={() => catClicked('women')}>
                        <p>Women</p>
                        <img src={expand} alt="expand icon" className="down_icon" />
                    </div>
                    {!openNav ? (
                        <img src={menu} alt="menu" className="menu_icon" onClick={toggleNavbar} />
                    ) : (
                        <img src={close_menu} alt="menu" className="close_menu_icon" onClick={toggleNavbar} />
                    )}
                </div>
                <div className="header_middle">
                    <p>STYLAR</p>
                </div>
                <div className="header_right">
                    <>
                        <svg className="person_icon" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5397 11.6121C10.5397 5.61964 14.4049 1.25 18.5794 1.25C22.7539 1.25 26.6191 5.61964 26.6191 11.6121C26.6191 17.6046 22.7539 21.9743 18.5794 21.9743C14.4049 21.9743 10.5397 17.6046 10.5397 11.6121ZM1.25 32.514C1.25 28.368 4.36647 24.9882 8.36469 24.5193C11.0303 27.31 14.617 29.1191 18.5794 29.1191C22.5422 29.1191 26.129 27.3097 28.7947 24.5188C32.8282 24.9851 35.9089 28.362 35.9089 32.514V35.9089H1.25V32.514Z" stroke="black" strokeWidth="2.5" />
                        </svg>
                        <svg className="cart_icon" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='cart_dot' d="M9.89315 12.5127V10.7116C9.89315 6.53364 13.2541 2.42998 17.432 2.04004C18.5929 1.92599 19.7647 2.05625 20.8722 2.42244C21.9797 2.78863 22.9982 3.38263 23.8623 4.16623C24.7263 4.94982 25.4168 5.90564 25.8891 6.97218C26.3615 8.03871 26.6053 9.19232 26.6049 10.3588V12.9212M12.6784 39.1215H23.8196C31.2842 39.1215 32.6211 36.132 33.0111 32.4925L34.4037 21.3514C34.9051 16.8206 33.6052 13.1255 25.6765 13.1255H10.8216C2.89278 13.1255 1.59298 16.8206 2.09433 21.3514L3.48698 32.4925C3.87692 36.132 5.21386 39.1215 12.6784 39.1215Z" stroke="black" strokeWidth="2.78529" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path className='cart_dot' d="M24.7387 20.5529H24.7573M11.7407 20.5529H11.7555" strokeWidth="3.71372" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </>
                </div>
                <div className="expandedCatCont">
                    <div className="ecc_innerWrapper">
                        {xCat == 'men' && xMenCatDetails?.map((details, i) => (
                            <div key={i} className="cats_detailsWrapper">
                                <p className="cat_title">{details?.title}</p>
                                <div className="cat_subDetails">
                                    {details?.sublinks?.map((sublink, i) => (
                                        <div key={i} className="cat_link">
                                            <a href={`${sublink?.to}`}>{sublink?.name}</a>
                                            <hr className="cat_link_underline" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {xCat == 'women' && xWomenCatDetails?.map((details, i) => (
                            <div key={i} className="cats_detailsWrapper">
                                <p className="cat_title">{details?.title}</p>
                                <div className="cat_subDetails">
                                    {details?.sublinks?.map((sublink, i) => (
                                        <div key={i} className="cat_link">
                                            <a href={`${sublink?.to}`}>{sublink?.name}</a>
                                            <hr className="cat_link_underline" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="navBar">
                <div className="navb_innerWrapper">
                    <div className="navb_ind_cont" onClick={() => toggleInnerNavbar('men')}>
                        <p>Men</p>
                        <img src={expand} alt="expand icon" className="navb_expand_icon" />
                    </div>
                    <div className="navb_ind_cont" onClick={() => toggleInnerNavbar('women')}>
                        <p>Women</p>
                        <img src={expand} alt="expand icon" className="navb_expand_icon" />
                    </div>
                </div>
            </div>
            <div className="innerNavBar">
                <div className="inavb_innerWrapper">
                    <div className="inavb_innerwrap_topSect" onClick={toggleInnerNavbar} >
                        <img src={arrow} alt="back icon" className="back_arrow" />
                        <p>Back</p>
                    </div>

                    {xCat == 'men' && xMenCatDetails?.map((details, i) => (
                        <div key={i} className="cats_detailsWrapper">
                            <p className="cat_title">{details?.title}</p>
                            <div className="cat_subDetails">
                                {details?.sublinks?.map((sublink, i) => (
                                    <div key={i} className="cat_link">
                                        <a href={`${sublink?.to}`}>{sublink?.name}</a>
                                        <hr className="cat_link_underline" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {xCat == 'women' && xWomenCatDetails?.map((details, i) => (
                        <div key={i} className="cats_detailsWrapper">
                            <p className="cat_title">{details?.title}</p>
                            <div className="cat_subDetails">
                                {details?.sublinks?.map((sublink, i) => (
                                    <div key={i} className="cat_link">
                                        <a href={`${sublink?.to}`}>{sublink?.name}</a>
                                        <hr className="cat_link_underline" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;