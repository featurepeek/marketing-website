// @flow
export function track(event, properties) {
  if (window.analytics) {
    window.analytics.track(event, properties)
  }
}

export const albacross = `(function(a,l,b,c,r,s){_nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];r.async=1;r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;s.parentNode.insertBefore(r,s);})(document,"script","serve.albacross.com/track.js","89320748");`
