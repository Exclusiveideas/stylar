import React, { useEffect, useRef, useState } from 'react';
import "@productstyles/recommendedForYou.css";
import MiniCat from '../MiniCat';
import expand from "@assets/expand_icon.svg";
import HomeMiniCat from '../homeComponents/HomeMiniCat';


const RecommendedForYou = ({ details }) => {
  const catRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0)



  function scrollCat(dir) {
    const scrollOptions = {
      top: 0,
      left: dir == 'left' ? -200 : 200,
      behavior: "smooth",
    }

    catRef?.current?.scrollBy(scrollOptions)
  }

  return (
    <div className='recommendedForYou'>
      <div className="rfy_titleWrapper">
        <p>{details?.title}</p>
      </div>
      <div ref={catRef} className="rfy_productsWrapper">
        <div className="rfy_productsContainer">
          {details?.cats?.map((cat, i) => (
            <HomeMiniCat key={i} cat={cat} index={i} setActiveIndex={setActiveIndex} />
          ))}
        </div>
      </div>
      <div style={{ visibility: activeIndex == 0 && 'hidden' }} className="left_scroll_btn scroll_btn" onClick={() => scrollCat('left')}>
        <img src={expand} alt="expand" className="expand_icon" />
      </div>
      <div style={{ visibility: activeIndex == (details?.cats?.length - 1) && 'hidden' }} className="right_scroll_btn scroll_btn" onClick={() => scrollCat('right')}>
        <img src={expand} alt="expand" className="expand_icon" />
      </div>
      <div style={{ top: '100%' }} className="curr_pv_items">
        {Array(5).fill().map((_, i) => (
          <div key={i} className={`curr_pv_item ${activeIndex == i && 'active_curr_pv_item'}`}></div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedForYou;