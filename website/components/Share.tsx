'use client'

import { AiFillMail } from 'react-icons/ai'
import { FaFacebook, FaLinkedin, FaReddit } from 'react-icons/fa'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton
} from 'react-share'

export const Share = ({
  className,
  title,
  url,
  description
}: {
  className?: string
  title: string
  url: string
  description: string
}) => {
  return (
    <div className={className}>
      <EmailShareButton
        url={url}
        subject={`Check out this cli ${title.toLocaleLowerCase()} loader I found on cliloaders!`}
        aria-label='Share loader by email button'
      >
        <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600'>
          <AiFillMail className='size-4 text-white' />
        </div>
      </EmailShareButton>
      <FacebookShareButton
        url={url}
        aria-label='Share loader through facebook button'
      >
        <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600'>
          <FaFacebook className='size-4 text-white' />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={url}
        aria-label='Share loader through linkedin button'
      >
        <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600'>
          <FaLinkedin className='size-4 text-white' />
        </div>
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={title}
        aria-label='Share loader through reddit button'
      >
        <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600'>
          <FaReddit className='size-4 text-white' />
        </div>
      </RedditShareButton>
      <TwitterShareButton
        url={url}
        title={`Check out this ${title.toLocaleLowerCase()} loader!`}
        aria-label='Share loader through twitter button'
      >
        <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600'>
              <svg
      viewBox='0 0 64 64'
      width='64'
      height='64'
      className='size-[0.95rem] group flex-none fill-neutral-200 transition group-hover:fill-neutral-300'
      role='img'
      aria-labelledby='xIconTitle'
    >
      <title id='xIconTitle'>X Icon</title>
      <rect
        className='fill-neutral-200 group-hover:fill-neutral-300'
        width='64'
        height='64'
        rx='10'
        ry='10'
        fill='#eee'
      />
      <path
        d='M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z'
        fill='black'
      />
    </svg>
        </div>
      </TwitterShareButton>
    </div>
  )
}
