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
import { settings } from 'utils/slider'

export default function Demo() {
  const [merges, setMerges] = useState([])

  useEffect(() => {
    const url = 'https://api.featurepeek.com/api/v1/public_demo'
    fetch(url)
      .then(r => r.json())
      .then(r => {
        const ms = castArray(r, Merge)
        const sorted = ms.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1))
        const filtered = sorted.filter(m => !!m.screenshot)
        setMerges(filtered)
      })
  }, [])

  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box id="demo" marginX={mobile ? -15 : -39} paddingTop={100}>
          {merges.length > 0 && (
            <>
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
              <Box background="#f8f8f8" paddingY={16}>
                <Slider {...settings}>
                  {merges.map(merge => (
                    <div key={merge.id}>
                      <Polaroid merge={merge} />
                    </div>
                  ))}
                </Slider>
              </Box>
            </>
          )}
        </Box>
      )}
    </MediaQuery>
  )
}
