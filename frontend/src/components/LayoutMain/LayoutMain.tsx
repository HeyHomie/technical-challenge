import React from 'react'
import './LayoutMain.css'

interface Props {
  menu: Array<{ label: string; d: string; active: boolean; counter: number }>
}

export const LayoutMain = ({ menu }: Props) => {
  return (
    <div className="layout">
      <div className="layout-sidebar"></div>
      <div className="layout-main">
        <nav>
          {menu.length
            ? menu.map((item, index: number) => (
                <a href="" key={index} className={item.active ? 'current' : ''}>
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
                  {item.counter !== 0 && (
                    <span className="counter">{item.counter}</span>
                  )}
                </a>
              ))
            : ''}
        </nav>
      </div>
    </div>
  )
}
