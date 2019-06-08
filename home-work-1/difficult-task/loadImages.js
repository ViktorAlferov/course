let imagesPaths = ['/img/img_1.jpg', '/img/img_2.jpg', '/img/img_3.jpg', '/img/img_4.jpg']

const loadImage = (paths) => {
	return new Promise(resolve => {
		const img = new Image()
		img.onload = () => {
			return resolve(paths)
		}
		img.onerror = () => {
			console.error(paths)
        }
        img.src = paths
        document.body.appendChild(img)
    })
}

const loadImages = (...imagesPaths) => Promise.all(imagesPaths.map(loadImage))
loadImages(...imagesPaths)