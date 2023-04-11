import image1 from '../../3.jpg'
import image2 from '../../messi.jpg'
import image3 from '../../DefaultLocker.jpg'
import image4 from '../../messi.jpg'


export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
