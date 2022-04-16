const viewR_button = document.getElementById('viewR_button')
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

function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
  videoToPause.pause()
  videoToVanish.classList.add('short-vanish')
  videoToPlay.play()
}

function Setup() {
  mainButtons.classList.toggle('show')
  mainButtons.classList.toggle('vanish')
}

function HideShowBackButton(container) {
  container.classList.remove('hidden')
  container.classList.toggle('short-vanish')
  container.classList.toggle('show')
}

function createVideos(id1, id2, id3, source1, source2, source3) {
  video1 = document.createElement('video')
  video1.src = source1
  video1.muted = true
  video1.setAttribute('id', id1)
  video1.classList.add('video')
  video1.style.zIndex = '-2'

  video2 = document.createElement('video')
  video2.src = source2
  video2.loop = true
  video2.muted = true
  video2.setAttribute('id', id2)
  video2.classList.add('video')
  video2.style.zIndex = '-3'

  video3 = document.createElement('video')
  video3.src = source3
  video3.muted = true
  video3.setAttribute('id', id3)
  video3.classList.add('video')
  video3.style.zIndex = '-4'

  videoHolder.appendChild(video1)
  videoHolder.appendChild(video2)
  videoHolder.appendChild(video3)
}

function createContent(textLeft, textTop, labelTitle, pContent) {
  textContent = document.createElement('div')
  textContent.classList.add('text')
  textContent.style.left = textLeft
  textContent.style.top = textTop

  showCont.appendChild(textContent)

  label = document.createElement('label')
  label.classList.add('label')
  label.textContent = labelTitle

  paragraph = document.createElement('p')
  paragraph.classList.add('paragraph')
  paragraph.textContent = pContent

  textContent.appendChild(label)
  textContent.appendChild(paragraph)
}

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
  circle.setAttribute('r', '6%')
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

compactFP_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'compactFP1_video',
    'compactFP2_video',
    'compactFP3_video',
    'assets/Compact FootPrint/1.mp4',
    'assets/Compact FootPrint/2.mp4',
    'assets/Compact FootPrint/3.mp4'
  )
  createContent(
    '10%',
    '10%',
    'Compact FootPrint',
    'Smallest, fully contained, palletizing unit\nfor a single pallet and load/unload\nfunction utlizing a pallet jack or forklift'
  )
  createSvg('12%', '12%', '50%', '41%', '50%', '41%')
  createBackButton('10%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowBackButton(showCont)
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont)
        loop.style.zIndex = '-5'
        loop.classList.remove('short-vanish')
        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          // loop.load()
          Setup()
          setTimeout(() => {
            // loop.style.zIndex = '-1'
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
  }, 2000)
})

remoteAC_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'remoteAC1_video',
    'remoteAC2_video',
    'remoteAC3_video',
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
      HideShowBackButton(showCont)
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont)

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
  }, 2000)
})

quickC_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'remoteAC1_video',
    'remoteAC2_video',
    'remoteAC3_video',
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
      HideShowBackButton(showCont)
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont)

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
  }, 2000)
})

easilyAGP_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'easilyAGP1_video',
    'easilyAGP2_video',
    'easilyAGP3_video',
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
  createSvg('15%', '35%', '66%', '23%', '66%', '23%')
  createBackButton('10%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowBackButton(showCont)
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont)

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
  }, 2000)
})
