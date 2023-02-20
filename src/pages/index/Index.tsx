import React from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'

import './index.scss'

const Index: React.FC<{}> = () => {
  return (
    <View className='index'>
      <Text>首页</Text>
    </View>
  );
}

export default observer(Index);
