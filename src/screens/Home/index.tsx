import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

export function Home(){
const carData = {
  brand: 'AUDI',
  name: 'RS 5 Coupé',
  rent: {
    period: 'Ao dia',
    price: 120,
  },
  thumbnail: 'http://www.downloadclipart.net/large/audi-rs5-red-png.png'
}

return (
   <Container>
     <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
     />
     <Header>
       <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
     </Header>
     
     <CarList
        data={[1,2,3,4,5,6,7,8,9,10]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Car data={carData} />}
     />

   </Container>
);
}