import React from 'react'
import { Container } from '@mui/material'
import { BannerImages_Data } from '../../data/images'
import { Title } from '../../components/Title/Title'

const Treatments = () => {
  const {treatmentBanner} = BannerImages_Data
  return (
    <>
      <section className="section">
        <Container maxWidth='xl'>
          <div className="imgBox">
            <img data-src={treatmentBanner} alt="" className='lazyload' />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth='xl'>
          <Title title='SV Treatments' />
        </Container>
      </section>
    </>
  )
}

export default Treatments
