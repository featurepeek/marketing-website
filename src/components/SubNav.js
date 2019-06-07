// @flow
import React from 'react'
// import Box from 'ui-box'

import { Flex, Icon, Link, ListItem, Paragraph, UnorderedList } from 'primitives'

import { gradientMap } from 'utils/color'

const items = [
  {
    color: gradientMap.green,
    icon: 'fas fa-code',
    href: '/for-frontend-developers',
    label: 'Front-end Developers',
  },
  {
    color: gradientMap.pink,
    icon: 'fas fa-pen-nib',
    href: '/for-ux-designers',
    label: 'UX Designers',
  },
  {
    color: gradientMap.blue,
    icon: 'fas fa-tasks',
    href: '/for-project-managers',
    label: 'Project Managers',
  },
]

export default function SubNav(props) {
  const { isShowing } = props
  return (
    <UnorderedList
      background="#fefcfb"
      border="2px solid #fbfbfb"
      borderRadius={8}
      boxShadow="0 16px 40px rgba(0, 0, 0, 0.1)"
      className="subnav"
      left={-70}
      opacity={isShowing ? 1 : 0}
      pointerEvents={isShowing ? 'auto' : 'none'}
      position="absolute"
      transform={isShowing ? 'translateY(0)' : 'translateY(-8px)'}
      transition="all 0.2s ease"
      width={280}
    >
      {items.map((item, i) => (
        <ListItem
          key={item.label}
          borderTopLeftRadius={i === 0 ? 8 : 0}
          borderTopRightRadius={i === 0 ? 8 : 0}
          borderBottomLeftRadius={i === items.length - 1 ? 8 : 0}
          borderBottomRightRadius={i === items.length - 1 ? 8 : 0}
          className={`subnav${i + 1}`}
          marginTop={0}
          marginBottom={0}
          paddingX={16}
          paddingY={16}
          transition="background 0.15s ease"
        >
          <Link color={item.color[0]} fontSize={17} href={item.href} underline={false}>
            <Flex alignItems="center">
              <Flex
                alignItems="center"
                background={`linear-gradient(${item.color[0]}, ${item.color[1]})`}
                borderRadius={40}
                height={40}
                justifyContent="center"
                marginRight={12}
                width={40}
              >
                <Icon color="white" icon={item.icon} fontSize={18} />
              </Flex>
              <Paragraph>{item.label}</Paragraph>
            </Flex>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  )
}
