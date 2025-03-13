'use client'
import Image from "next/image"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
	},
}

const testimonials = [
	{
		name: "pretynana",
		country: "Haiti",
		image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a04578e1567f68806b1af247b1501739-1584117765126/55806c08-5de6-4bdf-8b6b-57884a1bef75.JPG",
		review: "Work is amazing! Fuad is very comprehensive, respond very fast and ready to make any changes you’ll like till you satisfied. I really loved working with him. I will totally recommend him. And if there’s anything I’ll order with him again"
	},
	{
		name: "whoanaturals",
		country: "United States",
		image: "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng=",
		review: "Fuad, is an incredible professional. Even when I had a few delays in getting him the information and content that he needed, he still completed the project on time and exceeded my expectations. You will not be disappointed! Thank you Fuad!"
	},
	{
		name: "ellablaine",
		country: "United States",
		image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1379712/original/smiley-face-thumbs-up-cartoon-yTkeza64c.png",
		review: "Thank you again for being super patient with me; I truly appreciate it. If you are looking for someone to create a knowledgeable and affordable website, don't hesitate to order his gig. I will definitely be ordering again."
	},
	{
		name: "ericmilam1977",
		country: "United States",
		image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/582382457099fe0527db9f9624f044b7-1628016241190/8826e24c-0200-43ac-821d-4a54d38cd9e1.JPG",
		review: "I have worked with him several times, and each time the work is stellar. Everything I want comes to life. I would not have gone with anyone else. And I will come back again for future projects."
	},
	{
		name: "rjberryhill",
		country: "United Kingdom",
		image: "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng=",
		review: "fuad_hasan08 is one of the best Website Designers that I have worked with. He is very intelligent, competent and patient with the customer and the needs of the customer. He designed a highly professional Non-Profit Website for our organization. I give me highest recommendations to use the services of fuad_hasan08! I definitely will use his services and talents on another project! Bob"
	},
	{
		name: "pipsonflash",
		country: "United States",
		image: "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng=",
		review: "Fuad works fast and is a great communicator. Once you have all your content ready, he will get to work to make a great looking website for you. I am impressed with his responsiveness and willingness to make changes every time I requested. He also gives good recommendation on somethings. I'll definitely work with Fuad in the future. I highly recommend him."
	},
];



export default function Testimonials1() {
	return (
		<>

			<section className="section-testimonials-1 position-relative pb-120 bg-900 overflow-hidden">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<h3 className="ds-3 mt-3 mb-3 text-primary">Client's Testimonials</h3>
							<span className="fs-5 fw-medium text-200">
								I believe that working hard and trying to learn every day will make me
								<br />
								improve in satisfying my customers.
							</span>
							<div className="row mt-8">
								<Swiper {...swiperOptions} className="swiper slider-2 pt-2 pb-3">
									<div className="swiper-wrapper">
										{/* prettier-ignore */}

										{testimonials.map((testimonial, index) => (
											<SwiperSlide key={index}>
												<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
													<div className="d-flex mb-5">
														<i className="ri-star-fill fs-7 text-primary" />
														<i className="ri-star-fill fs-7 text-primary" />
														<i className="ri-star-fill fs-7 text-primary" />
														<i className="ri-star-fill fs-7 text-primary" />
														<i className="ri-star-fill fs-7 text-primary" />
													</div>
													<h6 className="mb-7">“{testimonial.review}”</h6>
													<Link href="/#" className="d-flex align-items-center">
														<Image width={65} height={65} className="icon_65 avatar" src={testimonial.image} alt={testimonial.name} />
														<h6 className="ms-2 mb-0">
															{testimonial.name} <span className="fs-6 fw-regular"> - {testimonial.country}</span>
														</h6>
													</Link>
												</div>
											</SwiperSlide>
										))}


									</div>
									<div className="swiper-pagination" />
									<div className="text-center mt-8 position-relative z-3">
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 ps-10 d-none d-md-block">
					<Image sizes="100vw" width={0} height={0} style={{ width: "100%", height: "auto" }} className="position-relative z-1" src="/assets/imgs/hero/hero-1/man.png" alt="man" />
					<div className="position-absolute top-50 start-50 translate-middle z-0 mt-5">
						<Image sizes="100vw" width={0} height={0} style={{ width: "100%", height: "auto" }} className="ribbonRotate" src="/assets/imgs/testimonials/testimonials-1/decorate.png" alt="" />
					</div>
				</div>
			</section>

		</>
	)
}
