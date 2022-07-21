import { defineComponent } from 'vue';
import { Navbar } from '../shared/Navbar';
export const MainLayout = defineComponent({
  setup: (props, { slots }) => {
    return () => (
      <div>
        <Navbar>{
          {
            default: () => slots.title?.(),
            icon: () => slots.icon?.()
          }  
        }</Navbar>
        { slots.default?.() } 
      </div>
    )
  }
})