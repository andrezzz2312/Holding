const loop = document.getElementById('loopvideo')
const videoHolder = document.querySelector('#videoHolder')

let textContent = ''
let label = ''
let paragraph = ''
let line = ''
let svg1 = ''
let circle = ''
let svg2 = ''
let backButton = ''
let backButtonContainer = ''
let x = window.matchMedia('(max-height: 550px)')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const loaderIcon = document.querySelector('.loader')
let videosCont= ''


function Preload() {
  const videos = [
    'assets/Compact FootPrint/1.mp4',
    'assets/Compact FootPrint/2.mp4',
    'assets/Compact FootPrint/3.mp4',
    'assets/Remote Access Capability - Quick Changeover/1.mp4',
    'assets/Remote Access Capability - Quick Changeover/2.mp4',
    'assets/Remote Access Capability - Quick Changeover/3.mp4',
    'assets/Easily Accessible Grace Port/1.mp4',
    'assets/Easily Accessible Grace Port/2.mp4',
    'assets/Easily Accessible Grace Port/3.mp4',
    'assets/Four Case Infeed Direction Options/1.mp4',
    'assets/Four Case Infeed Direction Options/2.mp4',
    'assets/Four Case Infeed Direction Options/3.mp4',
    'assets/Maximum Uptime/1.mp4',
    'assets/Maximum Uptime/2.mp4',
    'assets/Maximum Uptime/3.mp4',
    'assets/Quick Start Up/1.mp4',
  ]

  for (let i = 0; i < videos.length; i++) {
    const preloadedVideo = document.createElement('video')
    preloadedVideo.src = videos[i]
    preloadedVideo.preload='metadata'
    preloadedVideo.muted = 'true'
   
    preloadedVideo.classList.add('videos')
    preloadedVideo.playsInline= 'true'
    preloadedVideo.controls = false
    preloadedVideo.style.zIndex='-100'
    videoHolder.appendChild(preloadedVideo)
  }
 
  videosCont = document.querySelectorAll('.videos')
  for (let i = 0; i < videosCont.length; i++) {
    videosCont[i].addEventListener('canplay',()=>{

    })
  }
  loaderIcon.classList.add('short-vanish')
  setTimeout(() => {
    loaderIcon.style.zIndex='-100'
  }, 500);
}

// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
  videoToPause.pause()
  videoToVanish.classList.add('short-vanish')
  videoToPlay.play()
}

// Vanish/show the main buttons and svgs
function Setup() {
  mainButtons.classList.toggle('show')
  mainButtons.classList.toggle('disabled')
  mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
  showCont.classList.remove('hidden')
  showCont.classList.toggle('short-vanish')
  showCont.classList.toggle('show')
  console.log('render');
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
  if (source1) {
    videosCont = document.createElement('video')
    videosCont.src = source1
    videosCont.muted = true
    videosCont.setAttribute('playsinline', '')
    videosCont.controls = false
    videosCont.preload = true
    videosCont.classList.add('video')
    videosCont.style.zIndex = '-2'
    videosCont.load()
    videosCont.pause()
    videoHolder.appendChild(videosCont)
  }
  if (source2) {
    videosCont = document.createElement('video')
    videosCont.src = source2
    videosCont.loop = true
    videosCont.muted = true
    videosCont.setAttribute('playsinline', '')
    videosCont.controls = false
    videosCont.preload = true
    videosCont.classList.add('video')
    videosCont.style.zIndex = '-3'
    videosCont.load()
    videosCont.pause()
    videoHolder.appendChild(videosCont)
  }
  if (source3) {
    videosCont = document.createElement('video')
    videosCont.src = source3
    videosCont.muted = true
    videosCont.preload = true
    videosCont.setAttribute('playsinline', '')
    videosCont.controls = false
    videosCont.classList.add('video')
    videosCont.style.zIndex = '-4'
    videosCont.load()
    videosCont.pause()
    videoHolder.appendChild(videosCont)
  }
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(
  textLeft,
  textTop,
  labelTitle,
  pContent,
  pContentId,
  textId,
  labelId
) {
  textContent = document.createElement('div')
  textContent.setAttribute('id', textId ? textId : '')
  textContent.classList.add('text')
  textContent.style.left = textLeft
  textContent.style.top = textTop

  const labelCont = document.createElement('div')
  labelCont.setAttribute('id', labelId ? labelId : '')
  labelCont.classList.add('labelCont')

  const pCont = document.createElement('div')
  pCont.classList.add('pCont')
  pCont.setAttribute('id', pContentId ? pContentId : 'a')

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

  backButtonContainer = document.createElement('div')
  backButtonContainer.classList.add('viewR_container')
  backButtonContainer.appendChild(backButton)
  showCont.appendChild(backButtonContainer)
}

Preload()

////////// Event Listeners for the main buttons //////////
function SetVideos(videosCont1,videosCont2,videosCont3){
if (videosCont1) {
  videosCont1.style.zIndex='-2'
}
if (videosCont2) {
  videosCont2.style.zIndex='-3'
}
if (videosCont3) {
  videosCont3.style.zIndex='-4'
}
 

 

}
function ResetVideos(){
  for (let i = 0; i < videosCont.length; i++) {
    videosCont[i].style.zIndex='-100'   
    videosCont[i].classList.remove('short-vanish')
 
videosCont[i].currentTime = 0;




     
  }
  
}

compactFP_button.addEventListener('click', function (e) {
  Setup()

SetVideos(videosCont[0],videosCont[1],videosCont[2])

  createContent(
    '10%',
    '17%',
    'Compact FootPrint',
    'Smallest, fully contained, palletizing unit\nfor a single pallet and load/unload\nfunction utlizing a pallet jack or forklift.'
  )
  createSvg('21%', '19%', '49%', '42.7%', '49%', '42.7%')
  createBackButton('42%', '2rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    videosCont[0].play()

    videosCont[0].addEventListener('ended', (e) => {
      e.stopImmediatePropagation();
      InterpolateVideo(loop, videosCont[0], videosCont[1])
     
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(videosCont[1], videosCont[1], videosCont[2])
        HideShowCont()
        loop.style.zIndex = '-5'
        loop.classList.remove('short-vanish')
        loop.load()
        loop.pause()   
        videosCont[2].addEventListener('ended', (e) => {
          e.stopImmediatePropagation();
          videosCont[2].classList.add('short-vanish')
          loop.play()
          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'            
            textContent.remove()                     
            ResetVideos()
            svg1.remove()
            svg2.remove()
            backButtonContainer.remove()
          
          }, 300)
        })
      })
    })
  }, 1000)
})

