import React, {Component} from 'react'
import Java from '../assets/images/skill_java.png'
import Python from '../assets/images/skill_python.png'
import C from '../assets/images/skill_c.png'
import Matlab from '../assets/images/skill_matlab.png'
import Git from '../assets/images/skill_git.png'
import Aws from '../assets/images/skill_aws.png'
import Latex from '../assets/images/skill_latex.png'
import Algorithm from '../assets/images/skill_algorithm.png'

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
										<img className='img' src={Java} alt=""/>
									</span>
									<div className="desc">
										<h3>Java</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<img className='img' src={Python} alt=""/>
									</span>
									<div className="desc">
										<h3>Python</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<img className='img' src={C} alt=""/>
									</span>
									<div className="desc">
										<h3>C</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-4">
									<span className="icon">
										<img className='img' src={Matlab} alt=""/>
									</span>
									<div className="desc">
										<h3>MATLAB</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-5">
									<span className="icon">
										<img className='img' src={Git} alt=""/>
									</span>
									<div className="desc">
										<h3>Git</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-6">
									<span className="icon">
										<img className='img' src={Aws} alt=""/>
									</span>
									<div className="desc">
										<h3>AWS</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<img className='img' src={Latex} alt=""/>
									</span>
									<div className="desc">
										<h3>LaTeX</h3>
									</div>
								</div>
							</div>
							<div className="col-md-2 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<img className='img' src={Algorithm} alt=""/>
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
