import React, { useState, useEffect } from 'react'
import MediaQuery from 'react-responsive'
import Box from 'ui-box'

import { Button, Emphasis, Flex, Heading, Link, ListItem, Paragraph, Strong, Text, UnorderedList } from 'primitives'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { track } from 'utils/analytics'
import { rhythm } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const [tripwire, setTripwire] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!tripwire && window.scrollY > 600) {
        setTripwire(true)
      } else if (tripwire && window.scrollY <= 600) {
        setTripwire(false)
      }
    })
  }, [tripwire])

  return (
    <MediaQuery maxWidth={936}>
      {mobile => (
        <Layout location={props.location} nav="dark">
          <SEO title="Download Whitepaper PDF" location={props.location} />
          <Box
            backgroundColor="#1F2337"
            backgroundImage="url(/img/productivity-trans.png)"
            backgroundSize="cover"
            backgroundPosition="50% 50%"
            position="absolute"
            height={640}
            top={0}
            left={0}
            width="100vw"
          >
            <Flex
              // margin={-39}
              paddingX={40}
              paddingTop={160}
              position="relative"
              marginX="auto"
              maxWidth={rhythm(40)}
            >
              <Box textAlign={mobile ? 'center' : 'left'} width={mobile ? '100%' : '55%'}>
                <Heading color="white" fontWeight="bold" lineHeight={1.3} marginBottom={40} marginTop={0} size={500}>
                  The easiest way
                  <br />
                  for dev teams to
                  <br />
                  <Text color="#05c5cc">
                    review UI/UX
                    <br />
                    work together.
                  </Text>
                </Heading>
                <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 300}>
                  <Button
                    background="white"
                    cursor="pointer"
                    download="FeaturePeek White Paper.pdf"
                    href="/pdfs/FeaturePeek_White_Paper.pdf"
                    lineHeight={0}
                    onClick={() => track('Download whitepaper', { cta: 'hero' })}
                  >
                    <img alt="" height="36" src="/img/icon/pdf.png" style={{ marginBottom: 0 }} width="36" />
                    <Text marginX={8} position="relative" top={-10}>
                      Download white paper
                    </Text>
                  </Button>
                </Flex>
              </Box>
              {!mobile && (
                <Box position="relative" width="45%">
                  <Box
                    background="white"
                    borderRadius={4}
                    boxShadow="0 4px 20px rgba(0, 0, 0, 0.25)"
                    height={540}
                    left={32}
                    position="absolute"
                    top={-32}
                    width={420}
                  />
                  <Box
                    background="white"
                    borderRadius={4}
                    boxShadow="0 4px 20px rgba(0, 0, 0, 0.25)"
                    height={540}
                    padding={24}
                    position="absolute"
                    width={420}
                  >
                    <Heading fontWeight="bold" lineHeight={1.25} marginTop={0} size={320}>
                      Web deployment previews designed
                      <br />
                      <Text color="#05c5cc">for UI/UX teams</Text>
                    </Heading>

                    <Box background="#bbb" borderRadius={32} height={8} marginTop={8} width="45%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="90%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="86%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="93%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="77%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="69%" />

                    <Box background="#bbb" borderRadius={32} height={8} marginTop={40} width="40%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="70%" />
                    <Box background="#05c5cc" borderRadius={32} height={8} marginTop={8} opacity={0.35} width="64%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="85%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="90%" />

                    <Box background="#bbb" borderRadius={32} height={8} marginTop={40} width="60%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="90%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="66%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="85%" />
                    <Box background="#05c5cc" borderRadius={32} height={8} marginTop={8} opacity={0.35} width="72%" />
                    <Box background="#eee" borderRadius={32} height={8} marginTop={8} width="82%" />
                  </Box>
                </Box>
              )}
            </Flex>
          </Box>

          <Box
            className="blog-post"
            margin="auto"
            marginTop={640}
            maxWidth={672}
            padding={16}
            transition="filter 0.5s ease"
            style={{ filter: `blur(${tripwire ? 12 : 0}px)` }}
          >
            <Paragraph>
              <Emphasis>
                "FeaturePeek offers a simple and convenient solution that supplements our code review process and makes
                visual QA much faster and easier." &mdash;{' '}
                <Link href="https://github.com/mokaymokay" target="_blank">
                  Kay Mok
                </Link>
                , Developer,{' '}
                <Link href="https://www.sanctuary.computer/" target="_blank">
                  Sanctuary Computer
                </Link>
              </Emphasis>
            </Paragraph>
            <Heading lineHeight={1.5} size={320}>
              Most UI/UX teams are ignoring their biggest communication challenge
            </Heading>
            <Paragraph>
              While some organizations{' '}
              <Link href="https://hbr.org/2018/09/why-design-thinking-works" target="_blank">
                scramble to incorporate design-thinking
              </Link>{' '}
              into their everyday business practices, web agencies and other technology-driven businesses have already
              adopted design processes and tools into their everyday operations.
            </Paragraph>
            <Paragraph>
              But even the most design-savvy organizations tend to completely ignore their biggest remaining
              communication challenge, and developers are left holding the bag. That's because for all the design and
              collaboration tools in existence, none facilitate the final stage of the design process, when development
              teams undergo a series of reviews and iterations of the still-in-development UI/UX, collaborating with
              designers and project managers to ensure successful project delivery.
            </Paragraph>
            <Paragraph>
              Without tools to gather feedback on deployments in a timely fashion, frontend developers end up cramming
              last minute feedback, bugs, and scope changes from stakeholders at the end of the development cycle. Not
              only does this create stressful time crunches, but unachievable deadlines due to last-minute feedback can
              lead to corner-cutting on implementation details, code instability, and unreliable applications.
            </Paragraph>

            <Heading lineHeight={1.5} size={320}>
              Bridging the developer-to-designer collaboration gap
            </Heading>
            <Paragraph>
              Project management software like{' '}
              <Link href="https://monday.com" target="_blank">
                Monday.com
              </Link>
              ,{' '}
              <Link href="https://trello.com" target="_blank">
                Trello
              </Link>
              ,{' '}
              <Link href="https://clubhouse.io" target="_blank">
                Clubhouse
              </Link>
              ,{' '}
              <Link href="https://www.atlassian.com/software/jira" target="_blank">
                JIRA
              </Link>
              , and many others help project managers communicate requirements and track project status. Design tools
              like{' '}
              <Link href="https://www.invisionapp.com" target="_blank">
                InVision
              </Link>
              ,{' '}
              <Link href="https://zeplin.io/" target="_blank">
                Zeplin
              </Link>
              ,{' '}
              <Link href="https://figma.com" target="_blank">
                Figma
              </Link>
              , and{' '}
              <Link href="https://sketch.com" target="_blank">
                Sketch
              </Link>{' '}
              make it easy for designers to give frontend developers the information they need to create digital
              experiences from wireframes.
            </Paragraph>
            <Paragraph>
              But what are developers supposed to do when they need feedback on a pull request from other stakeholders
              in the design process? Send them to{' '}
              <Link href="https://github.com" target="_blank">
                GitHub
              </Link>
              ?
            </Paragraph>
            <Paragraph>
              Web platforms like{' '}
              <Link href="https://netlify.com" target="_blank">
                Netlify
              </Link>{' '}
              offer deployment staging, but existing testing and deployment preview solutions are not collaborative, and
              they're locked into specific platforms. And good luck getting timely feedback from non-engineers. Existing
              solutions do nothing to bridge the disconnect between design and engineering teams.
            </Paragraph>

            <Heading lineHeight={1.5} size={320}>
              The easiest way for UI/UX teams to review and leave feedback on frontend code
            </Heading>
            <Paragraph>
              <Link href="/">FeaturePeek</Link> is a collaboration tool that shortens feedback loops between project
              managers, UI/UX designers, and frontend web developers. Christine Kim, a developer at Sanctuary Computer,
              describes “we’re a team of design-oriented developers, and FeaturePeek has been an incredible tool for
              collaborating with designers throughout the development process. Designers can easily click on a
              FeaturePeek link, follow the progress of a project, and catch quality issues early on.”
            </Paragraph>
            <Paragraph>
              Another developer at Sanctuary Computer, Conor Davidson explains that the team at Sanctuary
              Computer “built something like FeaturePeek for our company. Easily previewing PRs has become an essential
              part of our workflow. [But] we switched over to FeaturePeak from our own software and are not looking
              back. Y’all built exactly what we wanted, plus more.”
            </Paragraph>
            <Paragraph>
              FeaturePeek plugs in with familiar tools, like Github, Trello, Clubhouse, and Monday.com, so you can
              continue to use the services that you've come to know and love. FeaturePeek fits into your existing CI
              pipeline, and works with all frameworks and hosting providers.
            </Paragraph>

            <Heading lineHeight={1.5} size={320}>
              The ultimate collaboration tool for frontend developers
            </Heading>
            <Paragraph>
              <Link href="/product/teams">FeaturePeek Teams</Link>, our tool for enterprise and agency development
              teams, gives UI/UX developers all the features they need get feedback from stakeholders and keep projects
              on schedule.
            </Paragraph>
            <UnorderedList>
              <ListItem>
                <Strong>• On-demand deployment previews</Strong> let you see your build on another machine before
                committing to the main branch
              </ListItem>
              <ListItem>
                <Strong>• Floating UI overlay for deployment previews</Strong> makes it easy for your reviewers to leave
                great feedback
              </ListItem>
              <ListItem>
                <Strong>• Third-party integrations with all your favorite tools</Strong> like GitHub, Monday.com,
                Trello, and Clubhouse
              </ListItem>
              <ListItem>
                <Strong>• Stay logged in to the web app you're testing</Strong> while you jump from deployment preview
                to deployment preview
              </ListItem>
              <ListItem>
                <Strong>• Get your reviewers' browser metadata automatically</Strong> when they comment on a screenshot
                or animation
              </ListItem>
              <ListItem>
                <Strong>• Copy edit mode</Strong> makes it easy to try out text copy edits on the fly
              </ListItem>
              <ListItem>
                <Strong>• Easily measure distance between elements</Strong>, take screenshots of bugs, record
                animations, and more
              </ListItem>
            </UnorderedList>

            <Heading lineHeight={1.5} size={320}>
              Get Started with FeaturePeek Teams Today
            </Heading>
            <Paragraph>
              It's easy to get started with FeaturePeek Teams. Developers can{' '}
              <Link href="/how-it-works">try out FeaturePeek teams for free</Link>, and pricing for FeaturePeek Teams
              can be found <Link href="/pricing">here</Link>.
            </Paragraph>
            <Paragraph>
              FeaturePeek teams is ideal for teams of all sizes, so no collaboration challenge is too big or too small.
              Learn more at <Link href="/">featurepeek.com</Link> and follow us on social media{' '}
              <Link href="https://twitter.com/featurepeek" target="_blank">
                @featurepeek
              </Link>
              .
            </Paragraph>
          </Box>
          <Flex
            alignItems="center"
            bottom={80}
            justifyContent="center"
            height={100}
            onClick={() => track('Download whitepaper', { cta: 'scroll' })}
            position="sticky"
            transform={`translateY(${tripwire ? 0 : 160}px)`}
            transition="transform 0.3s ease-in-out"
            width="100%"
          >
            <Button
              cursor="pointer"
              download="FeaturePeek_White_Paper.pdf"
              href="/pdfs/FeaturePeek_White_Paper.pdf"
              lineHeight={0}
            >
              <img alt="" height="36" src="/img/icon/pdf.png" style={{ marginBottom: 0 }} width="36" />
              <Text marginX={8} position="relative" top={-10}>
                Download white paper to continue reading
              </Text>
            </Button>
          </Flex>
        </Layout>
      )}
    </MediaQuery>
  )
}
