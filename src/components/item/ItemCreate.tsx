import { defineComponent, PropType, ref } from 'vue';
import s from './ItemCreate.module.scss'
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const moneyKind = ref('支出')
    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon class={s.navIcon} name="cancel" />  ,
        default: () => <>
          <Tabs v-model:selected={moneyKind.value}>
            <Tab name='支出'>
              icon列表1
            </Tab>
            <Tab name='收入'>
              icon列表2
            </Tab>
          </Tabs>
          <div class={s.inputPad_wrapper}>
            <InputPad />
          </div>
        </>
      }}</MainLayout> 
    )
  }
})