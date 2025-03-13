import projects from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioFilter() {

	return (
		<>
			<div className="container">
				<div className="row masonry-active justify-content-between pt-6">
					{projects.map((project, index) => (
						<div key={index} className="filter-item col-lg-6 col-12">
							<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
								<Link href={`/work/${encodeURIComponent(project.slug)}`}>
									<Image sizes="100vw"
										width={0}
										height={0}
										style={{ width: "100%", height: "auto" }} className="rounded-3 w-100 zoom-img" src={project.preview} alt={project.name} />
								</Link>
								<div className="d-flex align-items-center mt-4">
									<Link href={`/work/${encodeURIComponent(project.slug)}`} className="project-card-content">
										<h3 className="fw-semibold">{project.name}</h3>
									</Link>
									<Link href={`/work/${encodeURIComponent(project.slug)}`} className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
										<i className="ri-arrow-right-up-line" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
