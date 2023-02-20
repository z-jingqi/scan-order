import React from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
/**
 * 
 */
const Ordering: React.FC<{}> = () => {
  return (
    <View className='index'>
      <Text>点餐</Text>
    </View>
  );
}

export default observer(Ordering)
