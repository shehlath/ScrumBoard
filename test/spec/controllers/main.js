'use strict';

describe('Controller: TaskController', function () {
  beforeEach(module('app'));

  var MainCtrl,
    scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('TaskController', {
      $scope: scope
    });
  }));

  it('controller should be defined', function () {
    expect(MainCtrl).toBeDefined();
  });
});
