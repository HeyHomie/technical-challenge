import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import { FaBalanceScale } from 'react-icons/fa'
import { Repository } from '../../../api/models'

import {
  RepositoryCardContainer,
  SectionOne,
  SectionTwo,
  SectionThree,
  DescAndIcon
} from './styles'

interface RepositoryCardProps {
  repository: Repository
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <RepositoryCardContainer>
      <SectionOne className='section-one'>{repository?.name}</SectionOne>
      <SectionTwo className='section-two'>{repository?.description}</SectionTwo>
      <SectionThree className='section-three'>
        {repository?.language?.length > 0 && (
          <DescAndIcon className='language'>
            <div className='color' /> {repository?.language}
          </DescAndIcon>
        )}
        {repository?.stargazers_count > 0 && (
          <DescAndIcon>
            <AiOutlineStar /> {repository?.stargazers_count}
          </DescAndIcon>
        )}
        {repository?.forks_count > 0 && (
          <DescAndIcon>
            <BiGitRepoForked /> {repository?.forks_count}
          </DescAndIcon>
        )}
        {repository?.license?.length > 0 && (
          <DescAndIcon className='license'>
            <FaBalanceScale /> {repository?.license}
          </DescAndIcon>
        )}
        <span>Updated {repository?.pushed_at} ago</span>
      </SectionThree>
    </RepositoryCardContainer>
  )
}

export default RepositoryCard
