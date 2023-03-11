const block1 = document.querySelector('main .ourTeam .container .blocks .block:nth-child(1)')
const comm1 = document.querySelector('main .ourTeam .container .comment#first')
const comm1S = window.getComputedStyle(comm1)

const block2 = document.querySelector('main .ourTeam .container .blocks .block:nth-child(2)')
const comm2 = document.querySelector('main .ourTeam .container .comment#second')
const comm2S = window.getComputedStyle(comm2)

const block3 = document.querySelector('main .ourTeam .container .blocks .block:nth-child(3)')
const comm3 = document.querySelector('main .ourTeam .container .comment#third')
const comm3S = window.getComputedStyle(comm3)

const block4 = document.querySelector('main .ourTeam .container .blocks .block:nth-child(4)')
const comm4 = document.querySelector('main .ourTeam .container .comment#fourh')
const comm4S = window.getComputedStyle(comm4)

const comms = document.querySelectorAll('main .ourTeam .container .comment') //обращение ко всему элементу
const block = document.querySelectorAll('main .ourTeam .container .blocks .block') //обращение ко всему элементу

for (let blocks of block){
	blocks.addEventListener("click", function(e){
		for (let commsS of comms){
			let commsAll = window.getComputedStyle(commsS)
			if (blocks.id == 'b1') {
				if (commsS.id !== 'first' && commsAll.display == 'flex') {	// действие с блоком с display = 'flex', при нажатии на 1 блок
					//это если какой-либо иной блок, кроме первого имеет флекс, то он убирается
					commsS.style.animation = 'commOut .5s'
					setTimeout(() => commsS.style.display = 'none', 500)
				} else if (commsS.id == 'first') {									// иначе же,
					setTimeout(() => commsS.style.display = 'flex', commsS.style.animation = 'commIn .5s', 500)
				}
				
			}
			if (blocks.id == 'b2') {
				if (commsS.id !== 'second' && commsAll.display == 'flex') {
					commsS.style.animation = 'commOut .5s'
					setTimeout(() => commsS.style.display = 'none', 500)
				} else if (commsS.id == 'second') {
					setTimeout(() => commsS.style.display = 'flex', commsS.style.animation = 'commIn .5s', 500)
				}
			}
			if (blocks.id == 'b3') {
				if (commsS.id !== 'third' && commsAll.display == 'flex') {
					commsS.style.animation = 'commOut .5s'
					setTimeout(() => commsS.style.display = 'none', 500)
				} else if (commsS.id == 'third') {
					setTimeout(() => commsS.style.display = 'flex', commsS.style.animation = 'commIn .5s', 500)
				}
			}
			if (blocks.id == 'b4') {
				if (commsS.id !== 'fourh' && commsAll.display == 'flex') {
					commsS.style.animation = 'commOut .5s'
					setTimeout(() => commsS.style.display = 'none', 500)
				} else if (commsS.id == 'fourh') {
					setTimeout(() => commsS.style.display = 'flex', commsS.style.animation = 'commIn .5s', 500)
				}
			}
		}
	})
}

// commsS.style. = ''
// setTimeout(() => commsS.style. = '', 500)
// console.log('бля')













