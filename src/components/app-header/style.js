import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  color: #fff;
  background-color: #242424;

  .content{
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider{
    height: 5px;
    background-color: #c20c0c;
  }
  .wrap-v1{
    background-color: blue;
  }
`

// 左边
export const HeaderLeft = styled.div`
  display: flex;
  
  .logo{
    display: block;
    width: 177px;
    height: 100%;
    background-position: 0 0;
  }

  .select-list{
    display: flex;
    line-height: 70px;
    a{
      padding: 0 20px;
      height: 70px;
      text-align: center;
      font-size: 14px;
      text-decoration: none;
    }

    :last-of-type a{
      position: relative;
      ::after{
        position: absolute;
        content: "";
      }
    }
  }
`

// 右边
export const HeaderRight = styled.div`
  
`