remoteAC_button.addEventListener('click', function (e) {
  Setup()

  
  SetVideos(videosCont[3],videosCont[4],videosCont[5])
  createContent(
    '12%',
    '24%',
    ' Remote Access Capability',
    `Allows Pearson's support team on-demand\naccess to the equipment's PLC and HMI\nthrough a secure VPN connection via an eWON\nrouter ISECOM STAR and ISO 27001 certified\nto support emergency troubleshooting and\nreduce on-site visits`,
    'remoteAC_p'
  )
  createSvg('15%', '27%', '60%', '25%', '60%', '25%')
  createBackButton('5%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    videosCont[3].play()

    videosCont[3].addEventListener('ended', (e) => {
      e.stopImmediatePropagation();
      InterpolateVideo(loop, videosCont[3], videosCont[4])
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(videosCont[4], videosCont[4], videosCont[5])
        HideShowCont()
        loop.load()
        loop.pause()
        videosCont[5].addEventListener('ended', (e) => {
          e.stopImmediatePropagation();
          loop.style.zIndex = '-5'
          videosCont[5].classList.add('short-vanish')

          loop.classList.remove('short-vanish')
          loop.play()

          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            ResetVideos()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButtonContainer.remove()
            
          }, 300)
        })
      })
    })
  }, 1000)
})

quickC_button.addEventListener('click', function (e) {
  e.stopImmediatePropagation();
  Setup()

  SetVideos(videosCont[3],videosCont[4],videosCont[5])
  if (x.matches) {
    createContent(
      '12%',
      '20%',
      ' Quick Changeover',
      `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`,
      'quickC_p'
    )
  } else {
    createContent(
      '12%',
      '30%',
      ' Quick Changeover',
      `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`,
      'quickC_p'
    )
  }
  if (x.matches) {
    createSvg('19%', '24%', '60%', '25%', '60%', '25%')
  } else {
    createSvg('19%', '34%', '60%', '25%', '60%', '25%')
  }

  createBackButton('10%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    videosCont[3].play()

    videosCont[3].addEventListener('ended', (e) => {
      e.stopImmediatePropagation();
      InterpolateVideo(loop, videosCont[3], videosCont[4])
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(videosCont[4], videosCont[4], videosCont[5])
        HideShowCont()
        loop.load()
        loop.pause()
        videosCont[5].addEventListener('ended', (e) => {
          e.stopImmediatePropagation();
          loop.style.zIndex = '-5'
          videosCont[5].classList.add('short-vanish')
          loop.classList.remove('short-vanish')
          loop.play()

          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            ResetVideos()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButtonContainer.remove()
            
          }, 300)
        })
      })
    })
  }, 1000)
})

easilyAGP_button.addEventListener('click', function (e) {
  e.stopImmediatePropagation();
  Setup()


  SetVideos(videosCont[6],videosCont[7],videosCont[8])
  createContent(
    '10%',
    '30%',
    'Easily Accesible Grace Port',
    `Grace ports provide convenient communication\nand low-voltage power portals at the outside of the\nmachine's electrical cabinet`,
    'easilyAGP_p'
  )
  createSvg('15%', '34%', '66%', '28%', '66%', '28%')
  createBackButton('10%', '4rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    videosCont[6].play()

    videosCont[6].addEventListener('ended', (e) => {
      e.stopImmediatePropagation();
      InterpolateVideo(loop, videosCont[6], videosCont[7])
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        HideShowCont()
        setTimeout(() => {
          InterpolateVideo(videosCont[7], videosCont[7], videosCont[8])
        }, 500)
        loop.load()
        loop.pause()
        videosCont[8].addEventListener('ended', (e) => {
          e.stopImmediatePropagation();
          
          loop.style.zIndex = '-5'
          videosCont[8].classList.add('short-vanish')
          loop.classList.remove('short-vanish')
          loop.play()

          Setup()

          setTimeout(() => {
            loop.style.zIndex = '-1'
            ResetVideos()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButtonContainer.remove()
            
          }, 300)
        })
      })
    })
  }, 1000)
})

