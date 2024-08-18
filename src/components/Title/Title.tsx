import './Title.css'
interface TitleData{
  title: string,
  subtitle: string
}
interface TitleData{
  title: string,
  subtitle: string
}

const Title = ({subtitle, title}:TitleData) => {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title