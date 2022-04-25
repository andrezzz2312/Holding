const loop = document.getElementById('loopvideo')
const loopContainer = document.getElementById('loop')

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
let backButton = ''
let backButtonContainer = ''
let containVideoWidth = ''
let containVideoHeight = ''
let x = window.matchMedia('(max-height: 550px)')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
const buttonContainer = document.querySelectorAll('.buttonContainer')
let counter = 0
let value = 0
const loader = document.querySelector('.loader')



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
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
  if (source1) {
    video1 = document.createElement('video')
    video1.src = source1
    video1.muted = true
    video1.setAttribute('playsinline', '')
    video1.controls = false
    video1.preload = 'auto'
    video1.classList.add('video')
    video1.style.zIndex = '-2'
    video1.load()
    video1.pause()
    loopContainer.appendChild(video1)
  }
  if (source2) {
    video2 = document.createElement('video')
    video2.src = source2
    video2.loop = true
    video2.muted = true
    video2.setAttribute('playsinline', '')
    video2.controls = false
    video2.preload = 'auto'
    video2.classList.add('video')
    video2.style.zIndex = '-3'
    video2.load()
    video2.pause()
    loopContainer.appendChild(video2)
  }
  if (source3) {
    video3 = document.createElement('video')
    video3.src = source3
    video3.muted = true
    video3.preload = 'auto'
    video3.setAttribute('playsinline', '')
    video3.controls = false
    video3.classList.add('video')
    video3.style.zIndex = '-4'
    video3.load()
    video3.pause()
    loopContainer.appendChild(video3)
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
  const svgContainerMade = document.createElement('div')
  svgContainerMade.classList.add('svgContainer')
  svgContainerMade.style.width = containVideoWidth + 'px'
  svgContainerMade.style.height = containVideoHeight + 'px'
  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  const textContainerMade = document.createElement('div')
  textContainerMade.classList.add('textContainer')
  textContainerMade.style.width = containVideoWidth + 'px'
  textContainerMade.style.height = containVideoHeight + 'px'

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

  showCont.appendChild(centerContainerMade)

  centerContainerMade.appendChild(textContainerMade)
  textContainerMade.appendChild(textContent)
  textContent.appendChild(labelCont)
  textContent.appendChild(pCont)
  labelCont.appendChild(label)
  pCont.appendChild(paragraph)
}

// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function createSvg(lx1, ly1, lx2, ly2, cx, cy) {
  const svgContainerMade = document.createElement('div')
  svgContainerMade.classList.add('svgContainer')
  svgContainerMade.style.width = containVideoWidth + 'px'
  svgContainerMade.style.height = containVideoHeight + 'px'
  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')

  showCont.appendChild(centerContainerMade)
  centerContainerMade.appendChild(svgContainerMade)

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

  circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

  circle.setAttribute('cx', cx)
  circle.setAttribute('cy', cy)
  circle.setAttribute('r', '6px')
  circle.setAttribute('fill', '#f04923')
  circle.classList.add('svgDot')
  svg1.appendChild(circle)

  svgContainerMade.appendChild(svg1)
}

function createBackButton() {
  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  const buttonContainerMade = document.createElement('div')
  buttonContainerMade.classList.add('buttonContainer')
  buttonContainerMade.style.width = containVideoWidth + 'px'
  buttonContainerMade.style.height = containVideoHeight + 'px'

  backButton = document.createElement('button')
  backButton.classList.add('viewR_button')
  backButton.textContent = 'Back to Features'

  backButtonContainer = document.createElement('div')
  backButtonContainer.classList.add('viewR_container')

  showCont.appendChild(centerContainerMade)
  centerContainerMade.append(buttonContainerMade)

  buttonContainerMade.appendChild(backButtonContainer)
  backButtonContainer.appendChild(backButton)
}

function ArreglarLineas() {
  
  for (let i = 0; i < svgContainer.length; i++) {    
    svgContainer[i].style.width = containVideoWidth + 'px'
    svgContainer[i].style.height = containVideoHeight + 'px'
  }
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.width = containVideoWidth + 'px'
    buttonContainer[i].style.height = containVideoHeight + 'px'
  }
}



function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
  var oRatio = width / height,
    cRatio = cWidth / cHeight
  return function () {
    if (contains ? oRatio > cRatio : oRatio < cRatio) {
      this.width = cWidth
      this.height = cWidth / oRatio
    } else {
      this.width = cHeight * oRatio
      this.height = cHeight
    }
    this.left = (cWidth - this.width) * (pos / 100)
    this.right = this.width + this.left
    return this
  }.call({})
}

