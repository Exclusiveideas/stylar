import React from 'react';
import HeroSection from '@homecomponents/HeroSection'
import QuoteSect from '@homecomponents/QuoteSect'
import MiniCatalogue from '@homecomponents/MiniCatalogue'
import QuoteSectTwo from '@homecomponents/QuoteSectTwo'
import HomeDescSect from '@homecomponents/HomeDescSect'
import HomeRatingSect from '@homecomponents/HomeRatingSect'
import ExtraInfoSect from '@homecomponents/ExtraInfoSect'

const Home = () => {
    const catInfos = [{
        title: 'Shop Men',
        ctaTxt: 'Shop All'
    },
    {
        title: "Men's Trending Now",
        ctaTxt: 'Shop New Releases'
    },
    {
        title: "Shop Women",
        ctaTxt: 'Shop All'
    },
    {
        title: "Women's Trending Now",
        ctaTxt: 'Shop New Releases'
    },
    ]



    return (
        <div>
            <HeroSection />
            <QuoteSect />
            {catInfos?.map((catInfo, i) => (
                <MiniCatalogue key={i} catInfo={catInfo} />
            ))}
            <QuoteSectTwo />
            <HomeDescSect />
            <HomeDescSect alternate={true} />
            <HomeRatingSect />
            <ExtraInfoSect />
        </div>
    )
}

export default Home;