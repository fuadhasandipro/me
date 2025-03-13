
import Image from "next/image"
import Link from "next/link"

export default function Home1() {
	return (
		<>

			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row zelio">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark">👋 Hi there, I'm Fuad Hasan</span>
							<h1 className="ds-2 mb-3">I’m passionate about <span className="text-primary">building websites</span></h1>
							<p className="text-300 mb-6">I specialize in creating high-performing websites that help businesses and organizations attract leads and accelerate growth.</p>
							<Link href="/#projects" className="btn btn-gradient me-2">
								View Work
								<i className="ri-arrow-right-line ms-2" />
							</Link>
							<Link href="https://www.fiverr.com/fuad_hasan08" target="_blank" className="btn btn-outline-secondary d-inline-flex align-items-center">
								<span>Hire me</span>
								<i className="ri-arrow-right-line ms-2" />
							</Link>
							<p className="text-400 mt-6 mb-3">+ 5 years with professional cms</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<Image width={32} height={32} src="/assets/imgs/hero/hero-1/wordpress.png" alt="wordpress" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<Image width={36} height={36} src="/assets/imgs/hero/hero-1/woocommerce.png" alt="woocommerce" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<Image width={32} height={32} src="/assets/imgs/hero/hero-1/wix.png" alt="wix" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
									<Image width={36} height={36} src="/assets/imgs/hero/hero-1/brand-6.png" alt="webflow" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<Image sizes="100vw" width={0} height={0} style={{ width: "100%", height: "auto" }} className="position-relative z-1 filter-gray" src="/assets/imgs/hero/hero-1/man.png" alt="fuadhasan" />
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<Image sizes="100vw" width={0} height={0} style={{ width: "100%", height: "auto" }} className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>

		</>
	)
}
