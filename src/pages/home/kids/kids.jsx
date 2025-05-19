import KidContentCard from "./KidContentCard.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const KidsSection = () => {

    const kidContent = [
        { id: 1, title: 'Animated Adventure 1', imageUrl: 'https://i.ibb.co/fVt4H7R8/Educational-Show-1.png' },
        { id: 2, title: 'Educational Show 2', imageUrl: 'https://i.ibb.co/DD7WCHGb/Animated-Adventure-1.png' },
        { id: 3, title: 'Kids Movie Fun', imageUrl: 'https://i.ibb.co/XfxncXRx/Kids-Movie-Fun-1.png' },
        { id: 4, title: 'Animal Series', imageUrl: 'https://i.ibb.co/MQxDLPn/Animal-Series-1.png' },
        { id: 5, title: 'Superhero Cartoon', imageUrl: 'https://i.ibb.co/xSjcdHwC/Superhero-Cartoon-1.png' },
        { id: 6, title: 'Fairytale Classics', imageUrl: 'https://i.ibb.co/nNj2CSD2/Fairytale-Classics-1.png' },
        { id: 7, title: 'Science Fun', imageUrl: 'https://i.ibb.co/jnYZ47F/Science-Fun-1.png' },

    ];

    return (
        <section className="screen">
            {/* Section Title */}
            <SectionHeading heading={"Kids Corner"} subHeading={"Enjoy your show"}/>
            <div className="px-4">
                <Swiper slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                >
                    {
                        kidContent?.map(item => (<SwiperSlide className={"mb-8"} key={item.id}>
                            <KidContentCard item={item}/>
                        </SwiperSlide>))
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default KidsSection;
