import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import { FaBalanceScale } from 'react-icons/fa'

import {
  RepositoryCardContainer,
  SectionOne,
  SectionTwo,
  SectionThree,
  DescAndIcon
} from './styles'

interface RepositoryCardProps {
  description: string
  forksCount: number
  language: string
  license: string
  name: string
  pushedAt: string
  stargazersCount: number
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  description,
  forksCount,
  language,
  name,
  pushedAt,
  license,
  stargazersCount
}) => {
  return (
    <RepositoryCardContainer>
      <SectionOne className='section-one'>{name}</SectionOne>
      <SectionTwo className='section-two'>{description}</SectionTwo>
      <SectionThree className='section-three'>
        {language?.length > 0 && (
          <DescAndIcon className='language'>
            <div className='color' /> {language}
          </DescAndIcon>
        )}
        {stargazersCount > 0 && (
          <DescAndIcon>
            <AiOutlineStar /> {stargazersCount}
          </DescAndIcon>
        )}
        {forksCount > 0 && (
          <DescAndIcon>
            <BiGitRepoForked /> {forksCount}
          </DescAndIcon>
        )}
        {license?.length > 0 && (
          <DescAndIcon className='license'>
            <FaBalanceScale /> {license}
          </DescAndIcon>
        )}
        <span>Updated {pushedAt} ago</span>
      </SectionThree>
    </RepositoryCardContainer>
  )
}

export default RepositoryCard
