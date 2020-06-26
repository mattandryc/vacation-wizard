import React from "react"

const styles = {
  div: {
    position: "absolute",
    overflow: "hidden",
    minHeight: "100vh"
  },
  svg: {
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh"
  }
}
function AnimatedBg() {
  return (
    <div style={styles.div}>
      <svg style={styles.svg} viewBox="0 0 1440 900">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g>
            <g id="a8cf2dfe-ff6a-4a2e-ab73-f72dced0df99">
              <g id="Group" fill-rule="nonzero">
                <g id="path-3-link" fill="url(#linearGradient-1)">
                  <rect id="path-3" x="0" y="0" width="1440" height="900"/>
                </g>
                <g id="path-3-link" fill="url(#radialGradient-2)">
                  <rect id="path-3" x="0" y="0" width="1440" height="900"/>
                </g>
              </g>
              <g id="矩形备份-32-Clipped">
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3"/>
                </mask>
                <g id="path-3"/>
                <g id="矩形备份-32" mask="url(#mask-4)">
                  <g transform="translate(0.000000, 520.312500)" id="path-7-link">
                    <g>
                      <rect id="path-7" fill="url(#linearGradient-5)" fill-rule="nonzero" x="0" y="0" width="1440" height="379.6875"/>
                    </g>
                    <g>
                      <rect id="path-7" fill="url(#linearGradient-6)" fill-rule="nonzero" x="0" y="0" width="1440" height="379.6875"/>
                    </g>
                  </g>
                </g>
              </g>
              <g id="矩形-Clipped">
                <mask id="mask-8" fill="white">
                  <use xlinkHref="#path-7"/>
                </mask>
                <g id="path-3"/>
                <rect id="矩形" fill="url(#linearGradient-9)" fill-rule="nonzero" mask="url(#mask-8)" x="0" y="333.482143" width="1440" height="566.517857"/>
              </g>
            </g>
          </g>
        </g>
        <g transform="translate(346.85341620546023, 26.003935837683173)" opacity="1" frame="332">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 170, 170)">
              <svg>
                <defs>
                  <filter id="banner-circle-shadow-1">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.05)"/>
                  </filter>
                  <linearGradient id="banner-circle-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgb(250, 252, 254)" }}/>
                    <stop offset="100%" style={{ stopColor: "rgb(249, 252, 254)" }}/>
                  </linearGradient>
                </defs>
                <circle cx="170" cy="170" r="140" fill="url(#banner-circle-fill-1)"
                        filter="url(#banner-circle-shadow-1)"/>
              </svg>
            </g>
          </g>
        </g>
        <g transform="translate(-216.083211265619, 178.66243923801153)" opacity="1" frame="332">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 230, 230)">
              <svg>
                <defs>
                  <filter id="banner-circle-shadow-2">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" flood-color="rgba(0,0,0,0.05)"/>
                  </filter>
                  <linearGradient id="banner-circle-fill-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgb(250, 252, 254)" }}/>
                    <stop offset="50%" style={{ stopColor: "rgb(243, 249, 252)" }}/>
                  </linearGradient>
                </defs>
                <circle cx="230" cy="230" r="200" fill="url(#banner-circle-fill-2)"
                        filter="url(#banner-circle-shadow-2)"/>
              </svg>
            </g>
          </g>
        </g>
        <g transform="translate(1309.7651804159086, 170.6252146889317)" opacity="1" frame="332">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 120, 120)">
              <svg>
                <defs>
                  <filter id="banner-rect-shadow-1">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" flood-color="rgba(0,0,0,0.05)"/>
                  </filter>
                  <linearGradient id="banner-rect-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="25%" style={{ stopColor: "rgb(248, 252, 255)" }}/>
                    <stop offset="100%" style={{ stopColor: "rgb(248, 251, 255)" }}/>
                  </linearGradient>
                </defs>
                <rect x="30" y="30" width="180" height="180" fill="url(#banner-rect-fill-1)"
                      filter="url(#banner-rect-shadow-1)"/>
              </svg>
            </g>
          </g>
        </g>
        <g transform="translate(707.838081424313, -635.1872512694249)" opacity="1" frame="332">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 430, 430)">
              <svg width="860" height="860">
                <defs>
                  <filter id="banner-diamond-shadow-1">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.05)"/>
                  </filter>
                  <linearGradient id="banner-diamond-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="60%" style={{ stopColor: "rgb(252, 253, 255)" }}/>
                    <stop offset="100%" style={{ stopColor: "rgb(252, 253, 254)" }}/>
                  </linearGradient>
                </defs>
                <path d="M 30 430 430 30 830 430 430 830 Z" fill="url(#banner-diamond-fill-1)"
                      filter="url(#banner-diamond-shadow-1)"/>
              </svg>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AnimatedBg