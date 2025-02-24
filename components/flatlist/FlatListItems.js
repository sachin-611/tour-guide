import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import {FlatList} from 'react-native'
import CardWrapper from '../card-wrapper/CardWrapper'
import { useTourGuide } from '../../hooks/useTourGuide'
import {Button} from 'react-native'

const FlatListItems = () => {
  const {start,currentStep} = useTourGuide();
  const listRef = useRef();

  useLayoutEffect(() => {
    if(currentStep !== -1){
      listRef.current.scrollToIndex({index: currentStep,animated: true})
    }
  }, [currentStep])

  return (
    <View>
      <Button title="start tour" onPress={()=>{start()}}/>
      <FlatList 
              renderItem={({item}) => <CardWrapper index={item.index} color={item.color} width={item.width}/>}
              data={[{index:0, color:'red',width:400},{index:1, color:'blue',width:500},{index:2, color:'green',width:200},{index:3, color:'grey',width:700},{index:4, color:'yellow',width:600},{index:5, color:'white',width:150}]}
              keyExtractor={(item) => item.index.toString()}
              ref={listRef}
            />
    </View>
  )
}

export default FlatListItems