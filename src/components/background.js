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
        <g id="circle-1" transform="translate(-360, -1440), scale(4)" opacity="1">
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
        <g transform="translate(215, 420), scale(2.5), rotate(45)">
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

    </div>
  )
}

export default Background