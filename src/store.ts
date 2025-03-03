import { createStore } from 'ice';
import user from '@/models/user';
import video from '@/models/video';

export default createStore({
  user,
  video,
});
