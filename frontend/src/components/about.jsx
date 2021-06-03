import React, {Component} from 'react'

export default class Home extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12">
								<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
									<div className="col-md-12">
										<div className="about-desc">
											<span className="heading-meta">About Me</span>
											<h2 className="colorlib-heading">Who Am I?</h2>
											<p>
												<strong>Hi I'm Michael, I develop software. </strong> I studied Computer Science and Mathematics at Western Washington University
												in Bellingham and graduated in 2020. When I'm not looking for jobs or studying algorithms and design patterns, you can find me
												working on personal projects. (Scroll down for some highlights or check out my Github to see more) I mainly focus on backend
												work, though I'm capable of doing frontend design in a pinch. I currently live in Arlington, WA, though I'm open to relocation.
											</p>
											<p>
												I do things other than program as well! You can find me hanging out with friends playing TTRPG's, going on hikes with my dog,
												or just relaxing next to a fireplace with my cat reading a good book when I'm not sat at my desk staring at a section of code.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
