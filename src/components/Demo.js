// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import fetch from 'unfetch'
import Slider from 'react-slick'

// TODO: delete this line
import response from '../public_demo'

import { Heading, Link, Paragraph } from 'primitives'
import Polaroid from 'components/Polaroid'

import Merge from 'interfaces/Merge'
import { castArray } from 'utils/array'

const MERGE_WIDTH = 328

export default function Demo() {
  const [merges, setMerges] = useState([])

  useEffect(() => {
    // const url = 'https://api.dev.featurepeek.com/api/v1/public_demo'
    // fetch(url)
    //   .then(r => r.json())
    //   .then(r => {
    //     const ms = castArray(response, Merge)
    //     const sorted = ms.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1))
    //     setMerges(sorted)
    //   })

    const ms = castArray(response, Merge)
    const sorted = ms.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1))
    setMerges(sorted)
  }, [])

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '140px',
    // cssEase: 'linear',
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 1000,
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
          centerPadding: '80px',
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Box marginX={-39} paddingTop={80}>
      <Heading marginTop={0} size={500} textAlign="center">
        Take a peek at a demo.
      </Heading>
      <Heading h={2} color="#a1a3a5" marginBottom={40} paddingX={16} size={360} textAlign="center">
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
  )
}
