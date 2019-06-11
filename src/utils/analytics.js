// @flow
export function track(event, properties) {
  if (window.analytics) {
    window.analytics.track(event, properties)
  }
}
