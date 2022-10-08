import { isWebp } from './modules/functions.js'
isWebp()

function switchPlans(selectorBtn, selectorListFirst, selectorListSecond) {
	let switcherBtn = document.querySelector(selectorBtn)
	let list1 = document.querySelector(selectorListFirst)
	let list2 = document.querySelector(selectorListSecond)

	switcherBtn.addEventListener('change', (e) => {
		let target = e.target
		if (!target.checked) {
			list1.classList.remove('d-none')
			list2.classList.add('d-none')
		} else {
			list2.classList.remove('d-none')
			list1.classList.add('d-none')
		}
	})
}

switchPlans('#plans', '#month-list', '#year-list')
