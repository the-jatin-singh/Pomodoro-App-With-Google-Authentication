
import arrow from'../assets/arrow.svg';

const Footer = () => {
  return (
    <div className="pb-2 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className='flex gap-1'><a target="_blank" href='https://github.com/the-jatin-singh' className='text-sm  hover:color-green-500'>Github</a> <img className='w-2' src={arrow} alt="github link" /></div>
    </div>
  )
}

export default Footer