import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'


const Banner = () => {
    return (
        <div>
            <Swiper className='h-[600px]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide>
                    <div className="hero h-[600px]" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Luxury Living</h1>
                                <p className="mb-5">Elevate your lifestyle with our exclusive residential properties</p>
                                <button className="btn btn-primary" ><a href="/contact">Contact</a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[600px]" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Dream Homes</h1>
                                <p className="mb-5">Discover your perfect sanctuary amidst breathtaking surroundings.</p>
                                <button className="btn btn-primary"><a href="/contact">Contact</a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[600px]" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Urban Oasis</h1>
                                <p className="mb-5">Find serenity in the heart of the city with our residences.</p>
                                <button className="btn btn-primary"><a href="/contact">Contact</a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[600px]" style={{ backgroundImage: `url(${banner4})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Modern Elegance</h1>
                                <p className="mb-5">Experience sophistication and comfort in our contemporary homes.</p>
                                <button className="btn btn-primary"><a href="/contact">Contact</a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                
                {/* <SwiperSlide><img className='w-full rounded-3xl h-[400px] md:h-[700px] object-cover' src="../../src/assets/banner5.jpg" alt="" /></SwiperSlide> */}
                {/* <SwiperSlide>
        <div className='bg'>

        </div>
        </SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Banner;