import { ImageBg, Image } from "./style";

export function Imagem({ imgHeight, imgWidth, imgSrc, imgAlt, imgBgColor, imgDisplay, imgDisplayMedia }) {
  return(
    <ImageBg bg={imgBgColor}>
      <Image 
        height={imgHeight}
        width={imgWidth} 
        src={imgSrc} 
        alt={imgAlt} 
        imgDisplay={imgDisplay}
        imgDisplayMedia={imgDisplayMedia}
      />
    </ImageBg>
  );
}