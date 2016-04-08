const CategoryButton =  (category, target, dist) => {
		if(!category) {
			throw Exception('No Category of Tests Provided')
		}
		let buttonCat = category
		let catTarget = target ? target : 'div'
		let catDist = dist ? dist : 'js'

		var req = require('../' + category)
		this.numTests = req.length

		console.log(this.numTests)
}

export default CategoryButton