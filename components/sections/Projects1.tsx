
import Link from "next/link"
import PortfolioFilter from "../elements/PortfolioFilter"

export default function Projects1() {
	return (
		<>

			<div id="projects" className="section-projects-1 position-relative pt-120 pb-6 bg-900">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary">My Latest Works</h3>
							<span className="fs-5 fw-medium text-200">
								I believe that working hard and trying to learn every day will
								<br />
								make me improve in satisfying my customers.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="https://www.fiverr.com/fuad_hasan08" target="_blank" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto d-none d-xl-block">
								Hire Me Now
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-900 fillter-project" data-background="assets/imgs/projects/projects-1/background.png">
				<PortfolioFilter />
			</div>
			<div className="contairer overflow-hidden">
				<div className="row justify-content-center position-relative button-project pb-160 bg-900 pt-1">

					<div className="ellipse position-absolute bottom-0 start-50 translate-middle-x z-0" />
				</div>
			</div>

		</>
	)
}
