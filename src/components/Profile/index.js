import React from "react"
import styled, { css } from 'styled-components'
import {isMobile, isMobileOnly} from 'react-device-detect'

const Container = styled.div`
  background-color: #211f3e;
  border-radius: 3.125rem;
  padding: 5.313rem 1.875rem 5.313rem 1.875rem;
  text-align: center;
  .img-avatar {
    max-width: 10.75rem;
    border-radius: 2.75rem;
  }
  h3 {
    margin-top: 1.625rem;
    text-align: center;
  }
  p {
    margin-top: 0.625rem;
    color: #FA5E9A;
  }
  .caption-container {
    div {
      justify-content: center;
      margin-top: 1.875rem;
      img {
        margin-left: 0.9rem;
        margin-right: 0.9rem;
      }
    }
  }
`

const ContainerMobile = styled.div`
  background-color: #211f3e;
  border-radius: 3.125rem;
  padding: 2.375rem 1.875rem 2.375rem 1.875rem;
  text-align: center;
  width: 220px;
  .img-avatar {
    max-width: 10.75rem;
    border-radius: 2.75rem;
  }
  h3 {
    margin-top: 1.625rem;
    text-align: center;
  }
  p {
    margin-top: 0.625rem;
    color: #FA5E9A;
  }
  .caption-container {
    div {
      justify-content: center;
      margin-top: 1rem;
      img {
        margin-left: 0.9rem;
        margin-right: 0.9rem;
      }
    }
  }
`

const ContainerLandscape = styled.div`
  display: flex;
  background-color: #211f3e;
  border-radius: 3.125rem;
  padding: 5.313rem 1.875rem 5.313rem 7rem;
  text-align: center;
  h3 {
    margin-top: 1.625rem;
    text-align: left;
  }
  p {
    margin-top: 0.625rem;
    color: #FA5E9A;
  }
  .img-avatar {
    max-width: 10.75rem;
    border-radius: 2.75rem;
  }
  .caption-container {
    text-align: left;
    margin-left: 3.484rem;
    div {
      justify-content: left;
      margin-top: 1.875rem;
      img {
        margin-right: 0.9rem;
      }
    }
  }
`
const twIcon = '/images/ico-twitter.png'
const liIcon = '/images/ico-linkedin.png'

const MobileProfile = ({data}) => {
  return (
    <ContainerMobile className='profile-container'>
      <img src={data.avatar} className='img-avatar' width={isMobileOnly ? 106 : 172}/>
      <div className='caption-container'>
        <h3>{data.name}</h3>
        <p>Co-Founder</p>
        <div>
          <a href={data.twitter} target="_blank"><img src={twIcon} /></a>
          <a href={data.linkedin} target="_blank"><img src={liIcon} /></a>
        </div>
      </div>
    </ContainerMobile>
  )
}

const Profile = ({data, isPortrait}) => {
  if (isMobileOnly) {
    return (<MobileProfile data={data} />)
  }
  return (
    <div>
      {isPortrait ? (
        <Container className='profile-container'>
          <img src={data.avatar} className='img-avatar' width={isMobileOnly ? 106 : 172}/>
          <div className='caption-container'>
            <h3>{data.name}</h3>
            <p>Co-Founder</p>
            <div>
              <a href={data.twitter} target="_blank"><img src={twIcon} /></a>
              <a href={data.linkedin} target="_blank"><img src={liIcon} /></a>
            </div>
          </div>
        </Container>
      ) : (
        <ContainerLandscape className='profile-container'>
          <img src={data.avatar} className='img-avatar'/>
          <div className='caption-container'>
            <h3>{data.name}</h3>
            <p>{data.role}</p>
            <div>
              <a href={data.twitter} target="_blank"><img src={twIcon} /></a>
              <a href={data.linkedin} target="_blank"><img src={liIcon} style={{marginTop: '-5px'}}/></a>
            </div>
          </div>
        </ContainerLandscape>
      )}
    </div>
  )
}

export default Profile
