import {
  //
  defineAppConfig,
  // history,
  defineDataLoader,
} from 'ice';
import { defineAuthConfig } from '@ice/plugin-auth/types';
import { defineStoreConfig } from '@ice/plugin-store/types';

import { queryTagList } from '@/api';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));

export const authConfig = defineAuthConfig(
  async (
    //
    _appData,
  ) => {
    // const { userInfo = {} } = appData;
    // if (userInfo.error) {
    //   history?.push(`/login?redirect=${window.location.pathname}`);
    // }
    return {
      initialAuth: {
        // admin: userInfo.userType === 'admin',
        // user: userInfo.userType === 'user',
        admin: true,
        user: true,
      },
    };
  },
);

export const storeConfig = defineStoreConfig(async (appData) => {
  const { tagList } = appData;
  return {
    initialStates: {
      video: {
        tagList,
      },
    },
  };
});

export const dataLoader = defineDataLoader(async () => {
  const { data } = await queryTagList();
  return {
    tagList: data || [],
  };
});
