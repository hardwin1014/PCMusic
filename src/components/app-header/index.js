import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '@/common/local-data'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'
export default memo(function WXHAppHeader() {

  // 页面代码
  const showSelectItem = (item,index) => {
    if(index < 3){
      return (
        <NavLink to={item.link}>{item.title}</NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href = "#/" className="logo sprite_01"></a>
          <div className="select-list">
              {
                headerLinks.map((item,index) => {
                  return (
                    showSelectItem(item,index)
                  )
                })
              }
          </div>  
        </HeaderLeft>  
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
