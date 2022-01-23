import { Button } from '.'
import { Profile } from '../interfaces'

interface Props {
  profile: Profile
}

export function SideBar({ profile }: Props) {
  return (
    <div>
      <div className="mb-4 relative z-20 border border-[#d0d7de] dark:border-[#444c56] rounded-full w-[296px] h-[296px] overflow-hidden">
        <img src={profile.avatar_url} alt={profile.name} />
      </div>

      <div className="mb-4">
        <h1>
          <span className="dark:text-github-dark-text text-[26px] leading-tight font-semibold block">
            {profile.name}
          </span>
          <span className="text-[#768390] leading-6 font-light text-xl">
            {profile.login}
          </span>
        </h1>
      </div>

      <div className="mb-4 text-base dark:text-github-dark-text">
        {profile.bio}
      </div>

      <div className="mb-4">
        <Button>Edit profile</Button>
      </div>

      <div className="mb-4">
        <a className="dark:text-github-dark-link hover:text-blue">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
            <path
              fillRule="evenodd"
              d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
          </svg>{' '}
          <span className="font-semibold text-[#24292f] dark:text-[#adbac7]">
            {profile.followers}
          </span>{' '}
          followers
        </a>
        {' · '}
        <a className="dark:text-github-dark-link">
          <span className="font-semibold text-[#24292f] dark:text-[#adbac7]">
            {profile.following}
          </span>{' '}
          following
        </a>
      </div>

      <div className="mb-4 pb-4 border-b border-[#d8dee4] dark:border-[#373e47]">
        {profile.company && (
          <div className="block pt-1  font-semibold">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
              className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
              <path
                fillRule="evenodd"
                d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
            </svg>{' '}
            {profile.company}
          </div>
        )}
        {profile.location && (
          <div className="block pt-1">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
              className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
              <path
                fillRule="evenodd"
                d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>{' '}
            {profile.location}
          </div>
        )}
        <div className="block pt-1">
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
            className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
            <path
              fillRule="evenodd"
              d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
          </svg>{' '}
          {profile.email || 'githubdoesnt@provideemail.com'}
        </div>
        {profile.blog && (
          <div className="block pt-1">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
              <path
                fillRule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>{' '}
            {profile.blog}
          </div>
        )}
        {profile.twitter_username && (
          <div className="block pt-1">
            <svg
              viewBox="0 0 273.5 222.3"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
              className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
              <title id="pc0h08eixb7rdm0dyq3duvceqb010vs">Twitter</title>
              <path
                d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                fill="currentColor"></path>
            </svg>{' '}
            @{profile.twitter_username}
          </div>
        )}
      </div>

      <div className="mb-4 pb-4 border-b border-[#d8dee4] dark:border-[#373e47]">
        <h2 className="font-semibold text-base">Achievements</h2>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-base">Organizations</h2>
      </div>
    </div>
  )
}
