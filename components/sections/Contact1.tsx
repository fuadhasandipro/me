
import Link from "next/link"

export default function Contact1() {
	return (
		<>
			<section id="contact" className="section-contact-1 bg-900 position-relative pb-lg-250 pb-150 overflow-hidden">
				<div className="container position-relative z-1">
					<h3 className="ds-3 mt-3 mb-3 text-primary">Get in touch</h3>
					<span className="fs-5 fw-medium text-200">
						I'm always excited to take on new projects and collaborate with innovative minds. If you
						<br />
						have a project in mind or just want to chat about design, feel free to reach out in Fiverr!
					</span>
					<div className="row mt-3 mb-8">
						<div className="col-lg-auto">
							<Link href="https://www.fiverr.com/fuad_hasan08" target="_blank" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get a Quote
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
					<div className="wow img-custom-anim-top">
						<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">fuad_hasan</h3>
					</div>
				</div>
			</section>
		</>
	)
}
