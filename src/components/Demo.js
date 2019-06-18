// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import fetch from 'unfetch'
import MediaQuery from 'react-responsive'

// import { Flex, Heading, Link } from 'primitives'
import Polaroid from 'components/Polaroid'

import Merge from 'interfaces/Merge'
import { castArray } from 'utils/array'

export default function Demo() {
  const [merges, setMerges] = useState([])

  useEffect(() => {
    const url = 'https://api.dev.featurepeek.com/api/v1/public_demo'
    fetch(url)
      .then(r => r.json())
      .then(r => {
        const ms = castArray(r, Merge)
        const sorted = ms.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1))
        setMerges(sorted)
      })
  }, [])

  return (
    <MediaQuery maxWidth={504}>
      {mobile => (
        <Box background="#edf0f2">
          {merges
            .filter(m => !!m.screenshot)
            .map(merge => (
              <Polaroid key={merge.id} merge={merge} />
            ))}
        </Box>
      )}
    </MediaQuery>
  )
}
