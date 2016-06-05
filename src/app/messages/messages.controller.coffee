'use strict'
# Messages controller
angular.module('identifiAngular').controller 'MessagesController', [
  '$scope'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  # 'Authentication'
  'Messages'
  'config'
  ($scope, $rootScope, $window, $stateParams, $location, Messages, config) -> #, Authentication
    $scope.idType = $stateParams.idType
    $scope.idValue = $stateParams.idValue
    $scope.messages = []
    $scope.newMessage =
      type: 'rating'
      rating: 1
      comment: ''
    $scope.newConnection =
      type: ''
      value: ''

    $scope.iconCount = (rating) ->
      new Array(Math.max(1, Math.abs(rating)))

    $scope.iconStyle = (rating) ->
      iconStyle = 'neutral'
      if rating > 0
        iconStyle = 'positive'
      else if rating < 0
        iconStyle = 'negative'
      iconStyle

    $scope.iconClass = (rating) ->
      iconStyle = 'glyphicon-question-sign'
      if rating > 0
        iconStyle = 'glyphicon-thumbs-up'
      else if rating < 0
        iconStyle = 'glyphicon-thumbs-down'
      iconStyle

    $scope.collapseFilters = $window.innerWidth < 992

    # Create new Message

    $scope.create = (event, params, id) ->
      event.stopPropagation()
      # Create new Message object
      message = new Messages(
        recipientType: $scope.idType
        recipientValue: $scope.idValue)
      angular.extend message, params
      message.$save ((response) ->
        # Clear form fields
        $scope.newMessage.comment = ''
        $scope.newMessage.rating = 1
        $scope.newConnection.type = ''
        $scope.newConnection.value = ''
        $scope.$root.$broadcast 'MessageAdded',
          message: message
          id: id
        return
      ), (errorResponse) ->
        $scope.error = errorResponse.data.message
        return
      return

    $scope.find = (offset) ->
      $rootScope.pageTitle = ' - Latest messages'
      if !isNaN(offset)
        $scope.filters.offset = offset
      params = angular.extend({
        idType: $scope.idType
        idValue: $scope.idValue
      }, $scope.filters, if $scope.filters.maxDistance > -1 then config.defaultViewpoint else {})
      console.log params
      messages = Messages.query params, ->
        $scope.processMessages messages
        if $scope.filters.offset == 0
          $scope.messages = messages
        else
          for key of messages
            if isNaN(key)
              i++
              continue
            $scope.messages.push messages[key]
        $scope.messages.$resolved = messages.$resolved
        $scope.filters.offset = $scope.filters.offset + (messages.length or 0)
        if messages.length < $scope.filters.limit
          $scope.messages.finished = true
      if offset == 0
        $scope.messages = {}
      $scope.messages.$resolved = messages.$resolved

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      angular.extend $scope.filters,
        offset: 0
        receivedOffset: 0
        sentOffset: 0
      $scope.find 0

    # Find existing Message
    $scope.findOne = ->
      $scope.message = Messages.get { id: $stateParams.id }, ->
        $rootScope.pageTitle = ' - Message ' + $stateParams.id
        $scope.message.data = KJUR.jws.JWS.parse($scope.message.jws).payloadObj
        $scope.message.strData = JSON.stringify($scope.message.data, undefined, 2)
        $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail or $scope.message.data.author[0][1]).toString()
        $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail or $scope.message.data.recipient[0][1]).toString()

]
