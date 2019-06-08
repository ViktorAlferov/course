let imagesPaths = ['/img/img_1.jpg', '/img/img_2.jpg', '/img/img_3.jpg']

const loadImage = (path) => {
	return new Promise(resolve => {
		const img = new Image()
		img.onload = () => {
			return resolve(path)
		}
		img.onerror = () => {
			console.error(path)
        }
        img.src = path
        document.body.appendChild(img)
    })
}

const loadImages = (...imagesPaths) => Promise.all(imagesPaths.map(loadImage))
loadImages(...imagesPaths)