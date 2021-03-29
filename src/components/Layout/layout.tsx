import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "@fontsource/open-sans" // Defaults to weight 400.
import "@fontsource/roboto" // Defaults to weight 400.
import Header from "../Header/header"
import Footer from "../Footer/footer"
import "./layout.scss"
import "../../styles/globals.scss"
import Subscribe from "../Subscribe/Subscribe";

export default function Layout({ children }) {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`)

	return (
		<>
			<div className="Layout">
				<Header
					className="Layout__header"
					siteTitle={data.site.siteMetadata.title}
				/>
				<main className="Layout__children">{children}</main>
				<Subscribe />
				<Footer
					className="Layout__footer"
					siteTitle={data.site.siteMetadata.title}
					siteAuthor={data.site.siteMetadata.author}
				/>
			</div>
		</>
	)
}
