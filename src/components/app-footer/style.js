import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
  position: relative;
  height: 172px;
  font-size: 12px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }

  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .report{
     span{
       margin-right: 15px;
     }
  }
  .gongan{
    width: 14px;
    height: 14px;
    background-image: url('https://s2.music.126.net/style/web2/img/3rd/police.png?e0b3f90c9008f9b8155858899bda2465');
    background-size: cover;
    display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
  }
`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
      background-size: 110px 450px;
      margin: 0 auto;
    }

    :nth-child(1) .link {
      background-position: -60px -450px;
    }
    :nth-child(2) .link {
      background-position: -60px -101px;
    }
    :nth-child(3) .link {
      background-position: 0px 0px;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }
    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
      background-size: 180px 100px;
      color: #666;
    }

    :nth-child(1) .title {
      background-position: 3px -118px;
    }
    :nth-child(2) .title {
      background-position: 4px -90px;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 0px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: 3px -54px;
      margin-top: 6px;
    }

    :nth-child(5) .title {
      background-position: 1px -72px;
      margin-top: 6px;
    }
  }
`
