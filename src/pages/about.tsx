import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="About" />
			<section className="About">
				<h1>About</h1>
				<p>
                    Hi, I'm Rory!
					<br />
					<br />
                    I'm interested in improving the way that we use computation to build tools for thought. I work
                        as a coder, and in my spare time I run some <a href="https://github.com/synek">open source</a>
                        projects and study neuroscience.
                    <br />
                    <br />
					I am trying to document my study progress here as a way to hold myself accountable and hopefully
                        help any other learners who are grappling with computational neuroscience concepts.
					<br />
					<br />
					The content on this website lies somewhere between "rough personal notes" and "publishable
					    material", and I expect a lot of it to be revised as I learn more.
					<br />
					<br />
					If you'd like to get in touch with me, my twitter is @ryrobyrne
					Thank you very much and I hope you can learn something from my writing!
					<br />
					<br />
					<br />
					<br />
					- Rory
				</p>
			</section>
		</Layout>
	)
}
