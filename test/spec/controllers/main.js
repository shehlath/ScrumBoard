'use strict';

describe('Controller: TaskController', function () {

  // load the controller's module
  beforeEach(module('app'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('TaskController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('controller should be defined', function () {
    expect(MainCtrl).toBeDefined();
  });
});
