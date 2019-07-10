// @flow
import React, { useState } from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import Switch from 'rc-switch'

import Button from 'primitives/Button'
import Column from 'primitives/Column'
import Emphasis from 'primitives/Emphasis'
import Heading from 'primitives/Heading'
import Icon from 'primitives/Icon'
import Flex from 'primitives/Flex'
import ListItem from 'primitives/ListItem'
import Paragraph from 'primitives/Paragraph'
import Strong from 'primitives/Strong'
import UnorderedList from 'primitives/UnorderedList'

import { track } from 'utils/analytics'
import { dollarsFromCents } from 'utils/money'

export default function PricingColumn({ product, hasMounted }) {
  const [isAnnual, setAnnual] = useState(true)

  const { metadata } = product

  const togglePlan = () => {
    setAnnual(!isAnnual)
  }

  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Column
          background={metadata.recommended ? 'linear-gradient(#fcfcd4, #fefdb3)' : 'linear-gradient(#eefcfd, #e6f4f1)'}
          border={metadata.recommended ? '3px solid #fefdb3' : '3px solid #e6f4f1'}
          borderRadius={16}
          // boxShadow="0 0 1px 0 rgba(67, 90, 111, 0.3), 0 2px 4px -2px rgba(67, 90, 111, 0.47)"
          marginX={metadata.recommended ? 24 : 0}
          marginY={12}
          position="relative"
          transition="transform 1.5s ease"
          transform={hasMounted ? `translateY(0px)` : `translateY(${metadata.recommended ? 240 : 200}px)`}
          width="100%"
        >
          {!mobile && metadata.recommended && (
            <Flex justifyContent="center">
              <Heading h={6} size={200} opacity={0.5} position="absolute" top={-72}>
                <Icon icon="fas fa-magic" marginRight={8} /> most popular
              </Heading>
            </Flex>
          )}
          <Heading h={2} color="#103c52" marginTop={16} size={300} textAlign="center">
            {product.name}
          </Heading>
          <Box paddingX={32}>
            {product.plans[0].amount === 0 && (
              <Heading h={2} marginTop={0} size={200} textAlign="center">
                Free for public repositories only
              </Heading>
            )}
            {product.plans.length > 1 && (
              <Box>
                <Flex flexDirection="row" justifyContent="center" marginBottom={24}>
                  <Heading h={2} margin={0} size={500}>
                    {isAnnual
                      ? dollarsFromCents(product.plans.find(p => p.interval === 'year').amount / 12)
                      : dollarsFromCents(product.plans.find(p => p.interval === 'month').amount)}
                  </Heading>
                  <Box marginLeft={8}>
                    <Paragraph marginBottom={0} position="relative" top={8}>
                      <Emphasis opacity={0.5}>per user</Emphasis>
                    </Paragraph>
                    <Paragraph marginBottom={0}>
                      <Emphasis opacity={0.5}>per month</Emphasis>
                    </Paragraph>
                  </Box>
                </Flex>
                <Flex flexDirection="row" alignItems="center" justifyContent="center">
                  <Strong
                    cursor="pointer"
                    onClick={() => setAnnual(false)}
                    opacity={isAnnual ? 0.4 : 1}
                    transition="opacity 0.3s ease"
                  >
                    Monthly
                  </Strong>
                  <Switch checked={isAnnual} onChange={togglePlan} />
                  <Strong
                    cursor="pointer"
                    onClick={() => setAnnual(true)}
                    opacity={isAnnual ? 1 : 0.4}
                    transition="opacity 0.3s ease"
                  >
                    Annually
                  </Strong>
                </Flex>
              </Box>
            )}
            {product.plans[0].amount >= 5000000 && (
              <Heading h={2} marginTop={0} size={200} textAlign="center">
                For on-prem deployments
              </Heading>
            )}
            <UnorderedList
              textAlign={mobile ? 'center' : 'left'}
              marginTop={product.plans.length > 1 ? 40 : 84}
              marginBottom={40}
            >
              {metadata.perks.split('\n').map(metadata => (
                <ListItem key={metadata} fontSize={17} marginBottom={16}>
                  <Icon icon="fas fa-check" color="#5abf7e" marginRight={8} /> {metadata}
                </ListItem>
              ))}
            </UnorderedList>
            <Flex alignItems="center" height={100} justifyContent="center">
              <Button
                href={`${metadata.cta_href}${isAnnual ? '' : '&interval=monthly'}`}
                onClick={() => track('Clicked Plan', product.name)}
                target="_blank"
              >
                {metadata.cta}
              </Button>
            </Flex>
            {product.plans[0].trial_period_days && (
              <Paragraph opacity={0.5} textAlign="center">
                <Emphasis>Comes with a {product.plans[0].trial_period_days}-day free trial</Emphasis>
              </Paragraph>
            )}
          </Box>
        </Column>
      )}
    </MediaQuery>
  )
}
