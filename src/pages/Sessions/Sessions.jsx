import React from 'react'
import { BannerImages_Data } from '../../data/images'
import { Container } from '@mui/material'
import { Title } from '../../components/Title/Title'

const Sessions = () => {
  const {sessionBanner} = BannerImages_Data

  return (
    <>
      <section className="section">
        <Container maxWidth='xl'>
          <div className="imgBox">
            <img data-src={sessionBanner} alt="" className='lazyload' />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth='xl'>
          <Title title='SV Sessions' />
        </Container>
      </section>
    </>
  )
}

export default Sessions
