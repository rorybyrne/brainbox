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
					I'm a neuroscience student, coder, and technical founder. I'm
					interested in neurolinguistics, tools for thought, and devops/sciops.
					I have some <a href="https://github.com/synek">open source</a>{" "}
					projects at varying levels of abandonment.
					<br />
					<br />
					You can find me on twitter @ryrobyrne.
				</p>
			</section>
		</Layout>
	)
}
