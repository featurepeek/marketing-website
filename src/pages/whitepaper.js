import React, { useState, useEffect } from 'react'
import MediaQuery from 'react-responsive'
import Box from 'ui-box'

import { Button, Emphasis, Flex, Heading, Link, ListItem, Paragraph, Strong, Text, UnorderedList } from 'primitives'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

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
          <Flex
            backgroundColor="#1F2337"
            backgroundImage="url(/img/productivity-trans.png)"
            backgroundPosition="50% 50%"
            height={640}
            margin={-39}
            paddingX={40}
            paddingTop={160}
            position="relative"
            top={-100}
            width="calc(100% + 78px)"
          >
            <Box width={mobile ? '100%' : '50%'}>
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
                <Button background="white" cursor="pointer" href="/pdfs/FeaturePeek_White_Paper.pdf" lineHeight={0}>
                  <img alt="" height="36" src="/img/icon/pdf.png" style={{ marginBottom: 0 }} width="36" />
                  <Text marginX={8} position="relative" top={-10}>
                    Download whitepaper
                  </Text>
                </Button>
              </Flex>
            </Box>
            {!mobile && (
              <Box width="50%">
                <Box background="white" borderRadius={2} height={400} width={120}></Box>
              </Box>
            )}
          </Flex>
          <Box
            className="blog-post"
            margin="auto"
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
            position="sticky"
            transform={`translateY(${tripwire ? 0 : 160}px)`}
            transition="transform 0.3s ease-in-out"
            width="100%"
          >
            <Button cursor="pointer" href="/pdfs/FeaturePeek_White_Paper.pdf" lineHeight={0}>
              <img alt="" height="36" src="/img/icon/pdf.png" style={{ marginBottom: 0 }} width="36" />
              <Text marginX={8} position="relative" top={-10}>
                Download whitepaper to continue reading
              </Text>
            </Button>
          </Flex>
        </Layout>
      )}
    </MediaQuery>
  )
}
