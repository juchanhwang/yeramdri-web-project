import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import yeramdriLogo from 'src/App/pages/Home/assets/yeramdri-logo.svg'

import css from './Header.scss'
const cx = classnames.bind(css)
const moduleName = 'Header'

class Header extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Link className={cx(`${moduleName}-logo`)} to="/">
          <img src={yeramdriLogo} alt="logo" />
        </Link>
      </div>
    )
  }
}

export default Header