module.exports = {
  name: 'angular-core-workshop-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-core-workshop-one',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
