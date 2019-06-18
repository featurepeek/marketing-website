// @flow

export default function Label(props) {
  const p = props || {}
  return {
    color: `#${p.color}`,
    description: p.description || '',
    id: p.id,
    name: p.name || '',
  }
}
