import React from "react"

const styles = {
  div: {
    position: "absolute",
    top: 64,
    height: "100vh",
    width: "100vw",
    zIndex: 0,
  }
}
function AnimatedBg() {
  return (
    <div style={styles.div}>
      <svg viewBox="0 0 1440 448">
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