// @flow

// interfaces
import Label from 'interfaces/Label'
import User from 'interfaces/User'

// utils
import { castArray } from 'utils/array'

const getStatus = p => {
  if (p.merged_at) {
    return 'merged'
  }
  if (p.state === 'closed') {
    return 'closed'
  }
  if (p.draft) {
    return 'draft'
  }
  return 'opened'
}

export default function Merge(props) {
  const p = props || {}
  return {
    author: User(p.user),
    base: p.base.ref || '',
    buildSystems: p.build_systems || [],
    change: p.files || {},
    closedAt: p.closed_at || '',
    createdAt: p.created_at,
    entryPath: p.entry_path || '/',
    hash: p.head.sha || '',
    head: p.head.ref || '',
    id: p.id,
    labels: castArray(p.labels, Label),
    lastCommitAt: p.last_commit_at || '',
    mergedAt: p.merged_at || '',
    number: Number(p.number),
    numComments: p.comments_count || 0,
    numCommits: p.commits_count || 0,
    screenshot: p.peek ? p.peek.screenshot_url : '',
    state: getStatus(p),
    title: p.title || '',
    updatedAt: p.updated_at || p.created_at || '',
    url: p.html_url,
  }
}
