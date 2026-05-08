import React from 'react';
import ShopBtn from '../../components/button/Shop.jsx';
import ExploreCard from './ExploreCard.jsx';
import bottleFirst from '../../assets/explore/first-prodct.png';
import bottleSecond from '../../assets/explore/second-product.png';
import bottleThird from '../../assets/explore/third-product.png';
import bottleFourth from '../../assets/explore/fourth-product.png';

const Explore = () => {
  return (
    <div className='exploreMain mt-[-650px]'>
        <div className='exploreText'>
            <div className='flex flex-col items-center text-center max-w-260 mx-auto mb-10'>
                <h2 className="text-[#fff] text-[64px] uppercase font-medium max-w-207.5">
                    Explore Our Range of <span className="text-[#E0D000] text-[64px] uppercase font-medium">Energy-Boosting Shots</span> for Every Need
                </h2>
                <p className="relative z-40 mt-3 px-4 text-[18px] text-white/60">
                    Boost your energy and focus with 5-hour ENERGY® shots, crafted for fast results. Choose from a variety of strengths and flavors to fuel your day without the crash.
                </p>
                <ShopBtn />
            </div>
        
            <div className="flex flex-wrap justify-between">
                <ExploreCard
                    image={bottleFirst}
                    title="Orange Flavor"
                    description="Lorem ipsum dolor sit amet, conetur ading elit."
                    price="$32.99"
                    tag="Regular Strength"
                    tagTextColor="#D13615"
                    tagBgColor="#D136152e"
                />
                <ExploreCard
                    image={bottleSecond}
                    title="Rocket Raspberry"
                    description="Lorem ipsum dolor sit amet, conetur ading elit."
                    price="$58.96"
                    tag="Gamer Shots"
                    tagTextColor="#813B6E"
                    tagBgColor="#813B6E2e"
                />
                <ExploreCard
                    image={bottleThird}
                    title="Berry Punch Flavor"
                    description="Lorem ipsum dolor sit amet, conetur ading elit."
                    price="$58.96"
                    tag="Energy Drinks"
                    tagTextColor="#E7142C"
                    tagBgColor="#E7142C2e"
                />
                <ExploreCard
                    image={bottleFourth}
                    title="Fan Fuel"
                    description="Lorem ipsum dolor sit amet, conetur ading elit."
                    price="$58.96"
                    tag="Extra Strength"
                    tagTextColor="#1B8642"
                    tagBgColor="#1B86422e"
                />
            </div>
        </div>
    </div>
    
  );
}
export default Explore;