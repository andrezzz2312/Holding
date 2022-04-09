const button1 = document.getElementById('button1')
const svg1 = document.getElementById('svg1')
const svg2 = document.getElementById('svg2')
const video0 = document.getElementById('video0')
const showCont = document.getElementById('showCont')
const back = document.getElementById('back')
const container = document.getElementById('container1')

button1.addEventListener('click', function (e) {
  button1.classList.add('vanish')
  svg1.classList.add('vanish')
  svg2.classList.add('vanish')

  setTimeout(() => {
    const video1 = document.createElement('video')

    video0.classList.add('video-vanish')

    video1.style.zIndex = '-2'
    video1.src = '../assets/2.mp4'
    video1.autoplay = true
    video1.controls = false
    video1.muted = false

    const box = document.getElementById('video')

    box.appendChild(video1)

    video1.addEventListener('ended', () => {
      video1.classList.add('video-vanish')
      showCont.classList.remove('hidden')
      showCont.classList.add('video-show')
      back.classList.remove('hidden')
      back.classList.add('video-show')
      const video2 = document.createElement('video')
      video1.style.zIndex = '-1'
      video2.style.zIndex = '-2'
      video2.src = '../assets/3.mp4'

      video2.autoplay = true
      video2.controls = false
      video2.muted = false

      const box = document.getElementById('video')
      box.appendChild(video2)

      back.addEventListener('click', function (event) {
        video2.classList.add('video-vanish')
        showCont.classList.remove('video-show')
        back.classList.remove('video-show')
        showCont.classList.add('video-vanish')
        back.classList.add('video-vanish')
        const video3 = document.createElement('video')
        video2.style.zIndex = '-1'
        video3.style.zIndex = '-2'

        video3.src = '../assets/4.mp4'

        video3.autoplay = true
        video3.controls = false
        video3.muted = false

        const box = document.getElementById('video')

        box.appendChild(video3)
        video3.addEventListener('ended', () => {
          video3.style.zIndex = '-1'
          video0.style.zIndex = '-2'
          video3.classList.add('video-vanish')
          video0.classList.remove('video-vanish')
          video0.load()
        })
      })
    })
  }, 2000)
})

function videoAppend() {}
