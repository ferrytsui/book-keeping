import { defineComponent, PropType } from 'vue';
import { PlusButton } from '../../shared/PlusButton';
import s from './ItemSummary.module.scss'
export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li><span>收入</span><span>120</span></li>
          <li><span>支出</span><span>30</span></li>
          <li><span>净收入</span><span>90</span></li>
        </ul>
        <ol class={s.list}>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥123</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥123</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥123</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
        </ol>
        <div class={s.more}>向下滑动加载更多</div>
        <PlusButton iconName='plus' />
      </div>
    )
  }
})