fourCIDO_button.addEventListener('click', function (e) {

  Setup()

  SetVideos(videosCont[9],videosCont[10],videosCont[11])
  createContent(
    '65%',
    '40%',
    'Four Case Infeed Direction Options',
    `The modular configuration offers various infeed configurations to choose from to better accomodate your plant layout`,
    'fourCIDO_p',
    'fourCIDO_text',
    'fourCIDO_label'
  )
  createSvg('66%', '42%', '60%', '50%', '60%', '50%')
  createBackButton('43%', '2rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    videosCont[9].play()
    setTimeout(() => {
      HideShowCont()
      InterpolateVideo(loop, videosCont[9], videosCont[10])

      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(videosCont[10], videosCont[10], videosCont[11])
        HideShowCont()
        loop.load()
        loop.pause()
        videosCont[11].addEventListener('ended', (e) => {
          e.stopImmediatePropagation();
          loop.style.zIndex = '-5'
          videosCont[11].classList.add('short-vanish')
          loop.classList.remove('short-vanish')
          loop.play()

          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'           
            textContent.remove()
            ResetVideos()
            svg1.remove()
            svg2.remove()
            backButtonContainer.remove()
            
          }, 300)
        })
      })
    }, 6000)
  }, 1000)
})

maximumU_button.addEventListener('click', function (e) {
  e.stopImmediatePropagation();
  Setup()


  SetVideos(videosCont[12],videosCont[13],videosCont[14])
  createContent(
    '58%',
    '35%',
    'Maximum Uptime',
    'Utilizing a FANUC M710iC/50H robot with a MTBF 80,000 hrs maximizes uptime and minimizes maintenance requirements',
    'maximumU_p'
  )
  createSvg('59%', '37%', '18%', '60%', '18%', '60%')
  createBackButton('43%', '2rem')

  setTimeout(() => {
    loop.classList.add('short-vanish')
    videosCont[12].play()

    videosCont[12].addEventListener('ended', (e) => {
      e.stopImmediatePropagation();
      InterpolateVideo(loop, videosCont[12], videosCont[13])
      HideShowCont()
      backButton.addEventListener('click', function () {
        backButton.style.pointerEvents = 'none'
        InterpolateVideo(videosCont[13], videosCont[13], videosCont[14])
        HideShowCont()
        loop.style.zIndex = '-5'
        loop.classList.remove('short-vanish')
        loop.load()
        loop.pause()
        videosCont[14].addEventListener('ended', (e) => {
          e.stopImmediatePropagation();
          videosCont[14].classList.add('short-vanish')
          loop.play()
          Setup()
          setTimeout(() => {
            loop.style.zIndex = '-1'
            ResetVideos()
            textContent.remove()
            svg1.remove()
            svg2.remove()
            backButtonContainer.remove()
            
          }, 300)
        })
      })
    })
  }, 1000)
})

quickS_button.addEventListener('click', function (e) {
  Setup()
  SetVideos(videosCont[15],null,null)
  

  if (x.matches) {
    createContent(
      '7%',
      '30%',
      'Quick Startup',
      'The cell comespre-assembled on a common base for easy placement and start-up',
      'quickS_p'
    )
  } else {
    createContent(
      '8%',
      '75%',
      'Quick Startup',
      'The cell comespre-assembled on a common base for easy placement and start-up',
      'quickS_p'
    )
  }

  if (x.matches) {
    createSvg('13%', '30%', '35%', '75%', '35%', '75%')
  } else {
    createSvg('13%', '79%', '35%', '75%', '35%', '75%')
  }

  createBackButton('43%', '2rem')

  setTimeout(() => {
    videosCont[15].play()

    InterpolateVideo(loop, loop, videosCont[15])
    HideShowCont()
    setTimeout(() => {
      loop.load()
      loop.pause()
      loop.style.zIndex = '-5'
    }, 1000)

    backButton.addEventListener('click', function () {
      backButton.style.pointerEvents = 'none'
      HideShowCont()
      videosCont[15].classList.add('short-vanish')
      loop.play()
      loop.classList.remove('short-vanish')

      setTimeout(() => {
        Setup()
        loop.style.zIndex = '-1'
        ResetVideos()
        textContent.remove()
        svg1.remove()
        svg2.remove()
        backButtonContainer.remove()
      }, 300)
    })
  }, 1000)
})
