import React, {Component} from 'react'

export default class Home extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-experience" data-section="experience">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Experience</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="timeline-centered">
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-1">
												<i className="icon-pen2"/>
											</div>
											<div className="timeline-label">
												<h2>
													<a href="https://github.com/MichaelAlbert98/Cloud_Portfolio">Personal Portfolio </a>
													<span>Jun 2020 - Present</span>
												</h2>
												<p>
													A serverless website that I designed to be used as my portfolio. The frontend was made using React and is hosted on an S3 bucket.
													The backend utilizes several AWS offerings such as Lambda, API Gateway, Route 53, Cloudfront, DynamoDB, etc. Both frontend and backend were
													developed using CICD principles and a deployment pipeline was created through GitHub Actions. Deployments occur upon changes to the
													frontend build or the backend source code.
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-2">
												<i className="icon-pen2"/>
											</div>
											<div className="timeline-label">
												<h2>
													<a href="https://ieeexplore.ieee.org/document/9201938/authors#authors">Exhaustive Protein Generation </a>
													<span>Apr 2019 - Jun 2020</span>
												</h2>
												<p>
													Worked in a team to develop a method of optimizing bioinformatic pipelines through I/O aggregation. We analyzed an existing pipeline that
													produced mutated proteins in order to determine I/O reads/writes to the disk that were unnecessary. In the resulting research article we
													discuss the creation of a cache to aggregate the operations and to improve scalability of this pipeline through few large reads/writes
													rather than hundreds of millions of small ones.
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-3">
												<i className="icon-pen2"/>
											</div>
											<div className="timeline-label">
												<h2>
													<a href="https://github.com/MichaelAlbert98/BirdID">BirdID </a>
													<span>Apr 2020 - Jun 2020</span>
												</h2>
												<p>
													A neural network designed to classify birds using few-shot learning with prototypical networks. Classification of
													bird species is difficult due to a lack of data for some species. Few-shot learning circumvents this lack of data
													by creating support sets and query sets out of samples of the available data. The software then learns a metric space
													in which it computes the distances between the query images and the support images. These distances are used to create
													and then update 'prototypes' which represent each species. After using data augmentation techniques to expand the
													available images to pull from, this software managed to reach an accuracy of 80% when performing 5-shot classification.
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-4">
												<i className="icon-pen2"/>
											</div>
											<div className="timeline-label">
												<h2>
													<a href="https://github.com/MichaelAlbert98/SURLY">SURLY </a>
													<span>Jan 2019 - Mar 2019</span>
												</h2>
												<p>
													A single user relational database designed to be used on a personal computer. Programmed in Java, it was built to mimic
													SQL and to be highly extensible so commands can be added as the user requires in a modular way. Currently supports
													SELECT, INSERT, DELETE, DESTROY, WHERE, PRINT, JOIN, and PROJECT commands. Integrity Constraints and robust error
													handling were later added to the project to fit personal needs.
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-5">
												<i className="icon-pen2"/>
											</div>
											<div className="timeline-label">
												<h2>
													<a href="https://github.com/MichaelAlbert98/Deadwood">Deadwood </a>
													<span>Sep 2018 - Dec 2018</span>
												</h2>
												<p>
													A digital recreation of the board game Deadwood using Java. An emphasis on Object Oriented Programming was intended when making
													this program. The code is split into three sections according to the Model-View-Controller design pattern in which
												  user input is sent to the controller which changes the data held by the model which in turn updates the view presented
													to the user. 
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-none"></div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
