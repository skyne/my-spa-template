import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
const imagesFolder = require.context('../../assets/img/', true);


const imagesStyle = css`
position absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;

const Wrapper = styled.div`
position: relative;
width: ${props => props.width ? props.width : '100%'};
height: ${props => props.height ? props.height : '0'};
`;

const ImgPlaceholder = styled.img`
${imagesStyle};
filter: blur(8px);
opacity: 1;
z-index: 1;
transition: opacity .6s ease-in;
`;

const ImgFinal = styled.img`
${imagesStyle};
z-index: 0;
`;

export default class LazyLoadedImage extends React.PureComponent {
    state = {
        loaded: false,
    }
    imageWithPlaceholder = imagesFolder(this.props.src, true);
    setLoaded = loaded => this.setState({ loaded })

    render() {
    const {
        imageProps = {},
        alt,
        ...props
    } = this.props;

    return (
        <Wrapper {...props}>
        <ImgFinal src={this.imageWithPlaceholder.src} alt={alt} {...imageProps} onLoad={() => this.setLoaded(true)} />
        <ImgPlaceholder src={this.imageWithPlaceholder.trace} alt={alt} deactivated={this.state.loaded}/>
        </Wrapper>
    );
    }
}

// class LazyLoadedImage extends React.PureComponent {
//     constructor(props){
//         super(props);

//         this.imageWithPlaceholder = imagesFolder(this.props.src, true);
//         this.state = {
//             imageUrl: this.imageWithPlaceholder.trace,
//         };

//         this.onImageLoaded = this.onImageLoaded.bind(this);
//     }

//     componentDidMount(){

//         this.toDataURL(this.imageWithPlaceholder.src, this.onImageLoaded);
//         // const image = new Image();
//         // image.src = this.imageWithPlaceholder.src;
//         // image.onload = () => {
//         //         image.width = this.props.width;
//         //         image.height = this.props.height;

//         //         //this.container.classList.remove('blur');
//         //         //this.container.classList.add('unblur');

//         //         this.container.appendChild(image);
//         // };
//     }

//     toDataURL(url, callback) {
//         const xhr = new XMLHttpRequest();
//         xhr.onload = function() {
//           const reader = new FileReader();
//           reader.onloadend = function() {
//             callback(reader.result);
//           };
//           reader.readAsDataURL(xhr.response);
//         };
//         xhr.open('GET', url);
//         xhr.responseType = 'blob';
//         xhr.send();
//     }

//     onImageLoaded(dataUrl) {
//         this.setState({ imageUrl: dataUrl });
//     }


//     render(){
//         const style= {
//             width: +this.props.width,
//             height: +this.props.height,
//             backgroundImage: 'url("' + this.state.imageUrl + '")'
//         };

//         return (
//             <div style={style} className="placeholder blur" ref={(container) => this.container = container} >

//             </div>
//         );
//     }
// }

// LazyLoadedImage.propTypes = {
//     src: PropTypes.string
// };
