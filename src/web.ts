import { WebPlugin } from '@capacitor/core';
import { TutorialPlugin } from './definitions';

export class TutorialWeb extends WebPlugin implements TutorialPlugin {
  constructor() {
    super({
      name: 'Tutorial',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Tutorial = new TutorialWeb();

export { Tutorial };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Tutorial);
