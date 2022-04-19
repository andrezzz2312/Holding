const loop = document.getElementById('loopvideo')
const videoHolder = document.querySelector('#videoHolder')
let video1 = ''
let video2 = ''
let video3 = ''
let textContent = ''
let label = ''
let paragraph = ''
let line = ''
let svg1 = ''
let circle = ''
let svg2 = ''
let backButton = ''
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')

// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
  videoToPause.pause()
  videoToVanish.classList.add('short-vanish')
  videoToPlay.play()
}

// Vanish/show the main buttons and svgs
function Setup() {
  mainButtons.classList.toggle('show')
  mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
  showCont.classList.remove('hidden')
  showCont.classList.toggle('short-vanish')
  showCont.classList.toggle('show')
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
  if (source1) {
    video1 = document.createElement('video')
    video1.src = source1
    video1.muted = true
    video1.setAttribute('playsinline', '')
    video1.controls = false
    video1.classList.add('video')
    video1.style.zIndex = '-2'
    videoHolder.appendChild(video1)
  }
  if (source2) {
    video2 = document.createElement('video')
    video2.src = source2
    video2.loop = true
    video2.muted = true
    video2.setAttribute('playsinline', '')
    video2.controls = false
    video2.classList.add('video')
    video2.style.zIndex = '-3'
    videoHolder.appendChild(video2)
  }
  if (source3) {
    video3 = document.createElement('video')
    video3.src = source3
    video3.muted = true
    video3.setAttribute('playsinline', '')
    video3.controls = false
    video3.classList.add('video')
    video3.style.zIndex = '-4'
    videoHolder.appendChild(video3)
  }
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(textLeft, textTop, labelTitle, pContent) {
  textContent = document.createElement('div')
  textContent.classList.add('text')
  textContent.style.left = textLeft
  textContent.style.top = textTop

  const labelCont = document.createElement('div')
  labelCont.classList.add('labelCont')

  const pCont = document.createElement('div')
  pCont.classList.add('pCont')

  showCont.appendChild(textContent)

  label = document.createElement('label')
  label.classList.add('label')
  label.textContent = labelTitle

  paragraph = document.createElement('p')
  paragraph.textContent = pContent

  textContent.appendChild(labelCont)
  textContent.appendChild(pCont)
  labelCont.appendChild(label)
  pCont.appendChild(paragraph)
}

// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function createSvg(lx1, ly1, lx2, ly2, cx, cy) {
  svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  svg1.setAttribute('width', '100%')
  svg1.setAttribute('height', '100%')
  svg1.classList.add('svg')

  line = document.createElementNS('http://www.w3.org/2000/svg', 'line')

  line.setAttribute('x1', lx1)
  line.setAttribute('y1', ly1)
  line.setAttribute('x2', lx2)
  line.setAttribute('y2', ly2)
  line.setAttribute('stroke', '#f04923')
  svg1.appendChild(line)

  svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  svg2.setAttribute('width', '100%')
  svg2.setAttribute('height', '100%')
  svg2.classList.add('svg')

  circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

  circle.setAttribute('cx', cx)
  circle.setAttribute('cy', cy)
  circle.setAttribute('r', '6px')
  circle.setAttribute('fill', '#f04923')
  circle.classList.add('svgDot')
  svg2.appendChild(circle)

  showCont.appendChild(svg2)
  showCont.appendChild(svg1)
}

function createBackButton(left, bottom) {
  backButton = document.createElement('button')
  backButton.classList.add('backButton')
  backButton.textContent = 'Back to Features'
  backButton.style.left = left
  backButton.style.bottom = bottom
  showCont.appendChild(backButton)
}

////////// Event Listeners for the main buttons //////////

compactFP_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Compact FootPrint/1.mp4',
    'assets/Compact FootPrint/2.mp4',
    'assets/Compact FootPrint/3.mp4'
  )
  createContent(
    '10%',
    '17%',
    'Compact FootPrint',
    'Smallest, fully contained, palletizing unit\nfor a single pallet and load/unload\nfunction utlizing a pallet jack or forklift'
  )
  createSvg('21%', '19%', '49%', '42.7%', '49%', '42.7%')
  createBackButton('42%', '2rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowCont()
        loop.style.zIndex = '-5'
        loop.classList.remove('short-vanish')
        loop.load()
        loop.pause()
        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          loop.play()
          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButton.remove()
          }, 1000)
        })
      })
    })
  }, 700)
})

