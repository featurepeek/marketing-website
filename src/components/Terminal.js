// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import Typist from 'react-typist'
// import MediaQuery from 'react-responsive'

import { Code, Flex } from 'primitives'

export default function Terminal() {
  const [mounted, setMounted] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [dot1, setDot1] = useState(false)
  const [dot2, setDot2] = useState(false)
  const [dot3, setDot3] = useState(false)
  const [done, setDone] = useState(false)
  const [success, setSuccess] = useState(false)
  const [visit, setVisit] = useState(false)
  // const [dollar, setDollar] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setUploading(true), 1200)
    setTimeout(() => setDot1(true), 1600)
    setTimeout(() => setDot2(true), 1800)
    setTimeout(() => setDot3(true), 2000)
    setTimeout(() => setDone(true), 2200)
    setTimeout(() => setSuccess(true), 2800)
    setTimeout(() => setVisit(true), 3000)
    // setTimeout(() => setDollar(true), 3200)
  }, [])

  return (
    <Box id="terminal" position="relative">
      <Box background="#f2f2f2" left={6} height={1} position="absolute" top={1} width="calc(100% - 12px)" />
      <Flex
        alignItems="center"
        background="linear-gradient(180deg, #e5e5e6, #d7d7d8)"
        borderTopColor="#bfbfbf"
        borderTopStyle="solid"
        borderTopWidth={1}
        borderLeftColor="#b9b9b9"
        borderLeftStyle="solid"
        borderLeftWidth={1}
        borderRightColor="#b9b9b9"
        borderRightStyle="solid"
        borderRightWidth={1}
        borderBottomColor="#bcbdbe"
        borderBottomStyle="solid"
        borderBottomWidth={1}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        height={38}
        flexDirection="row"
        paddingTop={1}
        paddingX={8}
      >
        <Box
          background="#ff5f58"
          borderColor="#e14740"
          borderStyle="solid"
          borderWidth={1}
          borderRadius={64}
          height={14}
          marginX={5}
          width={14}
        />
        <Box
          background="#ffbd2e"
          borderColor="#e1a124"
          borderStyle="solid"
          borderWidth={1}
          borderRadius={64}
          height={14}
          marginX={5}
          width={14}
        />
        <Box
          background="#28c941"
          borderColor="#1bad2c"
          borderStyle="solid"
          borderWidth={1}
          borderRadius={64}
          height={14}
          marginX={5}
          width={14}
        />
      </Flex>
      <Box
        background="#191919"
        borderBottomRightRadius={7}
        borderBottomLeftRadius={7}
        height={400}
        paddingX={18}
        paddingY={24}
        width="100%"
      >
        <Code background="transparent" border="none" boxShadow="none" color="#c33820" fontSize={24}>
          $
        </Code>
        {mounted && (
          <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
            <Typist avgTypingDelay={100} cursor={{ show: false }} startDelay={400} stdTypingDelay={10}>
              peek
            </Typist>
          </Code>
        )}
        {uploading && (
          <Box marginY={16}>
            <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
              Packing and Uploading{dot1 && '.'}
              {dot2 && '.'}
              {dot3 && '.'} {done && 'done'}
            </Code>
          </Box>
        )}
        {success && (
          <Box marginTop={48}>
            <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
              Assets uploaded successfully!{' '}
              <span aria-label="love" role="img">
                😍
              </span>
            </Code>
          </Box>
        )}
        {visit && (
          <Box marginY={16}>
            <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
              Visit your deployment preview here:{' '}
              <a href="https://dashboard.featurepeek.com/demo">
                <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
                  https://peek.run/902hw55
                </Code>
              </a>
            </Code>
          </Box>
        )}
      </Box>
    </Box>
  )
}
