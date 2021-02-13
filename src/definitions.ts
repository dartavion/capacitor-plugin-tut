declare module '@capacitor/core' {
  interface PluginRegistry {
    Tutorial: TutorialPlugin;
  }
}

export interface TutorialPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
