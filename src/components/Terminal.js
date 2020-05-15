// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import Typist from 'react-typist'
// import MediaQuery from 'react-responsive'

import { Button, Code, Flex, Heading } from 'primitives'

const random = arr => arr[Math.floor(Math.random() * arr.length)]
const randomFromRange = ([min, max]) => Math.floor(Math.random() * (max - min + 1)) + min

const emojis = [
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '💖',
  '🆒',
  '🎉',
  '✨',
  '😄',
  '🚀',
  '😍',
  '😁',
  '💪',
  '😀',
  '🥳',
  '😎',
  '🤩',
  '🙌',
  '✌️',
  '🤘',
  '👌',
  '🤙',
  '👏',
  '🌈',
  '⭐️',
  '🌟',
  '💫',
  '⚡️',
  '🌶',
  '🍉',
  '🍕',
  '🍦',
  '🍭',
  '🍪',
  '🍻',
  '🏆',
  '🎖',
  '🏅',
  '🥇',
  '🏄‍♂️',
  '⛳️',
  '🎯',
  '🎇',
  '🌠',
  '🖖',
  '💯',
  '🎊',
  '📈',
  '🔮',
  '💎',
  '🔥',
  '🌻',
  '👩‍🎤',
  '👨‍🎤',
]

// simulate distribution of letters and numbers
const ranges = [[48, 57], [97, 122], [97, 122]]
const genHashID = (len = 7) => {
  let str = ''
  for (let i = 0; i < len; i++) {
    const range = random(ranges)
    const num = randomFromRange(range)
    const character = String.fromCharCode(num)
    str += character
  }
  return str
}

export default function Terminal() {
  const [mounted, setMounted] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [dot1, setDot1] = useState(false)
  const [dot2, setDot2] = useState(false)
  const [dot3, setDot3] = useState(false)
  const [done, setDone] = useState(false)
  const [success, setSuccess] = useState(false)
  const [visit, setVisit] = useState(false)
  const [brew, setBrew] = useState(false)
  const [emoji, setEmoji] = useState(random(emojis))
  const [hashid, setHashID] = useState(genHashID())

  const play = () => {
    setMounted(true)
    setTimeout(() => setUploading(true), 1200)
    setTimeout(() => setDot1(true), 1600)
    setTimeout(() => setDot2(true), 1800)
    setTimeout(() => setDot3(true), 2000)
    setTimeout(() => setDone(true), 2400)
    setTimeout(() => setSuccess(true), 3000)
    setTimeout(() => setVisit(true), 3500)
    setTimeout(() => setBrew(true), 6000)
  }

  const reset = () => {
    setEmoji(random(emojis))
    setHashID(genHashID())
    setMounted(false)
    setUploading(false)
    setDot1(false)
    setDot2(false)
    setDot3(false)
    setDone(false)
    setSuccess(false)
    setVisit(false)
    setBrew(false)
    setTimeout(() => {
      play()
    }, 800)
  }

  useEffect(() => {
    play()
  }, [])

  return (
    <Box borderRadius={8} boxShadow="0 20px 40px rgba(0, 0, 0, 0.2)" id="terminal" position="relative">
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
        borderTopColor="#bcbdbe"
        borderTopStyle="solid"
        borderTopWidth={1}
        height={400}
        overflow="hidden"
        paddingX={18}
        paddingY={24}
        width="100%"
      >
        <Box transform={`translateY(${brew ? -460 : 0}px)`} transition="transform 800ms ease">
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
                <span aria-label="random emoji" role="img">
                  {emoji}
                </span>
              </Code>
            </Box>
          )}
          {visit && (
            <Box marginY={16}>
              <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
                Visit your deployment preview here:{' '}
                <a href="https://dashboard.featurepeek.com/demo" target="_blank">
                  <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={24}>
                    https://peek.run/{hashid}
                  </Code>
                </a>
              </Code>
            </Box>
          )}
          {brew && (
            <Box marginTop={320} textAlign="center">
              <Heading color="white" is="h2" marginBottom={32} size={420}>
                Try for yourself
              </Heading>
              <a href="https://github.com/featurepeek/peek" target="_blank">
                <Code background="transparent" border="none" boxShadow="none" color="#29fe13" fontSize={36}>
                  brew install featurepeek/tap/peek
                </Code>
              </a>
              <center>
                <Flex alignItems="center" justifyContent="center" height={100} marginTop={40} width={200}>
                  <Button background="white" cursor="pointer" fontSize={14} iconBefore="fas fa-play" onClick={reset}>
                    Replay animation
                  </Button>
                </Flex>
              </center>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
