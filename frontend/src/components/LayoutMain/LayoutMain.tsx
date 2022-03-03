import React from 'react'
import './LayoutMain.css'

interface Props {
  menu: Array<{ label: string; d: string }>
}

export const LayoutMain = ({ menu }: Props) => {
  return (
    <div className="layout">
      <div className="layout-sidebar"></div>
      <div className="layout-main">
        <nav>
          {menu.length
            ? menu.map((item, index: number) => (
                <a href="" key={index}>
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-book UnderlineNav-octicon hide-sm">
                    <path fillRule="evenodd" d={item.d}></path>
                  </svg>
                  {item.label}
                </a>
              ))
            : ''}
        </nav>
      </div>
    </div>
  )
}
