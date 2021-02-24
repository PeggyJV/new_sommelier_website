import React from "react"
import styled, { css } from 'styled-components'

const Container = styled.div`
  background-color: #211f3e;
  border-radius: 3.125rem;
  padding: 5.313rem 1.875rem 5.313rem 1.875rem;
  text-align: center;
  h3 {
    margin-top: 1.625rem;
    text-align: center;
  }
  p {
    margin-top: 0.625rem;
    color: #FA5E9A;
  }
  .img-avatar {
    max-width: 10.75rem;
    width: 100%;
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

const ContainerLandscape = styled.div`
  display: flex;
  background-color: #211f3e;
  border-radius: 3.125rem;
  padding: 5.313rem 1.875rem 5.313rem 7rem;
  text-align: center;
  h3 {
    margin-top: 1.625rem;
    text-align: center;
  }
  p {
    margin-top: 0.625rem;
    color: #FA5E9A;
  }
  .img-avatar {
    max-width: 10.75rem;
    width: 100%;
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
const fbIcon = require('/src/assets/images/ico-facebook.png')
const liIcon = require('/src/assets/images/ico-linkedin.png')

const Profile = ({data, isPortrait}) => {
  return (
    <div>
      {isPortrait ? (
        <Container className='profile-container'>
          <img src={data.avatar} className='img-avatar'/>
          <div className='caption-container'>
            <h3>{data.name}</h3>
            <p>Co-Founder</p>
            <div>
              <img src={fbIcon} />
              <img src={liIcon} />
            </div>
          </div>
        </Container>
      ) : (
        <ContainerLandscape className='profile-container'>
          <img src={data.avatar} className='img-avatar'/>
          <div className='caption-container'>
            <h3>{data.name}</h3>
            <p>Co-Founder</p>
            <div>
              <img src={fbIcon} />
              <img src={liIcon} style={{marginTop: '-5px'}}/>
            </div>
          </div>
        </ContainerLandscape>
      )}
    </div>
  )
}

export default Profile
