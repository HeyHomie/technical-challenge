import "./repository.css";
import Button from '../common/button/Button'
import Tag from '../common/tag/Tag'
import LinkDetails  from "./linkDetails/LinkDetails";
import {TiStarOutline} from 'react-icons/ti'
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'
import {FaBalanceScale} from 'react-icons/fa';
import { IOwner,Ilicense } from "../../interfaces/repository.interface";
import {formatDate} from '../../utils/formatDate'
import {formatStars} from '../../utils/formatStars';


interface Props {
  name:string;
  description:string;
  language:string;
  visibility:string;
  owner:IOwner;
  pushed_at:Date;
  license?:Ilicense;
  stargazers_count:number
}


const Repository = ({name,description,language,visibility,owner,pushed_at,license,stargazers_count}:Props) => {

  return (
    <article className="repository">
              <div className="repository__content">
               <div className="repository__header">
                 <a className="repository__name" href={`${owner.html_url}/${name}`} target="_blank" rel="noreferrer">{name}</a>
                 <span className="repository__tag">{visibility}</span>
                </div>
                
                <div className="repository__description"><p>{description}</p></div>
                <div className="repository__tags">
                  <Tag value='css'/>
                  <Tag value='html'/>
                  <Tag value='javascript'/>
                  <Tag value='reactjs'/>
                  <Tag value='sass'/>
                </div>
                <div className="repository__details">
                  {language&&<LinkDetails icon={GoPrimitiveDot} type='language' value={language} />}
                 {stargazers_count>0&&<LinkDetails icon={AiOutlineStar} type='star' value={formatStars(stargazers_count)} />}
                  {license&&<LinkDetails icon={FaBalanceScale} type='license' value={license?.name} />}
                  <LinkDetails  type='date' value={`Updated ${formatDate(pushed_at)}` } />
                </div>
              </div>  

              <div className="repository__actions">
                <Button size="small" icon={TiStarOutline} value="Star"/>
              </div>
              
          </article>
  )
}

export default Repository
