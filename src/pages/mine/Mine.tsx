import React from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
/**
 * 
 */
const Mine: React.FC<{}> = () => {
  return (
    <View className='index'>
      <Text>我的</Text>
    </View>
  );
}

export default observer(Mine)
