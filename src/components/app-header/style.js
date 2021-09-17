import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;
  color: #fff;
  font-size: 14px;
  background-color: #242424;

  .content{
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider{
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
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
    text-indent: -9999px; // a标签显示logo 里面写网站标题用seo优化，设置text-indent=-9999px，文字会跑出去
  }

  .select-list{
    display: flex;
    line-height: 70px;

    .select-item{
      position: relative;
      a{
        display: block;
        padding: 0 20px;
        height: 70px;
        text-align: center;
        font-size: 14px;
        color: #ccc;
        text-decoration: none;
      }

      :last-of-type a {
        position: relative;
        ::after{
          position: absolute;
          display: block;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png').default});
          background-position: -190px 0;
          top: 21px;
          right: -15px;
        }
      }
      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      .active .icon{
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%,0);
        background-position: -226px 0;
      }
    }
  }
`

// 右边
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .search{
    width: 158px;
    height: 32px;
    border-radius: 16px;
    outline:none;
    border: 0;
    input{
      &::placeholder{
        font-size: 12px;
      }
    }
  }
  .author{
    width: 90px;
    height: 32px;
    line-height: 30px;
    text-align:center;
    border:1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    color: #ccc;
    background-color: transparent;
    cursor: pointer;
    :hover{
      border-color: #fff;
      color: #fff;
    }
  }
  .login{
    color: #787878;
    background-color: transparent;
    cursor: pointer;
    :hover{
      color: #999;
      text-decoration: underline;
    }
  }
`