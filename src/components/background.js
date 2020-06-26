import React from "react"
import gradient from "../assets/gradient-bg.svg"
import useWindowSize from "../hooks/useWindowSize"

const styles = {
  div: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "100%",
    zIndex: -1,
    backgroundImage: `url(${gradient})`,
    backgroundSize: "cover",
    overflow: "hidden"
  },
  svg: {
    width: "100%",
    height: "100%",
    overflow: "visible"

    // left: 0,
    // top: 0,
  }
}

function getShapes(width) {
  if (width <= 576 || true) {
    return (
      <>
        <g id="circle-1" transform="translate(-180, -1080), scale(3.5)" opacity="1">
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
        <g id="diamond-1" transform="translate(720, -900), scale(3)" opacity="1">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 430, 430)">
              <svg>
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
        <g transform="translate(215, 500), scale(2.5), rotate(45)">
          <svg width="438px" height="438px">
            <defs>
              <filter id="banner-diamond-shadow-1">
                <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.05)"/>
              </filter>
              <linearGradient id="banner-diamond-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="60%" style={{ stopColor: "rgb(252, 253, 255)" }}/>
                <stop offset="100%" style={{ stopColor: "rgb(252, 253, 254)" }}/>
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="black" fillRule="evenodd">
              <polygon
                fill="url(#banner-diamond-fill-1)" filter="url(#banner-diamond-shadow-1)" fillRule="nonzero"
                       points="266.505663 0.505663379 266.505663 171.504663 437.505663 171.505663 437.505663 266.505663 266.505663 266.504663 266.505663 437.505663 171.505663 437.505663 171.505663 266.504663 0.505663379 266.505663 0.505663379 171.505663 171.505663 171.504663 171.505663 0.505663379"/>
            </g>
          </svg>
        </g>
      </>
    )
  } else {
    return null
  }
}

function Background() {

  const { width } = useWindowSize()


  return (
    <div style={styles.div}>
      <svg style={styles.svg} viewBox="0 0 1440 900">
        <g id="bg" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <g id="a8cf2dfe-ff6a-4a2e-ab73-f72dced0df99">
              <g id="Group" fillRule="nonzero">
                <g id="path-3-link" fill="url(#linearGradient-1)">
                  <rect id="path-3" x="0" y="0" width="1440" height="900"/>
                </g>
                <g id="path-3-link" fill="url(#radialGradient-2)">
                  <rect id="path-3" x="0" y="0" width="1440" height="900"/>
                </g>
              </g>
              <g>
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3"/>
                </mask>
                <g id="path-3"/>
                <g mask="url(#mask-4)">
                  <g transform="translate(0, 520.312500)" id="path-7-link">
                    <g>
                      <rect id="path-7" fill="url(#linearGradient-5)" fillRule="nonzero" x="0" y="0" width="1440"
                            height="379.6875"/>
                    </g>
                    <g>
                      <rect id="path-7" fill="url(#linearGradient-6)" fillRule="nonzero" x="0" y="0" width="1440"
                            height="379.6875"/>
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <mask id="mask-8" fill="white">
                  <use xlinkHref="#path-7"/>
                </mask>
                <g id="path-3"/>
                <rect fill="url(#linearGradient-9)" fillRule="nonzero" mask="url(#mask-8)" x="0" y="333.482143"
                      width="1440" height="566.517857"/>
              </g>
            </g>
          </g>
        </g>
        {getShapes(width)}
      </svg>
    </div>
  )
}

export default Background