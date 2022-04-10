import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrappeer,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
return (
  <Container>
    <ImageIndexes>
      <ImageIndex  active={false}/>
      <ImageIndex  active={true}/>
      <ImageIndex  active={false}/>
      <ImageIndex  active={false}/>
    </ImageIndexes>

    <CarImageWrappeer>
      <CarImage
        source={{ uri: imagesUrl[0]}}
        resizeMode="contain"
      />
    </CarImageWrappeer>
   </Container>
);
}
