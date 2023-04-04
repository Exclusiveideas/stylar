import React, { useEffect, useRef, useState } from 'react';
import '@homestyles/homeRatingSect.css';
import star from '@assets/star.svg';
import u_star from '@assets/u-star.svg';
import play from '@assets/play.svg';
import useIsVisible from '@hooks/useIsVisible';

const reviews = [
    {
        rating: 4,
        review: "The shipping is always fast and reliable, and the clothes arrive in perfect condition. I highly recommend this brand to anyone looking for stylish, high-quality clothing.",
        reviewer: "Caleb Anderson"
    },
    {
        rating: 5,
        review: "I love the variety of styles that this brand offers. They have everything from casual wear to formal wear, and everything in between.",
        reviewer: "Madison Smith"
    },
    {
        rating: 5,
        review: "I absolutely love the clothes from this brand! The quality is amazing, and the styles are trendy and unique",
        reviewer: "Elijah Rodriguez"
    },
    {
        rating: 4,
        review: "I'm so happy I discovered this brand! The clothes are affordable and stylish, and the customer service is excellent.",
        reviewer: "Zoe Johnson"
    },
    {
        rating: 3,
        review: "I have bought several items from this brand and I am always impressed by the quality of the materials and the attention to detail in the design.",
        reviewer: "Ava Taylor"
    },
    {
        rating: 5,
        review: "I recently purchased a dress from this brand for a special occasion, and I received so many compliments on it! The fit was perfect, and the quality was excellent.",
        reviewer: "Gabriel Ramirez"
    },
    {
        rating: 5,
        review: "I've never been disappointed with a purchase from this brand. The clothes always fit well, and the quality is top-notch.",
        reviewer: "Isaac Hernandez"
    },
    {
        rating: 4,
        review: "I love how this brand incorporates unique prints and patterns into their designs. It adds a fun and playful element to my wardrobe.",
        reviewer: "Levi Brown"
    },
]

const HomeRatingSect = () => {
    const scrollWrapperRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0)

    function scrollCat(dir) {
        if (!scrollWrapperRef?.current) return;

        const scrollOptions = {
            top: 0,
            left: dir == 'left' ? -1 * 50 : 50,
            behavior: "smooth",
        }


        scrollWrapperRef.current.scrollBy(scrollOptions)
    }

    return (
        <div className='homeRatingSect'>
            <div ref={scrollWrapperRef} className="hrs_scrollWrapper">
                <div className="homeRatingSect_outerCont">
                    {reviews?.map((review, i) => (
                        <ReviewComp key={i} review={review} index={i} setActiveIndex={setActiveIndex} />
                    ))}
                </div>
            </div>
            <div style={{ visibility: activeIndex == 0 && 'hidden' }} className="hrs_left_scroll_btn hrs_scroll_btn" onClick={() => scrollCat('left')}>
                <img src={play} alt="expand" className="expand_icon" />
            </div>
            <div style={{ visibility: activeIndex == (reviews?.length - 1) && 'hidden' }} className="hrs_right_scroll_btn hrs_scroll_btn" onClick={() => scrollCat('right')}>
                <img src={play} alt="expand" className="expand_icon" />
            </div>
            <div className="hrs_curr_qss_items">
                {reviews?.map((_, i) => (
                    <div key={i} className={`hrs_curr_qss_item ${activeIndex == i && 'hrs_active_curr_qss_item'}`}></div>
                ))}
            </div>
        </div>
    )
}

export default HomeRatingSect;



const ReviewComp = ({ review, index, setActiveIndex }) => {

    const minCatRef = useRef();
    const isVisible = useIsVisible(minCatRef);

    useEffect(() => {
        isVisible && setActiveIndex(index);
    }, [isVisible]);


    return (
        <div ref={minCatRef} className="homeRatingSect_innerCont">
            <div className="homeRatingSect_innerWrapper">
                <div className="rating_wrapper">
                    {Array(review?.rating).fill().map((e, i) => (
                        <img key={i} src={star} alt="star icon" className="star_icon" />
                    ))}
                    {Array(5 - (review?.rating)).fill().map((e, i) => (
                        <img key={i} src={u_star} alt="star icon" className="star_icon" />
                    ))}
                </div>
                <p className="reviewTxt">{review?.review}</p>
                <p className="reviewer">{review?.reviewer}</p>
            </div>
        </div>
    )
}