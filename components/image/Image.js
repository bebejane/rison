import { Image as DatoImage } from "react-datocms";

/* Image wrapper to handle SVG files */

const Image = (props) => {
	const image = props.data
	const { responsiveImage } = image;
	const forwardProps = {...props, data:undefined}
	
	if(image.mimeType === 'image/svg+xml')
		return <img src={image.url} width={forwardProps.width || image.width} height={forwardProps.height || image.height} />

	return <DatoImage {...forwardProps } data={responsiveImage || image} />
}

export default Image;
