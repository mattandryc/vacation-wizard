import React from "react"

const styles = {
  div: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  svg: {
    overflow: "hidden",
    minWidth: "100%"
  }
}
function AnimatedBg() {
  return (
    <div style={styles.div}>
      <svg height="100%" width="100%">
        <defs>
          <linearGradient x1="-5.68700053%" y1="31.9594527%" x2="84.7892757%" y2="65.8807889%" id="linearGradient-1">
            <stop stopColor="#FBFCFD" offset="0%"/>
            <stop stopColor="#F8FCFF" offset="100%"/>
          </linearGradient>
          <radialGradient cx="49.4552%" cy="50.0000285%" fx="49.4552%" fy="50.0000285%" r="94.8348304%" gradientTransform="translate(0.494552,0.500000),scale(0.625000,1.000000),rotate(90.000000),translate(-0.494552,-0.500000)" id="radialGradient-2">
            <stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%"/>
            <stop stopColor="#EDF6FF" stopOpacity="0.578179633" offset="100%"/>
          </radialGradient>
          <rect id="path-3" x="0" y="0" width="1440" height="900"/>
          <linearGradient x1="72.8463444%" y1="12.5451885%" x2="72.8463444%" y2="295.836589%" id="linearGradient-5">
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"/>
            <stop stopColor="#9FD7FF" stopOpacity="0.383058348" offset="100%"/>
          </linearGradient>
          <linearGradient x1="16.6159843%" y1="46.5238572%" x2="5.85340543%" y2="53.4761428%" id="linearGradient-6">
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"/>
            <stop stopColor="#F2F7FC" offset="100%"/>
          </linearGradient>
          <rect id="path-7" x="0" y="0" width="1440" height="900"/>
          <linearGradient x1="54.7550093%" y1="16.6478641%" x2="54.7550093%" y2="112.331979%" id="linearGradient-9">
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"/>
            <stop stopColor="#D2ECFF" stopOpacity="0.225387893" offset="100%"/>
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              <g id="矩形备份-32-Clipped">
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3"/>
                </mask>
                <g id="path-3"/>
                <g id="矩形备份-32" mask="url(#mask-4)">
                  <g transform="translate(0.000000, 520.312500)" id="path-7-link">
                    <g>
                      <rect id="path-7" fill="url(#linearGradient-5)" fillRule="nonzero" x="0" y="0" width="1440" height="379.6875"/>
                    </g>
                    <g>
                      <rect id="path-7" fill="url(#linearGradient-6)" fillRule="nonzero" x="0" y="0" width="1440" height="379.6875"/>
                    </g>
                  </g>
                </g>
              </g>
              <g id="矩形-Clipped">
                <mask id="mask-8" fill="white">
                  <use xlinkHref="#path-7"/>
                </mask>
                <g id="path-3"/>
                <rect id="矩形" fill="url(#linearGradient-9)" fillRule="nonzero" mask="url(#mask-8)" x="0" y="333.482143" width="1440" height="566.517857"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AnimatedBg