import './tag.css';

interface Props {
    value:string;
}

const Tag = ({value}: Props) => {
  const link :string = 'https://github.com/topics';
  return (
    <a className="tag" target="_blank" rel="noreferrer" href={`${link}/${value}`}>
       {value}
    </a>
  
  )
}

export default Tag
