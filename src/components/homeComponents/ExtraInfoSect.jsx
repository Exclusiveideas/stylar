import React from 'react';
import '@homestyles/extraInfoSect.css';
import location from "@assets/location.svg"
import return_icon from "@assets/return.svg"
import discount from "@assets/discount.svg"
import chat from "@assets/chat.svg"

const eInfos = [
    {
      icon: location,
      title: "Free Shipping*",
      desc: "Shipping is on us for all Australian orders"
    },
    {
      icon: return_icon,
      title: "Returns",
      desc: "Seamless 30 day return"
    },
    {
      icon: discount,
      title: "Discount*",
      desc: "Special discount for our email list subscribers"
    },
    {
      icon: chat,
      title: "Ask The Horse",
      desc: "Our helpful staff is standing by on live chat to assist you."
    },
  ];

const ExtraInfoSect = () => {
    return (
        <div className='extraInfoSect'>
            {eInfos?.map((eInfo, i) => (
                <div key={i} className="info_wrapper">
                    <div className="info_icon">
                        <img src={eInfo?.icon} alt="info icon" className="info_icon_icon" />
                    </div>
                    <p className="info_title">{eInfo?.title}</p>
                    <p className="info_desc">{eInfo?.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default ExtraInfoSect;