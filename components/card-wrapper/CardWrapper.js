import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import Card from '../card/Card'
import { TourStepZone } from './../tour-guide/TourStepZone';

const CardWrapper = ({index,color,width}) => {
    const [open, setOpen] = React.useState(false)
    const textRef= useRef();
  return (
    <View style={{alignItems: 'center'}}>
        <Card index={index} color={color} width={width}/>
        <Text onPress={()=>{
            setOpen(!open)
        }} ref={textRef}>CardWrapper - {index}</Text>
        <TourStepZone zone={index} targetRef={textRef}/>
    </View>
  )
}

export default CardWrapper