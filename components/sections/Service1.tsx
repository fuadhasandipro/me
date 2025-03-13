
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service-1 pt-120 pb-120" id="services">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary">What do I offer?</h3>
							<span className="fs-5 fw-medium text-200">Let's have a look at what you will get

							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="https://www.fiverr.com/fuad_hasan08" target="_blank" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get a Quote
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" >
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<span className="service-number">01.</span>
										Modern, Sleek Design
									</h3>
									<span className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											A stunning, user-friendly, and scalable website with clean code, seamless navigation, and SEO-optimized content—built for long-term success.
										</p>
									</span>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" >
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<span className="service-number">02.</span>
										Cross Compatibility
									</h3>
									<span className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Your website will work flawlessly on all major browsers and devices, ensuring accessibility and a smooth user experience.
										</p>
									</span>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" >
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<span className="service-number">03.</span>
										Fully Responsive
									</h3>
									<span className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											With mobile traffic dominating the web, we ensure a sleek, high-performance design that drives engagement and conversions.
										</p>
									</span>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" >
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<span className="service-number">04.</span>
										Feature-Rich
									</h3>
									<span className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											From lead generation to e-commerce, get a powerful website tailored to your business needs—fast, secure, and conversion-focused.
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