function getImgSizeInfo(img) {
  var pos = window
    .getComputedStyle(img)
    .getPropertyValue('object-position')
    .split(' ')
  return getRenderedSize(
    true,
    img.offsetWidth,
    img.offsetHeight,
    img.videoWidth,
    img.videoHeight,
    parseInt(pos[0])
  )
}

 loop.addEventListener('loadedmetadata', function(e){
  containVideoWidth = getImgSizeInfo(loop).width
  containVideoHeight = getImgSizeInfo(loop).height
  ArreglarLineas() 
  })


if (loop.readyState >= 2) { 
  containVideoWidth = getImgSizeInfo(loop).width
  containVideoHeight = getImgSizeInfo(loop).height
  ArreglarLineas()  
}

window.addEventListener("orientationchange", function() {  
  setTimeout(() => {    
    containVideoWidth = getImgSizeInfo(loop).width
    containVideoHeight = getImgSizeInfo(loop).height 
  ArreglarLineas() 
  }, 100);  
})

////////// Event Listeners for the main buttons //////////

compactFP_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Compact FootPrint/1.mp4#t=0.1',
    'assets/Compact FootPrint/2.mp4#t=0.1',
    'assets/Compact FootPrint/3.mp4#t=0.1'
  )
  createContent(
    '10%',
    '17%',
    'Compact FootPrint',
    'Smallest, fully contained, palletizing unit\nfor a single pallet and load/unload\nfunction utlizing a pallet jack or forklift.'
  )
  createSvg('21%', '19%', '49%', '42.7%', '49%', '42.7%')
  createBackButton()

  check1(value) 

 let video1check=false
 let video2check=false
 let video3check=false

function check1(counter){ 
  clearcheck = setInterval(repeatcheck,500,counter)  
  function repeatcheck (counter){
    if (video1.readyState === 4) {
      video1check=true
      console.log('vid1');
    }
    if (video2.readyState === 4) {
      video2check=true
      console.log('vid2');
    }
    if (video3.readyState === 4) {
      video3check=true
      console.log('vid3');
    } 
    setTimeout(() => {
      if (!video1check||!video2check||!video3check) {
       loader.style.zIndex='200'  
       loader.classList.add('show')     
      }
    },1000);
    
    if (video1check&&video2check&&video3check){   
      loader.classList.remove('show')
      loader.classList.add('short-vanish')
      loader.style.zIndex='-200'
          
      clearInterval(clearcheck)
      value=0
      counter=0
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
                showCont.innerHTML=''            
              }, 300)
            })
          })
        })
      }, 1000)
    }
  }
}


  
})

remoteAC_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Remote Access Capability - Quick Changeover/1.mp4#t=0.1',
    'assets/Remote Access Capability - Quick Changeover/2.mp4#t=0.1',
    'assets/Remote Access Capability - Quick Changeover/3.mp4#t=0.1'
  )
  createContent(
    '12%',
    '24%',
    ' Remote Access Capability',
    `Allows Pearson's support team on-demand\naccess to the equipment's PLC and HMI\nthrough a secure VPN connection via an eWON\nrouter ISECOM STAR and ISO 27001 certified\nto support emergency troubleshooting and\nreduce on-site visits`,
    'remoteAC_p'
  )
  createSvg('15%', '27%', '60%', '25%', '60%', '25%')
  createBackButton()
  check1(value) 
 let video1check=false
 let video2check=false
 let video3check=false
 
function check1(counter){ 
  clearcheck = setInterval(repeatcheck,500,counter)  
  function repeatcheck (counter){
    if (video1.readyState === 4) {
      video1check=true
    }
    if (video2.readyState === 4) {
      video2check=true
    }
    if (video3.readyState === 4) {
      video3check=true
    } 
    setTimeout(() => {
      if (!video1check||!video2check||!video3check) {
       loader.style.zIndex='200'  
       loader.classList.add('show')     
      }
    },1000);
    
    if (video1check&&video2check&&video3check){   
      loader.classList.remove('show')
      loader.classList.add('short-vanish')
      loader.style.zIndex='-200'
      
      clearInterval(clearcheck)
      value=0
      counter=0
      setTimeout(() => {
        loop.classList.add('short-vanish')
        video1.play()
    
        video1.addEventListener('ended', () => {
          InterpolateVideo(loop, video1, video2)
          HideShowCont()
          backButton.addEventListener('click', function () {
            backButton.style.pointerEvents = 'none'
            loop.load()
            loop.pause()
            InterpolateVideo(video2, video2, video3)
            HideShowCont()
            
            video3.addEventListener('ended', () => {
              loop.style.zIndex = '-5'
              video3.classList.add('short-vanish')    
              loop.classList.remove('short-vanish')
              loop.play()
    
              Setup()
              setTimeout(() => {
                loop.style.zIndex = '-1'
                video1.remove()
                video2.remove()
                video3.remove()
                showCont.innerHTML=''
              }, 500)
            })
          })
        })
      }, 1000)
    
    }
  }
}
  
})

