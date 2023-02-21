import React from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
/**
 * 
 */
const Orders: React.FC<{}> = () => {
  return (
    <View>
      <Text>订单</Text>
    </View>
  );
}

export default observer(Orders)
