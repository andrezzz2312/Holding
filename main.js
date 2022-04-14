const compactFP_button = document.getElementById('compactFP_button')
const compactFP_line_svg = document.getElementById('compactFP_line_svg')
const compactFP_circle_svg = document.getElementById('compactFP_circle_svg')
const remoteAC_button = document.getElementById('remoteAC_button')
const remoteAC_line_svg = document.getElementById('remoteAC_line_svg')
const remoteAC_circle_svg = document.getElementById('remoteAC_circle_svg')
const quickC_button = document.getElementById('quickC_button')
const quickC_line_svg = document.getElementById('quickC_line_svg')
const quickC_circle_svg = document.getElementById('quickC_circle_svg')
const easilyAGP_button = document.getElementById('easilyAGP_button')
const easilyAGP_line_svg = document.getElementById('easilyAGP_line_svg')
const easilyAGP_circle_svg = document.getElementById('easilyAGP_circle_svg')
const fourCIDO_button = document.getElementById('fourCIDO_button')
const fourCIDO_line_svg = document.getElementById('fourCIDO_line_svg')
const fourCIDO_circle_svg = document.getElementById('fourCIDO_circle_svg')
const maximumU_button = document.getElementById('maximumU_button')
const maximumU_line_svg = document.getElementById('maximumU_line_svg')
const maximumU_circle_svg = document.getElementById('maximumU_circle_svg')
const quickS_button = document.getElementById('quickS_button')
const quickS_line_svg = document.getElementById('quickS_line_svg')
const quickS_circle_svg = document.getElementById('quickS_circle_svg')
const viewR_button = document.getElementById('viewR_button')
const loop = document.getElementById('loopvideo')
const videoHolder = document.querySelector('#videoHolder')
let video1 = ''
let video2 = ''
let video3 = ''
// const buttons = document.querySelectorAll('button')
// const svgLines = document.querySelectorAll('')
// const svgCircles = document.querySelectorAll('')
const videos = document.querySelectorAll('.video')
const showCont = document.querySelectorAll('#showCont')
const backButtons = document.querySelectorAll('.backButton')

function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
  videoToPause.pause()
  videoToVanish.classList.add('short-vanish')
  videoToPlay.play()
}
function HideShow(button, svgLine, svgCircle, direction) {
  if (direction === 0) {
    button.classList.remove('show')
    svgLine.classList.remove('show')
    svgCircle.classList.remove('show')
    button.classList.add('vanish')
    svgLine.classList.add('vanish')
    svgCircle.classList.add('vanish')
  }
  if (direction === 1) {
    button.classList.remove('vanish')
    svgLine.classList.remove('vanish')
    svgCircle.classList.remove('vanish')
    button.classList.add('show')
    svgLine.classList.add('show')
    svgCircle.classList.add('show')
  }
}
function Setup() {
  HideShow(compactFP_button, compactFP_line_svg, compactFP_circle_svg, 0)
  HideShow(remoteAC_button, remoteAC_line_svg, remoteAC_circle_svg, 0)
  HideShow(quickC_button, quickC_line_svg, quickC_circle_svg, 0)
  HideShow(easilyAGP_button, easilyAGP_line_svg, easilyAGP_circle_svg, 0)
  HideShow(fourCIDO_button, fourCIDO_line_svg, fourCIDO_circle_svg, 0)
  HideShow(maximumU_button, maximumU_line_svg, maximumU_circle_svg, 0)
  HideShow(quickS_button, quickS_line_svg, quickS_circle_svg, 0)
  viewR_button.classList.remove('show')
  viewR_button.classList.add('vanish')
}
function Exit() {
  HideShow(compactFP_button, compactFP_line_svg, compactFP_circle_svg, 1)
  HideShow(remoteAC_button, remoteAC_line_svg, remoteAC_circle_svg, 1)
  HideShow(quickC_button, quickC_line_svg, quickC_circle_svg, 1)
  HideShow(easilyAGP_button, easilyAGP_line_svg, easilyAGP_circle_svg, 1)
  HideShow(fourCIDO_button, fourCIDO_line_svg, fourCIDO_circle_svg, 1)
  HideShow(maximumU_button, maximumU_line_svg, maximumU_circle_svg, 1)
  HideShow(quickS_button, quickS_line_svg, quickS_circle_svg, 1)
  viewR_button.classList.remove('vanish')
  viewR_button.classList.add('show')
}
function Align() {
  videos.forEach((e) => {
    e.style.zIndex = '-10'
  })
}
function HideShowBackButton(container, backButton, direction) {
  if (direction === 0) {
    container.classList.remove('hidden')
    container.classList.add('show')
    backButton.classList.remove('hidden')
    backButton.classList.add('show')
  }
  if (direction === 1) {
    container.classList.remove('show')
    container.classList.add('short-vanish')
    backButton.classList.remove('show')
    backButton.classList.add('short-vanish')
  }
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

Align()

compactFP_button.addEventListener('click', function (e) {
  Setup()
  Align()
  createVideos(
    'compactFP1_video',
    'compactFP2_video',
    'compactFP3_video',
    'assets/Compact FootPrint/1.mp4',
    'assets/Compact FootPrint/2.mp4',
    'assets/Compact FootPrint/3.mp4'
  )

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowBackButton(showCont[0], backButtons[0], 0)
      backButtons[0].addEventListener('click', function () {
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont[0], backButtons[0], 1)

        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
          }, 1000)
        })
      })
    })
  }, 2000)
})