quickC_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Remote Access Capability - Quick Changeover/1.mp4#t=0.1',
    'assets/Remote Access Capability - Quick Changeover/2.mp4#t=0.1',
    'assets/Remote Access Capability - Quick Changeover/3.mp4#t=0.1'
  )
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

  createBackButton()
  check1(value) 
  let video1check=false
  let video2check=false
  let video3check=false
 
 function check1(counter){ 
   clearcheck = setInterval(repeatcheck,500,counter)  
   function repeatcheck (counter){
     if (video1.readyState === 4) {
       video1check=true
     }
     if (video2.readyState === 4) {
       video2check=true
     }
     if (video3.readyState === 4) {
       video3check=true
     } 
    setTimeout(() => {
      if (!video1check||!video2check||!video3check) {
        loader.style.zIndex='200'  
        loader.classList.add('show')     
      }
    },1000);
    
    if (video1check&&video2check&&video3check){   
      loader.classList.remove('show')
      loader.classList.add('short-vanish')
      loader.style.zIndex='-200'
      
        clearInterval(clearcheck)
        value=0
        counter=0

        setTimeout(() => {
          loop.classList.add('short-vanish')
          video1.play()
      
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
            backButton.addEventListener('click', function () {
              backButton.style.pointerEvents = 'none'
              loop.load()
              loop.pause()
              InterpolateVideo(video2, video2, video3)
              HideShowCont()
              
              video3.addEventListener('ended', () => {
                loop.style.zIndex = '-5'
                video3.classList.add('short-vanish')
                loop.classList.remove('short-vanish')
                loop.play()
      
                Setup()
                setTimeout(() => {
                  loop.style.zIndex = '-1'
                  video1.remove()
                  video2.remove()
                  video3.remove()
                  showCont.innerHTML=''
                }, 300)
              })
            })
          })
        }, 1000)
      }
    }
  }    
  
})

easilyAGP_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Easily Accessible Grace Port/1.mp4#t=0.1',
    'assets/Easily Accessible Grace Port/2.mp4#t=0.1',
    'assets/Easily Accessible Grace Port/3.mp4#t=0.1'
  )
  createContent(
    '10%',
    '30%',
    'Easily Accesible Grace Port',
    `Grace ports provide convenient communication\nand low-voltage power portals at the outside of the\nmachine's electrical cabinet`,
    'easilyAGP_p'
  )
  createSvg('15%', '34%', '66%', '28%', '66%', '28%')
  createBackButton()

  check1(value) 
  let video1check=false
  let video2check=false
  let video3check=false
 
 function check1(counter){ 
   clearcheck = setInterval(repeatcheck,500,counter)  
   function repeatcheck (counter){
     if (video1.readyState === 4) {
       video1check=true
     }
     if (video2.readyState === 4) {
       video2check=true
     }
     if (video3.readyState === 4) {
       video3check=true
     }
     setTimeout(() => {
      if (!video1check||!video2check||!video3check) {
        loader.style.zIndex='200'  
        loader.classList.add('show')     
      }
    },1000);
  
    if (video1check&&video2check&&video3check){   
      loader.classList.remove('show')
      loader.classList.add('short-vanish')
      loader.style.zIndex='-200'
        clearInterval(clearcheck)
        value=0
        counter=0

        setTimeout(() => {
          loop.classList.add('short-vanish')
          video1.play()
      
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
            backButton.addEventListener('click', function () {
              backButton.style.pointerEvents = 'none'
              HideShowCont()
              loop.load()
              loop.pause()
              setTimeout(() => {
                InterpolateVideo(video2, video2, video3)
              }, 500)
              
              video3.addEventListener('ended', () => {
                loop.style.zIndex = '-5'
                video3.classList.add('short-vanish')
                loop.classList.remove('short-vanish')
                loop.play()
      
                Setup()
      
                setTimeout(() => {
                  loop.style.zIndex = '-1'
                  video1.remove()
                  video2.remove()
                  video3.remove()
                  showCont.innerHTML=''
                }, 500)
              })
            })
          })
        }, 1000)
      }
    }
  }
  
})