remoteAC_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Remote Access Capability - Quick Changeover/1.mp4',
    'assets/Remote Access Capability - Quick Changeover/2.mp4',
    'assets/Remote Access Capability - Quick Changeover/3.mp4'
  )
  createContent(
    '5%',
    '20%',
    ' Remote Access Capability',
    `Allows Pearson's support team on-demand\naccess to the equipment's PLC and HMI\nthrough a secure VPN connection via an eWON\nrouter ISECOM STAR and ISO 27001 certified\nto support emergency troubleshooting and\nreduce on-site visits`
  )
  createSvg('15%', '22%', '60%', '25%', '60%', '25%')
  createBackButton('5%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowCont()

        video3.addEventListener('ended', () => {
          loop.style.zIndex = '-5'
          video3.classList.add('short-vanish')

          loop.classList.remove('short-vanish')
          loop.load()

          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButton.remove()
          }, 1000)
        })
      })
    })
  }, 700)
})

quickC_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Remote Access Capability - Quick Changeover/1.mp4',
    'assets/Remote Access Capability - Quick Changeover/2.mp4',
    'assets/Remote Access Capability - Quick Changeover/3.mp4'
  )
  createContent(
    '10%',
    '10%',
    ' Quick Changeover',
    `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`
  )
  createSvg('15%', '22%', '60%', '25%', '60%', '25%')
  createBackButton('10%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowCont()

        video3.addEventListener('ended', () => {
          loop.style.zIndex = '-5'
          video3.classList.add('short-vanish')
          loop.classList.remove('short-vanish')
          loop.load()

          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButton.remove()
          }, 1000)
        })
      })
    })
  }, 700)
})

easilyAGP_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Easily Accessible Grace Port/1.mp4',
    'assets/Easily Accessible Grace Port/2.mp4',
    'assets/Easily Accessible Grace Port/3.mp4'
  )
  createContent(
    '10%',
    '30%',
    'Easily Accesible Grace Port',
    `Grace ports provide convenient communication\nand low-voltage power portals at the outside of the\nmachine's electrical cabinet`
  )
  createSvg('15%', '34%', '66%', '28%', '66%', '28%')
  createBackButton('10%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        HideShowCont()
        setTimeout(() => {
          InterpolateVideo(video2, video2, video3)
        }, 500)

        video3.addEventListener('ended', () => {
          loop.style.zIndex = '-5'
          video3.classList.add('short-vanish')
          loop.classList.remove('short-vanish')
          loop.load()

          Setup()

          setTimeout(() => {
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButton.remove()
          }, 1000)
        })
      })
    })
  }, 700)
})

fourCIDO_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Four Case Infeed Direction Options/1.mp4',
    'assets/Four Case Infeed Direction Options/2.mp4',
    'assets/Four Case Infeed Direction Options/3.mp4'
  )
  createContent(
    '65%',
    '40%',
    'Four Case Infeed Direction Options',
    `The modular configuration offers various infeed configurations to choose from to better accomodate your plant layout`
  )
  createSvg('66%', '42%', '60%', '50%', '60%', '50%')
  createBackButton('43%', '2rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()
    setTimeout(() => {
      HideShowCont()
      InterpolateVideo(loop, video1, video2)

      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowCont()

        video3.addEventListener('ended', () => {
          loop.style.zIndex = '-5'
          video3.classList.add('short-vanish')
          loop.classList.remove('short-vanish')
          loop.load()

          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButton.remove()
          }, 1000)
        })
      })
    }, 6000)
  }, 700)
})

maximumU_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Maximum Uptime/1.mp4',
    'assets/Maximum Uptime/2.mp4',
    'assets/Maximum Uptime/3.mp4'
  )
  createContent(
    '58%',
    '35%',
    'Maximum Uptime',
    'Utilizing a FANUC M710iC/50H robot with a MTBF 80,000 hrs maximizes uptime and minimizes maintenance requirements'
  )
  createSvg('59%', '37%', '18%', '60%', '18%', '60%')
  createBackButton('43%', '2rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowCont()
        loop.style.zIndex = '-5'
        loop.classList.remove('short-vanish')
        loop.load()
        loop.pause()
        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          loop.play()
          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButton.remove()
          }, 1000)
        })
      })
    })
  }, 700)
})

quickS_button.addEventListener('click', function (e) {
  Setup()

  createVideos(null, 'assets/Quick Start Up/1.mp4', null)
  createContent(
    '8%',
    '75%',
    'Quick Startup',
    'The cell comespre-assembled on a common base for easy placement and start-up'
  )

  createSvg('13%', '79%', '35%', '75%', '35%', '75%')
  createBackButton('43%', '2rem')

  setTimeout(() => {
    video2.play()

    InterpolateVideo(loop, loop, video2)
    HideShowCont()
    setTimeout(() => {
      loop.load()
      loop.pause()
      loop.style.zIndex = '-5'
    }, 700)

    backButton.addEventListener('click', function () {
      backButton.style.pointerEvents = 'none'
      HideShowCont()
      video2.classList.add('short-vanish')
      loop.play()
      loop.classList.remove('short-vanish')

      setTimeout(() => {
        Setup()
        loop.style.zIndex = '-1'
        video2.remove()
        textContent.remove()
        svg1.remove()
        svg2.remove()
        backButton.remove()
      }, 700)
    })
  }, 700)
})
