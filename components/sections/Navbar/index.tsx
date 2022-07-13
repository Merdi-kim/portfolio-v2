import { links } from '../../../data/data'
import NavBarLink from './NavBarLink'

const Navbar = () => {
  return (
    <div className='flex h-14 items-center justify-center bg-slate-100'>
        { links.map(({link, text}) => <NavBarLink key={text} link={link} text={text}/>) }
    </div>
  )
}

export default Navbar