// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import fetch from 'unfetch'
import Slider from 'react-slick'
import MediaQuery from 'react-responsive'

import { Heading, Link } from 'primitives'
import Polaroid from 'components/Polaroid'

import Merge from 'interfaces/Merge'
import { castArray } from 'utils/array'

export default function Demo() {
  const [merges, setMerges] = useState([])

  useEffect(() => {
    const baseURL = document.location.host === 'featurepeek.com' ? 'api.featurepeek.com' : 'api.dev.featurepeek.com'
    const url = `https://${baseURL}/api/v1/public_demo`
    fetch(url)
      .then(r => r.json())
      .then(r => {
        const ms = castArray(r, Merge)
        const sorted = ms.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1))
        setMerges(sorted)
      })
  }, [])

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    centerPadding: '140px',
    // cssEase: 'linear',
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    // swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '240px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: '200px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: '150px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: '100px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: '50px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          centerPadding: '150px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 504,
        settings: {
          centerPadding: '100px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 415,
        settings: {
          autoplaySpeed: 3000,
          centerPadding: '25px',
          cssEase: 'ease',
          slidesToShow: 1,
          speed: 1000,
        },
      },
    ],
  }

  if (!merges.length) {
    return null
  }

  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box id="demo" marginX={mobile ? -15 : -39} paddingTop={mobile ? 0 : 80}>
          <Heading marginTop={0} paddingX={16} size={500} textAlign={mobile ? 'left' : 'center'}>
            Take a peek at a demo.
          </Heading>
          <Heading
            h={2}
            color="#a1a3a5"
            marginBottom={40}
            paddingX={16}
            size={360}
            textAlign={mobile ? 'left' : 'center'}
          >
            These are live environments for this website's{' '}
            <Link href="https://github.com/featurepeek/marketing-website/pulls" target="_blank">
              open pull requests
            </Link>
            .
          </Heading>
          <Box background="#edf0f2" paddingY={16}>
            <Slider {...settings}>
              {merges.map(merge => (
                <div key={merge.id}>
                  <Polaroid merge={merge} />
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
      )}
    </MediaQuery>
  )
}
