import { View, Text } from 'react-native'
import React from 'react'

const Card = ({index,color,width}) => {
  return (
    <View style={{ backgroundColor:color, height:width, width:400, borderRadius: 40, padding: 10, margin: 10, alignItems: 'center',
        justifyContent: 'center'}}>
      <Text>Card - {index}</Text>
    </View>
  )
}

export default Card