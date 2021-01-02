import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"
import Posts from "../components/Posts/posts"

export default function PostsPage(props) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						author
						description
						title
					}
				}
			}
		`
	)

	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title={site.siteMetadata.title} />
			<Posts data={{}} />
		</Layout>
	)
}
