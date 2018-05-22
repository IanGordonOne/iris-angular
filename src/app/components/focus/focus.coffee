angular.module 'identifiAngular'
.directive 'focusOn', ->
  (scope, elem, attr) ->
    scope.$on 'focusOn', (e, name) ->
      if name == attr.focusOn
        elem[0].focus()
      return
    return

angular.module 'identifiAngular'
.factory 'focus', ($rootScope, $timeout) ->
  (name) ->
    $timeout ->
      $rootScope.$broadcast 'focusOn', name
      return
    return
