import { create } from 'zustand';

export const useSettingsStore = create((set) => ({
  settings: [false, false],
  toggleMusic: () => {set((state) => ({settings: [!state.settings[0], state.settings[1]]}))},
  toggleSfx: () => {set((state) => ({settings: [state.settings[0], !state.settings[1]]}))},
  musicSource: require('./assets/musicOn.png'),
  sfxSource: require('./assets/sfxOn.png'),
  changeMSource: () => {set((state) => ({musicSource: state.musicSource === require('./assets/musicOn.png') ? require('./assets/musicOff.png') : require('./assets/musicOn.png')}))},
  changeSSource: () => {set((state) => ({sfxSource: state.sfxSource === require('./assets/sfxOn.png') ? require('./assets/sfxOff.png') : require('./assets/sfxOn.png')}))},
}));