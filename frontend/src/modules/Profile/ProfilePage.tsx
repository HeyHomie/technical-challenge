import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Nav } from '../../components'
import { useGithub } from '../../hooks'
import { Profile } from './interface'
import { SideBar } from './SideBar'

export function ProfilePage() {
  const { username } = useParams<{ username: string }>()
  const { isLoading, data: profile } = useGithub<Profile>(`users/${username}`)

  if (isLoading || !profile) {
    return <div>isLoading</div>
  }

  return (
    <div className="bg-[#22272e] text-sm dark:text-github-dark-text">
      <div className="dark:bg-github-dark-bg h-[62px]"></div>
      <Nav />
      <Container>
        <div className="grid grid-cols-4">
          <div className="-mt-[32px] z-10">
            <SideBar profile={profile} />
          </div>
          <div className="col-span-3">Rest</div>
        </div>
      </Container>
      sdfsdffds<h1 className="text-3xl font-bold underline">{profile.name}</h1>
    </div>
  )
}