remoteAC_button.addEventListener('click', function (e) {
  Setup()
  Align()
  createVideos(
    'remoteAC1_video',
    'remoteAC2_video',
    'remoteAC3_video',
    'assets/Remote Access Capability - Quick Changeover/1.mp4',
    'assets/Remote Access Capability - Quick Changeover/2.mp4',
    'assets/Remote Access Capability - Quick Changeover/3.mp4'
  )

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      InterpolateVideo(loop, video1, video2)
      HideShowBackButton(showCont[1], backButtons[1], 0)

      backButtons[1].addEventListener('click', function () {
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont[1], backButtons[1], 1)

        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
          }, 1000)
        })
      })
    })
  }, 2000)
})

quickC_button.addEventListener('click', function (e) {
  Setup()
  Align()
  createVideos(
    'remoteAC1_video',
    'remoteAC2_video',
    'remoteAC3_video',
    'assets/Remote Access Capability - Quick Changeover/1.mp4',
    'assets/Remote Access Capability - Quick Changeover/2.mp4',
    'assets/Remote Access Capability - Quick Changeover/3.mp4'
  )

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      console.log(showCont[2])
      InterpolateVideo(loop, video1, video2)
      HideShowBackButton(showCont[2], backButtons[2], 0)

      backButtons[2].addEventListener('click', function () {
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont[2], backButtons[2], 1)

        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
          }, 1000)
        })
      })
    })
  }, 2000)
})

easilyAGP_button.addEventListener('click', function (e) {
  Setup()
  Align()
  createVideos(
    'easilyAGP1_video',
    'easilyAGP2_video',
    'easilyAGP3_video',
    'assets/Easily Accessible Grace Port/1.mp4',
    'assets/Easily Accessible Grace Port/2.mp4',
    'assets/Easily Accessible Grace Port/3.mp4'
  )

  setTimeout(() => {
    loop.classList.add('short-vanish')
    video1.play()

    video1.addEventListener('ended', () => {
      console.log(showCont[3])
      InterpolateVideo(loop, video1, video2)
      HideShowBackButton(showCont[3], backButtons[3], 0)

      backButtons[3].addEventListener('click', function () {
        InterpolateVideo(video2, video2, video3)
        HideShowBackButton(showCont[3], backButtons[3], 1)

        video3.addEventListener('ended', () => {
          video3.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            video1.remove()
            video2.remove()
            video3.remove()
          }, 1000)
        })
      })
    })
  }, 2000)
})
