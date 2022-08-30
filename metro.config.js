/**
 * Metro configuration for React Native
 * https://reactnative.dev/blog/2019/03/12/releasing-react-native-059#-faster-app-launches-with-inline-requires
 * Metro Docs: https://facebook.github.io/metro/
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
