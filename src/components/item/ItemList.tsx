import { defineComponent, PropType, reactive, ref, watchEffect } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Overlay } from 'vant';
import { Tab, Tabs } from '../../shared/Tabs';
import { Time } from '../../shared/time';
import s from './ItemList.module.scss';
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({
  setup: (props, context) => {
    const refSelected = ref('本月')
    const time = new Time()
    const customTime = reactive({
      start: new Time(),
      end: new Time()
    })
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth()
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]
    watchEffect(() => {
      if (refSelected.value === '自定义时间') {
        overlayVisible.value = true
      }
    })
    const overlayVisible = ref(false)
    return () => (
      <MainLayout>{{
        title: () => '薯条记账',
        icon: () => <Icon name="menu" />,
        default: () => <>
          <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
            <Tab name='本月'>
              <ItemSummary 
                startDate={timeList[0].start.format()} 
                endDate={timeList[0].end.format()}/>
            </Tab>
            <Tab name='上月'>
              <ItemSummary
                  startDate={timeList[1].start.format()}
                  endDate={timeList[1].end.format()} />
            </Tab>
            <Tab name='今年'>
              <ItemSummary
                  startDate={timeList[2].start.format()}
                  endDate={timeList[2].end.format()} />
            </Tab>
            <Tab name='自定义时间'>
              <ItemSummary
                  startDate={timeList[2].start.format()}
                  endDate={timeList[2].end.format()} />
            </Tab>
          </Tabs>
          <Overlay show={overlayVisible.value} class={s.overlay}>
            <div class={s.overlay_inner}>
              <head>请选择时间</head>
            </div>
          </Overlay>
        </>
      }}</MainLayout>
    )
  }
})