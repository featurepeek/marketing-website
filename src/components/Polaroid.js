// @flow
import React from 'react'
import Box from 'ui-box'

// components
import { Code, Flex, Icon, Paragraph, Text } from 'primitives'
import Label from 'Components/Label'

// utils
import { getColorFromStatus } from 'utils/color'
import { relativeDate } from 'utils/date'
import { pluralize } from 'utils/string'

export default function Polaroid(props) {
  const { merge } = props
  return (
    <Box
      background="white"
      borderRadius={5}
      boxShadow="rgba(67, 90, 111, 0.298039) 0px 0px 1px 0px, rgba(67, 90, 111, 0.470588) 0px 2px 4px -2px"
      className="polaroid"
      display="inline-block"
      lineHeight="20px"
      margin={12}
      overflow="hidden"
      position="relative"
      width={304}
    >
      <a href={`https://dashboard.featurepeek.com/peek/${merge.id}`} target="_blank">
        <img
          alt="Screenshot"
          // height="200"
          src={merge.screenshot}
          style={{ marginBottom: 0 }}
          width="100%"
        />
        <Box paddingTop={8} paddingX={16} wordBreak="break-word">
          <Paragraph marginBottom={0}>
            <a style={{ color: '#1f8aed', fontSize: 16 }}>{merge.title}</a>
            <Text color="#a3aab1" fontSize={16} marginLeft={4}>
              #{merge.number}
            </Text>
          </Paragraph>
          <Paragraph marginBottom={0}>
            <Code fontSize={12}>{merge.head}</Code>
            <Text fontSize={12}> → </Text>
            <Code fontSize={12}>{merge.base}</Code>
          </Paragraph>
          <Paragraph marginBottom={8}>
            <Icon color="#7c8b9a" icon="far fa-file-alt" marginRight={6} fontSize={12} />
            <Text color="#7c8b9a" fontSize={12}>
              {pluralize(merge.change.changes, 'line')}, {pluralize(merge.change.files, 'file')}
            </Text>
            <Icon
              color="#7c8b9a"
              icon="far fa-comment-dots"
              marginLeft={16}
              position="relative"
              fontSize={12}
              top={1}
            />
            <Text color="#7c8b9a" marginLeft={4} fontSize={12}>
              {pluralize(merge.numComments, 'comment')}
            </Text>
          </Paragraph>
          <Paragraph marginBottom={8}>
            {merge.labels.map(label => (
              <Label key={label.id} label={label} />
            ))}
          </Paragraph>
        </Box>
        <Box background="#f9f9fb" paddingBottom={8} paddingTop={8} paddingX={16} wordBreak="break-word">
          <Flex>
            <Flex>
              {/* <Avatar marginRight={8} name={merge.author.name} fontSize={12} src={merge.author.avatar} /> */}
              <div>
                <Paragraph color="#7c8b9a" fontSize={12} marginBottom={0}>
                  {merge.author.name} {merge.state}{' '}
                  {(merge.state === 'opened' || merge.state === 'draft') && relativeDate(merge.createdAt)}
                  {merge.state === 'merged' && relativeDate(merge.mergedAt)}
                  {merge.state === 'closed' && relativeDate(merge.closedAt)} ago
                </Paragraph>
                {merge.lastCommitAt && (
                  <Paragraph color="#7c8b9a" fontSize={12} marginBottom={0}>
                    last revision {relativeDate(merge.lastCommitAt)} ago
                  </Paragraph>
                )}
              </div>
            </Flex>
          </Flex>
        </Box>
        <Box
          background={getColorFromStatus(merge.state)}
          bottom={-24}
          height={48}
          position="absolute"
          right={-24}
          transform="rotateZ(45deg)"
          width={48}
        />
        <Icon bottom={4} color="white" icon="fas fa-code-branch" position="absolute" right={4} fontSize={12} />
      </a>
    </Box>
  )
}
