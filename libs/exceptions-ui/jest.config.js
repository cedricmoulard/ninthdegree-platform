module.exports = {
  name: 'exceptions-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/exceptions-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
