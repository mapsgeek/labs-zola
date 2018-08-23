import Component from '@ember/component';
import { computed } from 'ember-decorators/object'; // eslint-disable-line
import moment from 'moment';
import { ChildMixin } from 'ember-composability-tools';

const defaultFormat = 'YYYY-MM-DD';
const defaultMax = new Date();
const defaultStart = [1032370151000, defaultMax.getTime()];

const fromEpoch = function(number, format = defaultFormat) {
  return moment(number).format(format);
};

export default Component.extend(ChildMixin, {
  format: {
    to: number => fromEpoch(number, 'YYYY-MM'),
    from: number => fromEpoch(number, 'YYYY-MM'),
  },

  column: '',
  start: defaultStart, // epoch time
  min: defaultStart[0],
  max: defaultStart[1],

  actions: {
    sliderChanged(value) {
      const [min, max] = value
        // .map(epoch => fromEpoch(epoch))
        // .map((date, i) => { // eslint-disable-line
        //   if (i === 0) {
        //     return moment(date).startOf('month');
        //   }
        //   return moment(date).endOf('month');
        // });
      const { layerGroup, layerID, column } = this;

      this.set('start', value);

      const expression = ['all', ['>=', column, min], ['<=', column, max]];
      console.log(expression);
      layerGroup.setFilterForLayer(layerID, expression);
    },
  },
});
