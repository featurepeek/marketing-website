// @flow

export default function User(props) {
  const p = props || {}
  return {
    avatar: p.avatar_url,
    id: p.id,
    name: p.login,
  }
}
