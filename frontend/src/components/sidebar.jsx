import React, {Component} from 'react'
import Profile from '../assets/images/about.jpg'
import axios from 'axios'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { visits: 0 };
	}

	componentDidMount() {
		const api = 'https://yq49lqrt4i.execute-api.us-west-2.amazonaws.com/Prod/DynamoDBManager';
		const data = { "operation": "update",
			"payload": {
				"Key": { "website": "michaelalbertportfolio.com" },
				"ReturnValues": "UPDATED_NEW",
				"UpdateExpression": "set visits = visits + :val",
				"ExpressionAttributeValues": { ":val": 1 }
			}
		};

		axios
			.post(api, data)
			.then((response) => {
				console.log(response);
				this.setState({visits: response.data});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<div>
					<a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></a>
					<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
						<div className="text-center">
							<img className="author-img" src={Profile} alt=""/>
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
									This portfolio is made with <i className="icon-heart" aria-hidden="true"/> and {this.state.visits} cups of <i className="icon-coffee" aria-hidden="true"/>
								</small>
							</p>
						</div>
					</aside>
				</div>
			</div>
		)
	}
}
