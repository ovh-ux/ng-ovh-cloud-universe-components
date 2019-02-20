import angular from 'angular';

import cucConfig from './config';
import cucHelper from './helper';
import cucMessage from './message';
import cucNavigation from './navigation';
import cucPoll from './poll';
import cucProducts from './products';
import cui from './cui';

const moduleName = 'ngOvhCloudUniverseComponents';

angular
  .module(moduleName, [
    cucConfig,
    cucHelper,
    cucMessage,
    cucNavigation,
    cucPoll,
    cucProducts,
    cui,
  ]);

export default moduleName;
