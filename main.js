const button1 = document.getElementById('button1')
const svg1 = document.getElementById('svg1')
const svg2 = document.getElementById('svg2')
const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')
const video3 = document.getElementById('video3')
const video4 = document.getElementById('video4')
const showCont = document.getElementById('showCont')
const back = document.getElementById('back')

button1.addEventListener('click', function (e) {
  button1.classList.add('vanish')
  svg1.classList.add('vanish')
  svg2.classList.add('vanish')

  setTimeout(() => {
    video1.classList.add('video-vanish')
    video2.play()

    video2.addEventListener('ended', () => {
      video1.pause()
      console.log('video 2 ended')
      video2.classList.add('video-vanish')
      video3.play()
      showCont.classList.remove('hidden')
      showCont.classList.add('video-show')
      back.classList.remove('hidden')
      back.classList.add('video-show')

      back.addEventListener('click', function (event) {
        video3.classList.add('video-vanish')
        video3.pause()
        showCont.classList.remove('video-show')
        back.classList.remove('video-show')
        showCont.classList.add('video-vanish')
        back.classList.add('video-vanish')
        video4.play()
        video4.addEventListener('ended', () => {
          video4.classList.add('video-vanish')
          video1.style.zIndex = '-5'
          video1.classList.remove('video-vanish')
          video1.load()
          button1.classList.remove('vanish')
          svg1.classList.remove('vanish')
          svg2.classList.remove('vanish')
          setTimeout(() => {
            video1.style.zIndex = '-1'
            video2.classList.remove('video-vanish')
            video3.classList.remove('video-vanish')
            video4.classList.remove('video-vanish')
          }, 1000)
        })
      })
    })
  }, 2000)
})
