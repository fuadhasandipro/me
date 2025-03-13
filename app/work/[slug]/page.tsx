
import Layout from "@/components/layout/Layout"
import Contact1 from "@/components/sections/Contact1"
import projects from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function WorkSingle({ params }: { params: { slug: string } }) {

	const project = projects.find((p) => p.slug === params.slug);

	if (!project) return notFound();

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work-single section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0 text-center">
									<h3 className="ds-3 mt-3 mb-4 text-dark">{project.name}</h3>
									<p className="text-300 fs-5 mb-0">{project.miniDesc}</p>
								</div>
								<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Start</p>
										<h6>{project.startDate}</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Complete</p>
										<h6>{project.completeDate}</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Duration</p>
										<h6>{project.completionTime}</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Website</p>
										<h6>
											{project.website}
										</h6>
									</div>
								</div>
								<Image width={0}
									height={0}
									sizes="100vw"
									style={{ width: "100%", height: "auto" }} src={project.fullPreview} alt={project.name} className="rounded-3 w-100" />
							</div>
						</div>
					</section>
					<div className="contairer overflow-hidden"><div className="row justify-content-center position-relative button-project pb-80 bg-900 pt-1"><div className="ellipse position-absolute bottom-0 start-50 translate-middle-x z-0"></div></div></div>
					{/* Contact 1*/}
					<Contact1 />
				</div>

			</Layout>
		</>
	)
}