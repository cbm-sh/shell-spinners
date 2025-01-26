'use client';

import { memo } from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaReddit } from 'react-icons/fa';
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	RedditShareButton,
	TwitterShareButton,
} from 'react-share';
import { Button } from './ui/Button';
import { XLogoIcon } from './ui/Icons';

export const Sharer = ({
	path,
	description,
}: {
	className: string;
	title: string;
	url: URL | string;
	path: string;
	description: string;
}) => {
	const SHARE_URL = `https://cliloaders.com/${path}`;
	const EMAIL_URL = `mailto:?subject=Check out this cli loader I found on cliloaders!&body=${description} ${encodeURIComponent(SHARE_URL)}`;
	const FB_ENDPOINT = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`;
	const LI_ENDPOINT = `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodeURIComponent(SHARE_URL)}`;

	console.log('Share URL:', SHARE_URL);
	console.log('Email URL:', EMAIL_URL);
	console.log('Facebook URL:', FB_ENDPOINT);
	console.log('LinkedIn URL:', LI_ENDPOINT);
};

export const Share = memo(
	({
		className,
		title,
		url,
		description,
	}: {
		className?: string;
		title: string;
		url: string;
		description: string;
	}) => {
		return (
			<div className={className}>
				<EmailShareButton
					url={url}
					className='ml-3'
					subject={`Check out this cli ${title.toLocaleLowerCase()} loader I found on cliloaders!`}
					aria-label='Share loader by email button'
				>
					<Button as='span' variant='primary' icon={<FaEnvelope className='size-4' />} />
				</EmailShareButton>
				<FacebookShareButton
					className='ml-3'
					url={url}
					aria-label='Share loader through facebook button'
				>
					<Button as='span' variant='primary' icon={<FaFacebook className='size-4' />} />
				</FacebookShareButton>
				<LinkedinShareButton
					className='ml-3'
					url={url}
					title={title}
					summary={description}
					source={url}
					aria-label='Share loader through linkedin button'
				>
					<Button as='span' variant='primary' icon={<FaLinkedin className='size-4' />} />
				</LinkedinShareButton>
				<RedditShareButton
					className='ml-3'
					url={url}
					title={title}
					aria-label='Share loader through reddit button'
				>
					<Button as='span' variant='primary' icon={<FaReddit className='size-4' />} />
				</RedditShareButton>
				<TwitterShareButton
					url={url}
					className='ml-3'
					title={`Check out this ${title.toLocaleLowerCase()} loader!`}
					aria-label='Share loader through X button'
				>
					<Button as='span' variant='primary' icon={<XLogoIcon className='size-4' />} />
				</TwitterShareButton>
			</div>
		);
	},
);

Share.displayName = 'Share';
