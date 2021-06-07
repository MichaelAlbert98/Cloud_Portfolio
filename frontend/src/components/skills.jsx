import React, {Component} from 'react'

export default class Home extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-skills" data-section="skills">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">What do I do?</span>
								<h2 className="colorlib-heading">Here are some of my skills</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-2 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_java.png)'}}/>
									</span>
									<div className="desc">
										<h3>Java</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_python.png)'}}/>
									</span>
									<div className="desc">
										<h3>Python</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_c.png)'}}/>
									</span>
									<div className="desc">
										<h3>C</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-4">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_matlab.png)'}}/>
									</span>
									<div className="desc">
										<h3>MATLAB</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-5">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_git.png)'}}/>
									</span>
									<div className="desc">
										<h3>Git</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-6">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_aws.png)'}}/>
									</span>
									<div className="desc">
										<h3>AWS</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_latex.png)'}}/>
									</span>
									<div className="desc">
										<h3>LaTeX</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<div className='img' style={{backgroundImage: 'url(images/skill_algorithm.png)'}}/>
									</span>
									<div className="desc">
										<h3>Algorithms</h3>
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
