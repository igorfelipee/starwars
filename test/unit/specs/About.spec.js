import Vue from 'vue';
import About from '@/pages/About';

describe('About.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(About);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('find me');
  });
});
