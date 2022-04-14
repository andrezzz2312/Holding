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
const compactFP1_video = document.getElementById('compactFP1_video')
const compactFP2_video = document.getElementById('compactFP2_video')
const compactFP3_video = document.getElementById('compactFP3_video')
const remoteAC1_video = document.getElementById('remoteAC1_video')
const remoteAC2_video = document.getElementById('remoteAC2_video')
const remoteAC3_video = document.getElementById('remoteAC3_video')
const easilyAGP1_video = document.getElementById('easilyAGP1_video')
const easilyAGP2_video = document.getElementById('easilyAGP2_video')
const easilyAGP3_video = document.getElementById('easilyAGP3_video')
const videoContainer = document.querySelector('.videoContainer')
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

Align()

compactFP_button.addEventListener('click', function (e) {
  Setup()
  Align()
  compactFP1_video.style.zIndex = '-2'
  compactFP2_video.style.zIndex = '-3'
  compactFP3_video.style.zIndex = '-4'

  setTimeout(() => {
    loop.classList.add('short-vanish')
    compactFP1_video.play()

    compactFP1_video.addEventListener('ended', () => {
      InterpolateVideo(loop, compactFP1_video, compactFP2_video)
      HideShowBackButton(showCont[0], backButtons[0], 0)
      backButtons[0].addEventListener('click', function () {
        InterpolateVideo(compactFP2_video, compactFP2_video, compactFP3_video)
        HideShowBackButton(showCont[0], backButtons[0], 1)

        compactFP3_video.addEventListener('ended', () => {
          compactFP3_video.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            compactFP1_video.classList.remove('short-vanish')
            compactFP2_video.classList.remove('short-vanish')
            compactFP3_video.classList.remove('short-vanish')
          }, 1000)
        })
      })
    })
  }, 2000)
})

remoteAC_button.addEventListener('click', function (e) {
  Setup()
  Align()
  remoteAC1_video.style.zIndex = '-2'
  remoteAC2_video.style.zIndex = '-3'
  remoteAC3_video.style.zIndex = '-4'
  setTimeout(() => {
    loop.classList.add('short-vanish')
    remoteAC1_video.play()

    remoteAC1_video.addEventListener('ended', () => {
      InterpolateVideo(loop, remoteAC1_video, remoteAC2_video)
      HideShowBackButton(showCont[1], backButtons[1], 0)

      backButtons[1].addEventListener('click', function () {
        InterpolateVideo(remoteAC2_video, remoteAC2_video, remoteAC3_video)
        HideShowBackButton(showCont[1], backButtons[1], 1)

        remoteAC3_video.addEventListener('ended', () => {
          remoteAC3_video.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            remoteAC1_video.classList.remove('short-vanish')
            remoteAC2_video.classList.remove('short-vanish')
            remoteAC3_video.classList.remove('short-vanish')
          }, 1000)
        })
      })
    })
  }, 2000)
})

quickC_button.addEventListener('click', function (e) {
  Setup()
  Align()
  remoteAC1_video.style.zIndex = '-2'
  remoteAC2_video.style.zIndex = '-3'
  remoteAC3_video.style.zIndex = '-4'
  setTimeout(() => {
    loop.classList.add('short-vanish')
    remoteAC1_video.play()

    remoteAC1_video.addEventListener('ended', () => {
      console.log(showCont[2])
      InterpolateVideo(loop, remoteAC1_video, remoteAC2_video)
      HideShowBackButton(showCont[2], backButtons[2], 0)

      backButtons[2].addEventListener('click', function () {
        InterpolateVideo(remoteAC2_video, remoteAC2_video, remoteAC3_video)
        HideShowBackButton(showCont[2], backButtons[2], 1)

        remoteAC3_video.addEventListener('ended', () => {
          remoteAC3_video.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            remoteAC1_video.classList.remove('short-vanish')
            remoteAC2_video.classList.remove('short-vanish')
            remoteAC3_video.classList.remove('short-vanish')
          }, 1000)
        })
      })
    })
  }, 2000)
})

easilyAGP_button.addEventListener('click', function (e) {
  Setup()
  Align()
  easilyAGP1_video.style.zIndex = '-2'
  easilyAGP2_video.style.zIndex = '-3'
  easilyAGP3_video.style.zIndex = '-4'
  setTimeout(() => {
    loop.classList.add('short-vanish')
    easilyAGP1_video.play()

    easilyAGP1_video.addEventListener('ended', () => {
      console.log(showCont[3])
      InterpolateVideo(loop, easilyAGP1_video, easilyAGP2_video)
      HideShowBackButton(showCont[3], backButtons[3], 0)

      backButtons[3].addEventListener('click', function () {
        InterpolateVideo(easilyAGP2_video, easilyAGP2_video, easilyAGP3_video)
        HideShowBackButton(showCont[3], backButtons[3], 1)

        easilyAGP3_video.addEventListener('ended', () => {
          easilyAGP3_video.classList.add('short-vanish')
          loop.style.zIndex = '-5'
          loop.classList.remove('short-vanish')
          loop.load()
          Exit()

          setTimeout(() => {
            Align()
            loop.style.zIndex = '-1'
            easilyAGP1_video.classList.remove('short-vanish')
            easilyAGP2_video.classList.remove('short-vanish')
            easilyAGP3_video.classList.remove('short-vanish')
          }, 1000)
        })
      })
    })
  }, 2000)
})
