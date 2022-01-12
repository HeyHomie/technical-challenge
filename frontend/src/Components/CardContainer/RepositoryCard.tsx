import * as React from 'react'

const RepositoryCard: React.FC = () => {
  return (
    <React.StrictMode>
      <div className='card-container'>
        <div className='card-container_content'>
          <div className='card-container_content__title'>
            <h4>Repositories names</h4>
            <span>Type</span>
          </div>
          <div className='card-container_content__description'>
            <span>description</span>
          </div>
          <div className='card-container_content__info'>
            <span>Language</span>
            <span>Updated on</span>
          </div>
        </div>
        <div className='card-container_options'>
          <div className='card-container_options__star'>
            <button>Star</button>
          </div>
          <div className='card-container_options__graph'>Grafica</div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default RepositoryCard
