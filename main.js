const btSim = document.getElementById('btnSim')
const btNao = document.getElementById('btnNao')
const resultado = document.getElementById('resultado')

btNao.addEventListener('mousemove', () => {
  let x = Math.random() * (window.innerWidth - btNao.clientWidth)
  let y = Math.random() * (window.innerHeight - btNao.clientHeight)

  btNao.style.position = 'absolute'
  btNao.style.left = `${x}px`
  btNao.style.top = `${y}px`
})

btSim.addEventListener('click', () => {
  resultado.classList.add('active')
})
