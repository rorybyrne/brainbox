import React from "react"
import "./sociallinks.scss"

import {FaEnvelope, FaGithub, FaTwitter} from "react-icons/fa"

// Edit these to add or remove social media icons.
const socialMediaAccounts = [
	{ id: 1, icon: FaGithub, url: "http://github.com/synek" },
	{
		id: 3,
		icon: FaTwitter,
		url: "https://twitter.com/ryrobyrne",
	},
	{ id: 4, icon: FaEnvelope, url: "mailto:rory@rory.bio" },
]

const SocialLinks = ({ className }) => (
	<div className={`SocialLinks ${className}`}>
		{socialMediaAccounts.map(account => (
			<a
				href={account.url}
				key={account.id}
				className={`SocialLinks__container ${className}__container`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<account.icon className={`SocialLinks__icon ${className}__icon`} />
			</a>
		))}
	</div>
)

export default SocialLinks
