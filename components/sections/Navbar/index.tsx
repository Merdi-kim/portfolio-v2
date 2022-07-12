import React, {FC} from 'react'
import { links } from '../../../data'
import NavBarLink from './NavBarLink'

function Navbar() {
  return (
    <div className='flex h-14 bg-blue-300 items-center justify-center'>
        { links.map(({link, text}) => <NavBarLink link={link} text={text}/>) }
    </div>
  )
}

export default Navbar