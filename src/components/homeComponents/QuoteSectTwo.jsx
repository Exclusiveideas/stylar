import React from 'react';
import '@homestyles/quoteSectTwo.css';

const QuoteSectTwo = () => {
    return (
        <div className='quotesecttwo'>
            <div className="quotesecttwo_innerWrapper">
                <p className="title">Make yourself pop</p>
                <p className="desc">Dress to impress with our fashion-forward designs. Our collection features the latest trends and styles, curated to help you look your best and prepare you for the spotlight this season</p>
                <div className="quote2_cta_wrapper">
                    <p>Learn More</p>
                    <svg className="arrow" width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.0499 13.0607C42.6357 12.4749 42.6357 11.5251 42.0499 10.9393L32.504 1.3934C31.9182 0.807612 30.9684 0.807612 30.3827 1.3934C29.7969 1.97918 29.7969 2.92893 30.3827 3.51472L38.8679 12L30.3827 20.4853C29.7969 21.0711 29.7969 22.0208 30.3827 22.6066C30.9684 23.1924 31.9182 23.1924 32.504 22.6066L42.0499 13.0607ZM0.989258 13.5H40.9893V10.5H0.989258V13.5Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default QuoteSectTwo;