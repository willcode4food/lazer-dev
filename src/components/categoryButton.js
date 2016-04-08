import s from  '../_site/debug.css'

const categoryButton =  (category, target, dist) => {
		if(!category) {
			throw Exception('No Category of Tests Provided')
		}
		let buttonCat = category
		let catTarget = target ? target : 'div'
		let catDist = dist ? dist : 'js'

		var req = require.context('./' + buttonCat, true, /^\.\/.*\.js$/)
		this.numTests = req.keys.length

		console.log(this.numTests)
}

export default categoryButton