fourCIDO_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Four Case Infeed Direction Options/1.mp4#t=0.1',
    'assets/Four Case Infeed Direction Options/2.mp4#t=0.1',
    'assets/Four Case Infeed Direction Options/3.mp4#t=0.1'
  )

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

  createBackButton()

  check1(value) 
  let video1check=false
  let video2check=false
  let video3check=false

  function check1(counter){ 
    clearcheck = setInterval(repeatcheck,500,counter)  
    function repeatcheck (counter){
      if (video1.readyState === 4) {
        video1check=true
      }
      if (video2.readyState === 4) {
        video2check=true
      }
      if (video3.readyState === 4) {
        video3check=true
      }
      setTimeout(() => {
        if (!video1check||!video2check||!video3check) {
          loader.style.zIndex='200'  
          loader.classList.add('show')     
        }
      },1000);
    
      if (video1check&&video2check&&video3check){   
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex='-200'
        
          clearInterval(clearcheck)
          value=0
          counter=0
          
        setTimeout(() => {
          loop.classList.add('short-vanish')
          video1.play()
          setTimeout(() => {
            HideShowCont()
            InterpolateVideo(loop, video1, video2)
      
            backButton.addEventListener('click', function () {
              backButton.style.pointerEvents = 'none'
              loop.load()
              loop.pause()
              InterpolateVideo(video2, video2, video3)
              HideShowCont()
              
              video3.addEventListener('ended', () => {
                loop.style.zIndex = '-5'
                video3.classList.add('short-vanish')
                loop.classList.remove('short-vanish')
                loop.play()
      
                Setup()
                setTimeout(() => {
                  loop.style.zIndex = '-1'
                  video1.remove()
                  video2.remove()
                  video3.remove()
                  showCont.innerHTML=''
                }, 300)
              })
            })
          }, 6000)
        }, 1000)
      }
    }
  }
  
})

maximumU_button.addEventListener('click', function (e) {
  Setup()

  createVideos(
    'assets/Maximum Uptime/1.mp4#t=0.1',
    'assets/Maximum Uptime/2.mp4#t=0.1',
    'assets/Maximum Uptime/3.mp4#t=0.1'
  )
  createContent(
    '58%',
    '35%',
    'Maximum Uptime',
    'Utilizing a FANUC M710iC/50H robot with a MTBF 80,000 hrs maximizes uptime and minimizes maintenance requirements',
    'maximumU_p'
  )
  createSvg('59%', '37%', '18%', '60%', '18%', '60%')
  createBackButton()

  check1(value) 
  let video1check=false
 let video2check=false
 let video3check=false

function check1(counter){ 
  clearcheck = setInterval(repeatcheck,500,counter)  
  function repeatcheck (counter){
    if (video1.readyState === 4) {
      video1check=true
    }
    if (video2.readyState === 4) {
      video2check=true
    }
    if (video3.readyState === 4) {
      video3check=true
    } 
    setTimeout(() => {
      if (!video1check||!video2check||!video3check) {
       loader.style.zIndex='200'  
       loader.classList.add('show')     
      }
    },1000);
    
    if (video1check&&video2check&&video3check){   
      loader.classList.remove('show')
      loader.classList.add('short-vanish')
      loader.style.zIndex='-200'
      
        clearInterval(clearcheck)
        value=0
        counter=0
        
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
                  showCont.innerHTML=''
                }, 300)
              })
            })
          })
        }, 1000)        
      }
    }
  }
})

quickS_button.addEventListener('click', function (e) {
  Setup()

  createVideos(null, 'assets/Quick Start Up/1.mp4#t=0.1', null)

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

  createBackButton()


  check1(value)
  
 let video2check=false
 

function check1(counter){ 
  clearcheck = setInterval(repeatcheck,500,counter)  
  function repeatcheck (counter){
    
    if (video2.readyState === 4) {
      video2check=true
    }
    setTimeout(() => {
      if (!video2check) {
      
       loader.style.zIndex='200'  
       loader.classList.add('show')     
       
      }
    },1000);
    
    if (video2check){   
      loader.classList.remove('show')
      loader.classList.add('short-vanish')
      loader.style.zIndex='-200'
          
        clearInterval(clearcheck)
        value=0
        counter=0        
        setTimeout(() => {
          video2.play()
      
          InterpolateVideo(loop, loop, video2)
          HideShowCont()
          setTimeout(() => {
            loop.load()
            loop.pause()
            loop.style.zIndex = '-5'
          }, 1000)
      
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
              showCont.innerHTML=''
            }, 300)
          })
        }, 1000)
      }
    }
  }
        
})
