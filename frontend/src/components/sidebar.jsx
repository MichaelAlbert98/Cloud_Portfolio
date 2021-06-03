import React, {Component} from 'react'

export default class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></a>
					<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
						<div className="text-center">
							<div className="author-img" style={{
									backgroundImage: 'url(images/about.jpg)'
								}}/>
							<h1 id="colorlib-logo">
								<a href="index.html">Michael Albert</a>
							</h1>
							<span className="email">albertmichael746@gmail.com</span>
						</div>
						<nav id="colorlib-main-menu" role="navigation" className="navbar">
							<div id="navbar" className="collapse">
								<ul>
									<li className="active">
										<a href="#home" data-nav-section="home">Home</a>
									</li>
									<li>
										<a href="#about" data-nav-section="about">About</a>
									</li>
									<li>
									<a href="#experience" data-nav-section="experience">Experience</a>
									</li>
									<li>
										<a href="#skills" data-nav-section="skills">Skills</a>
									</li>
								</ul>
							</div>
						</nav>
						<nav id="colorlib-main-menu">
							<ul>
								<li><a href="https://www.linkedin.com/in/michael-albert-322a71166/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
								&nbsp; <a href="https://github.com/MichaelAlbert98" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
							</ul>
						</nav>
						<div className="colorlib-footer">
							<p>
								<small>
									This template is made with <i className="icon-heart" aria-hidden="true"/> and 17 cups of <i className="icon-coffee" aria-hidden="true"/>
								</small>
							</p>
							<ul>
								<li>
									<a href="#"><i className="icon-facebook2"/></a>
								</li>
								<li>
									<a href="#"><i className="icon-twitter2"/></a>
								</li>
								<li>
									<a href="#"><i className="icon-instagram"/></a>
								</li>
								<li>
									<a href="#"><i className="icon-linkedin2"/></a>
								</li>
							</ul>
						</div>
					</aside>
				</div>
			</div>
		)
	}
}
