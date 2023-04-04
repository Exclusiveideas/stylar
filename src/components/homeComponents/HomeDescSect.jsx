import React from 'react';
import '@homestyles/homeDescSect.css';
import plus from '@assets/plus.svg';
import model1 from '@assets/model1.jpg';
import model2 from '@assets/model2.jpg';

const HomeDescSect = ({ alternate }) => {
    return (
        <div className='homeDescSect' data-alternate-desc={alternate}>
            <div className="homeDescSect_left" data-alternate-leftdesc={alternate}>
                <div className="hdsl_innerwrapper">
                    {!alternate ?
                        (
                            <>
                                <p className="smallTitle">Embrace your elegance</p>
                                <p className="mainTitle">Shop our exclusive collection of <span>chic and trendy</span> attire for any occasion and save on limited edition pieces.</p>
                            </>
                        ) : (
                            <>
                                <p className="smallTitle">Radiate positivity and inspiration</p>
                                <p className="mainTitle">At our core, we believe in empowering our customers to feel confident and beautiful every day.</p>
                            </>
                        )}

                    <div className="hds_cta_wrapper">
                        <p>Discover More</p>
                        <img src={plus} alt="plus icon" className="plus_icon" />
                    </div>
                </div>
            </div >
            <div className="homeDescSect_right">
                {!alternate ? (
                    <img src={model2} alt="model" className="model_img" />
                ) : (
                    <img src={model1} alt="model" className="model_img" />
                )}
            </div>
        </div >
    )
}

export default HomeDescSect;