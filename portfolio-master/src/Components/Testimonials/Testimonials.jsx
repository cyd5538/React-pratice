import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: "as1341341341341dasdasdasd"
        },
        {
            img: profilePic2,
            review: "asdasdas1514524245dasd"
        },
        {
            img: profilePic3,
            review: "asdasdasda134134134134sd"
        },
        {
            img: profilePic4,
            review: "a1313513sdasdasdasd"
        }
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "var(--skyblue)"}}></div>
        </div>
        {/* slider  */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}

        >
            {clients.map((client, index) => {
                return(
                <SwiperSlide key={index}>
                    <div className="textimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                    </div>
                </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials