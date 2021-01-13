import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);

export default {
  install: (app) => {
    app.config.globalProperties.$date = dayjs;
  }
}