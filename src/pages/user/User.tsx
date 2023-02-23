import React from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
/**
 * 
 */
const User: React.FC<{}> = () => {
  return (
    <View>
      <Text>我的</Text>
    </View>
  );
}

export default observer(User)
