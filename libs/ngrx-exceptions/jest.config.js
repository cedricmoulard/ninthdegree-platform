module.exports = {
  name: 'ngrx-exceptions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngrx-exceptions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
