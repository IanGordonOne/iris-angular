(function() {
  angular.module('irisAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzSlider', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload', 'qrScanner', 'hm.readmore', 'ui-notification', 'angular-notification-icons']);

  angular.module('irisAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('irisAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('irisAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('irisAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLEVBQ0UsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixTQUEzQixFQUFzQyxZQUF0QyxFQUFvRCxZQUFwRCxFQUNBLFFBREEsRUFDVSxZQURWLEVBQ3dCLFdBRHhCLEVBQ3FDLGNBRHJDLEVBQ3FELGtCQURyRCxFQUVBLGlCQUZBLEVBRW1CLG9CQUZuQixFQUV5QyxVQUZ6QyxFQUVxRCxtQkFGckQsRUFHQSxtQkFIQSxFQUdxQixjQUhyQixFQUdxQyxXQUhyQyxFQUdrRCxhQUhsRCxFQUlBLGlCQUpBLEVBSW1CLDRCQUpuQixDQURGOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLE1BQTlCLENBQXFDLFFBQXJDLEVBQStDO0lBQUUsUUFBQSxDQUFBLENBQUE7YUFDL0MsUUFBQSxDQUFDLEtBQUQsQ0FBQTtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEK0MsQ0FBRjtHQUEvQzs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGFBQWYsQ0FBNkIsQ0FBQyxNQUE5QixDQUFxQyxvQkFBckMsRUFBMkQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMzRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQyRCxDQUFGO0dBQTNEOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLE1BQTlCLENBQXFDLFdBQXJDLEVBQWtELFFBQUEsQ0FBQyxJQUFELENBQUE7V0FDaEQsUUFBQSxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUE7TUFDRSxJQUFHLE9BQU8sSUFBUCxLQUFlLFFBQWYsSUFBNEIsTUFBL0I7UUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFJLE1BQUosQ0FBVyxHQUFBLEdBQU0sTUFBTixHQUFlLEdBQTFCLEVBQStCLElBQS9CLENBQWIsRUFBbUQsV0FBbkQ7QUFDUCxlQUFPLElBQUksQ0FBQyxXQUFMLENBQWlCLElBQUksQ0FBQyxRQUFMLENBQUEsQ0FBakIsRUFGVDs7QUFHQSxhQUFPO0lBSlQ7RUFEZ0QsQ0FBbEQ7O0VBT0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsTUFBOUIsQ0FBcUMsU0FBckMsRUFBZ0QsUUFBQSxDQUFBLENBQUE7V0FDOUMsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUNFLFVBQUEsQ0FBQSxFQUFBO01BQUEsQ0FBQSxHQUFJLENBQ0YsSUFERSxFQUVGLElBRkUsRUFHRixJQUhFLEVBSUYsSUFKRTtNQU1KLENBQUEsR0FBSSxLQUFBLEdBQVE7YUFDWixLQUFBLEdBQVEsQ0FBQyxDQUFFLENBQUEsQ0FBQyxDQUFBLEdBQUksRUFBTCxDQUFBLEdBQVcsRUFBWCxDQUFGLElBQW9CLENBQUUsQ0FBQSxDQUFBLENBQXRCLElBQTRCLENBQUUsQ0FBQSxDQUFBLENBQS9CO0lBUlY7RUFEOEMsQ0FBaEQ7QUF2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpTbGlkZXInLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJywgJ3FyU2Nhbm5lcicsICdobS5yZWFkbW9yZScsXG4gICd1aS1ub3RpZmljYXRpb24nLCAnYW5ndWxhci1ub3RpZmljYXRpb24taWNvbnMnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5maWx0ZXIgJ2VzY2FwZScsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpXG4gXVxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuZmlsdGVyICdvcmRpbmFsJywgLT5cbiAgKGlucHV0KSAtPlxuICAgIHMgPSBbXG4gICAgICAndGgnXG4gICAgICAnc3QnXG4gICAgICAnbmQnXG4gICAgICAncmQnXG4gICAgXVxuICAgIHYgPSBpbnB1dCAlIDEwMFxuICAgIGlucHV0ICsgKHNbKHYgLSAyMCkgJSAxMF0gb3Igc1t2XSBvciBzWzBdKVxuIl19

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('videostream', function() {
    return {
      scope: {
        uri: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var go;
        go = function() {
          var el, stream, videostream;
          if (!(scope.ipfs && scope.uri)) {
            return;
          }
          el = document.createElement('video');
          el.setAttribute('controls', true);
          el.setAttribute('style', 'max-width: 100%;');
          el.setAttribute('preload', 'metadata');
          el.addEventListener('loadedmetadata', function() {
            el.play(); // make it display poster (preview image). may load unnecessary amount of data?
            return el.pause();
          });
          stream = null;
          videostream = new window.videostream({
            createReadStream: function(opts) {
              var end, start;
              start = opts.start;
              end = opts.end ? start + opts.end + 1 : void 0;
              console.log('asked for data starting at byte', start, 'and ending at byte', end);
              if (stream && stream.destroy) {
                stream.destroy();
              }
              stream = scope.ipfs.catReadableStream(scope.uri, {
                offset: start,
                length: end && end - start
              });
              stream.on('error', console.error);
              return stream;
            }
          }, el);
          return element.append(el);
        };
        return scope.$watchGroup(['uri', 'ipfs'], go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb3N0cmVhbS92aWRlb3N0cmVhbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlkZW9zdHJlYW0vdmlkZW9zdHJlYW0uZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsYUFEYixFQUM0QixRQUFBLENBQUEsQ0FBQTtXQUN4QjtNQUFBLEtBQUEsRUFDRTtRQUFBLEdBQUEsRUFBSyxHQUFMO1FBQ0EsSUFBQSxFQUFNO01BRE4sQ0FERjtNQUdBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUE7UUFBQSxFQUFBLEdBQUssUUFBQSxDQUFBLENBQUE7QUFDSCxjQUFBLEVBQUEsRUFBQSxNQUFBLEVBQUE7VUFBQSxJQUFBLENBQUEsQ0FBYyxLQUFLLENBQUMsSUFBTixJQUFlLEtBQUssQ0FBQyxHQUFuQyxDQUFBO0FBQUEsbUJBQUE7O1VBQ0EsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO1VBQ0wsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsVUFBaEIsRUFBNEIsSUFBNUI7VUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixPQUFoQixFQUF5QixrQkFBekI7VUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixTQUFoQixFQUEyQixVQUEzQjtVQUNBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixnQkFBcEIsRUFBc0MsUUFBQSxDQUFBLENBQUE7WUFDcEMsRUFBRSxDQUFDLElBQUgsQ0FBQSxFQUFBO21CQUNBLEVBQUUsQ0FBQyxLQUFILENBQUE7VUFGb0MsQ0FBdEM7VUFHQSxNQUFBLEdBQVM7VUFDVCxXQUFBLEdBQWMsSUFBSSxNQUFNLENBQUMsV0FBWCxDQUNaO1lBQUEsZ0JBQUEsRUFBa0IsUUFBQSxDQUFDLElBQUQsQ0FBQTtBQUNoQixrQkFBQSxHQUFBLEVBQUE7Y0FBQSxLQUFBLEdBQVEsSUFBSSxDQUFDO2NBQ2IsR0FBQSxHQUFTLElBQUksQ0FBQyxHQUFSLEdBQWlCLEtBQUEsR0FBUSxJQUFJLENBQUMsR0FBYixHQUFtQixDQUFwQyxHQUEyQztjQUNqRCxPQUFPLENBQUMsR0FBUixDQUFZLGlDQUFaLEVBQStDLEtBQS9DLEVBQXNELG9CQUF0RCxFQUE0RSxHQUE1RTtjQUNBLElBQW9CLE1BQUEsSUFBVyxNQUFNLENBQUMsT0FBdEM7Z0JBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBQSxFQUFBOztjQUNBLE1BQUEsR0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFYLENBQTZCLEtBQUssQ0FBQyxHQUFuQyxFQUF3QztnQkFBRSxNQUFBLEVBQVEsS0FBVjtnQkFBaUIsTUFBQSxFQUFRLEdBQUEsSUFBTyxHQUFBLEdBQU07Y0FBdEMsQ0FBeEM7Y0FDVCxNQUFNLENBQUMsRUFBUCxDQUFVLE9BQVYsRUFBbUIsT0FBTyxDQUFDLEtBQTNCO0FBQ0EscUJBQU87WUFQUztVQUFsQixDQURZLEVBU1osRUFUWTtpQkFVZCxPQUFPLENBQUMsTUFBUixDQUFlLEVBQWY7UUFwQkc7ZUFxQkwsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFsQixFQUFtQyxFQUFuQztNQXRCSTtJQUhOO0VBRHdCLENBRDVCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvc3RyZWFtJywgLT5cbiAgICBzY29wZTpcbiAgICAgIHVyaTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgZ28gPSAtPlxuICAgICAgICByZXR1cm4gdW5sZXNzIHNjb3BlLmlwZnMgYW5kIHNjb3BlLnVyaVxuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LXdpZHRoOiAxMDAlOycpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdtZXRhZGF0YScpXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWRlZG1ldGFkYXRhJywgKCkgLT5cbiAgICAgICAgICBlbC5wbGF5KCkgIyBtYWtlIGl0IGRpc3BsYXkgcG9zdGVyIChwcmV2aWV3IGltYWdlKS4gbWF5IGxvYWQgdW5uZWNlc3NhcnkgYW1vdW50IG9mIGRhdGE/XG4gICAgICAgICAgZWwucGF1c2UoKVxuICAgICAgICBzdHJlYW0gPSBudWxsXG4gICAgICAgIHZpZGVvc3RyZWFtID0gbmV3IHdpbmRvdy52aWRlb3N0cmVhbVxuICAgICAgICAgIGNyZWF0ZVJlYWRTdHJlYW06IChvcHRzKSAtPlxuICAgICAgICAgICAgc3RhcnQgPSBvcHRzLnN0YXJ0XG4gICAgICAgICAgICBlbmQgPSBpZiBvcHRzLmVuZCB0aGVuIHN0YXJ0ICsgb3B0cy5lbmQgKyAxIGVsc2UgdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNrZWQgZm9yIGRhdGEgc3RhcnRpbmcgYXQgYnl0ZScsIHN0YXJ0LCAnYW5kIGVuZGluZyBhdCBieXRlJywgZW5kKVxuICAgICAgICAgICAgc3RyZWFtLmRlc3Ryb3koKSBpZiBzdHJlYW0gYW5kIHN0cmVhbS5kZXN0cm95XG4gICAgICAgICAgICBzdHJlYW0gPSBzY29wZS5pcGZzLmNhdFJlYWRhYmxlU3RyZWFtKHNjb3BlLnVyaSwgeyBvZmZzZXQ6IHN0YXJ0LCBsZW5ndGg6IGVuZCAmJiBlbmQgLSBzdGFydCB9KVxuICAgICAgICAgICAgc3RyZWFtLm9uICdlcnJvcicsIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBzdHJlYW1cbiAgICAgICAgLCBlbFxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbClcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsndXJpJywgJ2lwZnMnXSwgZ29cbiJdfQ==

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('videochat', function() {
    return {
      scope: {
        pubkey: '=',
        gun: '=',
        watchOnly: '='
      },
      link: function(scope, element, attrs) {
        var ACK, DB_RECORD, DEBUG, LOCAL, LOG, MIMETYPE, PREFIX_RECORDER, RECORD_PREFIX, RECORD_TIME, REMOTE_VIDEO, SPEECH_DETECTION_ENABLED, Streamer, Utf8ArrayToStr, addToAllRecordedChunks, addToBuffer, amountOfCameras, attachSpeechDetection, buf2hex, buttonRow, captureScreen, check, closeCameraStream, code, constraints, currentFacingMode, debug, formatBytes, go, goLiveButton, gunDB, initCameraStream, initCameraUI, initViewer, initialData, isRecording, mediaRecorder, muteButton, muteUnmute, muted, myTimer, myVideo, onDataAvailable, onString, openRemoteVideo, pauseRecording, recordStream, recordedChunks, remoteVideo, removeFromGun, speechDetected, startWorker, stopWorker, str2ab, streamId, switchCameraButton, takeSnapshot, useBlob, useString, w, writeToGun;
        MIMETYPE = 'video/webm; codecs="opus,vp8"';
        RECORD_TIME = 500;
        DEBUG = false;
        PREFIX_RECORDER = 'data:video/webm; codecs="opus,vp8";base64,';
        DB_RECORD = 'gunmeeting';
        LOCAL = false;
        RECORD_PREFIX = 'GkXf';
        SPEECH_DETECTION_ENABLED = false;
        constraints = {
          video: true
        };
        recordedChunks = [];
        mediaRecorder = void 0;
        gunDB = void 0;
        speechDetected = true;
        initialData = void 0;
        w = void 0;
        code = -1;
        LOG = function(...args) {
          if (DEBUG) {
            return console.log(...args);
          }
        };
        Streamer = function(videoId, streamVideo) {
          this.id = videoId;
          this.streamVideo = streamVideo;
          this.init = function() {
            this.sourceBuffer = null;
            this.mediaSource = new MediaSource;
            initViewer(this);
          };
        };
        initViewer = function(streamer) {
          streamer.streamVideo.src = window.URL.createObjectURL(streamer.mediaSource);
          streamer.mediaSource.addEventListener('sourceopen', function() {
            streamer.sourceBuffer = streamer.mediaSource.addSourceBuffer(MIMETYPE);
            streamer.sourceBuffer.mode = 'sequence';
            // Get video segments and append them to sourceBuffer.
            LOG('Source is open and ready to append to sourcebuffer');
            if (!LOCAL) {
              gunDB.get(streamer.id).on(function(data) {
                if (!check(streamer, data)) {
                  streamer.streamVideo.style.visibility = "hidden";
                } else {
                  // streamer.streamVideo.parentElement.remove()
                  streamer.streamVideo.style.visibility = 'visible';
                  if (SPEECH_DETECTION_ENABLED) {
                    if (data.isSpeaking) {
                      streamer.streamVideo.muted = false;
                    } else {
                      streamer.streamVideo.muted = true;
                    }
                  }
                }
                LOG('Tracks Video ::' + streamer.streamVideo.HAVE_METADATA);
                // LOG("Tracks Buffer::" + streamer.sourceBuffer.videoTracks.length)
                // if (streamer.streamVideo.videoTracks.length > 0 && streamer.streamVideo.videoTracks.selectedIndex != -1) {
                if (streamer.streamVideo.readyState !== 0) {
                  onString(streamer, data.name);
                } else {
                  onString(streamer, data.initial);
                }
                if (streamer.streamVideo.readyState >= 2 && streamer.streamVideo.paused) {
                  streamer.streamVideo.play();
                }
              });
            }
          });
        };
        check = function(streamer, data) {
          var currentTime, difference;
          LOG(JSON.stringify(streamer));
          LOG(JSON.stringify(data.timestamp));
          currentTime = (new Date).getTime();
          difference = (currentTime - data.timestamp) / 1000;
          LOG('TIME::' + difference);
          if (difference > 120) {
            LOG('remove::' + streamer.id);
            removeFromGun(streamer.id);
            return false;
          } else {
            LOG('keep::' + streamer.id);
            return true;
          }
        };
        onString = function(streamer, rawData) {
          var byteArray, byteCharacters;
          byteCharacters = atob(rawData);
          byteArray = str2ab(byteCharacters);
          addToBuffer(streamer, byteArray);
          byteCharacters = null;
          byteArray = null;
        };
        addToBuffer = function(streamer, byteArray) {
          if (!streamer.sourceBuffer.updating) {
            // if (streamer.sourceBuffer.buffered.length > 1) {
            //     streamer.sourceBuffer.remove(0, streamer.sourceBuffer.buffered.end(streamer.sourceBuffer.buffered.length - 1))
            // }
            LOG('READY STATE::' + streamer.streamVideo.readyState);
            // var hasEnough = streamer.streamVideo.readyState == 3 && treamer.streamVideo.readyState == 4
            // if (streamer.sourceBuffer.timestampOffset != 0 && hasEnough) {
            //     try {
            //         LOG("Reset offset::" + streamer.sourceBuffer.timestampOffset)
            //         streamer.sourceBuffer.timestampOffset = 0
            //         LOG("Did reset::" + streamer.sourceBuffer.timestampOffset)
            //     } catch (err) {
            //         code = 11
            //         LOG(err)
            //     }
            // } else {
            //     code = -1
            LOG('Adding::' + JSON.stringify(streamer));
            streamer.sourceBuffer.appendBuffer(byteArray);
          } else {
            // }
            LOG('BUFFER STILL BUSY');
          }
        };
        str2ab = function(str) {
          var buf, bufView, i, strLen;
          buf = new ArrayBuffer(str.length);
          bufView = new Uint8Array(buf);
          i = 0;
          strLen = str.length;
          while (i < strLen) {
            bufView[i] = str.charCodeAt(i);
            i++;
          }
          bufView = null;
          return buf;
        };
        // ---
        // generated by js2coffee 2.2.0
        isRecording = function() {
          if (mediaRecorder && mediaRecorder.state === 'recording') {
            return true;
          } else {
            false;
          }
        };
        pauseRecording = function() {
          stopWorker();
          mediaRecorder.stop();
        };
        captureScreen = function(stream) {
          LOG('Capture');
          if (!mediaRecorder || mediaRecorder.state === 'inactive') {
            recordStream(stream);
            if (SPEECH_DETECTION_ENABLED) {
              attachSpeechDetection(stream);
            }
          } else {
            stopWorker();
            mediaRecorder.stop();
          }
        };
        recordStream = function(stream) {
          var options;
          options = {
            mimeType: MIMETYPE,
            audioBitsPerSecond: 6000,
            videoBitsPerSecond: 100000
          };
          mediaRecorder = new MediaRecorder(stream, options);
          mediaRecorder.ondataavailable = onDataAvailable;
          mediaRecorder.start(RECORD_TIME);
          startWorker();
          LOG('Media recorder initiated');
        };
        // setInterval(myTimer, RECORD_TIME)
        myTimer = function() {
          if (mediaRecorder) {
            mediaRecorder.requestData();
          }
        };
        startWorker = function() {
          if (typeof Worker !== 'undefined') {
            if (typeof w === 'undefined') {
              w = new Worker('assets/js/parser_worker.js');
            }
            w.onmessage = function(e) {
              var message;
              message = e.data;
              writeToGun(message);
            };
          } else {
            LOG('Sorry! No Web Worker support.');
          }
        };
        stopWorker = function() {
          w.terminate();
          w = void 0;
        };
        onDataAvailable = function(blobEvent) {
          // LOG("Received data " + formatBytes(blobEvent.data.size))
          // addToAllRecordedChunks(blobEvent.data)
          if (blobEvent.data && blobEvent.data.size) {
            // useBlob(blobEvent.data)
            useString(blobEvent.data);
          } else {
            LOG('SKIP NO DATA?');
          }
        };
        useBlob = function(blob) {
          onBlob(blob);
        };
        useString = function(blob) {
          var response;
          response = new Response(blob).arrayBuffer().then(function(arrayBuffer) {
            blob = null;
            if (LOCAL) {

            } else {
              // onString(base64String)
              if (w !== void 0) {
                w.postMessage(arrayBuffer);
              }
            }
          });
          // parseSelf(arrayBuffer)
          // var data = new Uint8Array(arrayBuffer)
          // window.cl.write(data)
          // data = null
          // arrayBuffer = null
          response = null;
        };
        // function useString(blob) {
        //     var url = URL.createObjectURL(blob)
        //     fetch(url).then(function (response) {
        //         URL.revokeObjectURL(url)
        //         return response.arrayBuffer()
        //     }).then(function (arrayBuffer) {
        //         // var base64String = btoa(
        //         //     new Uint8Array(arrayBuffer)
        //         //         .reduce((onData, byte) => onData + String.fromCharCode(byte), '')
        //         // )
        //         // LOG(buf2hex(arrayBuffer))
        //         // LOG(Utf8ArrayToStr(new Uint8Array(arrayBuffer)))
        //         if (LOCAL) {
        //             // onString(base64String)
        //         } else {
        //             window.cl.write(new Uint8Array(arrayBuffer))
        //             // writeToGun(base64String)
        //         }
        //         base64String = null
        //     })
        // }
        Utf8ArrayToStr = function(array) {
          var c, char2, char3, i, len, out;
          out = void 0;
          i = void 0;
          len = void 0;
          c = void 0;
          char2 = void 0;
          char3 = void 0;
          out = '';
          len = array.length;
          i = 0;
          while (i < len) {
            c = array[i++];
            switch (c >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
              case 12:
              case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
                break;
              case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
            }
          }
          return out;
        };
        buf2hex = function(buffer) {
          // buffer is an ArrayBuffer
          return Array.prototype.map.call(new Uint8Array(buffer), function(x) {
            return ('00' + x.toString(16)).slice(-2);
          }).join('');
        };
        writeToGun = function(base64data) {
          var lastUpdate, n, user;
          n = n || void 0;
          LOG('Write to GUN::' + base64data.substring(0, 100));
          lastUpdate = (new Date).getTime();
          user = void 0;
          if (initialData === void 0 && base64data.startsWith(RECORD_PREFIX)) {
            LOG('INITIAL');
            n = base64data.indexOf('wIEB');
            LOG('RAW::' + n + '::' + base64data.substring(0, 252));
            initialData = base64data.substring(0, 252);
          } else {
            n = base64data.indexOf('H0O2dQH');
            LOG('RAW::' + n + '::' + base64data);
          }
          LOG('streamId', streamId);
          user = gunDB.get(streamId).put({
            initial: initialData,
            name: base64data,
            id: streamId,
            timestamp: lastUpdate,
            isSpeaking: speechDetected
          }, ACK);
          gunDB.get(DB_RECORD).set(user);
        };
        addToAllRecordedChunks = function(chunk) {
          var superBuffer;
          recordedChunks.push(chunk);
          superBuffer = new Blob(recordedChunks);
          LOG('Total data size ' + formatBytes(superBuffer.size));
        };
        formatBytes = function(bytes) {
          if (bytes < 1024) {
            return bytes + ' Bytes';
          } else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(3) + ' KB';
          } else if (bytes < 1073741824) {
            return (bytes / 1048576).toFixed(3) + ' MB';
          } else {
            return (bytes / 1073741824).toFixed(3) + ' GB';
          }
        };
        attachSpeechDetection = function(stream) {
          var options, speechEvents;
          options = {};
          speechEvents = hark(stream, options);
          speechEvents.on('speaking', function() {
            if (SPEECH_DETECTION_ENABLED) {
              speechDetected = true;
              LOG('speaking');
            }
          });
          speechEvents.on('stopped_speaking', function() {
            if (SPEECH_DETECTION_ENABLED) {
              LOG('stopped_speaking');
              speechDetected = false;
            }
          });
        };
        // Dom elements name constants
        REMOTE_VIDEO = 'video';
        //ID
        streamId = Date.now();
        // GUN ACK
        remoteVideo = document.createElement("video");
        remoteVideo.autoplay = true;
        remoteVideo.controls = true;
        remoteVideo.muted = true;
        remoteVideo.playsinline = true;
        remoteVideo.style.display = "none";
        remoteVideo.style.width = "50%";
        remoteVideo.preload = "none";
        myVideo = document.createElement('video');
        myVideo.setAttribute('autoplay', true);
        myVideo.setAttribute('style', 'width: 100%;');
        myVideo.setAttribute('playsinline', true);
        myVideo.setAttribute('muted', true);
        myVideo.setAttribute('controls', true);
        element.append(myVideo);
        element.append(remoteVideo);
        buttonRow = document.createElement('p');
        goLiveButton = document.createElement('button');
        goLiveButton.innerHTML = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live';
        goLiveButton.setAttribute('class', 'btn btn-default');
        buttonRow.append(goLiveButton);
        //toggleFullScreenButton = document.createElement('button')
        //toggleFullScreenButton.innerHTML = 'toggle fullscreen'
        //toggleFullScreenButton.setAttribute 'class', 'btn btn-default'
        //p.append(toggleFullScreenButton)
        switchCameraButton = document.createElement('button');
        switchCameraButton.innerHTML = 'switch camera';
        switchCameraButton.style = 'display:none;';
        switchCameraButton.setAttribute('class', 'btn btn-default');
        buttonRow.append(switchCameraButton);
        muteButton = document.createElement('button');
        muteButton.innerHTML = '<span class="glyphicon glyphicon-volume-off mar-right5"></span> Mute';
        muteButton.setAttribute('class', 'btn btn-default');
        buttonRow.append(muteButton);
        element.append(buttonRow);
        amountOfCameras = 0;
        currentFacingMode = 'environment';
        muted = true;
        gunDB = void 0;
        ACK = function(ack) {
          if (ack.ok !== 1 && ack.err !== 'Error: No ACK received yet.') {
            LOG('ack', ack);
          } else {
            // localStorage.clear()
            LOG('ack', ack);
          }
        };
        // localStorage.clear()
        removeFromGun = function(id) {
          var user;
          // localStorage.clear()
          user = gunDB.get(streamId);
          gunDB.get(DB_RECORD).unset(user);
        };
        // user.put null # can't put null to root level node
        debug = function(text) {
          if (DEBUG) {
            LOG(text);
          }
        };
        initCameraUI = function() {
          // https://developer.mozilla.org/nl/docs/Web/HTML/Element/button
          // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
          goLiveButton.addEventListener('click', function() {
            takeSnapshot();
          });
          muteButton.addEventListener('click', function() {
            muteUnmute();
          });
          // -- switch camera part
          if (amountOfCameras > 1) {
            switchCameraButton.style.display = 'inline-block';
            switchCameraButton.addEventListener('click', function() {
              if (currentFacingMode === 'environment') {
                currentFacingMode = 'user';
              } else {
                currentFacingMode = 'environment';
              }
              initCameraStream();
            });
          }
        };
        // https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js
        closeCameraStream = function() {
          if (window.stream) {
            return window.stream.getTracks().forEach(function(track) {
              return track.stop();
            });
          }
        };
        element.on('$destroy', function() {
          return closeCameraStream();
        });
        initCameraStream = function() {
          var handleError, handleSuccess;
          // stop any active streams in the window
          handleSuccess = function(stream) {
            window.stream = stream;
            // make stream available to browser console
            myVideo.srcObject = stream;
            if (constraints.video.facingMode) {
              if (constraints.video.facingMode === 'environment') {
                switchCameraButton.setAttribute('aria-pressed', true);
              } else {
                switchCameraButton.setAttribute('aria-pressed', false);
              }
            }
            return navigator.mediaDevices.enumerateDevices();
          };
          handleError = function(error) {
            LOG(error);
            //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
            if (error === 'PermissionDeniedError') {
              alert('Permission denied. Please refresh and give permission.');
            }
          };
          closeCameraStream();
          constraints = {
            audio: true,
            video: {
              width: {
                min: 200,
                ideal: 200,
                max: 640
              },
              height: {
                min: 200,
                ideal: 200,
                max: 640
              },
              facingMode: currentFacingMode
            }
          };
          navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
        };
        takeSnapshot = function() {
          if (!isRecording()) {
            captureScreen(window.stream);
            goLiveButton.style.backgroundColor = 'red';
            switchCameraButton.disabled = true;
          } else {
            pauseRecording();
            goLiveButton.style.backgroundColor = '';
            switchCameraButton.disabled = false;
          }
        };
        muteUnmute = function() {
          var i, keys, videos;
          if (muted) {
            muteButton.setAttribute('aria-pressed', false);
            muted = false;
          } else {
            muteButton.setAttribute('aria-pressed', true);
            muted = true;
          }
          videos = document.getElementsByTagName('video');
          keys = Object.keys(videos);
          i = 0;
          while (i < keys.length) {
            if (videos[i].id !== 'video') {
              videos[i].muted = muted;
            }
            i++;
          }
        };
        openRemoteVideo = function() {
          var id, streamer;
          id = scope.pubkey + '/stream';
          streamer = new Streamer(id, remoteVideo);
          return streamer.init();
        };
        go = function() {
          var myPubKey, opt, peers, u;
          if (!(scope.gun && scope.pubkey)) {
            return;
          }
          u = scope.gun.user();
          myPubKey = u._.sea ? u._.sea.pub : void 0;
          if (myPubKey !== scope.pubkey) {
            if (scope.watchOnly) {
              buttonRow.style.display = 'none';
              remoteVideo.style.width = '100%';
              myVideo.style.display = 'none';
            }
            myVideo.style.width = '50%';
            remoteVideo.style.display = 'inline-block';
            openRemoteVideo();
          } else {
            myVideo.style.width = '100%';
            remoteVideo.style.display = 'none';
          }
          streamId = myPubKey + '/stream';
          // gunDB = scope.gun.back(-1)
          // GUN
          peers = ['https://gunmeetingserver.herokuapp.com/gun'];
          opt = {
            peers: peers,
            localStorage: false,
            radisk: false
          };
          gunDB = Gun(opt);
          removeFromGun(streamId);
          if (!scope.watchOnly) {
            // do some WebRTC checks before creating the interface
            return DetectRTC.load(function() {
              // do some checks
              if (DetectRTC.isWebRTCSupported === false) {
                alert('Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher');
              } else {
                if (DetectRTC.hasWebcam === false) {
                  alert('Please install an external webcam device.');
                } else {
                  amountOfCameras = DetectRTC.videoInputDevices.length;
                  initCameraUI();
                  initCameraStream();
                }
              }
              return LOG('RTC Debug info: ' + '\n OS:                   ' + DetectRTC.osName + ' ' + DetectRTC.osVersion + '\n browser:              ' + DetectRTC.browser.fullVersion + ' ' + DetectRTC.browser.name + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice + '\n has webcam:           ' + DetectRTC.hasWebcam + '\n has permission:       ' + DetectRTC.isWebsiteHasWebcamPermission + '\n getUserMedia Support: ' + DetectRTC.isGetUserMediaSupported + '\n isWebRTC Supported:   ' + DetectRTC.isWebRTCSupported + '\n WebAudio Supported:   ' + DetectRTC.isAudioContextSupported + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice);
            });
          }
        };
        return scope.$watch('gun', go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsR0FBUjtRQUNBLEdBQUEsRUFBSyxHQURMO1FBRUEsU0FBQSxFQUFXO01BRlgsQ0FERjtNQUlBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsZUFBQSxFQUFBLGFBQUEsRUFBQSxXQUFBLEVBQUEsWUFBQSxFQUFBLHdCQUFBLEVBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxzQkFBQSxFQUFBLFdBQUEsRUFBQSxlQUFBLEVBQUEscUJBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLGFBQUEsRUFBQSxLQUFBLEVBQUEsaUJBQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxFQUFBLGlCQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUEsRUFBQSxFQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBLGVBQUEsRUFBQSxjQUFBLEVBQUEsWUFBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBLGNBQUEsRUFBQSxXQUFB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R0FBNk4sU0FBUyxDQUFDLGNBQXZPLEdBQXdQLDJCQUF4UCxHQUFzUixTQUFTLENBQUMsU0FBaFMsR0FBNFMsMkJBQTVTLEdBQTBVLFNBQVMsQ0FBQyw0QkFBcFYsR0FBbVgsMkJBQW5YLEdBQWlaLFNBQVMsQ0FBQyx1QkFBM1osR0FBcWIsMkJBQXJiLEdBQW1kLFNBQVMsQ0FBQyxpQkFBN2QsR0FBaWYsMkJBQWpmLEdBQStnQixTQUFTLENBQUMsdUJBQXpoQixHQUFtakIsMkJBQW5qQixHQUFpbEIsU0FBUyxDQUFDLGNBQS9sQjtZQVhhLENBQWYsRUFGRjs7UUExQkc7ZUF5Q0wsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLEVBQXBCO01BN2hCSTtJQUpOO0VBRHNCLENBRDFCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvY2hhdCcsIC0+XG4gICAgc2NvcGU6XG4gICAgICBwdWJrZXk6ICc9J1xuICAgICAgZ3VuOiAnPSdcbiAgICAgIHdhdGNoT25seTogJz0nXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIE1JTUVUWVBFID0gJ3ZpZGVvL3dlYm07IGNvZGVjcz1cIm9wdXMsdnA4XCInXG4gICAgICBSRUNPUkRfVElNRSA9IDUwMFxuICAgICAgREVCVUcgPSBmYWxzZVxuICAgICAgUFJFRklYX1JFQ09SREVSID0gJ2RhdGE6dmlkZW8vd2VibTsgY29kZWNzPVwib3B1cyx2cDhcIjtiYXNlNjQsJ1xuICAgICAgREJfUkVDT1JEID0gJ2d1bm1lZXRpbmcnXG4gICAgICBMT0NBTCA9IGZhbHNlXG4gICAgICBSRUNPUkRfUFJFRklYID0gJ0drWGYnXG4gICAgICBTUEVFQ0hfREVURUNUSU9OX0VOQUJMRUQgPSBmYWxzZVxuICAgICAgY29uc3RyYWludHMgPSB2aWRlbzogdHJ1ZVxuICAgICAgcmVjb3JkZWRDaHVua3MgPSBbXVxuICAgICAgbWVkaWFSZWNvcmRlciA9IHVuZGVmaW5lZFxuICAgICAgZ3VuREIgPSB1bmRlZmluZWRcbiAgICAgIHNwZWVjaERldGVjdGVkID0gdHJ1ZVxuICAgICAgaW5pdGlhbERhdGEgPSB1bmRlZmluZWRcbiAgICAgIHcgPSB1bmRlZmluZWRcbiAgICAgIGNvZGUgPSAtMVxuXG4gICAgICBMT0cgPSAoYXJncy4uLikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgYXJncy4uLiBpZiBERUJVR1xuXG4gICAgICBTdHJlYW1lciA9ICh2aWRlb0lkLCBzdHJlYW1WaWRlbykgLT5cbiAgICAgICAgQGlkID0gdmlkZW9JZFxuICAgICAgICBAc3RyZWFtVmlkZW8gPSBzdHJlYW1WaWRlb1xuXG4gICAgICAgIEBpbml0ID0gLT5cbiAgICAgICAgICBAc291cmNlQnVmZmVyID0gbnVsbFxuICAgICAgICAgIEBtZWRpYVNvdXJjZSA9IG5ldyBNZWRpYVNvdXJjZVxuICAgICAgICAgIGluaXRWaWV3ZXIgdGhpc1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpbml0Vmlld2VyID0gKHN0cmVhbWVyKSAtPlxuICAgICAgICBzdHJlYW1lci5zdHJlYW1WaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW1lci5tZWRpYVNvdXJjZSlcbiAgICAgICAgc3RyZWFtZXIubWVkaWFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lciAnc291cmNlb3BlbicsIC0+XG4gICAgICAgICAgc3RyZWFtZXIuc291cmNlQnVmZmVyID0gc3RyZWFtZXIubWVkaWFTb3VyY2UuYWRkU291cmNlQnVmZmVyKE1JTUVUWVBFKVxuICAgICAgICAgIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5tb2RlID0gJ3NlcXVlbmNlJ1xuICAgICAgICAgICMgR2V0IHZpZGVvIHNlZ21lbnRzIGFuZCBhcHBlbmQgdGhlbSB0byBzb3VyY2VCdWZmZXIuXG4gICAgICAgICAgTE9HICdTb3VyY2UgaXMgb3BlbiBhbmQgcmVhZHkgdG8gYXBwZW5kIHRvIHNvdXJjZWJ1ZmZlcidcbiAgICAgICAgICBpZiAhTE9DQUxcbiAgICAgICAgICAgIGd1bkRCLmdldChzdHJlYW1lci5pZCkub24gKGRhdGEpIC0+XG4gICAgICAgICAgICAgIGlmICFjaGVjayhzdHJlYW1lciwgZGF0YSlcbiAgICAgICAgICAgICAgICBzdHJlYW1lci5zdHJlYW1WaWRlby5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICMgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICAgIGlmIFNQRUVDSF9ERVRFQ1RJT05fRU5BQkxFRFxuICAgICAgICAgICAgICAgICAgaWYgZGF0YS5pc1NwZWFraW5nXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbWVyLnN0cmVhbVZpZGVvLm11dGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8ubXV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIExPRyAnVHJhY2tzIFZpZGVvIDo6JyArIHN0cmVhbWVyLnN0cmVhbVZpZGVvLkhBVkVfTUVUQURBVEFcbiAgICAgICAgICAgICAgIyBMT0coXCJUcmFja3MgQnVmZmVyOjpcIiArIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci52aWRlb1RyYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICMgaWYgKHN0cmVhbWVyLnN0cmVhbVZpZGVvLnZpZGVvVHJhY2tzLmxlbmd0aCA+IDAgJiYgc3RyZWFtZXIuc3RyZWFtVmlkZW8udmlkZW9UcmFja3Muc2VsZWN0ZWRJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICBpZiBzdHJlYW1lci5zdHJlYW1WaWRlby5yZWFkeVN0YXRlICE9IDBcbiAgICAgICAgICAgICAgICBvblN0cmluZyBzdHJlYW1lciwgZGF0YS5uYW1lXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvblN0cmluZyBzdHJlYW1lciwgZGF0YS5pbml0aWFsXG4gICAgICAgICAgICAgIGlmIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnJlYWR5U3RhdGUgPj0gMiBhbmQgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucGF1c2VkXG4gICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucGxheSgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIHJldHVyblxuICAgICAgICByZXR1cm5cblxuICAgICAgY2hlY2sgPSAoc3RyZWFtZXIsIGRhdGEpIC0+XG4gICAgICAgIExPRyBKU09OLnN0cmluZ2lmeShzdHJlYW1lcilcbiAgICAgICAgTE9HIEpTT04uc3RyaW5naWZ5KGRhdGEudGltZXN0YW1wKVxuICAgICAgICBjdXJyZW50VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgIGRpZmZlcmVuY2UgPSAoY3VycmVudFRpbWUgLSAoZGF0YS50aW1lc3RhbXApKSAvIDEwMDBcbiAgICAgICAgTE9HICdUSU1FOjonICsgZGlmZmVyZW5jZVxuICAgICAgICBpZiBkaWZmZXJlbmNlID4gMTIwXG4gICAgICAgICAgTE9HICdyZW1vdmU6OicgKyBzdHJlYW1lci5pZFxuICAgICAgICAgIHJlbW92ZUZyb21HdW4gc3RyZWFtZXIuaWRcbiAgICAgICAgICBmYWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgTE9HICdrZWVwOjonICsgc3RyZWFtZXIuaWRcbiAgICAgICAgICB0cnVlXG5cbiAgICAgIG9uU3RyaW5nID0gKHN0cmVhbWVyLCByYXdEYXRhKSAtPlxuICAgICAgICBieXRlQ2hhcmFjdGVycyA9IGF0b2IocmF3RGF0YSlcbiAgICAgICAgYnl0ZUFycmF5ID0gc3RyMmFiKGJ5dGVDaGFyYWN0ZXJzKVxuICAgICAgICBhZGRUb0J1ZmZlciBzdHJlYW1lciwgYnl0ZUFycmF5XG4gICAgICAgIGJ5dGVDaGFyYWN0ZXJzID0gbnVsbFxuICAgICAgICBieXRlQXJyYXkgPSBudWxsXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhZGRUb0J1ZmZlciA9IChzdHJlYW1lciwgYnl0ZUFycmF5KSAtPlxuICAgICAgICAjIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgIyAgICAgTE9HKFwiTm90IEZvY3VzZWQgdGFiIG5vdCBhZGRpbmcgdG8gYnVmZmVyXCIpXG4gICAgICAgICMgfVxuICAgICAgICBpZiAhc3RyZWFtZXIuc291cmNlQnVmZmVyLnVwZGF0aW5nXG4gICAgICAgICAgIyBpZiAoc3RyZWFtZXIuc291cmNlQnVmZmVyLmJ1ZmZlcmVkLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAjICAgICBzdHJlYW1lci5zb3VyY2VCdWZmZXIucmVtb3ZlKDAsIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5idWZmZXJlZC5lbmQoc3RyZWFtZXIuc291cmNlQnVmZmVyLmJ1ZmZlcmVkLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICMgfVxuICAgICAgICAgIExPRyAnUkVBRFkgU1RBVEU6OicgKyBzdHJlYW1lci5zdHJlYW1WaWRlby5yZWFkeVN0YXRlXG4gICAgICAgICAgIyB2YXIgaGFzRW5vdWdoID0gc3RyZWFtZXIuc3RyZWFtVmlkZW8ucmVhZHlTdGF0ZSA9PSAzICYmIHRyZWFtZXIuc3RyZWFtVmlkZW8ucmVhZHlTdGF0ZSA9PSA0XG4gICAgICAgICAgIyBpZiAoc3RyZWFtZXIuc291cmNlQnVmZmVyLnRpbWVzdGFtcE9mZnNldCAhPSAwICYmIGhhc0Vub3VnaCkge1xuICAgICAgICAgICMgICAgIHRyeSB7XG4gICAgICAgICAgIyAgICAgICAgIExPRyhcIlJlc2V0IG9mZnNldDo6XCIgKyBzdHJlYW1lci5zb3VyY2VCdWZmZXIudGltZXN0YW1wT2Zmc2V0KVxuICAgICAgICAgICMgICAgICAgICBzdHJlYW1lci5zb3VyY2VCdWZmZXIudGltZXN0YW1wT2Zmc2V0ID0gMFxuICAgICAgICAgICMgICAgICAgICBMT0coXCJEaWQgcmVzZXQ6OlwiICsgc3RyZWFtZXIuc291cmNlQnVmZmVyLnRpbWVzdGFtcE9mZnNldClcbiAgICAgICAgICAjICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAjICAgICAgICAgY29kZSA9IDExXG4gICAgICAgICAgIyAgICAgICAgIExPRyhlcnIpXG4gICAgICAgICAgIyAgICAgfVxuICAgICAgICAgICMgfSBlbHNlIHtcbiAgICAgICAgICAjICAgICBjb2RlID0gLTFcbiAgICAgICAgICBMT0cgJ0FkZGluZzo6JyArIEpTT04uc3RyaW5naWZ5KHN0cmVhbWVyKVxuICAgICAgICAgIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIgYnl0ZUFycmF5XG4gICAgICAgICAgIyB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBMT0cgJ0JVRkZFUiBTVElMTCBCVVNZJ1xuICAgICAgICByZXR1cm5cblxuICAgICAgc3RyMmFiID0gKHN0cikgLT5cbiAgICAgICAgYnVmID0gbmV3IEFycmF5QnVmZmVyKHN0ci5sZW5ndGgpXG4gICAgICAgIGJ1ZlZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHN0ckxlbiA9IHN0ci5sZW5ndGhcbiAgICAgICAgd2hpbGUgaSA8IHN0ckxlblxuICAgICAgICAgIGJ1ZlZpZXdbaV0gPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICAgIGkrK1xuICAgICAgICBidWZWaWV3ID0gbnVsbFxuICAgICAgICBidWZcblxuICAgICAgIyAtLS1cbiAgICAgICMgZ2VuZXJhdGVkIGJ5IGpzMmNvZmZlZSAyLjIuMFxuXG4gICAgICBpc1JlY29yZGluZyA9IC0+XG4gICAgICAgIGlmIG1lZGlhUmVjb3JkZXIgYW5kIG1lZGlhUmVjb3JkZXIuc3RhdGUgPT0gJ3JlY29yZGluZydcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHBhdXNlUmVjb3JkaW5nID0gLT5cbiAgICAgICAgc3RvcFdvcmtlcigpXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjYXB0dXJlU2NyZWVuID0gKHN0cmVhbSkgLT5cbiAgICAgICAgTE9HICdDYXB0dXJlJ1xuICAgICAgICBpZiAhbWVkaWFSZWNvcmRlciBvciBtZWRpYVJlY29yZGVyLnN0YXRlID09ICdpbmFjdGl2ZSdcbiAgICAgICAgICByZWNvcmRTdHJlYW0gc3RyZWFtXG4gICAgICAgICAgaWYgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEXG4gICAgICAgICAgICBhdHRhY2hTcGVlY2hEZXRlY3Rpb24gc3RyZWFtXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzdG9wV29ya2VyKClcbiAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgcmVjb3JkU3RyZWFtID0gKHN0cmVhbSkgLT5cbiAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgbWltZVR5cGU6IE1JTUVUWVBFXG4gICAgICAgICAgYXVkaW9CaXRzUGVyU2Vjb25kOiA2MDAwXG4gICAgICAgICAgdmlkZW9CaXRzUGVyU2Vjb25kOiAxMDAwMDBcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwgb3B0aW9ucylcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBvbkRhdGFBdmFpbGFibGVcbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCBSRUNPUkRfVElNRVxuICAgICAgICBzdGFydFdvcmtlcigpXG4gICAgICAgIExPRyAnTWVkaWEgcmVjb3JkZXIgaW5pdGlhdGVkJ1xuICAgICAgICAjIHNldEludGVydmFsKG15VGltZXIsIFJFQ09SRF9USU1FKVxuICAgICAgICByZXR1cm5cblxuICAgICAgbXlUaW1lciA9IC0+XG4gICAgICAgIGlmIG1lZGlhUmVjb3JkZXJcbiAgICAgICAgICBtZWRpYVJlY29yZGVyLnJlcXVlc3REYXRhKClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHN0YXJ0V29ya2VyID0gLT5cbiAgICAgICAgaWYgdHlwZW9mIFdvcmtlciAhPSAndW5kZWZpbmVkJ1xuICAgICAgICAgIGlmIHR5cGVvZiB3ID09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICB3ID0gbmV3IFdvcmtlcignYXNzZXRzL2pzL3BhcnNlcl93b3JrZXIuanMnKVxuXG4gICAgICAgICAgdy5vbm1lc3NhZ2UgPSAoZSkgLT5cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBlLmRhdGFcbiAgICAgICAgICAgIHdyaXRlVG9HdW4gbWVzc2FnZVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgZWxzZVxuICAgICAgICAgIExPRyAnU29ycnkhIE5vIFdlYiBXb3JrZXIgc3VwcG9ydC4nXG4gICAgICAgIHJldHVyblxuXG4gICAgICBzdG9wV29ya2VyID0gLT5cbiAgICAgICAgdy50ZXJtaW5hdGUoKVxuICAgICAgICB3ID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVyblxuXG4gICAgICBvbkRhdGFBdmFpbGFibGUgPSAoYmxvYkV2ZW50KSAtPlxuICAgICAgICAjIExPRyhcIlJlY2VpdmVkIGRhdGEgXCIgKyBmb3JtYXRCeXRlcyhibG9iRXZlbnQuZGF0YS5zaXplKSlcbiAgICAgICAgIyBhZGRUb0FsbFJlY29yZGVkQ2h1bmtzKGJsb2JFdmVudC5kYXRhKVxuICAgICAgICBpZiBibG9iRXZlbnQuZGF0YSBhbmQgYmxvYkV2ZW50LmRhdGEuc2l6ZVxuICAgICAgICAgICMgdXNlQmxvYihibG9iRXZlbnQuZGF0YSlcbiAgICAgICAgICB1c2VTdHJpbmcgYmxvYkV2ZW50LmRhdGFcbiAgICAgICAgZWxzZVxuICAgICAgICAgIExPRyAnU0tJUCBOTyBEQVRBPydcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHVzZUJsb2IgPSAoYmxvYikgLT5cbiAgICAgICAgb25CbG9iIGJsb2JcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHVzZVN0cmluZyA9IChibG9iKSAtPlxuICAgICAgICByZXNwb25zZSA9IG5ldyBSZXNwb25zZShibG9iKS5hcnJheUJ1ZmZlcigpLnRoZW4oKGFycmF5QnVmZmVyKSAtPlxuICAgICAgICAgIGJsb2IgPSBudWxsXG4gICAgICAgICAgaWYgTE9DQUxcbiAgICAgICAgICAgICMgb25TdHJpbmcoYmFzZTY0U3RyaW5nKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlmIHcgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIHcucG9zdE1lc3NhZ2UgYXJyYXlCdWZmZXJcbiAgICAgICAgICAgICMgcGFyc2VTZWxmKGFycmF5QnVmZmVyKVxuICAgICAgICAgICAgIyB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKVxuICAgICAgICAgICAgIyB3aW5kb3cuY2wud3JpdGUoZGF0YSlcbiAgICAgICAgICAgICMgZGF0YSA9IG51bGxcbiAgICAgICAgICAgICMgYXJyYXlCdWZmZXIgPSBudWxsXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIClcbiAgICAgICAgcmVzcG9uc2UgPSBudWxsXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIGZ1bmN0aW9uIHVzZVN0cmluZyhibG9iKSB7XG4gICAgICAjICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgICAgIyAgICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgIyAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxuICAgICAgIyAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpXG4gICAgICAjICAgICB9KS50aGVuKGZ1bmN0aW9uIChhcnJheUJ1ZmZlcikge1xuICAgICAgIyAgICAgICAgIC8vIHZhciBiYXNlNjRTdHJpbmcgPSBidG9hKFxuICAgICAgIyAgICAgICAgIC8vICAgICBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcilcbiAgICAgICMgICAgICAgICAvLyAgICAgICAgIC5yZWR1Y2UoKG9uRGF0YSwgYnl0ZSkgPT4gb25EYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXG4gICAgICAjICAgICAgICAgLy8gKVxuICAgICAgIyAgICAgICAgIC8vIExPRyhidWYyaGV4KGFycmF5QnVmZmVyKSlcbiAgICAgICMgICAgICAgICAvLyBMT0coVXRmOEFycmF5VG9TdHIobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKSlcbiAgICAgICMgICAgICAgICBpZiAoTE9DQUwpIHtcbiAgICAgICMgICAgICAgICAgICAgLy8gb25TdHJpbmcoYmFzZTY0U3RyaW5nKVxuICAgICAgIyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAjICAgICAgICAgICAgIHdpbmRvdy5jbC53cml0ZShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpXG4gICAgICAjICAgICAgICAgICAgIC8vIHdyaXRlVG9HdW4oYmFzZTY0U3RyaW5nKVxuICAgICAgIyAgICAgICAgIH1cbiAgICAgICMgICAgICAgICBiYXNlNjRTdHJpbmcgPSBudWxsXG4gICAgICAjICAgICB9KVxuICAgICAgIyB9XG5cbiAgICAgIFV0ZjhBcnJheVRvU3RyID0gKGFycmF5KSAtPlxuICAgICAgICBvdXQgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IHVuZGVmaW5lZFxuICAgICAgICBsZW4gPSB1bmRlZmluZWRcbiAgICAgICAgYyA9IHVuZGVmaW5lZFxuICAgICAgICBjaGFyMiA9IHVuZGVmaW5lZFxuICAgICAgICBjaGFyMyA9IHVuZGVmaW5lZFxuICAgICAgICBvdXQgPSAnJ1xuICAgICAgICBsZW4gPSBhcnJheS5sZW5ndGhcbiAgICAgICAgaSA9IDBcbiAgICAgICAgd2hpbGUgaSA8IGxlblxuICAgICAgICAgIGMgPSBhcnJheVtpKytdXG4gICAgICAgICAgc3dpdGNoIGMgPj4gNFxuICAgICAgICAgICAgd2hlbiAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3XG4gICAgICAgICAgICAgICMgMHh4eHh4eHhcbiAgICAgICAgICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbiAgICAgICAgICAgIHdoZW4gMTIsIDEzXG4gICAgICAgICAgICAgICMgMTEweCB4eHh4ICAgMTB4eCB4eHh4XG4gICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDB4MUYpIDw8IDYgfCBjaGFyMiAmIDB4M0YpXG4gICAgICAgICAgICB3aGVuIDE0XG4gICAgICAgICAgICAgICMgMTExMCB4eHh4ICAxMHh4IHh4eHggIDEweHggeHh4eFxuICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgY2hhcjMgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgMHgwRikgPDwgMTIgfCAoY2hhcjIgJiAweDNGKSA8PCA2IHwgKGNoYXIzICYgMHgzRikgPDwgMClcbiAgICAgICAgb3V0XG5cbiAgICAgIGJ1ZjJoZXggPSAoYnVmZmVyKSAtPlxuICAgICAgICAjIGJ1ZmZlciBpcyBhbiBBcnJheUJ1ZmZlclxuICAgICAgICBBcnJheTo6bWFwLmNhbGwobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSwgKHgpIC0+XG4gICAgICAgICAgKCcwMCcgKyB4LnRvU3RyaW5nKDE2KSkuc2xpY2UgLTJcbiAgICAgICAgKS5qb2luICcnXG5cbiAgICAgIHdyaXRlVG9HdW4gPSAoYmFzZTY0ZGF0YSkgLT5cbiAgICAgICAgbiA9IG4gfHwgdW5kZWZpbmVkXG4gICAgICAgIExPRyAnV3JpdGUgdG8gR1VOOjonICsgYmFzZTY0ZGF0YS5zdWJzdHJpbmcoMCwgMTAwKVxuICAgICAgICBsYXN0VXBkYXRlID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICAgICAgdXNlciA9IHVuZGVmaW5lZFxuICAgICAgICBpZiBpbml0aWFsRGF0YSA9PSB1bmRlZmluZWQgYW5kIGJhc2U2NGRhdGEuc3RhcnRzV2l0aChSRUNPUkRfUFJFRklYKVxuICAgICAgICAgIExPRyAnSU5JVElBTCdcbiAgICAgICAgICBuID0gYmFzZTY0ZGF0YS5pbmRleE9mKCd3SUVCJylcbiAgICAgICAgICBMT0cgJ1JBVzo6JyArIG4gKyAnOjonICsgYmFzZTY0ZGF0YS5zdWJzdHJpbmcoMCwgMjUyKVxuICAgICAgICAgIGluaXRpYWxEYXRhID0gYmFzZTY0ZGF0YS5zdWJzdHJpbmcoMCwgMjUyKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbiA9IGJhc2U2NGRhdGEuaW5kZXhPZignSDBPMmRRSCcpXG4gICAgICAgICAgTE9HICdSQVc6OicgKyBuICsgJzo6JyArIGJhc2U2NGRhdGFcbiAgICAgICAgTE9HKCdzdHJlYW1JZCcsIHN0cmVhbUlkKVxuICAgICAgICB1c2VyID0gZ3VuREIuZ2V0KHN0cmVhbUlkKS5wdXQoe1xuICAgICAgICAgIGluaXRpYWw6IGluaXRpYWxEYXRhXG4gICAgICAgICAgbmFtZTogYmFzZTY0ZGF0YVxuICAgICAgICAgIGlkOiBzdHJlYW1JZFxuICAgICAgICAgIHRpbWVzdGFtcDogbGFzdFVwZGF0ZVxuICAgICAgICAgIGlzU3BlYWtpbmc6IHNwZWVjaERldGVjdGVkXG4gICAgICAgIH0sIEFDSylcbiAgICAgICAgZ3VuREIuZ2V0KERCX1JFQ09SRCkuc2V0IHVzZXJcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGFkZFRvQWxsUmVjb3JkZWRDaHVua3MgPSAoY2h1bmspIC0+XG4gICAgICAgIHJlY29yZGVkQ2h1bmtzLnB1c2ggY2h1bmtcbiAgICAgICAgc3VwZXJCdWZmZXIgPSBuZXcgQmxvYihyZWNvcmRlZENodW5rcylcbiAgICAgICAgTE9HICdUb3RhbCBkYXRhIHNpemUgJyArIGZvcm1hdEJ5dGVzKHN1cGVyQnVmZmVyLnNpemUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBmb3JtYXRCeXRlcyA9IChieXRlcykgLT5cbiAgICAgICAgaWYgYnl0ZXMgPCAxMDI0XG4gICAgICAgICAgYnl0ZXMgKyAnIEJ5dGVzJ1xuICAgICAgICBlbHNlIGlmIGJ5dGVzIDwgMTA0ODU3NlxuICAgICAgICAgIChieXRlcyAvIDEwMjQpLnRvRml4ZWQoMykgKyAnIEtCJ1xuICAgICAgICBlbHNlIGlmIGJ5dGVzIDwgMTA3Mzc0MTgyNFxuICAgICAgICAgIChieXRlcyAvIDEwNDg1NzYpLnRvRml4ZWQoMykgKyAnIE1CJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgKGJ5dGVzIC8gMTA3Mzc0MTgyNCkudG9GaXhlZCgzKSArICcgR0InXG5cbiAgICAgIGF0dGFjaFNwZWVjaERldGVjdGlvbiA9IChzdHJlYW0pIC0+XG4gICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICBzcGVlY2hFdmVudHMgPSBoYXJrKHN0cmVhbSwgb3B0aW9ucylcbiAgICAgICAgc3BlZWNoRXZlbnRzLm9uICdzcGVha2luZycsIC0+XG4gICAgICAgICAgaWYgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEXG4gICAgICAgICAgICBzcGVlY2hEZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgIExPRyAnc3BlYWtpbmcnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHNwZWVjaEV2ZW50cy5vbiAnc3RvcHBlZF9zcGVha2luZycsIC0+XG4gICAgICAgICAgaWYgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEXG4gICAgICAgICAgICBMT0cgJ3N0b3BwZWRfc3BlYWtpbmcnXG4gICAgICAgICAgICBzcGVlY2hEZXRlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHJldHVyblxuXG5cblxuICAgICAgIyBEb20gZWxlbWVudHMgbmFtZSBjb25zdGFudHNcbiAgICAgIFJFTU9URV9WSURFTyA9ICd2aWRlbydcbiAgICAgICNJRFxuICAgICAgc3RyZWFtSWQgPSBEYXRlLm5vdygpXG4gICAgICAjIEdVTiBBQ0tcbiAgICAgIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpXG4gICAgICByZW1vdGVWaWRlby5hdXRvcGxheSA9IHRydWVcbiAgICAgIHJlbW90ZVZpZGVvLmNvbnRyb2xzID0gdHJ1ZVxuICAgICAgcmVtb3RlVmlkZW8ubXV0ZWQgPSB0cnVlXG4gICAgICByZW1vdGVWaWRlby5wbGF5c2lubGluZSA9IHRydWVcbiAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgcmVtb3RlVmlkZW8uc3R5bGUud2lkdGggPSBcIjUwJVwiXG4gICAgICByZW1vdGVWaWRlby5wcmVsb2FkID0gXCJub25lXCJcbiAgICAgIG15VmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCB0cnVlKVxuICAgICAgbXlWaWRlby5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiAxMDAlOycpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCB0cnVlKVxuICAgICAgbXlWaWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgdHJ1ZSlcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpXG4gICAgICBlbGVtZW50LmFwcGVuZChteVZpZGVvKVxuICAgICAgZWxlbWVudC5hcHBlbmQocmVtb3RlVmlkZW8pXG4gICAgICBidXR0b25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdwJ1xuICAgICAgZ29MaXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIGdvTGl2ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvIG1hci1yaWdodDVcIj48L3NwYW4+IEdvIGxpdmUnXG4gICAgICBnb0xpdmVCdXR0b24uc2V0QXR0cmlidXRlICdjbGFzcycsICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICBidXR0b25Sb3cuYXBwZW5kKGdvTGl2ZUJ1dHRvbilcbiAgICAgICN0b2dnbGVGdWxsU2NyZWVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICN0b2dnbGVGdWxsU2NyZWVuQnV0dG9uLmlubmVySFRNTCA9ICd0b2dnbGUgZnVsbHNjcmVlbidcbiAgICAgICN0b2dnbGVGdWxsU2NyZWVuQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgI3AuYXBwZW5kKHRvZ2dsZUZ1bGxTY3JlZW5CdXR0b24pXG4gICAgICBzd2l0Y2hDYW1lcmFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLmlubmVySFRNTCA9ICdzd2l0Y2ggY2FtZXJhJ1xuICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTsnXG4gICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uc2V0QXR0cmlidXRlICdjbGFzcycsICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICBidXR0b25Sb3cuYXBwZW5kKHN3aXRjaENhbWVyYUJ1dHRvbilcbiAgICAgIG11dGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgbXV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXZvbHVtZS1vZmYgbWFyLXJpZ2h0NVwiPjwvc3Bhbj4gTXV0ZSdcbiAgICAgIG11dGVCdXR0b24uc2V0QXR0cmlidXRlICdjbGFzcycsICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICBidXR0b25Sb3cuYXBwZW5kKG11dGVCdXR0b24pXG4gICAgICBlbGVtZW50LmFwcGVuZCBidXR0b25Sb3dcbiAgICAgIGFtb3VudE9mQ2FtZXJhcyA9IDBcbiAgICAgIGN1cnJlbnRGYWNpbmdNb2RlID0gJ2Vudmlyb25tZW50J1xuICAgICAgbXV0ZWQgPSB0cnVlXG4gICAgICBndW5EQiA9IHVuZGVmaW5lZFxuXG4gICAgICBBQ0sgPSAoYWNrKSAtPlxuICAgICAgICBpZiBhY2sub2sgIT0gMSBhbmQgYWNrLmVyciAhPSAnRXJyb3I6IE5vIEFDSyByZWNlaXZlZCB5ZXQuJ1xuICAgICAgICAgIExPRyAnYWNrJywgYWNrXG4gICAgICAgICAgIyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgTE9HICdhY2snLCBhY2tcbiAgICAgICAgICAjIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHJldHVyblxuXG4gICAgICByZW1vdmVGcm9tR3VuID0gKGlkKSAtPlxuICAgICAgICAjIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHVzZXIgPSBndW5EQi5nZXQoc3RyZWFtSWQpXG4gICAgICAgIGd1bkRCLmdldChEQl9SRUNPUkQpLnVuc2V0IHVzZXJcbiAgICAgICAgIyB1c2VyLnB1dCBudWxsICMgY2FuJ3QgcHV0IG51bGwgdG8gcm9vdCBsZXZlbCBub2RlXG4gICAgICAgIHJldHVyblxuXG4gICAgICBkZWJ1ZyA9ICh0ZXh0KSAtPlxuICAgICAgICBpZiBERUJVR1xuICAgICAgICAgIExPRyB0ZXh0XG4gICAgICAgIHJldHVyblxuXG4gICAgICBpbml0Q2FtZXJhVUkgPSAtPlxuICAgICAgICAjIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL25sL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9idXR0b25cbiAgICAgICAgIyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvQVJJQV9UZWNobmlxdWVzL1VzaW5nX3RoZV9idXR0b25fcm9sZVxuICAgICAgICBnb0xpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgICAgIHRha2VTbmFwc2hvdCgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIG11dGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgICAgIG11dGVVbm11dGUoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICAjIC0tIHN3aXRjaCBjYW1lcmEgcGFydFxuICAgICAgICBpZiBhbW91bnRPZkNhbWVyYXMgPiAxXG4gICAgICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAgICAgICBpZiBjdXJyZW50RmFjaW5nTW9kZSA9PSAnZW52aXJvbm1lbnQnXG4gICAgICAgICAgICAgIGN1cnJlbnRGYWNpbmdNb2RlID0gJ3VzZXInXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGN1cnJlbnRGYWNpbmdNb2RlID0gJ2Vudmlyb25tZW50J1xuICAgICAgICAgICAgaW5pdENhbWVyYVN0cmVhbSgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgICMgaHR0cHM6Ly9naXRodWIuY29tL3dlYnJ0Yy9zYW1wbGVzL2Jsb2IvZ2gtcGFnZXMvc3JjL2NvbnRlbnQvZGV2aWNlcy9pbnB1dC1vdXRwdXQvanMvbWFpbi5qc1xuXG4gICAgICBjbG9zZUNhbWVyYVN0cmVhbSA9IC0+XG4gICAgICAgIGlmIHdpbmRvdy5zdHJlYW1cbiAgICAgICAgICB3aW5kb3cuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2ggKHRyYWNrKSAtPlxuICAgICAgICAgICAgdHJhY2suc3RvcCgpXG5cbiAgICAgIGVsZW1lbnQub24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgY2xvc2VDYW1lcmFTdHJlYW0oKVxuXG4gICAgICBpbml0Q2FtZXJhU3RyZWFtID0gLT5cbiAgICAgICAgIyBzdG9wIGFueSBhY3RpdmUgc3RyZWFtcyBpbiB0aGUgd2luZG93XG5cbiAgICAgICAgaGFuZGxlU3VjY2VzcyA9IChzdHJlYW0pIC0+XG4gICAgICAgICAgd2luZG93LnN0cmVhbSA9IHN0cmVhbVxuICAgICAgICAgICMgbWFrZSBzdHJlYW0gYXZhaWxhYmxlIHRvIGJyb3dzZXIgY29uc29sZVxuICAgICAgICAgIG15VmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtXG4gICAgICAgICAgaWYgY29uc3RyYWludHMudmlkZW8uZmFjaW5nTW9kZVxuICAgICAgICAgICAgaWYgY29uc3RyYWludHMudmlkZW8uZmFjaW5nTW9kZSA9PSAnZW52aXJvbm1lbnQnXG4gICAgICAgICAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2FyaWEtcHJlc3NlZCcsIHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLnNldEF0dHJpYnV0ZSAnYXJpYS1wcmVzc2VkJywgZmFsc2VcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuXG4gICAgICAgIGhhbmRsZUVycm9yID0gKGVycm9yKSAtPlxuICAgICAgICAgIExPRyBlcnJvclxuICAgICAgICAgICNodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFEZXZpY2VzL2dldFVzZXJNZWRpYVxuICAgICAgICAgIGlmIGVycm9yID09ICdQZXJtaXNzaW9uRGVuaWVkRXJyb3InXG4gICAgICAgICAgICBhbGVydCAnUGVybWlzc2lvbiBkZW5pZWQuIFBsZWFzZSByZWZyZXNoIGFuZCBnaXZlIHBlcm1pc3Npb24uJ1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGNsb3NlQ2FtZXJhU3RyZWFtKClcblxuICAgICAgICBjb25zdHJhaW50cyA9XG4gICAgICAgICAgYXVkaW86IHRydWVcbiAgICAgICAgICB2aWRlbzpcbiAgICAgICAgICAgIHdpZHRoOlxuICAgICAgICAgICAgICBtaW46IDIwMFxuICAgICAgICAgICAgICBpZGVhbDogMjAwXG4gICAgICAgICAgICAgIG1heDogNjQwXG4gICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgIG1pbjogMjAwXG4gICAgICAgICAgICAgIGlkZWFsOiAyMDBcbiAgICAgICAgICAgICAgbWF4OiA2NDBcbiAgICAgICAgICAgIGZhY2luZ01vZGU6IGN1cnJlbnRGYWNpbmdNb2RlXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKS50aGVuKGhhbmRsZVN1Y2Nlc3MpLmNhdGNoIGhhbmRsZUVycm9yXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0YWtlU25hcHNob3QgPSAtPlxuICAgICAgICBpZiAhaXNSZWNvcmRpbmcoKVxuICAgICAgICAgIGNhcHR1cmVTY3JlZW4gd2luZG93LnN0cmVhbVxuICAgICAgICAgIGdvTGl2ZUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBhdXNlUmVjb3JkaW5nKClcbiAgICAgICAgICBnb0xpdmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICByZXR1cm5cblxuICAgICAgbXV0ZVVubXV0ZSA9IC0+XG4gICAgICAgIGlmIG11dGVkXG4gICAgICAgICAgbXV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2FyaWEtcHJlc3NlZCcsIGZhbHNlXG4gICAgICAgICAgbXV0ZWQgPSBmYWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbXV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2FyaWEtcHJlc3NlZCcsIHRydWVcbiAgICAgICAgICBtdXRlZCA9IHRydWVcbiAgICAgICAgdmlkZW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ZpZGVvJylcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZpZGVvcylcbiAgICAgICAgaSA9IDBcbiAgICAgICAgd2hpbGUgaSA8IGtleXMubGVuZ3RoXG4gICAgICAgICAgaWYgdmlkZW9zW2ldLmlkICE9ICd2aWRlbydcbiAgICAgICAgICAgIHZpZGVvc1tpXS5tdXRlZCA9IG11dGVkXG4gICAgICAgICAgaSsrXG4gICAgICAgIHJldHVyblxuXG4gICAgICBvcGVuUmVtb3RlVmlkZW8gPSAtPlxuICAgICAgICBpZCA9IHNjb3BlLnB1YmtleSArICcvc3RyZWFtJ1xuICAgICAgICBzdHJlYW1lciA9IG5ldyBTdHJlYW1lcihpZCwgcmVtb3RlVmlkZW8pXG4gICAgICAgIHN0cmVhbWVyLmluaXQoKVxuXG4gICAgICBnbyA9IC0+XG4gICAgICAgIHJldHVybiB1bmxlc3Mgc2NvcGUuZ3VuIGFuZCBzY29wZS5wdWJrZXlcbiAgICAgICAgdSA9IHNjb3BlLmd1bi51c2VyKClcbiAgICAgICAgbXlQdWJLZXkgPSBpZiB1Ll8uc2VhIHRoZW4gdS5fLnNlYS5wdWIgZWxzZSB1bmRlZmluZWRcbiAgICAgICAgaWYgbXlQdWJLZXkgIT0gc2NvcGUucHVia2V5XG4gICAgICAgICAgaWYgc2NvcGUud2F0Y2hPbmx5XG4gICAgICAgICAgICBidXR0b25Sb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgICAgICAgIG15VmlkZW8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG15VmlkZW8uc3R5bGUud2lkdGggPSAnNTAlJ1xuICAgICAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgIG9wZW5SZW1vdGVWaWRlbygpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBteVZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICAgICAgcmVtb3RlVmlkZW8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBzdHJlYW1JZCA9IG15UHViS2V5ICsgJy9zdHJlYW0nXG4gICAgICAgICMgZ3VuREIgPSBzY29wZS5ndW4uYmFjaygtMSlcbiAgICAgICAgIyBHVU5cbiAgICAgICAgcGVlcnMgPSBbICdodHRwczovL2d1bm1lZXRpbmdzZXJ2ZXIuaGVyb2t1YXBwLmNvbS9ndW4nIF1cbiAgICAgICAgb3B0ID1cbiAgICAgICAgICBwZWVyczogcGVlcnNcbiAgICAgICAgICBsb2NhbFN0b3JhZ2U6IGZhbHNlXG4gICAgICAgICAgcmFkaXNrOiBmYWxzZVxuICAgICAgICBndW5EQiA9IEd1bihvcHQpXG4gICAgICAgIHJlbW92ZUZyb21HdW4gc3RyZWFtSWRcblxuICAgICAgICB1bmxlc3Mgc2NvcGUud2F0Y2hPbmx5XG4gICAgICAgICAgIyBkbyBzb21lIFdlYlJUQyBjaGVja3MgYmVmb3JlIGNyZWF0aW5nIHRoZSBpbnRlcmZhY2VcbiAgICAgICAgICBEZXRlY3RSVEMubG9hZCAtPlxuICAgICAgICAgICAgIyBkbyBzb21lIGNoZWNrc1xuICAgICAgICAgICAgaWYgRGV0ZWN0UlRDLmlzV2ViUlRDU3VwcG9ydGVkID09IGZhbHNlXG4gICAgICAgICAgICAgIGFsZXJ0ICdQbGVhc2UgdXNlIENocm9tZSwgRmlyZWZveCwgaU9TIDExLCBBbmRyb2lkIDUgb3IgaGlnaGVyLCBTYWZhcmkgMTEgb3IgaGlnaGVyJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBpZiBEZXRlY3RSVEMuaGFzV2ViY2FtID09IGZhbHNlXG4gICAgICAgICAgICAgICAgYWxlcnQgJ1BsZWFzZSBpbnN0YWxsIGFuIGV4dGVybmFsIHdlYmNhbSBkZXZpY2UuJ1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYW1vdW50T2ZDYW1lcmFzID0gRGV0ZWN0UlRDLnZpZGVvSW5wdXREZXZpY2VzLmxlbmd0aFxuICAgICAgICAgICAgICAgIGluaXRDYW1lcmFVSSgpXG4gICAgICAgICAgICAgICAgaW5pdENhbWVyYVN0cmVhbSgpXG4gICAgICAgICAgICBMT0cgJ1JUQyBEZWJ1ZyBpbmZvOiAnICsgJ1xcbiBPUzogICAgICAgICAgICAgICAgICAgJyArIERldGVjdFJUQy5vc05hbWUgKyAnICcgKyBEZXRlY3RSVEMub3NWZXJzaW9uICsgJ1xcbiBicm93c2VyOiAgICAgICAgICAgICAgJyArIERldGVjdFJUQy5icm93c2VyLmZ1bGxWZXJzaW9uICsgJyAnICsgRGV0ZWN0UlRDLmJyb3dzZXIubmFtZSArICdcXG4gaXMgTW9iaWxlIERldmljZTogICAgICcgKyBEZXRlY3RSVEMuaXNNb2JpbGVEZXZpY2UgKyAnXFxuIGhhcyB3ZWJjYW06ICAgICAgICAgICAnICsgRGV0ZWN0UlRDLmhhc1dlYmNhbSArICdcXG4gaGFzIHBlcm1pc3Npb246ICAgICAgICcgKyBEZXRlY3RSVEMuaXNXZWJzaXRlSGFzV2ViY2FtUGVybWlzc2lvbiArICdcXG4gZ2V0VXNlck1lZGlhIFN1cHBvcnQ6ICcgKyBEZXRlY3RSVEMuaXNHZXRVc2VyTWVkaWFTdXBwb3J0ZWQgKyAnXFxuIGlzV2ViUlRDIFN1cHBvcnRlZDogICAnICsgRGV0ZWN0UlRDLmlzV2ViUlRDU3VwcG9ydGVkICsgJ1xcbiBXZWJBdWRpbyBTdXBwb3J0ZWQ6ICAgJyArIERldGVjdFJUQy5pc0F1ZGlvQ29udGV4dFN1cHBvcnRlZCArICdcXG4gaXMgTW9iaWxlIERldmljZTogICAgICcgKyBEZXRlY3RSVEMuaXNNb2JpbGVEZXZpY2VcblxuICAgICAgc2NvcGUuJHdhdGNoICdndW4nLCBnb1xuIl19

(function() {
  angular.module('irisAngular').directive('message', function() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'app/components/message/message.template.html',
      link: function(scope, element, attrs) {
        var a, addAttachment, alpha, attachment, i, index, j, l, len, len1, len2, maxRatingDiff, minRatingDiff, msg, n, neutralRating, rating, ref, ref1, ref2, ref3, ref4, ref5, ref6, smallestIndex, updateReactions, updateReplies, updateShares;
        msg = scope.msg;
        msg.likes = 0;
        updateReactions = function(reactions) {
          var k, liked, likes, v;
          likes = 0;
          liked = false;
          for (k in reactions) {
            v = reactions[k];
            if (v === 'like') {
              likes++;
              if (k === scope.viewpoint.value && v === 'like') {
                liked = true;
              }
            }
          }
          msg.likes = likes;
          return msg.liked = liked;
        };
        if (msg.signedData.sharedMsg && !options.noRecursion) {
          scope.irisIndex.getMessageByHash(msg.signedData.sharedMsg).then(function(m) {
            return msg.sharedMsg = m;
          });
        }
        if (msg.reactions) {
          updateReactions(msg.reactions);
        }
        msg.repliesArr = msg.repliesArr || [];
        msg.replies = msg.replies || {};
        msg.sharesArr = msg.sharesArr || [];
        msg.shares = msg.shares || {};
        updateReplies = function(replies) {
          var hash, replyRaw, results;
          results = [];
          for (hash in replies) {
            replyRaw = replies[hash];
            results.push(window.irisLib.Message.fromSig(replyRaw).then(function(r) {
              var j, len, o, ref;
              if (!(msg.replies[r.getHash()] && msg.replies[r.getHash()].author)) {
                if (msg.signedData.pollOptions && r.signedData.type === 'vote') {
                  if (!(msg.voteMsgs && msg.voteMsgs.hasOwnProperty(r.getSignerKeyID()))) {
                    msg.voteCount = msg.voteCount ? msg.voteCount + 1 : 1;
                    if (!msg.myVote && r.getSignerKeyID() === scope.authentication.user.idValue) {
                      msg.myVote = r.signedData.vote;
                    }
                    msg.voteMsgs = msg.voteMsgs || {};
                    msg.voteMsgs[r.getSignerKeyID()] = r.getHash();
                    if (!msg.voteResults) {
                      msg.voteResults = {};
                      ref = msg.signedData.pollOptions;
                      for (j = 0, len = ref.length; j < len; j++) {
                        o = ref[j];
                        msg.voteResults[o.text] = 0;
                      }
                    }
                    if (msg.voteResults.hasOwnProperty(r.signedData.vote)) {
                      msg.voteResults[r.signedData.vote] = msg.voteResults[r.signedData.vote] + 1;
                    } else {
                      msg.voteResults[r.signedData.vote] = 1;
                    }
                  }
                }
                msg.replies[r.getHash()] = r;
                msg.repliesArr = Object.values(msg.replies);
                if (r.signedData.type === 'vote') {
                  return console.log(1111, r, msg);
                }
              }
            }));
          }
          return results;
        };
        updateShares = function(shares) {
          var hash, results, shareRaw;
          results = [];
          for (hash in shares) {
            shareRaw = shares[hash];
            results.push(window.irisLib.Message.fromSig(shareRaw).then(function(r) {
              if (!(msg.shares[r.getHash()] && msg.shares[r.getHash()].author)) {
                msg.shares[r.getHash()] = r;
                return msg.sharesArr = Object.values(msg.shares);
              }
            }));
          }
          return results;
        };
        if (msg.gun) {
          msg.gun.get('replies').open(updateReplies);
          msg.gun.get('reactions').on(updateReactions);
          msg.gun.get('shares').open(updateShares);
        }
        if (!msg.author) {
          msg.author = msg.getAuthor(scope.irisIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
        }
        msg.author.gun.get('attrs').open(function(d) {
          var mva;
          mva = window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return scope.$apply(function() {
              return msg.author_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return scope.$apply(function() {
              return msg.author_name = mva.nickname.attribute.value;
            });
          }
        });
        msg.recipient = msg.getRecipient(scope.irisIndex);
        msg.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return scope.$apply(function() {
              return msg.recipient_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return scope.$apply(function() {
              return msg.recipient_name = mva.nickname.attribute.value;
            });
          }
        });
        if (msg.signedData.attachments) {
          msg.attachments = [];
          addAttachment = function(attachment) {
            var type, typeSubstr;
            if (attachment.uri) {
              type = attachment.type || 'image';
              typeSubstr = attachment.type.substr(0, 5);
              if (typeSubstr === 'audio' || typeSubstr === 'video') {
                msg.attachments.push(Object.assign({type, typeSubstr}, attachment));
                return console.log(msg.attachments);
              } else {
                return scope.ipfsGet(attachment.uri, {
                  base64type: type
                }).then(function(src) {
                  return scope.$apply(function() {
                    return msg.attachments.push(Object.assign({src, type, typeSubstr}, attachment));
                  });
                });
              }
            }
          };
          ref = msg.signedData.attachments;
          for (j = 0, len = ref.length; j < len; j++) {
            attachment = ref[j];
            addAttachment(attachment);
          }
        }
        // TODO: make sure message signature is checked
        i = void 0;
        i = 0;
        smallestIndex = 1000;
        msg.authorArray = msg.getAuthorArray();
        ref1 = msg.authorArray;
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          a = ref1[l];
          if (!msg.linkToAuthor) {
            msg.linkToAuthor = a;
          }
          index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
          if (index > -1 && index < smallestIndex) {
            smallestIndex = index;
            msg.linkToAuthor = a;
          } else if (!msg.author_name && ((ref2 = a.type) === 'name' || ref2 === 'nickname')) {
            msg.author_name = a.value;
          }
          i++;
        }
        i = 0;
        smallestIndex = 1000;
        msg.recipientArray = msg.getRecipientArray();
        ref3 = msg.recipientArray;
        for (n = 0, len2 = ref3.length; n < len2; n++) {
          a = ref3[n];
          if (!msg.linkToAuthor) {
            msg.linkToRecipient = a;
          }
          index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
          if (index > -1 && index < smallestIndex) {
            smallestIndex = index;
            msg.linkToRecipient = a;
          } else if (!msg.recipient_name && ((ref4 = a.type) === 'name' || ref4 === 'nickname')) {
            msg.recipient_name = a.value;
          }
          i++;
        }
        if (msg.linkToAuthor.equals(msg.linkToRecipient)) {
          msg.sameAuthorAndRecipient = true;
        }
        if (!msg.author_name) {
          msg.author_name = msg.linkToAuthor.value;
          if ((ref5 = msg.linkToAuthor.type) === 'keyID' || ref5 === 'uuid') {
            msg.author_name = msg.author_name.slice(0, 6) + '...';
          }
        }
        if (!msg.recipient_name) {
          msg.recipient_name = msg.linkToRecipient.value;
          if ((ref6 = msg.linkToAuthor.type) === 'keyID' || ref6 === 'uuid') {
            msg.recipient_name = msg.recipient_name.slice(0, 6) + '...';
          }
        }
        alpha = void 0;
        msg.bgColor = '';
        msg.iconCount = new Array(1);
        switch (msg.signedData.type) {
          case 'verify_identity':
          case 'verification':
            msg.iconStyle = 'glyphicon glyphicon-ok-sign';
            return msg.isVerification = true;
          case 'unverify_identity':
          case 'unverification':
            msg.iconStyle = 'glyphicon glyphicon-remove negative';
            msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
            return msg.isUnverification = true;
          case 'post':
            msg.iconStyle = ''; // fa fa-pencil
            return msg.isPost = true;
          case 'rating':
            rating = msg.signedData.rating;
            neutralRating = (msg.signedData.minRating + msg.signedData.maxRating) / 2;
            maxRatingDiff = msg.signedData.maxRating - neutralRating;
            minRatingDiff = msg.signedData.minRating - neutralRating;
            if (rating > neutralRating) {
              if (msg.signedData.context === 'verifier') {
                msg.iconStyle = 'fa fa-shield positive';
              } else {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
              }
              alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2;
              return msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');';
            } else if (rating < neutralRating) {
              msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative';
              msg.iconCount = minRatingDiff > -2 ? msg.iconCount : new Array(Math.ceil(3 * rating / minRatingDiff));
              alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2;
              return msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');';
            } else {
              msg.bgColor = 'background-color: #fcf8e3;';
              return msg.iconStyle = 'glyphicon glyphicon-question-sign neutral';
            }
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsU0FEYixFQUN3QixRQUFBLENBQUEsQ0FBQTtXQUNwQjtNQUFBLEtBQUEsRUFBTyxJQUFQO01BQ0EsUUFBQSxFQUFVLEdBRFY7TUFFQSxXQUFBLEVBQWEsOENBRmI7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsYUFBQSxFQUFBLGFBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLGFBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxlQUFBLEVBQUEsYUFBQSxFQUFBO1FBQUEsR0FBQSxHQUFNLEtBQUssQ0FBQztRQUNaLEdBQUcsQ0FBQyxLQUFKLEdBQVk7UUFDWixlQUFBLEdBQWtCLFFBQUEsQ0FBQyxTQUFELENBQUE7QUFDaEIsY0FBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQTtVQUFBLEtBQUEsR0FBUTtVQUNSLEtBQUEsR0FBUTtVQUNSLEtBQUEsY0FBQTs7WUFDRSxJQUFHLENBQUEsS0FBSyxNQUFSO2NBQ0UsS0FBQTtjQUNBLElBQWdCLENBQUEsS0FBSyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQXJCLElBQStCLENBQUEsS0FBSyxN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MUQ7YUFBQSxNQUFBO2NBTUgsR0FBRyxDQUFDLE9BQUosR0FBYztxQkFDZCxHQUFHLENBQUMsU0FBSixHQUFnQiw0Q0FQYjs7QUF4QlQ7TUF4SEk7SUFITjtFQURvQixDQUR4QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdtZXNzYWdlJywgLT5cbiAgICBzY29wZTogdHJ1ZVxuICAgIHJlc3RyaWN0OiAnRSdcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBtc2cgPSBzY29wZS5tc2dcbiAgICAgIG1zZy5saWtlcyA9IDBcbiAgICAgIHVwZGF0ZVJlYWN0aW9ucyA9IChyZWFjdGlvbnMpIC0+XG4gICAgICAgIGxpa2VzID0gMFxuICAgICAgICBsaWtlZCA9IGZhbHNlXG4gICAgICAgIGZvciBrLCB2IG9mIHJlYWN0aW9uc1xuICAgICAgICAgIGlmIHYgPT0gJ2xpa2UnXG4gICAgICAgICAgICBsaWtlcysrXG4gICAgICAgICAgICBsaWtlZCA9IHRydWUgaWYgayA9PSBzY29wZS52aWV3cG9pbnQudmFsdWUgYW5kIHYgPT0gJ2xpa2UnXG4gICAgICAgIG1zZy5saWtlcyA9IGxpa2VzXG4gICAgICAgIG1zZy5saWtlZCA9IGxpa2VkXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5zaGFyZWRNc2cgYW5kIG5vdCBvcHRpb25zLm5vUmVjdXJzaW9uXG4gICAgICAgIHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKG1zZy5zaWduZWREYXRhLnNoYXJlZE1zZykudGhlbiAobSkgLT5cbiAgICAgICAgICBtc2cuc2hhcmVkTXNnID0gbVxuICAgICAgdXBkYXRlUmVhY3Rpb25zKG1zZy5yZWFjdGlvbnMpIGlmIG1zZy5yZWFjdGlvbnNcbiAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgIG1zZy5yZXBsaWVzID0gbXNnLnJlcGxpZXMgb3Ige31cbiAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgdXBkYXRlUmVwbGllcyA9IChyZXBsaWVzKSAtPlxuICAgICAgICBmb3IgaGFzaCwgcmVwbHlSYXcgb2YgcmVwbGllc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhyZXBseVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gYW5kIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXS5hdXRob3JcbiAgICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEucG9sbE9wdGlvbnMgYW5kIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZU1zZ3MgYW5kIG1zZy52b3RlTXNncy5oYXNPd25Qcm9wZXJ0eShyLmdldFNpZ25lcktleUlEKCkpXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZUNvdW50ID0gaWYgbXNnLnZvdGVDb3VudCB0aGVuIG1zZy52b3RlQ291bnQgKyAxIGVsc2UgMVxuICAgICAgICAgICAgICAgICAgaWYgIW1zZy5teVZvdGUgYW5kIHIuZ2V0U2lnbmVyS2V5SUQoKSA9PSBzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgbXNnLm15Vm90ZSA9IHIuc2lnbmVkRGF0YS52b3RlXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZU1zZ3MgPSBtc2cudm90ZU1zZ3Mgb3Ige31cbiAgICAgICAgICAgICAgICAgIG1zZy52b3RlTXNnc1tyLmdldFNpZ25lcktleUlEKCldID0gci5nZXRIYXNoKClcbiAgICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZVJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzID0ge31cbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzW28udGV4dF0gPSAwIGZvciBvIGluIG1zZy5zaWduZWREYXRhLnBvbGxPcHRpb25zXG4gICAgICAgICAgICAgICAgICBpZiBtc2cudm90ZVJlc3VsdHMuaGFzT3duUHJvcGVydHkoci5zaWduZWREYXRhLnZvdGUpXG4gICAgICAgICAgICAgICAgICAgIG1zZy52b3RlUmVzdWx0c1tyLnNpZ25lZERhdGEudm90ZV0gPSBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdICsgMVxuICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdID0gMVxuICAgICAgICAgICAgICBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cucmVwbGllcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgMTExMSwgciwgbXNnIGlmIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgdXBkYXRlU2hhcmVzID0gKHNoYXJlcykgLT5cbiAgICAgICAgZm9yIGhhc2gsIHNoYXJlUmF3IG9mIHNoYXJlc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhzaGFyZVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSBhbmQgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0uYXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgICAgICBtc2cuc2hhcmVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cuc2hhcmVzKVxuICAgICAgaWYgbXNnLmd1blxuICAgICAgICBtc2cuZ3VuLmdldCgncmVwbGllcycpLm9wZW4gdXBkYXRlUmVwbGllc1xuICAgICAgICBtc2cuZ3VuLmdldCgncmVhY3Rpb25zJykub24gdXBkYXRlUmVhY3Rpb25zXG4gICAgICAgIG1zZy5ndW4uZ2V0KCdzaGFyZXMnKS5vcGVuIHVwZGF0ZVNoYXJlc1xuICAgICAgdW5sZXNzIG1zZy5hdXRob3JcbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3Ioc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgbXNnLnJlY2lwaWVudCA9IG1zZy5nZXRSZWNpcGllbnQoc2NvcGUuaXJpc0luZGV4KVxuICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgIG12YSA9IHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgc2NvcGUuJGFwcGx5IC0+IG1zZy5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgIGlmIG1zZy5zaWduZWREYXRhLmF0dGFjaG1lbnRzXG4gICAgICAgIG1zZy5hdHRhY2htZW50cyA9IFtdXG4gICAgICAgIGFkZEF0dGFjaG1lbnQgPSAoYXR0YWNobWVudCkgLT5cbiAgICAgICAgICBpZiBhdHRhY2htZW50LnVyaVxuICAgICAgICAgICAgdHlwZSA9IGF0dGFjaG1lbnQudHlwZSBvciAnaW1hZ2UnXG4gICAgICAgICAgICB0eXBlU3Vic3RyID0gYXR0YWNobWVudC50eXBlLnN1YnN0cigwLDUpXG4gICAgICAgICAgICBpZiB0eXBlU3Vic3RyIGluIFsnYXVkaW8nLCAndmlkZW8nXVxuICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaCBPYmplY3QuYXNzaWduIHt0eXBlLCB0eXBlU3Vic3RyfSwgYXR0YWNobWVudFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyBtc2cuYXR0YWNobWVudHNcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgc2NvcGUuaXBmc0dldChhdHRhY2htZW50LnVyaSwge2Jhc2U2NHR5cGU6IHR5cGV9KS50aGVuIChzcmMpIC0+XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaCBPYmplY3QuYXNzaWduIHtzcmMsIHR5cGUsIHR5cGVTdWJzdHJ9LCBhdHRhY2htZW50XG4gICAgICAgIGFkZEF0dGFjaG1lbnQoYXR0YWNobWVudCkgZm9yIGF0dGFjaG1lbnQgaW4gbXNnLnNpZ25lZERhdGEuYXR0YWNobWVudHNcbiAgICAgICMgVE9ETzogbWFrZSBzdXJlIG1lc3NhZ2Ugc2lnbmF0dXJlIGlzIGNoZWNrZWRcbiAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgIGkgPSAwXG4gICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgbXNnLmF1dGhvckFycmF5ID0gbXNnLmdldEF1dGhvckFycmF5KClcbiAgICAgIGZvciBhIGluIG1zZy5hdXRob3JBcnJheVxuICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICBpbmRleCA9IE9iamVjdC5rZXlzKHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihhLnR5cGUpXG4gICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBhXG4gICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gYS52YWx1ZVxuICAgICAgICBpKytcbiAgICAgIGkgPSAwXG4gICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgbXNnLnJlY2lwaWVudEFycmF5ID0gbXNnLmdldFJlY2lwaWVudEFycmF5KClcbiAgICAgIGZvciBhIGluIG1zZy5yZWNpcGllbnRBcnJheVxuICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICBpbmRleCA9IE9iamVjdC5rZXlzKHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihhLnR5cGUpXG4gICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBhXG4gICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gYS52YWx1ZVxuICAgICAgICBpKytcbiAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IuZXF1YWxzKG1zZy5saW5rVG9SZWNpcGllbnQpXG4gICAgICAgIG1zZy5zYW1lQXV0aG9yQW5kUmVjaXBpZW50ID0gdHJ1ZVxuICAgICAgaWYgIW1zZy5hdXRob3JfbmFtZVxuICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cubGlua1RvQXV0aG9yLnZhbHVlXG4gICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5hdXRob3JfbmFtZS5zbGljZSgwLCA2KSArICcuLi4nXG4gICAgICBpZiAhbXNnLnJlY2lwaWVudF9uYW1lXG4gICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5saW5rVG9SZWNpcGllbnQudmFsdWVcbiAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLnJlY2lwaWVudF9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICBzd2l0Y2ggbXNnLnNpZ25lZERhdGEudHlwZVxuICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vay1zaWduJ1xuICAgICAgICAgIG1zZy5pc1ZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgd2hlbiAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICBtc2cuaXNVbnZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgd2hlbiAncG9zdCdcbiAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJycgIyBmYSBmYS1wZW5jaWxcbiAgICAgICAgICBtc2cuaXNQb3N0ID0gdHJ1ZVxuICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgcmF0aW5nID0gbXNnLnNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBtc2cuc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBtc2cuc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgbWluUmF0aW5nRGlmZiA9IG1zZy5zaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBpZiBtc2cuc2lnbmVkRGF0YS5jb250ZXh0ID09ICd2ZXJpZmllcidcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdmYSBmYS1zaGllbGQgcG9zaXRpdmUnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuIl19

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance, scope.ipfs);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxRQUFBLEVBQVUsR0FBVjtRQUNBLElBQUEsRUFBTTtNQUROLENBREY7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBO1FBQUEsS0FBSyxDQUFDLFlBQU4sR0FBd0IsT0FBTyxLQUFLLENBQUMsWUFBYixLQUE2QixXQUFoQyxHQUFpRCxJQUFqRCxHQUEyRCxDQUFDLENBQUMsUUFBQSxDQUFTLEtBQUssQ0FBQyxZQUFmO1FBQ2xGLEtBQUssQ0FBQyxNQUFOLEdBQWtCLEtBQUEsQ0FBTSxLQUFLLENBQUMsTUFBWixDQUFILEdBQTRCLENBQTVCLEdBQW1DLEtBQUssQ0FBQztRQUN4RCxNQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7QUFDUCxjQUFBO1VBQUEsSUFBRyxLQUFLLENBQUMsUUFBTixJQUFrQixLQUFLLENBQUMsUUFBUSxDQUFDLFNBQXBDO1lBQ0UsU0FBQSxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBZixDQUF5QixLQUFLLENBQUMsS0FBL0IsRUFBc0MsS0FBSyxDQUFDLE1BQTVDLEVBQW9ELEtBQUssQ0FBQyxZQUExRCxFQUF3RSxLQUFLLENBQUMsSUFBOUU7WUFDWixPQUFPLENBQUMsS0FBUixDQUFBO21CQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixFQUhGOztRQURPO2VBS1QsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQyxVQUFELENBQWxCLEVBQWdDLE1BQWhDO01BUkk7SUFITjtFQURzQixDQUQxQjtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdpZGVudGljb24nLCAtPlxuICAgIHNjb3BlOlxuICAgICAgaWRlbnRpdHk6ICc9J1xuICAgICAgaXBmczogJz0nXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIGF0dHJzLnNob3dEaXN0YW5jZSA9IGlmIHR5cGVvZiBhdHRycy5zaG93RGlzdGFuY2UgPT0gJ3VuZGVmaW5lZCcgdGhlbiB0cnVlIGVsc2UgISFwYXJzZUludChhdHRycy5zaG93RGlzdGFuY2UpXG4gICAgICBhdHRycy5ib3JkZXIgPSBpZiBpc05hTihhdHRycy5ib3JkZXIpIHRoZW4gMyBlbHNlIGF0dHJzLmJvcmRlclxuICAgICAgdXBkYXRlID0gLT5cbiAgICAgICAgaWYgc2NvcGUuaWRlbnRpdHkgJiYgc2NvcGUuaWRlbnRpdHkuaWRlbnRpY29uXG4gICAgICAgICAgaWRlbnRpY29uID0gc2NvcGUuaWRlbnRpdHkuaWRlbnRpY29uKGF0dHJzLndpZHRoLCBhdHRycy5ib3JkZXIsIGF0dHJzLnNob3dEaXN0YW5jZSwgc2NvcGUuaXBmcylcbiAgICAgICAgICBlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZChpZGVudGljb24pXG4gICAgICBzY29wZS4kd2F0Y2hHcm91cCBbJ2lkZW50aXR5J10sIHVwZGF0ZVxuIl19

(function() {
  angular.module('irisAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('irisAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGFBQWYsQ0FDQSxDQUFDLFNBREQsQ0FDVyxTQURYLEVBQ3NCLFFBQUEsQ0FBQSxDQUFBO1dBQ3BCLFFBQUEsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsQ0FBQTtNQUNFLEtBQUssQ0FBQyxHQUFOLENBQVUsU0FBVixFQUFxQixRQUFBLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FBQTtRQUNuQixJQUFHLElBQUEsS0FBUSxJQUFJLENBQUMsT0FBaEI7VUFDRSxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBUixDQUFBLEVBREY7O01BRG1CLENBQXJCO0lBREY7RUFEb0IsQ0FEdEI7O0VBU0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0EsQ0FBQyxPQURELENBQ1MsT0FEVCxFQUNrQixRQUFBLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBQTtXQUNoQixRQUFBLENBQUMsSUFBRCxDQUFBO01BQ0UsUUFBQSxDQUFTLFFBQUEsQ0FBQSxDQUFBO1FBQ1AsVUFBVSxDQUFDLFVBQVgsQ0FBc0IsU0FBdEIsRUFBaUMsSUFBakM7TUFETyxDQUFUO0lBREY7RUFEZ0IsQ0FEbEI7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpcmlzQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4uZmFjdG9yeSAnZm9jdXMnLCAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIC0+XG4gIChuYW1lKSAtPlxuICAgICR0aW1lb3V0IC0+XG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ2ZvY3VzT24nLCBuYW1lXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbiJdfQ==

(function() {
  'use strict';
  angular.module('irisAngular').service('NotificationService', [
    'Notification',
    function(uiNotification) {
      return {
        notifications: [],
        unseenCount: 0,
        create: function(options) {
          var defaultOptions;
          defaultOptions = {
            seen: false,
            message: '',
            type: 'primary',
            positionX: 'right',
            positionY: 'bottom',
            delay: 10000,
            replaceMessage: true,
            templateUrl: 'app/services/notification.template.html'
          };
          options = Object.assign(defaultOptions,
    options);
          this.notifications.push(options);
          this.notifications.splice(10); // maximum notifications length
          if (!options.seen) {
            this.unseenCount++;
          }
          return uiNotification(options);
        },
        markAllSeen: function(options) {
          var i,
    len,
    n,
    ref;
          ref = this.notifications;
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            n.seen = true;
          }
          return this.unseenCount = 0;
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsT0FBOUIsQ0FBc0MscUJBQXRDLEVBQTZEO0lBQzNELGNBRDJEO0lBRTNELFFBQUEsQ0FBQyxjQUFELENBQUE7YUFDRTtRQUNFLGFBQUEsRUFBZSxFQURqQjtRQUVFLFdBQUEsRUFBYSxDQUZmO1FBR0UsTUFBQSxFQUFRLFFBQUEsQ0FBQyxPQUFELENBQUE7QUFDTixjQUFBO1VBQUEsY0FBQSxHQUNFO1lBQUEsSUFBQSxFQUFNLEtBQU47WUFDQSxPQUFBLEVBQVMsRUFEVDtZQUVBLElBQUEsRUFBTSxTQUZOO1lBR0EsU0FBQSxFQUFXLE9BSFg7WUFJQSxTQUFBLEVBQVcsUUFKWDtZQUtBLEtBQUEsRUFBTyxLQUxQO1lBTUEsY0FBQSxFQUFnQixJQU5oQjtZQU9BLFdBQUEsRUFBYTtVQVBiO1VBUUYsT0FBQSxHQUFVLE1BQU0sQ0FBQyxNQUFQLENBQWMsY0FBZDtJQUE4QixPQUE5QjtVQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBbkIsQ0FBd0IsT0FBeEI7VUFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQW5CLENBQTBCLEVBQTFCLEVBWEE7VUFZQSxJQUFBLENBQTBCLE9BQU8sQ0FBQyxJQUFsQztZQUFBLElBQUksQ0FBQyxXQUFMLEdBQUE7O2lCQUNBLGNBQUEsQ0FBZSxPQUFmO1FBZE0sQ0FIVjtRQWtCRSxXQUFBLEVBQWEsUUFBQSxDQUFDLE9BQUQsQ0FBQTtBQUNYLGNBQUEsQ0FBQTtJQUFBLEdBQUE7SUFBQSxDQUFBO0lBQUE7QUFBYztVQUFBLEtBQUEscUNBQUE7O1lBQWQsQ0FBQyxDQUFDLElBQUYsR0FBUztVQUFLO2lCQUNkLElBQUksQ0FBQyxXQUFMLEdBQW1CO1FBRlI7TUFsQmY7SUFERixDQUYyRDtHQUE3RDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5zZXJ2aWNlICdOb3RpZmljYXRpb25TZXJ2aWNlJywgW1xuICAnTm90aWZpY2F0aW9uJyxcbiAgKHVpTm90aWZpY2F0aW9uKSAtPlxuICAgIHtcbiAgICAgIG5vdGlmaWNhdGlvbnM6IFtdXG4gICAgICB1bnNlZW5Db3VudDogMFxuICAgICAgY3JlYXRlOiAob3B0aW9ucykgLT5cbiAgICAgICAgZGVmYXVsdE9wdGlvbnMgPVxuICAgICAgICAgIHNlZW46IGZhbHNlXG4gICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICB0eXBlOiAncHJpbWFyeSdcbiAgICAgICAgICBwb3NpdGlvblg6ICdyaWdodCdcbiAgICAgICAgICBwb3NpdGlvblk6ICdib3R0b20nXG4gICAgICAgICAgZGVsYXk6IDEwMDAwXG4gICAgICAgICAgcmVwbGFjZU1lc3NhZ2U6IHRydWVcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zZXJ2aWNlcy9ub3RpZmljYXRpb24udGVtcGxhdGUuaHRtbCdcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoIG9wdGlvbnNcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnNwbGljZSAxMCAjIG1heGltdW0gbm90aWZpY2F0aW9ucyBsZW5ndGhcbiAgICAgICAgdGhpcy51bnNlZW5Db3VudCsrIHVubGVzcyBvcHRpb25zLnNlZW5cbiAgICAgICAgdWlOb3RpZmljYXRpb24gb3B0aW9uc1xuICAgICAgbWFya0FsbFNlZW46IChvcHRpb25zKSAtPlxuICAgICAgICBuLnNlZW4gPSB0cnVlIGZvciBuIGluIHRoaXMubm90aWZpY2F0aW9uc1xuICAgICAgICB0aGlzLnVuc2VlbkNvdW50ID0gMFxuICAgIH1cbl1cbiJdfQ==

(function() {
  'use strict';
  // Messages controller
  angular.module('irisAngular').controller('MessagesController', [
    '$scope',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$state',
    // 'Authentication'
    'config',
    '$timeout',
    'localStorageService',
    function($scope,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $state,
    config,
    $timeout,
    localStorageService) { //, Authentication
      var load;
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.iconCount = function(rating) {
        return new Array(Math.max(1,
    Math.abs(rating)));
      };
      $scope.iconStyle = function(rating) {
        var iconStyle;
        iconStyle = 'neutral';
        if (rating > 0) {
          iconStyle = 'positive';
        } else if (rating < 0) {
          iconStyle = 'negative';
        }
        return iconStyle;
      };
      $scope.iconClass = function(rating) {
        var iconStyle;
        iconStyle = 'glyphicon-question-sign';
        if (rating > 0) {
          iconStyle = 'glyphicon-thumbs-up';
        } else if (rating < 0) {
          iconStyle = 'glyphicon-thumbs-down';
        }
        return iconStyle;
      };
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    {
          limit: 10
        },
    filters);
      };
      if ($state.is('messages.list')) {
        $scope.filters.type = config.defaultFilters.type;
      }
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    isIpfsHash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          isIpfsHash = hash.match(/^Qm[1-9A-Za-z]{40,50}$/);
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {});
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            $scope.message.verifiedBy = $scope.irisIndex.get('keyID',
    $scope.message.signerKeyID);
            $scope.setIdentityNames($scope.message.verifiedBy,
    true);
            $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID',
    $scope.message.signerKeyID);
            if (isIpfsHash) {
              return $scope.message.ipfsUri = hash;
            }
          };
          return $scope.irisIndex.getMessageByHash(hash).then(function(m) {
            $scope.message = m;
            return processResponse();
          });
        }
      };
      load = function() {
        if (!$scope.irisIndex) {
          return;
        }
        if ($state.is('messages.show')) {
          return $scope.findOne();
        }
      };
      return $scope.$watch('irisIndex',
    load);
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLFVBQTlCLENBQXlDLG9CQUF6QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxTQUg2RDtJQUk3RCxjQUo2RDtJQUs3RCxXQUw2RDtJQU03RCxPQU42RDtJQU83RCxRQVA2RDs7SUFTN0QsUUFUNkQ7SUFVN0QsVUFWNkQ7SUFXN0QscUJBWDZEO0lBWTdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixPQUFyQjtJQUE4QixZQUE5QjtJQUE0QyxTQUE1QztJQUF1RCxLQUF2RDtJQUE4RCxNQUE5RDtJQUFzRSxNQUF0RTtJQUE4RSxRQUE5RTtJQUF3RixtQkFBeEYsQ0FBQSxFQUFBO0FBQ0UsVUFBQTtNQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsUUFBQSxDQUFDLE1BQUQsQ0FBQTtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQ7SUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBWixDQUFWO01BRGlCO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksV0FEZDtTQUFBLE1BRUssSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNILFNBQUEsR0FBWSxXQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksc0JBRGQ7U0FBQSxNQUVLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxTQUFBLEdBQVksd0JBRFQ7O2VBRUw7TUFOaUI7TUFRbkIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7TUFFOUMsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLE9BQUQsQ0FBQTtlQUNsQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxPQUF0QjtJQUErQjtVQUFDLEtBQUEsRUFBTztRQUFSLENBQS9CO0lBQTRDLE9BQTVDO01BRGtCO01BR3BCLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxlQUFWLENBQUg7UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUQ5QztPQTNCQTs7TUErQkEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBQSxDQUFBLENBQUE7QUFDZixZQUFBLElBQUE7SUFBQSxVQUFBO0lBQUE7UUFBQSxJQUFHLFlBQVksQ0FBQyxFQUFoQjtVQUNFLElBQUEsR0FBTyxZQUFZLENBQUM7VUFDcEIsVUFBQSxHQUFhLElBQUksQ0FBQyxLQUFMLENBQVcsd0JBQVg7VUFFYixlQUFBLEdBQWtCLFFBQUEsQ0FBQSxDQUFBO1lBQ2hCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQUMsTUFBTSxDQUFDLE9BQVIsQ0FBdkI7SUFBeUMsQ0FBQSxDQUF6QztZQUNBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQUEsR0FBYSxJQUFqQztZQUNBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLE1BQU0sQ0FBQyxPQUE1QjtZQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZixHQUE2QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWYsQ0FBQTtZQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQWYsR0FBNEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFqQixDQUFxQixPQUFyQjtJQUE4QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQTdDO1lBQzVCLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQXZDO0lBQW1ELElBQW5EO1lBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLEdBQWdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFwQixDQUE4QixPQUE5QjtJQUF1QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQXREO1lBQ2hDLElBQWlDLFVBQWpDO3FCQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZixHQUF5QixLQUF6Qjs7VUFSZ0I7aUJBVWxCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWpCLENBQWtDLElBQWxDLENBQXVDLENBQUMsSUFBeEMsQ0FBNkMsUUFBQSxDQUFDLENBQUQsQ0FBQTtZQUMzQyxNQUFNLENBQUMsT0FBUCxHQUFpQjttQkFDakIsZUFBQSxDQUFBO1VBRjJDLENBQTdDLEVBZEY7O01BRGU7TUFtQmpCLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtRQUNMLElBQUEsQ0FBYyxNQUFNLENBQUMsU0FBckI7QUFBQSxpQkFBQTs7UUFDQSxJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsZUFBVixDQUFIO2lCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7TUFGSzthQUlQLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBZDtJQUEyQixJQUEzQjtJQXZERixDQVo2RDtHQUEvRDtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01lc3NhZ2VzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCB7bGltaXQ6IDEwfSwgZmlsdGVyc1xuXG4gICAgaWYgJHN0YXRlLmlzICdtZXNzYWdlcy5saXN0J1xuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IGNvbmZpZy5kZWZhdWx0RmlsdGVycy50eXBlXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIGlzSXBmc0hhc2ggPSBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kL1xuXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnksIHRydWUpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5pcGZzVXJpID0gaGFzaCBpZiBpc0lwZnNIYXNoXG5cbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKGhhc2gpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtXG4gICAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKClcblxuICAgIGxvYWQgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaXJpc0luZGV4XG4gICAgICBpZiAkc3RhdGUuaXMoJ21lc3NhZ2VzLnNob3cnKVxuICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG4gICAgJHNjb3BlLiR3YXRjaCAnaXJpc0luZGV4JywgbG9hZFxuXVxuIl19

(function() {
  'use strict';
  angular.module('irisAngular').controller('MainController', [
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    '$state',
    'config',
    'localStorageService',
    'clipboard',
    '$uibModal',
    '$window',
    '$stateParams',
    '$transitions',
    '$q',
    'focus',
    'NotificationService',
    function($scope,
    $rootScope,
    $location,
    $http,
    $state,
    config,
    localStorageService,
    clipboard,
    $uibModal,
    $window,
    $stateParams,
    $transitions,
    $q,
    focus,
    NotificationService) {
      var opt,
    privateKey,
    scrollTo,
    setIndex;
      opt = {
        peers: [],
        localStorage: false
      };
      if (!($window.location.hostname === 'localhost' && $window.location.port === '3000')) {
        opt.peers = [
          'https://gun-us.herokuapp.com/gun',
          'https://gun-eu.herokuapp.com/gun' // 'https://gunmeetingserver.herokuapp.com/gun'
        ];
      }
      if ($window.location.protocol !== "https:") {
        opt.peers.push('http://localhost:8765/gun');
      }
      opt.store = RindexedDB(opt);
      $scope.gun = new Gun(opt);
      // TODO: move everything to main controller?
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.notificationService = NotificationService;
      $scope.trustDistanceComparator = function(a,
    b) {
        if (a.type !== 'number') {
          return 1;
        }
        if (b.type !== 'number') {
          return -1;
        }
        return a.value - b.value;
      };
      $scope.getIdUrl = function(type,
    value) {
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          return $state.href('identities.show',
    {type,
    value},
    {
            absolute: true
          });
        } else {
          return 'https://iris.to/' + $state.href('identities.show',
    {type,
    value});
        }
      };
      $scope.getIdKey = function(id) {
        return encodeURIComponent(id.type) + ':' + encodeURIComponent(id.value);
      };
      $scope.defaultIndexKeyID = 'b8ByaYNBDCMLNdZqMdas5oUFLCxBf2VH3-NjUulDaTo.DVzINErRVs6m5tyjAux6fcNfndadcgZVN5hLSwYTCLc';
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.msgs = {
        list: [],
        seen: {}
      };
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-iris'
      });
      $scope.capitalizeWords = function(s) {
        if (s && s.length) {
          return (s.trim().split(' ').map(function(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })).join(' ');
        } else {
          return s;
        }
      };
      $scope.copyToClipboard = function(text) {
        return clipboard.copyText(text);
      };
      $scope.search = function(query,
    limit) {
        var cursor,
    resultFound,
    searchKey,
    seen;
        if (!$scope.irisIndex) {
          return;
        }
        $scope.ids.activeKey = -1;
        $scope.ids.list = [];
        searchKey = (query || $scope.query.term || '').toLowerCase().trim();
        $scope.searchKey = searchKey;
        $scope.previousSearchKey = searchKey;
        limit = limit || 10;
        cursor = '';
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        seen = {};
        resultFound = function(i) {
          if (searchKey !== $scope.searchKey) {
            return;
          }
          i.gun.on(function(data) {
            i.data = data;
            return i.gun.get('linkTo').on(function(linkTo) {
              var s;
              if (i.linkTo || !linkTo) {
                return;
              }
              s = linkTo.type + linkTo.value;
              if (seen[s]) {
                return;
              }
              seen[s] = true;
              $scope.ids.list.push(i);
              return i.linkTo = linkTo;
            });
          });
          return $scope.setIdentityNames(i,
    true);
        };
        $scope.irisIndex.search(searchKey,
    void 0,
    resultFound,
    limit,
    cursor);
        return new Promise(function(resolve) { // TODO: uib-typeahead is limited, but something better pls
          return setTimeout(function() {
            return resolve($scope.ids.list);
          },
    1000);
        });
      };
      setIndex = function(i) {
        if (i.writable) {
          i.setOnline(true);
        }
        return i.ready.then(function() {
          $scope.ids.list = [];
          $scope.msgs.list = [];
          $scope.msgs.seen = {};
          $scope.irisIndex = i;
          setTimeout(function() { // for some reason, dist version fails to show messages and identities without this
            $scope.search();
            return $scope.showMoreMsgs();
          },
    1000);
          $scope.trustedIndexes = [];
          $scope.irisIndex.gun.get('trustedIndexes').open(function(r) {
            var k,
    results,
    v;
            results = [];
            for (k in r) {
              v = r[k];
              results.push($scope.trustedIndexes.push({
                index: k,
                attribute: new $window.irisLib.Attribute('keyID',
    k),
                identity: $scope.irisIndex.get('keyID',
    k)
              }));
            }
            return results;
          });
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    1000);
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    3000); // :---D
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    5000); // :---D
          console.log('Got index',
    $scope.irisIndex);
          $scope.viewpoint.identity = $scope.irisIndex.get($scope.viewpoint.type,
    $scope.viewpoint.value);
          $scope.setIdentityNames($scope.viewpoint.identity);
          return $scope.viewpoint.identity.gun.get('attrs').open(function(attrs) {
            $scope.viewpoint.attrs = attrs;
            return $scope.viewpoint.mostVerifiedAttributes = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
          });
        });
      };
      $scope.loadDefaultIndex = function() {
        var i;
        $scope.irisIndex = null;
        $scope.viewpoint = {
          type: 'keyID',
          value: $scope.defaultIndexKeyID
        };
        i = new $window.irisLib.Index({
          gun: $scope.gun,
          pubKey: $scope.defaultIndexKeyID,
          ipfs: $scope.ipfs
        });
        return setIndex(i);
      };
      $scope.loginWithKey = function(privateKeySerialized,
    self) {
        var i,
    keyID;
        $scope.irisIndex = null;
        $scope.loggingIn = true;
        $scope.privateKey = $window.irisLib.Key.fromString(privateKeySerialized);
        localStorageService.set('irisKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $window.irisLib.Key.getId($scope.privateKey)
        };
        $scope.authentication.user.url = $scope.getIdUrl('keyID',
    $scope.authentication.user.idValue);
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        keyID = $window.irisLib.Key.getId($scope.privateKey);
        $scope.viewpoint = {
          type: 'keyID',
          value: keyID
        };
        $scope.ids.list = [];
        $scope.msgs.list = [];
        $scope.msgs.seen = {};
        i = new $window.irisLib.Index({
          gun: $scope.gun,
          keypair: $scope.privateKey,
          self,
          ipfs: $scope.ipfs,
          debug: true
        });
        setIndex(i);
        return i.ready.then(function() {
          var startAt;
          $scope.loggingIn = false;
          $scope.authentication.identity = $scope.irisIndex.get('keyID',
    keyID);
          $scope.authentication.identity.gun.get('attrs').open(function(val,
    key,
    msg,
    eve) {
            var mva;
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(val);
            $scope.authentication.identity.mva = mva;
            if (mva.profilePhoto) {
              return eve.off();
            }
          });
          startAt = new Date();
          $scope.authentication.identity.gun.get('received').map().once(function(m) {
            if (m.pubKey === $scope.viewpoint.value) {
              return;
            }
            console.log('you got a msg');
            return $window.irisLib.Message.fromSig(m).then(function(msg) {
              var author;
              if (new Date(msg.signedData.timestamp) > startAt) {
                author = msg.getAuthor($scope.irisIndex);
                return $scope.setIdentityNames(author).then(function(name) {
                  return NotificationService.create({
                    message: `${name} sent you a message!`,
                    onClick: function() {
                      return $state.go('identities.show',
    {
                        type: $scope.authentication.user.idType,
                        value: $scope.authentication.user.idValue
                      });
                    }
                  });
                });
              }
            });
          });
          return $scope.authentication.identity.gun.on(function(data) {
            if (data.receivedPositive && $scope.authentication.identity.data && !$scope.authentication.identity.data.receivedPositive) {
              console.log('great, you got your first upvote!');
            }
            // TODO: notification
            return $scope.authentication.identity.data = data;
          });
        });
      };
      privateKey = localStorageService.get('irisKey') || localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      } else {
        $scope.loadDefaultIndex();
      }
      $scope.openChatModal = function() {
        return $scope.openModal('chatModal',
    {
          templateUrl: 'app/identities/chat.modal.html',
          size: 'md'
        });
      };
      $scope.openVideoChatModal = function() {
        return $scope.openModal('videoChatModal',
    {
          templateUrl: 'app/identities/video.modal.html',
          size: 'md'
        });
      };
      $scope.openReadQRModal = function() {
        return $scope.openModal('readQRModal',
    {
          templateUrl: 'app/identities/readqr.modal.html',
          size: 'md'
        });
      };
      $scope.updateIpfsPeers = function() {
        return $scope.ipfs.swarm.peers(function(err,
    peerInfos) {
          if (err) {
            return console.error('failed to fetch ipfs peers',
    err);
          } else {
            return $scope.$apply(function() {
              if (Array.isArray(peerInfos)) {
                return $scope.ipfsPeers = peerInfos;
              }
            });
          }
        });
      };
      $scope.ipfs.on('ready',
    function() {
        $scope.ipfsReady = true;
        $window.ipfs = $scope.ipfs;
        $scope.updateIpfsPeers();
        return setInterval($scope.updateIpfsPeers,
    5000);
      });
      $scope.localSettings = localStorageService.get('localSettings') || {};
      $scope.closeProfileUploadNotification = function() {
        $scope.localSettings.profileUploadNotificationClosed = true;
        return localStorageService.set('localSettings',
    $scope.localSettings);
      };
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo',
    true);
      };
      $scope.uploadProfilePhoto = function(blob) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          recipient = {
            profilePhoto: '/ipfs/' + files[0].path
          };
          if ($state.is('identities.show')) {
            recipient[$stateParams.type] = $stateParams.value;
          } else {
            recipient.keyID = $scope.authentication.user.idValue;
            $scope.closeProfileUploadNotification();
          }
          return $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.irisIndex.addMessage(m).then(function() {
              $scope.hideProfilePhoto = false;
              if (!$state.is('identities.show')) {
                return $state.go('identities.show',
    {
                  type: $scope.authentication.user.idType,
                  value: $scope.authentication.user.idValue
                });
              }
            });
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Iris';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    options = {}) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (options.getJson) {
                file = JSON.parse(file.toString());
              }
              if (options.base64type) {
                file = 'data:' + options.base64type + ';base64,' + file.toString('base64');
              }
              return resolve(file);
            });
          };
          if ($scope.ipfsReady) {
            return go();
          } else {
            return $scope.ipfs.on('ready',
    function() {
              return go();
            });
          }
        });
      };
      $scope.$watch('newMessage.rating',
    function(rating) {
        var alpha;
        if (rating > 0) {
          alpha = (rating - 0.5) / 3 / 1.25 + 0.2;
          return $scope.newMessage.style = {
            'border-color': 'rgba(223,240,216,' + alpha + ')'
          };
        } else if (rating < 0) {
          alpha = (rating + 0.5) / -3 / 1.25 + 0.2;
          return $scope.newMessage.style = {
            'border-color': 'rgba(242,222,222,' + alpha + ')'
          };
        } else {
          return $scope.newMessage.style = {
            'border-color': '#fcf8e3'
          };
        }
      });
      $scope.resetMsg = function() {
        $scope.newMessage = {
          rating: 1,
          comment: '',
          files: []
        };
        return $scope.newVerification = {
          type: '',
          value: ''
        };
      };
      $scope.resetMsg();
      $scope.vote = function(msg,
    vote) {
        console.log('vote added');
        return $scope.createMessage(null,
    {
          type: 'vote',
          replyTo: msg.getHash(),
          vote
        });
      };
      // Create new Message
      $scope.createMessage = function(event,
    msg,
    options = {}) {
        var addFile,
    file,
    fileUploads,
    j,
    len,
    ref;
        $scope.addingMessage = true;
        if (event) {
          event.stopPropagation();
        }
        if (msg.pollOptions === false) {
          delete msg.pollOptions;
        }
        fileUploads = [];
        if (options.files) { // upload to ipfs
          msg.attachments = [];
          addFile = function(file) {
            return $scope.uploadFile(file).then(function(res) {
              if (res && res.length && res.length > 0 && res[0].path) {
                return msg.attachments.push({
                  uri: '/ipfs/' + res[0].path,
                  size: file.size,
                  type: file.type,
                  name: file.name
                });
              }
            });
          };
          ref = options.files;
          for (j = 0, len = ref.length; j < len; j++) {
            file = ref[j];
            fileUploads.push(addFile(file));
          }
        }
        return Promise.all(fileUploads).then(function() {
          var message;
          console.log('msg.attachments',
    msg.attachments);
          // Create new Message object
          message = null;
          if (msg.files) {
            delete msg.files;
          }
          msg.recipient = msg.recipient || {};
          if ($state.is('identities.show')) {
            if (options.verifiedAttr && $stateParams.type === options.verifiedAttr.type) {
              msg.recipient[$stateParams.type] = [$stateParams.value,
    options.verifiedAttr.value];
            } else {
              msg.recipient[$stateParams.type] = $stateParams.value;
              if (options.verifiedAttr) {
                msg.recipient[options.verifiedAttr.type] = options.verifiedAttr.value;
              }
            }
          } else if (!$state.is('identities.create')) {
            msg.recipient.keyID = $scope.authentication.user.idValue;
          }
          if (msg.type === 'rating') {
            msg.maxRating |= 3;
            msg.minRating |= -3;
            message = $window.irisLib.Message.createRating(msg,
    $scope.privateKey);
          } else if (msg.type === 'verification') {
            message = $window.irisLib.Message.createVerification(msg,
    $scope.privateKey);
          } else {
            message = $window.irisLib.Message.create(msg,
    $scope.privateKey);
          }
          return message.then(function(m) {
            $scope.irisIndex.addMessage(m);
            $scope.msgs.seen[m.getHash()] = true;
            return $scope.processMessages([m]);
          }).then(function(messages) {
            var ref1;
            $scope.msgs.list.push(messages[0]);
            if (options.addTo && !options.addTo.seen[messages[0].getHash()]) {
              options.addTo.list.push(messages[0]);
              options.addTo.seen[messages[0].getHash()] = true;
            }
            if ((ref1 = $scope.filters.type) !== msg.type && ref1 !== null) {
              $scope.filters.type = msg.type;
            }
            $scope.resetMsg(); // why not resetting uploaded files? D:
            if (options.files) {
              options.files = [];
            }
            $scope.addingMessage = false;
            return message;
          }).catch(function(e) {
            console.error(e);
            $scope.error = e;
            $scope.addingMessage = false;
            return message;
          });
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.maxDistance = -1; // because the user doesn't have a trust index yet
      };
      $scope.openModal = function(modalName,
    options) {
        options = Object.assign({
          size: 'lg',
          animation: true,
          scope: $scope
        },
    options);
        $scope[modalName] = $uibModal.open(options);
        $scope[modalName].result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope[modalName].rendered.then(function() {
          document.activeElement.blur();
          if (options.focusTo) {
            return focus(options.focusTo);
          }
        });
        return $transitions.onStart({},
    function() {
          return $scope[modalName].close();
        });
      };
      $scope.openLoginModal = function() {
        return $scope.openModal('loginModal',
    {
          templateUrl: 'app/main/login.modal.html',
          focusTo: 'newUser'
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText,
    squarify) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.squarify = squarify;
        return $scope.openModal('uploadModal',
    {
          templateUrl: 'app/identities/upload.modal.html'
        });
      };
      $scope.msgs.list = [];
      $scope.msgs.seen = {};
      $scope.filteredMsgs = [];
      $scope.showMoreMsgs = function(cursor) {
        var filter,
    found,
    limit,
    /*
    if $scope.filters.type == null
      filter = (m) ->
        r = m.signedData.type not in ['verification', 'unverification']
        console.log 'filterin', r
        return r
    else
      t = $scope.filters.type.split(':')[0]
      filter = (m) ->
        r = m.signedData.type == t
        console.log 'filterin', r
        return r
    */
    resultFound;
        limit = 20; // 10
        if (cursor === void 0 && $scope.msgs.last) {
          cursor = $scope.msgs.last;
        }
        console.log('cursor',
    cursor);
        found = 0;
        $scope.loadingMsgs = true;
        filter = false;
        resultFound = function(msg) {
          console.log('got msg',
    msg);
          found += 1;
          if (found >= limit) {
            $scope.loadingMsgs = false;
          }
          if ($scope.msgs.seen[msg.getHash()]) {
            return;
          }
          if (!$scope.msgs.last || msg.signedData.timestamp < $scope.msgs.last) {
            $scope.msgs.last = msg.signedData.timestamp;
          }
          $scope.msgs.seen[msg.getHash()] = true;
          $scope.processMessages([msg]);
          return $scope.$apply(function() {
            return $scope.msgs.list.push(msg);
          });
        };
        $scope.filters.limit += limit;
        if ($scope.filters.limit > $scope.filteredMsgs.length) {
          return $scope.irisIndex.getMessagesByTimestamp(resultFound,
    void 0,
    cursor);
        }
      };
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            return $scope.ipfs.add(buffer,
    function(err,
    files) {
              if (err) {
                return reject('adding to ipfs failed',
    err);
              } else {
                resolve(files);
                return console.log('done:',
    err,
    files);
              }
            });
          };
          return fileReader.readAsArrayBuffer(blob);
        });
      };
      $scope.createUser = function(name) {
        var self;
        if (name.indexOf('{') !== -1 || name.indexOf('}') !== -1) { // prevent accidental private key paste
          return;
        }
        name = name.trim();
        $scope.creatingUser = true;
        self = {name};
        return $window.irisLib.Key.generate().then(function(key) {
          $scope.privateKey = key;
          $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey);
          self.keyID = $window.irisLib.Key.getId($scope.privateKey);
          return $scope.loginWithKey($scope.privateKeySerialized,
    self);
        }).then(function(msg) {
          return $scope.creatingUser = false;
        }).catch(function(e) {
          console.error('failed to create user:',
    e);
          return $scope.creatingUser = false;
        });
      };
      $scope.generateKey = function() {
        return $window.irisLib.Key.generate().then(function(key) {
          return $scope.$apply(function() {
            $scope.privateKey = key;
            return $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey);
          });
        });
      };
      $scope.download = function(filename,
    data,
    type,
    charset = 'utf-8',
    href) {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = href || `data:${type};charset=${charset},${encodeURI(data)}`;
        hiddenElement.target = '_blank';
        hiddenElement.download = filename;
        return hiddenElement.click();
      };
      $scope.downloadText = function(text) {
        return $scope.download('iris_private_key.txt',
    text,
    'text/csv',
    'utf-8');
      };
      $scope.openLogoutModal = function() {
        return $scope.openModal('logoutModal',
    {
          templateUrl: 'app/main/logout.modal.html'
        });
      };
      $scope.logout = function() {
        $scope.irisIndex.setOnline(false);
        $scope.filters.maxDistance = 0;
        $scope.privateKeySerialized = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        $scope.publicKey = null;
        $scope.logoutModal.close();
        $scope.loadDefaultIndex();
        return $scope.localSettings = {};
      };
      $scope.msgFilter = function(msg,
    index,
    array) {
        var data,
    neutralRating,
    ref;
        data = msg.signedData;
        if (msg.signedData.replyTo) {
          return false;
        }
        if ($scope.filters.type) {
          if ($scope.filters.type.match(/^rating/)) {
            if (data.type !== 'rating') {
              return false;
            }
            neutralRating = (data.maxRating + data.minRating) / 2;
            if ($scope.filters.type === 'rating:positive' && data.rating <= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:negative' && data.rating >= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:neutral' && data.rating !== neutralRating) {
              return false;
            }
          } else if ($scope.filters.type === 'verification') {
            return (ref = data.type) === 'verification' || ref === 'unverification';
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        }
        if ($scope.filters.maxDistance > -1) {
          if (typeof msg.authorTrustDistance !== 'number') {
            return false;
          }
          if ($scope.filters.maxDistance > 0 && msg.authorTrustDistance > $scope.filters.maxDistance) {
            return false;
          }
          if ($scope.filters.maxDistance === 0 && msg.authorTrustDistance === 99) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.setMsgRawData = function(msg) {
        var showRawData;
        showRawData = {
          hash: msg.hash,
          data: msg.signedData,
          priority: msg.priority,
          jws: msg.jws
        };
        return msg.strData = JSON.stringify(showRawData,
    void 0,
    2);
      };
      $scope.shareMessage = function(msg,
    comment) {
        $scope.createMessage(null,
    {
          type: 'post',
          sharedMsg: msg.getHash(),
          comment
        }).then(function(r) {
          msg.shares = msg.shares || {};
          msg.shares[r.getHash()] = r;
          msg.sharesArr = msg.sharesArr || [];
          return msg.sharesArr.push(r);
        });
        return $scope.shareModal.close();
      };
      $scope.msgUtils = {
        like: function(msg) {
          if (msg.liked) {
            msg.liked = false;
            msg.likes = msg.likes ? msg.likes - 1 : 0;
            return $scope.irisIndex.setReaction(msg,
    null);
          } else {
            msg.liked = true;
            msg.likes = msg.likes ? msg.likes + 1 : 1;
            return $scope.irisIndex.setReaction(msg,
    'like');
          }
        },
        share: function(msg) {
          $scope.message = msg;
          return $scope.openModal('shareModal',
    {
            templateUrl: 'app/messages/share.modal.html',
            size: 'md'
          });
        },
        replyTo: function(msg,
    reply) {
          return $scope.createMessage(null,
    {
            type: 'post',
            replyTo: msg.getHash(),
            comment: reply
          }).then(function(r) {
            msg.replies = msg.replies || {};
            msg.replies[r.getHash()] = r;
            msg.repliesArr = msg.repliesArr || [];
            return msg.repliesArr.push(r);
          });
        }
      };
      $scope.openMessage = function(event,
    message,
    size) {
        var t;
        if (event) {
          event.stopPropagation();
        }
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        // TODO: check sig
        $scope.message.recipient = $scope.message.getRecipient($scope.irisIndex);
        $scope.message.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = $window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.nickname.attribute.value;
            });
          }
        });
        $scope.message.signerKeyID = $scope.message.getSignerKeyID();
        $scope.message.verifiedBy = $scope.irisIndex.get('keyID',
    $scope.message.signerKeyID);
        $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID',
    $scope.message.signerKeyID);
        return $scope.openModal('chatModal',
    {
          templateUrl: 'app/messages/show.modal.html'
        });
      };
      if (!$scope.filters) {
        $scope.filters = Object.assign({},
    config.defaultFilters);
      }
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions = {},
    options = {}) {
        angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          msg.author = msg.getAuthor($scope.irisIndex);
          return msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
        });
        return messages;
      };
      scrollTo = function(el) {
        var pos;
        if (!el) {
          return;
        }
        pos = el.getBoundingClientRect();
        if (pos.top) {
          if (pos.top - 60 < $window.pageYOffset) {
            $window.scrollTo(0,
    pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0,
    pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      // should be moved to iris-lib?
      $scope.setIdentityNames = function(i,
    htmlSafe,
    setTitle) {
        i.wellVerified = false;
        return new Promise(function(resolve) {
          return i.gun.get('attrs').open(function(attrs) {
            return $scope.$apply(function() {
              var a,
    mva,
    ref;
              mva = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
              if (mva.name) {
                i.primaryName = mva.name.attribute.value;
                i.hasProperName = true;
                if (mva.name.wellVerified) {
                  i.wellVerified = true;
                }
              } else if (mva.nickname) {
                i.primaryName = mva.nickname.attribute.value;
                i.hasProperName = true;
              } else {
                a = Object.values(attrs)[0];
                i.primaryName = a.value;
                if ((ref = a.type) === 'keyID' || ref === 'uuid') {
                  i.primaryName = i.primaryName.slice(0,
    6) + '...';
                }
              }
              if (i.primaryName) {
                if (mva.nickname && mva.nickname.attribute.value !== i.primaryName) {
                  i.nickname = mva.nickname.attribute.value;
                  if (htmlSafe) {
                    i.nickname = i.nickname.replace('<',
    '&lt;');
                  }
                }
                if (htmlSafe) {
                  i.primaryName = i.primaryName.replace('<',
    '&lt;');
                }
              }
              if (setTitle) {
                $scope.setPageTitle(i.primaryName);
              }
              return resolve(i.primaryName);
            });
          });
        });
      };
      $scope.searchKeydown = function(event) {
        var el,
    id,
    wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > -1) {
              $scope.addEntryActive = false;
              $scope.ids.activeKey--;
              id = $scope.ids.activeKey > -1 ? 'result' + $scope.ids.activeKey : 'createIdRow';
              return document.getElementById(id).scrollIntoView();
            }
            break;
          case 40:
            event.preventDefault();
            if (($scope.ids.activeKey < $scope.ids.list.length - 1) && $scope.ids.activeKey < $scope.filters.limit) {
              $scope.ids.activeKey++;
            }
            return document.getElementById('result' + $scope.ids.activeKey).scrollIntoView();
          case 13:
            event.preventDefault();
            if ($scope.ids.activeKey === -1) {
              return $state.go('identities.create');
            } else {
              return document.getElementById('result' + $scope.ids.activeKey).click();
            }
            break;
          case -1:
            clearTimeout($scope.timer);
            $scope.query.term = '';
            return $scope.search();
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 39:
            break;
          default:
            el = angular.element(event.currentTarget);
            clearTimeout($scope.timer);
            wait = setTimeout((function() {
              $scope.query.term = el.val();
              $scope.search();
            }),
    300);
            $scope.timer = wait;
            break;
        }
      };
      $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show',
    {
          type: item.linkTo.type,
          value: item.linkTo.value
        });
        return $scope.query.term = '';
      };
      $scope.addGunPeer = function(url) {
        return $scope.gun.opt({
          peers: [url]
        });
      };
      $scope.removeGunPeer = function(url) {
        var peer;
        peer = $scope.gun._.opt.peers[url];
        peer.url = peer.id = null; // this prevents reconnecting to URL
        peer.wire.close(); // if websocket interface
        return delete $scope.gun._.opt.peers[url];
      };
      $scope.addIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.add(url);
        return $scope.ipfs.swarm.connect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      $scope.addDefaultIpfsPeers = function() {
        return $scope.ipfs.bootstrap.add('',
    {
          default: true
        }).then(function() { // TODO: errors
          return $scope.updateIpfsPeers();
        });
      };
      return $scope.removeIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.rm(url);
        return $scope.ipfs.swarm.disconnect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsZ0JBQXpDLEVBQTJEO0lBQ3pELFFBRHlEO0lBRXpELFlBRnlEO0lBR3pELFdBSHlEO0lBSXpELE9BSnlEO0lBS3pELFFBTHlEO0lBTXpELFFBTnlEO0lBT3pELHFCQVB5RDtJQVF6RCxXQVJ5RDtJQVN6RCxXQVR5RDtJQVV6RCxTQVZ5RDtJQVd6RCxjQVh5RDtJQVl6RCxjQVp5RDtJQWF6RCxJQWJ5RDtJQWN6RCxPQWR5RDtJQWV6RCxxQkFmeUQ7SUFnQnpELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBRUEsWUFGQTtJQUVjLEVBRmQ7SUFFa0IsS0FGbEI7SUFFeUIsbUJBRnpCLENBQUE7QUFHRSxVQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsR0FBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLEVBQVA7UUFDQSxZQUFBLEVBQWM7TUFEZDtNQUVGLElBQUEsQ0FBQSxDQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBakIsS0FBNkIsV0FBN0IsSUFBNkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFqQixLQUF5QixNQUE3RSxDQUFBO1FBQ0UsR0FBRyxDQUFDLEtBQUosR0FBWTtVQUFDLGtDQUFEO1VBQXFDLGtDQUFyQztVQURkOztNQUVBLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFqQixLQUE2QixRQUFoQztRQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBVixDQUFlLDJC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UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBdEIsQ0FBMEIsR0FBMUI7ZUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFsQixDQUEwQixHQUExQixDQUE4QixDQUFDLElBQS9CLENBQW9DLFFBQUEsQ0FBQSxDQUFBO2lCQUNsQyxNQUFNLENBQUMsZUFBUCxDQUFBO1FBRGtDLENBQXBDO01BRm1CO01BS3JCLE1BQU0sQ0FBQyxtQkFBUCxHQUE2QixRQUFBLENBQUEsQ0FBQTtlQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUF0QixDQUEwQixFQUExQjtJQUE4QjtVQUFDLE9BQUEsRUFBUztRQUFWLENBQTlCLENBQThDLENBQUMsSUFBL0MsQ0FBb0QsUUFBQSxDQUFBLENBQUEsRUFBQTtpQkFDbEQsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURrRCxDQUFwRDtNQUQyQjthQUk3QixNQUFNLENBQUMsY0FBUCxHQUF3QixRQUFBLENBQUMsR0FBRCxDQUFBO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQXRCLENBQXlCLEdBQXpCO2VBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBbEIsQ0FBNkIsR0FBN0IsQ0FBaUMsQ0FBQyxJQUFsQyxDQUF1QyxRQUFBLENBQUEsQ0FBQTtpQkFDckMsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURxQyxDQUF2QztNQUZzQjtJQXJwQjFCLENBaEJ5RDtHQUEzRDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnY2xpcGJvYXJkJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyR0cmFuc2l0aW9ucydcbiAgJyRxJ1xuICAnZm9jdXMnXG4gICdOb3RpZmljYXRpb25TZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgY2xpcGJvYXJkLCAkdWliTW9kYWwsICR3aW5kb3csICRzdGF0ZVBhcmFtcyxcbiAgJHRyYW5zaXRpb25zLCAkcSwgZm9jdXMsIE5vdGlmaWNhdGlvblNlcnZpY2UpIC0+XG4gICAgb3B0ID1cbiAgICAgIHBlZXJzOiBbXVxuICAgICAgbG9jYWxTdG9yYWdlOiBmYWxzZVxuICAgIHVubGVzcyAkd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09ICdsb2NhbGhvc3QnIGFuZCAkd2luZG93LmxvY2F0aW9uLnBvcnQgPT0gJzMwMDAnXG4gICAgICBvcHQucGVlcnMgPSBbJ2h0dHBzOi8vZ3VuLXVzLmhlcm9rdWFwcC5jb20vZ3VuJywgJ2h0dHBzOi8vZ3VuLWV1Lmhlcm9rdWFwcC5jb20vZ3VuJ10gIyAnaHR0cHM6Ly9ndW5tZWV0aW5nc2VydmVyLmhlcm9rdWFwcC5jb20vZ3VuJ1xuICAgIGlmICR3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT0gXCJodHRwczpcIlxuICAgICAgb3B0LnBlZXJzLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nKVxuICAgIG9wdC5zdG9yZSA9IFJpbmRleGVkREIob3B0KVxuICAgICRzY29wZS5ndW4gPSBuZXcgR3VuKG9wdClcblxuICAgICMgVE9ETzogbW92ZSBldmVyeXRoaW5nIHRvIG1haW4gY29udHJvbGxlcj9cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cblxuICAgICRzY29wZS5ub3RpZmljYXRpb25TZXJ2aWNlID0gTm90aWZpY2F0aW9uU2VydmljZVxuXG4gICAgJHNjb3BlLnRydXN0RGlzdGFuY2VDb21wYXJhdG9yID0gKGEsIGIpIC0+XG4gICAgICByZXR1cm4gMSBpZiBhLnR5cGUgIT0gJ251bWJlcidcbiAgICAgIHJldHVybiAtMSBpZiBiLnR5cGUgIT0gJ251bWJlcidcbiAgICAgIHJldHVybiBhLnZhbHVlIC0gYi52YWx1ZVxuXG4gICAgJHNjb3BlLmdldElkVXJsID0gKHR5cGUsIHZhbHVlKSAtPlxuICAgICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCcuJykgPiAtMSAjIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsb2NhbGhvc3QgLyBjaHJvbWUgcGx1Z2luIHVyaSBhbmQgRE5TIG5hbWVcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9LCB7YWJzb2x1dGU6IHRydWV9KVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vaXJpcy50by8nICsgJHN0YXRlLmhyZWYoJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlLCB2YWx1ZX0pXG5cbiAgICAkc2NvcGUuZ2V0SWRLZXkgPSAoaWQpIC0+XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLnR5cGUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbHVlKVxuXG4gICAgJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEID0gJ2I4QnlhWU5CRENNTE5kWnFNZGFzNW9VRkxDeEJmMlZIMy1OalV1bERhVG8uRFZ6SU5FclJWczZtNXR5akF1eDZmY05mbmRhZGNnWlZONWhMU3dZVENMYydcbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPVxuICAgICAgbGlzdDogW11cbiAgICAkc2NvcGUubXNncyA9XG4gICAgICBsaXN0OiBbXVxuICAgICAgc2Vlbjoge31cblxuICAgICRzY29wZS5pcGZzID0gbmV3IElwZnMoXG4gICAgICBpbml0OiB0cnVlXG4gICAgICBzdGFydDogdHJ1ZVxuICAgICAgcmVwbzogJ2lwZnM3LWlyaXMnXG4gICAgKVxuXG4gICAgJHNjb3BlLmNhcGl0YWxpemVXb3JkcyA9IChzKSAtPlxuICAgICAgaWYgcyBhbmQgcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIChzLnRyaW0oKS5zcGxpdCgnICcpLm1hcCAod29yZCkgLT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZFsxLi4tMV0udG9Mb3dlckNhc2UoKSkuam9pbiAnICdcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHNcblxuICAgICRzY29wZS5jb3B5VG9DbGlwYm9hcmQgPSAodGV4dCkgLT5cbiAgICAgIGNsaXBib2FyZC5jb3B5VGV4dCB0ZXh0XG5cbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPSAtMVxuICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgIHNlYXJjaEtleSA9IChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICAgICRzY29wZS5zZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgbGltaXQgPSBsaW1pdCBvciAxMFxuICAgICAgY3Vyc29yID0gJydcbiAgICAgIGlmICRzY29wZS5pZHMubGlzdC5sZW5ndGhcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5jdXJzb3JcbiAgICAgIHNlZW4gPSB7fVxuXG4gICAgICByZXN1bHRGb3VuZCA9IChpKSAtPlxuICAgICAgICByZXR1cm4gaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5zZWFyY2hLZXlcbiAgICAgICAgaS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgaS5kYXRhID0gZGF0YVxuICAgICAgICAgIGkuZ3VuLmdldCgnbGlua1RvJykub24gKGxpbmtUbykgLT5cbiAgICAgICAgICAgIHJldHVybiBpZiBpLmxpbmtUbyBvciAhbGlua1RvXG4gICAgICAgICAgICBzID0gbGlua1RvLnR5cGUgKyBsaW5rVG8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiBpZiBzZWVuW3NdXG4gICAgICAgICAgICBzZWVuW3NdID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0LnB1c2ggaVxuICAgICAgICAgICAgaS5saW5rVG8gPSBsaW5rVG9cbiAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoaSwgdHJ1ZSlcblxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIHJlc3VsdEZvdW5kLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPiAjIFRPRE86IHVpYi10eXBlYWhlYWQgaXMgbGltaXRlZCwgYnV0IHNvbWV0aGluZyBiZXR0ZXIgcGxzXG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICByZXNvbHZlKCRzY29wZS5pZHMubGlzdClcbiAgICAgICAgLCAxMDAwXG5cbiAgICBzZXRJbmRleCA9IChpKSAtPlxuICAgICAgaS5zZXRPbmxpbmUodHJ1ZSkgaWYgaS53cml0YWJsZVxuICAgICAgaS5yZWFkeS50aGVuIC0+XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IGlcbiAgICAgICAgc2V0VGltZW91dCAtPiAjIGZvciBzb21lIHJlYXNvbiwgZGlzdCB2ZXJzaW9uIGZhaWxzIHRvIHNob3cgbWVzc2FnZXMgYW5kIGlkZW50aXRpZXMgd2l0aG91dCB0aGlzXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgJHNjb3BlLnNob3dNb3JlTXNncygpXG4gICAgICAgICwgMTAwMFxuICAgICAgICAkc2NvcGUudHJ1c3RlZEluZGV4ZXMgPSBbXVxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4Lmd1bi5nZXQoJ3RydXN0ZWRJbmRleGVzJykub3BlbiAocikgLT5cbiAgICAgICAgICBmb3IgaywgdiBvZiByXG4gICAgICAgICAgICAkc2NvcGUudHJ1c3RlZEluZGV4ZXMucHVzaFxuICAgICAgICAgICAgICBpbmRleDoga1xuICAgICAgICAgICAgICBhdHRyaWJ1dGU6IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCdrZXlJRCcsIGspXG4gICAgICAgICAgICAgIGlkZW50aXR5OiAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCBrKVxuICAgICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgICAsIDEwMDBcbiAgICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICAgLCAzMDAwICMgOi0tLURcbiAgICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICAgLCA1MDAwICMgOi0tLURcbiAgICAgICAgY29uc29sZS5sb2cgJ0dvdCBpbmRleCcsICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCRzY29wZS52aWV3cG9pbnQudHlwZSwgJHNjb3BlLnZpZXdwb2ludC52YWx1ZSlcbiAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eSlcbiAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAgICRzY29wZS52aWV3cG9pbnQuYXR0cnMgPSBhdHRyc1xuICAgICAgICAgICRzY29wZS52aWV3cG9pbnQubW9zdFZlcmlmaWVkQXR0cmlidXRlcyA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuXG4gICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXggPSAtPlxuICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IG51bGxcbiAgICAgICRzY29wZS52aWV3cG9pbnQgPSB7dHlwZTogJ2tleUlEJywgdmFsdWU6ICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRH1cbiAgICAgIGkgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkluZGV4KHtndW46ICRzY29wZS5ndW4sIHB1YktleTogJHNjb3BlLmRlZmF1bHRJbmRleEtleUlELCBpcGZzOiAkc2NvcGUuaXBmc30pXG4gICAgICBzZXRJbmRleChpKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZikgLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXggPSBudWxsXG4gICAgICAkc2NvcGUubG9nZ2luZ0luID0gdHJ1ZVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlyaXNMaWIuS2V5LmZyb21TdHJpbmcocHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnaXJpc0tleScsIHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLnVybCA9ICRzY29wZS5nZXRJZFVybCAna2V5SUQnLCAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG4gICAgICBrZXlJRCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiBrZXlJRH1cbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICAgaSA9IG5ldyAkd2luZG93LmlyaXNMaWIuSW5kZXgoe2d1bjogJHNjb3BlLmd1biwga2V5cGFpcjogJHNjb3BlLnByaXZhdGVLZXksIHNlbGYsIGlwZnM6ICRzY29wZS5pcGZzLCBkZWJ1ZzogdHJ1ZX0pXG4gICAgICBzZXRJbmRleChpKVxuICAgICAgaS5yZWFkeS50aGVuIC0+XG4gICAgICAgICRzY29wZS5sb2dnaW5nSW4gPSBmYWxzZVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCBrZXlJRClcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAodmFsLCBrZXksIG1zZywgZXZlKSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKHZhbClcbiAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkubXZhID0gbXZhXG4gICAgICAgICAgZXZlLm9mZigpIGlmIG12YS5wcm9maWxlUGhvdG9cbiAgICAgICAgc3RhcnRBdCA9IG5ldyBEYXRlKClcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5nZXQoJ3JlY2VpdmVkJykubWFwKCkub25jZSAobSkgLT5cbiAgICAgICAgICByZXR1cm4gaWYgbS5wdWJLZXkgPT0gJHNjb3BlLnZpZXdwb2ludC52YWx1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nICd5b3UgZ290IGEgbXNnJ1xuICAgICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmZyb21TaWcobSkudGhlbiAobXNnKSAtPlxuICAgICAgICAgICAgaWYgbmV3IERhdGUobXNnLnNpZ25lZERhdGEudGltZXN0YW1wKSA+IHN0YXJ0QXRcbiAgICAgICAgICAgICAgYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyhhdXRob3IpLnRoZW4gKG5hbWUpIC0+XG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5jcmVhdGVcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiI3tuYW1lfSBzZW50IHlvdSBhIG1lc3NhZ2UhXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpIC0+ICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICBpZiBkYXRhLnJlY2VpdmVkUG9zaXRpdmUgYW5kICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhIGFuZCBub3QgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEucmVjZWl2ZWRQb3NpdGl2ZVxuICAgICAgICAgICAgY29uc29sZS5sb2cgJ2dyZWF0LCB5b3UgZ290IHlvdXIgZmlyc3QgdXB2b3RlISdcbiAgICAgICAgICAgICMgVE9ETzogbm90aWZpY2F0aW9uXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEgPSBkYXRhXG5cbiAgICBwcml2YXRlS2V5ID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2lyaXNLZXknKSBvciBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG5cbiAgICAkc2NvcGUub3BlbkNoYXRNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICdjaGF0TW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY2hhdC5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUub3BlblZpZGVvQ2hhdE1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwgJ3ZpZGVvQ2hhdE1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3ZpZGVvLm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cblxuICAgICRzY29wZS5vcGVuUmVhZFFSTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAncmVhZFFSTW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvcmVhZHFyLm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cblxuICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMgPSAoKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0ucGVlcnMgKGVyciwgcGVlckluZm9zKSAtPlxuICAgICAgICBpZiBlcnJcbiAgICAgICAgICBjb25zb2xlLmVycm9yICdmYWlsZWQgdG8gZmV0Y2ggaXBmcyBwZWVycycsIGVyclxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgJHNjb3BlLmlwZnNQZWVycyA9IHBlZXJJbmZvcyBpZiBBcnJheS5pc0FycmF5KHBlZXJJbmZvcylcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcbiAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuICAgICAgc2V0SW50ZXJ2YWwgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycywgNTAwMFxuXG4gICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxTZXR0aW5ncycpIHx8IHt9XG4gICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbiA9IC0+XG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncy5wcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uQ2xvc2VkID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsU2V0dGluZ3MnLCAkc2NvcGUubG9jYWxTZXR0aW5ncylcblxuICAgICRzY29wZS5vcGVuUHJvZmlsZVBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90bywgJ1VwbG9hZCBwcm9maWxlIHBob3RvJywgdHJ1ZSlcblxuICAgICRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8gPSAoYmxvYikgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICByZWNpcGllbnQgPVxuICAgICAgICAgIHByb2ZpbGVQaG90bzogJy9pcGZzLycgKyBmaWxlc1swXS5wYXRoXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgIHJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlY2lwaWVudC5rZXlJRCA9ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAkc2NvcGUuY2xvc2VQcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uKClcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IHRydWUgIyBUaGVyZSdzIGEgd2VpcmQgYnVnIHdoZXJlIHRoZSBwcm9maWxlIGlkZW50aWNvbiBkb2Vzbid0IHVwZGF0ZVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKS50aGVuIC0+XG4gICAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IGZhbHNlXG4gICAgICAgICAgICBpZiAhJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lyaXMnXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIG9wdGlvbnMuZ2V0SnNvblxuICAgICAgICAgICAgICBmaWxlID0gSlNPTi5wYXJzZShmaWxlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBpZiBvcHRpb25zLmJhc2U2NHR5cGVcbiAgICAgICAgICAgICAgZmlsZSA9ICdkYXRhOicgKyBvcHRpb25zLmJhc2U2NHR5cGUgKyAnO2Jhc2U2NCwnICsgZmlsZS50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgICAgIHJlc29sdmUgZmlsZVxuXG4gICAgICAgIGlmICRzY29wZS5pcGZzUmVhZHlcbiAgICAgICAgICBnbygpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgICAgICAgZ28oKVxuXG4gICAgJHNjb3BlLiR3YXRjaCAnbmV3TWVzc2FnZS5yYXRpbmcnLCAocmF0aW5nKSAtPlxuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSAwLjUpIC8gMyAvIDEuMjUgKyAwLjJcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2Uuc3R5bGUgPSB7J2JvcmRlci1jb2xvcic6ICdyZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ31cbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBhbHBoYSA9IChyYXRpbmcgKyAwLjUpIC8gLTMgLyAxLjI1ICsgMC4yXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAncmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKSd9XG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAnI2ZjZjhlMyd9XG5cbiAgICAkc2NvcGUucmVzZXRNc2cgPSAtPlxuICAgICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgICByYXRpbmc6IDFcbiAgICAgICAgY29tbWVudDogJydcbiAgICAgICAgZmlsZXM6IFtdXG4gICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgICAgdHlwZTogJydcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLnJlc2V0TXNnKClcblxuICAgICRzY29wZS52b3RlID0gKG1zZywgdm90ZSkgLT5cbiAgICAgIGNvbnNvbGUubG9nICd2b3RlIGFkZGVkJ1xuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UobnVsbCwge3R5cGU6ICd2b3RlJywgcmVwbHlUbzogbXNnLmdldEhhc2goKSwgdm90ZX0pXG5cbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBtc2csIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gdHJ1ZVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgIGRlbGV0ZSBtc2cucG9sbE9wdGlvbnMgaWYgbXNnLnBvbGxPcHRpb25zID09IGZhbHNlXG5cbiAgICAgIGZpbGVVcGxvYWRzID0gW11cbiAgICAgIGlmIG9wdGlvbnMuZmlsZXMgIyB1cGxvYWQgdG8gaXBmc1xuICAgICAgICBtc2cuYXR0YWNobWVudHMgPSBbXVxuICAgICAgICBhZGRGaWxlID0gKGZpbGUpIC0+XG4gICAgICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoZmlsZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgaWYgcmVzIGFuZCByZXMubGVuZ3RoIGFuZCByZXMubGVuZ3RoID4gMCBhbmQgcmVzWzBdLnBhdGhcbiAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2hcbiAgICAgICAgICAgICAgICB1cmk6ICcvaXBmcy8nICsgcmVzWzBdLnBhdGhcbiAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemVcbiAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWVcbiAgICAgICAgZmlsZVVwbG9hZHMucHVzaCBhZGRGaWxlKGZpbGUpIGZvciBmaWxlIGluIG9wdGlvbnMuZmlsZXNcblxuICAgICAgUHJvbWlzZS5hbGwoZmlsZVVwbG9hZHMpLnRoZW4gLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ21zZy5hdHRhY2htZW50cycsIG1zZy5hdHRhY2htZW50c1xuICAgICAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZSBvYmplY3RcbiAgICAgICAgbWVzc2FnZSA9IG51bGxcbiAgICAgICAgZGVsZXRlIG1zZy5maWxlcyBpZiBtc2cuZmlsZXNcbiAgICAgICAgbXNnLnJlY2lwaWVudCA9IG1zZy5yZWNpcGllbnQgfHwge31cbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgaWYgb3B0aW9ucy52ZXJpZmllZEF0dHIgYW5kICRzdGF0ZVBhcmFtcy50eXBlID09IG9wdGlvbnMudmVyaWZpZWRBdHRyLnR5cGVcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gWyRzdGF0ZVBhcmFtcy52YWx1ZSwgb3B0aW9ucy52ZXJpZmllZEF0dHIudmFsdWVdXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRbb3B0aW9ucy52ZXJpZmllZEF0dHIudHlwZV0gPSBvcHRpb25zLnZlcmlmaWVkQXR0ci52YWx1ZSBpZiBvcHRpb25zLnZlcmlmaWVkQXR0clxuICAgICAgICBlbHNlIHVubGVzcyAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIG1zZy5yZWNpcGllbnQua2V5SUQgPSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAgIGlmIG1zZy50eXBlID09ICdyYXRpbmcnXG4gICAgICAgICAgbXNnLm1heFJhdGluZyB8PSAzXG4gICAgICAgICAgbXNnLm1pblJhdGluZyB8PSAtM1xuICAgICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVSYXRpbmcobXNnLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgZWxzZSBpZiBtc2cudHlwZSA9PSAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24obXNnLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGUobXNnLCAkc2NvcGUucHJpdmF0ZUtleSlcblxuICAgICAgICBtZXNzYWdlLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICAgJHNjb3BlLm1zZ3Muc2VlblttLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbbV0pXG4gICAgICAgIC50aGVuIChtZXNzYWdlcykgLT5cbiAgICAgICAgICAkc2NvcGUubXNncy5saXN0LnB1c2gobWVzc2FnZXNbMF0pXG4gICAgICAgICAgaWYgb3B0aW9ucy5hZGRUbyBhbmQgbm90IG9wdGlvbnMuYWRkVG8uc2VlblttZXNzYWdlc1swXS5nZXRIYXNoKCldXG4gICAgICAgICAgICBvcHRpb25zLmFkZFRvLmxpc3QucHVzaCBtZXNzYWdlc1swXVxuICAgICAgICAgICAgb3B0aW9ucy5hZGRUby5zZWVuW21lc3NhZ2VzWzBdLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSBub3QgaW4gW21zZy50eXBlLCBudWxsXVxuICAgICAgICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG1zZy50eXBlXG4gICAgICAgICAgJHNjb3BlLnJlc2V0TXNnKCkgIyB3aHkgbm90IHJlc2V0dGluZyB1cGxvYWRlZCBmaWxlcz8gRDpcbiAgICAgICAgICBvcHRpb25zLmZpbGVzID0gW10gaWYgb3B0aW9ucy5maWxlc1xuICAgICAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gZmFsc2VcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICRzY29wZS5lcnJvciA9IGVcbiAgICAgICAgICAkc2NvcGUuYWRkaW5nTWVzc2FnZSA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3Blbk1vZGFsID0gKG1vZGFsTmFtZSwgb3B0aW9ucykgLT5cbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduIHtzaXplOiAnbGcnLCBhbmltYXRpb246IHRydWUsIHNjb3BlOiAkc2NvcGV9LCBvcHRpb25zXG4gICAgICAkc2NvcGVbbW9kYWxOYW1lXSA9ICR1aWJNb2RhbC5vcGVuKG9wdGlvbnMpXG4gICAgICAkc2NvcGVbbW9kYWxOYW1lXS5yZXN1bHQudGhlbiAoLT4pLCAoLT4pICMgYXZvaWQgYmFja2Ryb3AgcmVqZWN0aW9uIGNvbnNvbGUgZXJyb3JcbiAgICAgICRzY29wZVttb2RhbE5hbWVdLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICAgZm9jdXMob3B0aW9ucy5mb2N1c1RvKSBpZiBvcHRpb25zLmZvY3VzVG9cbiAgICAgICR0cmFuc2l0aW9ucy5vblN0YXJ0IHt9LCAtPlxuICAgICAgICAkc2NvcGVbbW9kYWxOYW1lXS5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgnbG9naW5Nb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ2luLm1vZGFsLmh0bWwnLCBmb2N1c1RvOiAnbmV3VXNlcid9KVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0LCBzcXVhcmlmeSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRNb2RhbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICRzY29wZS5tb2RhbEJ1dHRvblRleHQgPSBtb2RhbEJ1dHRvblRleHQgb3IgJ1VwbG9hZCdcbiAgICAgICRzY29wZS5zcXVhcmlmeSA9IHNxdWFyaWZ5XG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCd1cGxvYWRNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3VwbG9hZC5tb2RhbC5odG1sJ30pXG5cbiAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAkc2NvcGUuZmlsdGVyZWRNc2dzID0gW11cbiAgICAkc2NvcGUuc2hvd01vcmVNc2dzID0gKGN1cnNvcikgLT5cbiAgICAgIGxpbWl0ID0gMjAgIyAxMFxuICAgICAgaWYgY3Vyc29yID09IHVuZGVmaW5lZCBhbmQgJHNjb3BlLm1zZ3MubGFzdFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUubXNncy5sYXN0XG4gICAgICBjb25zb2xlLmxvZyAnY3Vyc29yJywgY3Vyc29yXG4gICAgICBmb3VuZCA9IDBcbiAgICAgICRzY29wZS5sb2FkaW5nTXNncyA9IHRydWVcbiAgICAgIGZpbHRlciA9IGZhbHNlXG4gICAgICAjIyNcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gbnVsbFxuICAgICAgICBmaWx0ZXIgPSAobSkgLT5cbiAgICAgICAgICByID0gbS5zaWduZWREYXRhLnR5cGUgbm90IGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJ11cbiAgICAgICAgICBjb25zb2xlLmxvZyAnZmlsdGVyaW4nLCByXG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgIGVsc2VcbiAgICAgICAgdCA9ICRzY29wZS5maWx0ZXJzLnR5cGUuc3BsaXQoJzonKVswXVxuICAgICAgICBmaWx0ZXIgPSAobSkgLT5cbiAgICAgICAgICByID0gbS5zaWduZWREYXRhLnR5cGUgPT0gdFxuICAgICAgICAgIGNvbnNvbGUubG9nICdmaWx0ZXJpbicsIHJcbiAgICAgICAgICByZXR1cm4gclxuICAgICAgIyMjXG4gICAgICByZXN1bHRGb3VuZCA9IChtc2cpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdnb3QgbXNnJywgbXNnXG4gICAgICAgIGZvdW5kICs9IDFcbiAgICAgICAgJHNjb3BlLmxvYWRpbmdNc2dzID0gZmFsc2UgaWYgZm91bmQgPj0gbGltaXRcbiAgICAgICAgcmV0dXJuIGlmICRzY29wZS5tc2dzLnNlZW5bbXNnLmdldEhhc2goKV1cbiAgICAgICAgJHNjb3BlLm1zZ3MubGFzdCA9IG1zZy5zaWduZWREYXRhLnRpbWVzdGFtcCBpZiAhJHNjb3BlLm1zZ3MubGFzdCBvciBtc2cuc2lnbmVkRGF0YS50aW1lc3RhbXAgPCAkc2NvcGUubXNncy5sYXN0XG4gICAgICAgICRzY29wZS5tc2dzLnNlZW5bbXNnLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ11cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5tc2dzLmxpc3QucHVzaCBtc2dcblxuICAgICAgJHNjb3BlLmZpbHRlcnMubGltaXQgKz0gbGltaXRcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLmxpbWl0ID4gJHNjb3BlLmZpbHRlcmVkTXNncy5sZW5ndGhcbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlc0J5VGltZXN0YW1wKHJlc3VsdEZvdW5kLCB1bmRlZmluZWQsIGN1cnNvcilcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICAkc2NvcGUuaXBmcy5hZGQgYnVmZmVyLCAoZXJyLCBmaWxlcykgLT5cbiAgICAgICAgICAgIGlmIGVyclxuICAgICAgICAgICAgICByZWplY3QoJ2FkZGluZyB0byBpcGZzIGZhaWxlZCcsIGVycilcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgJ2RvbmU6JywgZXJyLCBmaWxlc1xuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG5cbiAgICAkc2NvcGUuY3JlYXRlVXNlciA9IChuYW1lKSAtPlxuICAgICAgcmV0dXJuIGlmIG5hbWUuaW5kZXhPZigneycpICE9IC0xIG9yIG5hbWUuaW5kZXhPZignfScpICE9IC0xICMgcHJldmVudCBhY2NpZGVudGFsIHByaXZhdGUga2V5IHBhc3RlXG4gICAgICBuYW1lID0gbmFtZS50cmltKClcbiAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSB0cnVlXG4gICAgICBzZWxmID0ge25hbWV9XG4gICAgICAkd2luZG93LmlyaXNMaWIuS2V5LmdlbmVyYXRlKClcbiAgICAgIC50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkudG9TdHJpbmcoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIHNlbGYua2V5SUQgPSAkd2luZG93LmlyaXNMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUubG9naW5XaXRoS2V5KCRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZilcbiAgICAgIC50aGVuIChtc2cpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gY3JlYXRlIHVzZXI6JywgZSlcbiAgICAgICAgJHNjb3BlLmNyZWF0aW5nVXNlciA9IGZhbHNlXG5cbiAgICAkc2NvcGUuZ2VuZXJhdGVLZXkgPSAtPlxuICAgICAgJHdpbmRvdy5pcmlzTGliLktleS5nZW5lcmF0ZSgpLnRoZW4gKGtleSkgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJHdpbmRvdy5pcmlzTGliLktleS50b1N0cmluZygkc2NvcGUucHJpdmF0ZUtleSlcblxuICAgICRzY29wZS5kb3dubG9hZCA9IChmaWxlbmFtZSwgZGF0YSwgdHlwZSwgY2hhcnNldCA9ICd1dGYtOCcsIGhyZWYpIC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSBocmVmIG9yIFwiZGF0YToje3R5cGV9O2NoYXJzZXQ9I3tjaGFyc2V0fSwje2VuY29kZVVSSShkYXRhKX1cIlxuICAgICAgaGlkZGVuRWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJ1xuICAgICAgaGlkZGVuRWxlbWVudC5kb3dubG9hZCA9IGZpbGVuYW1lXG4gICAgICBoaWRkZW5FbGVtZW50LmNsaWNrKClcblxuICAgICRzY29wZS5kb3dubG9hZFRleHQgPSAodGV4dCkgLT5cbiAgICAgICRzY29wZS5kb3dubG9hZCgnaXJpc19wcml2YXRlX2tleS50eHQnLCB0ZXh0LCAndGV4dC9jc3YnLCAndXRmLTgnKVxuXG4gICAgJHNjb3BlLm9wZW5Mb2dvdXRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCdsb2dvdXRNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ291dC5tb2RhbC5odG1sJ30pXG5cbiAgICAkc2NvcGUubG9nb3V0ID0gLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0T25saW5lKGZhbHNlKVxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcbiAgICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0ge31cblxuICAgICRzY29wZS5tc2dGaWx0ZXIgPSAobXNnLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gbXNnLnNpZ25lZERhdGFcbiAgICAgIHJldHVybiBmYWxzZSBpZiBtc2cuc2lnbmVkRGF0YS5yZXBseVRvXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICByZXR1cm4gZGF0YS50eXBlIGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJ11cbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPiAtMVxuICAgICAgICBpZiB0eXBlb2YgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgIT0gJ251bWJlcidcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPiAwIGFuZCBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA+ICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID09IDAgYW5kIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID09IDk5XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgJHNjb3BlLnJlbW92ZUZvY3VzID0gKGV2ZW50KSAtPlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKClcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLnNpZ25lZERhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5zaGFyZU1lc3NhZ2UgPSAobXNnLCBjb21tZW50KSAtPlxuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UobnVsbCwgeyB0eXBlOiAncG9zdCcsIHNoYXJlZE1zZzogbXNnLmdldEhhc2goKSwgY29tbWVudCB9KS50aGVuIChyKSAtPlxuICAgICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgICBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgbXNnLnNoYXJlc0FyciA9IG1zZy5zaGFyZXNBcnIgb3IgW11cbiAgICAgICAgbXNnLnNoYXJlc0Fyci5wdXNoKHIpXG4gICAgICAkc2NvcGUuc2hhcmVNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUubXNnVXRpbHMgPVxuICAgICAgbGlrZTogKG1zZykgLT5cbiAgICAgICAgaWYgbXNnLmxpa2VkXG4gICAgICAgICAgbXNnLmxpa2VkID0gZmFsc2VcbiAgICAgICAgICBtc2cubGlrZXMgPSBpZiBtc2cubGlrZXMgdGhlbiBtc2cubGlrZXMgLSAxIGVsc2UgMFxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0UmVhY3Rpb24obXNnLCBudWxsKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbXNnLmxpa2VkID0gdHJ1ZVxuICAgICAgICAgIG1zZy5saWtlcyA9IGlmIG1zZy5saWtlcyB0aGVuIG1zZy5saWtlcyArIDEgZWxzZSAxXG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZXRSZWFjdGlvbihtc2csICdsaWtlJylcbiAgICAgIHNoYXJlOiAobXNnKSAtPlxuICAgICAgICAkc2NvcGUubWVzc2FnZSA9IG1zZ1xuICAgICAgICAkc2NvcGUub3Blbk1vZGFsICdzaGFyZU1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaGFyZS5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG4gICAgICByZXBseVRvOiAobXNnLCByZXBseSkgLT5cbiAgICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UobnVsbCwge1xuICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICByZXBseVRvOiBtc2cuZ2V0SGFzaCgpXG4gICAgICAgICAgY29tbWVudDogcmVwbHlcbiAgICAgICAgfSkudGhlbiAocikgLT5cbiAgICAgICAgICBtc2cucmVwbGllcyA9IG1zZy5yZXBsaWVzIG9yIHt9XG4gICAgICAgICAgbXNnLnJlcGxpZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgICAgICBtc2cucmVwbGllc0Fyci5wdXNoKHIpXG5cbiAgICAkc2NvcGUub3Blbk1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UsIHNpemUpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAjIFRPRE86IGNoZWNrIHNpZ1xuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50ID0gJHNjb3BlLm1lc3NhZ2UuZ2V0UmVjaXBpZW50KCRzY29wZS5pcmlzSW5kZXgpXG4gICAgICAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnQuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChkKSAtPlxuICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50X25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5QXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgnY2hhdE1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCd9KVxuXG4gICAgdW5sZXNzICRzY29wZS5maWx0ZXJzXG4gICAgICAkc2NvcGUuZmlsdGVycyA9IE9iamVjdC5hc3NpZ24ge30sIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30pIC0+XG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIG1zZy5hdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCRzY29wZS5pcmlzSW5kZXgpXG4gICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgndHJ1c3REaXN0YW5jZScpLm9uIChkKSAtPiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA9IGRcbiAgICAgIHJldHVybiBtZXNzYWdlc1xuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAjIHNob3VsZCBiZSBtb3ZlZCB0byBpcmlzLWxpYj9cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSwgc2V0VGl0bGUpIC0+XG4gICAgICBpLndlbGxWZXJpZmllZCA9IGZhbHNlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+XG4gICAgICAgIGkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBpLndlbGxWZXJpZmllZCA9IHRydWUgaWYgbXZhLm5hbWUud2VsbFZlcmlmaWVkXG4gICAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGEgPSBPYmplY3QudmFsdWVzKGF0dHJzKVswXVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5zbGljZSgwLDYpICsgJy4uLicgaWYgYS50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICBpZiBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgIGlmIG12YS5uaWNrbmFtZSBhbmQgbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZSAhPSBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gaS5uaWNrbmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSBpLnByaW1hcnlOYW1lIGlmIHNldFRpdGxlXG4gICAgICAgICAgICByZXNvbHZlIGkucHJpbWFyeU5hbWVcblxuICAgICRzY29wZS5zZWFyY2hLZXlkb3duID0gKGV2ZW50KSAtPlxuICAgICAgc3dpdGNoIChpZiBldmVudCB0aGVuIGV2ZW50LndoaWNoIGVsc2UgLTEpXG4gICAgICAgIHdoZW4gMzhcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAtMVxuICAgICAgICAgICAgJHNjb3BlLmFkZEVudHJ5QWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5LS1cbiAgICAgICAgICAgIGlkID0gaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAtMSB0aGVuICdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkgZWxzZSAnY3JlYXRlSWRSb3cnXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICgkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICgkc2NvcGUuaWRzLmxpc3QubGVuZ3RoKSAtIDEpIGFuZCAkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICRzY29wZS5maWx0ZXJzLmxpbWl0XG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSsrXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSkuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID09IC0xXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpLmNsaWNrKClcbiAgICAgICAgd2hlbiAtMVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgIHdoZW4gMzMsIDM0LCAzNSwgMzYsIDM3LCAzOVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgd2FpdCA9IHNldFRpbWVvdXQoKC0+XG4gICAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9IGVsLnZhbCgpXG4gICAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICksIDMwMClcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSB3YWl0XG4gICAgICAgICAgYnJlYWtcblxuICAgICRzY29wZS5kcm9wZG93blNlYXJjaFNlbGVjdCA9IChpdGVtKSAtPlxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGl0ZW0ubGlua1RvLnR5cGUsIHZhbHVlOiBpdGVtLmxpbmtUby52YWx1ZSB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXG4gICAgJHNjb3BlLmFkZEd1blBlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmd1bi5vcHQoe3BlZXJzOiBbdXJsXX0pOyAjIFRPRE86IHZhbGlkYXRlIHVybFxuXG4gICAgJHNjb3BlLnJlbW92ZUd1blBlZXIgPSAodXJsKSAtPlxuICAgICAgcGVlciA9ICRzY29wZS5ndW4uXy5vcHQucGVlcnNbdXJsXSAjIGdldCB0aGUgcGVlciB5b3Ugd2FudFxuICAgICAgcGVlci51cmwgPSBwZWVyLmlkID0gbnVsbCAjIHRoaXMgcHJldmVudHMgcmVjb25uZWN0aW5nIHRvIFVSTFxuICAgICAgcGVlci53aXJlLmNsb3NlKCkgIyBpZiB3ZWJzb2NrZXQgaW50ZXJmYWNlXG4gICAgICBkZWxldGUgJHNjb3BlLmd1bi5fLm9wdC5wZWVyc1t1cmxdICMgcmVtb3ZlIGZyb20gcGVlciBsaXN0XG5cbiAgICAkc2NvcGUuYWRkSXBmc1BlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuYm9vdHN0cmFwLmFkZCB1cmxcbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLmNvbm5lY3QodXJsKS50aGVuIC0+XG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXG4gICAgJHNjb3BlLmFkZERlZmF1bHRJcGZzUGVlcnMgPSAtPlxuICAgICAgJHNjb3BlLmlwZnMuYm9vdHN0cmFwLmFkZCgnJywge2RlZmF1bHQ6IHRydWV9KS50aGVuIC0+ICMgVE9ETzogZXJyb3JzXG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXG4gICAgJHNjb3BlLnJlbW92ZUlwZnNQZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5pcGZzLmJvb3RzdHJhcC5ybSB1cmxcbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLmRpc2Nvbm5lY3QodXJsKS50aGVuIC0+XG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXVxuIl19

(function() {
  'use strict';
  // Identities controller
  angular.module('irisAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$stateParams',
    '$transitions',
    '$location',
    '$http',
    '$q',
    '$timeout',
    '$uibModal',
    // 'Authentication'
    'config',
    'localStorageService',
    'focus',
    'NotificationService',
    function($scope,
    $state,
    $rootScope,
    $window,
    $stateParams,
    $transitions,
    $location,
    $http,
    $q,
    $timeout,
    $uibModal,
    config,
    localStorageService,
    focus,
    NotificationService) { //, Authentication
      var load,
    s,
    thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 1;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.sent = [];
      $scope.received = {
        list: [],
        seen: {}
      };
      $scope.attributes = [];
      thumbsUpObj = {};
      thumbsDownObj = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.collapseLevel = {};
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.slider = {
        options: {
          floor: -3,
          ceil: 3,
          hidePointerLabels: true,
          hideLimitLabels: true,
          disableAnimation: true
        }
      };
      s = $location.search();
      if (s.share) {
        $scope.share = true;
      }
      if (s.stream) {
        $scope.stream = true;
      }
      if ($scope.query.term.length && $state.is('identities.list')) {
        $scope.query.term = '';
        $scope.search();
      }
      if ($state.is('identities.show')) {
        $scope.filters.maxDistance = 0;
        $scope.filters.type = null;
        if ($scope.stream && !$scope.videoChatModal) {
          $scope.openVideoChatModal();
        }
      }
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params;
        if (entry.email) {
          linkTo = {
            type: 'email',
            value: entry.email
          };
        } else if (entry.url) {
          linkTo = {
            type: 'url',
            value: entry.url
          };
        } else {
          linkTo = $window.irisLib.Attribute.getUuid();
          entry.uuid = linkTo.value;
        }
        params = {
          type: 'verification',
          recipient: entry
        };
        return $scope.createMessage(event,
    params).then(function(response) {
          return $state.go('identities.show',
    linkTo);
        },
    function(error) {
          return console.log("error",
    error);
        });
      };
      $scope.guessAttributeType = function() {
        if ($scope.newVerification.value.length) {
          $scope.newVerification.type = $window.irisLib.Attribute.guessTypeOf($scope.newVerification.value);
          if (!$scope.newVerification.type) {
            if (!$scope.newVerification.value.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/)) {
              return $scope.newVerification.type = 'name';
            }
          }
        } else {
          return $scope.newVerification.type = '';
        }
      };
      $scope.addName = function(name) {
        var recipient;
        if (name) {
          recipient = {name};
          recipient[$scope.idType] = $scope.idValue;
          $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            return $scope.irisIndex.addMessage(m);
          });
          return $scope.nameAdded = true;
        } else {
          $scope.addingName = true;
          return focus('addNameFocus');
        }
      };
      $scope.getAttributes = function() {
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var a,
    alpha,
    attributes,
    c,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          attributes = attrs || [];
          if (attributes.length > 0) {
            c = attributes[0];
            mostConfirmations = c.verifications;
          } else {
            mostConfirmations = 1;
          }
          $scope.attributes = Object.values(attributes);
          ref = $scope.attributes;
          for (i = 0, len = ref.length; i < len; i++) {
            a = ref[i];
            if (!(a.type && a.value)) {
              return;
            }
            a.attr = new $window.irisLib.Attribute(a.type,
    a.value);
            a.isCurrent = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue).equals(a.attr);
            a.order = a.isCurrent ? 2e308 : (a.verifications || a.conf) - 2 * (a.unverifications || a.ref);
            if (a.isCurrent) {
              a.rowClass = 'cursor-default';
            }
            switch (a.type) {
              case 'email':
                a.iconStyle = 'glyphicon glyphicon-envelope';
                a.btnStyle = 'btn-success';
                a.link = 'mailto:' + a.value;
                a.quickContact = true;
                break;
              case 'bitcoin_address':
              case 'bitcoin':
                a.iconStyle = 'fa fa-bitcoin';
                a.btnStyle = 'btn-primary';
                a.link = 'https://blockchain.info/address/' + a.value;
                a.quickContact = true;
                break;
              case 'gpg_fingerprint':
              case 'gpg_keyid':
                a.iconStyle = 'fa fa-key';
                a.btnStyle = 'btn-default';
                a.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + a.value;
                break;
              case 'account':
                a.iconStyle = 'fa fa-at';
                break;
              case 'nickname':
                $scope.identity.hasProperName = true;
                a.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'name':
                $scope.identity.hasProperName = true;
                a.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'tel':
              case 'phone':
                a.iconStyle = 'glyphicon glyphicon-earphone';
                a.btnStyle = 'btn-success';
                a.link = 'tel:' + a.value;
                a.quickContact = true;
                break;
              case 'keyID':
                a.iconStyle = 'fa fa-key';
                break;
              case 'coverPhoto':
                if (a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                  $scope.ipfsGet(a.value).then(function(coverPhoto) {
                    return $scope.coverPhoto = $scope.coverPhoto || {
                      'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')'
                    };
                  });
                }
                break;
              case 'url':
                a.link = a.value;
                if (a.value.indexOf('facebook.com/') > -1) {
                  a.iconStyle = 'fa fa-facebook';
                  a.btnStyle = 'btn-facebook';
                  a.link = a.value;
                  a.linkName = a.value.split('facebook.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('twitter.com/') > -1) {
                  a.iconStyle = 'fa fa-twitter';
                  a.btnStyle = 'btn-twitter';
                  a.link = a.value;
                  a.linkName = a.value.split('twitter.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('plus.google.com/') > -1) {
                  a.iconStyle = 'fa fa-google-plus';
                  a.btnStyle = 'btn-google-plus';
                  a.link = a.value;
                  a.linkName = a.value.split('plus.google.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('linkedin.com/') > -1) {
                  a.iconStyle = 'fa fa-linkedin';
                  a.btnStyle = 'btn-linkedin';
                  a.link = a.value;
                  a.linkName = a.value.split('linkedin.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('github.com/') > -1) {
                  a.iconStyle = 'fa fa-github';
                  a.btnStyle = 'btn-github';
                  a.link = a.value;
                  a.linkName = a.value.split('github.com/')[1];
                  a.quickContact = true;
                } else {
                  a.iconStyle = 'glyphicon glyphicon-link';
                  a.btnStyle = 'btn-default';
                }
                break;
              default:
                a.iconStyle = 'glyphicon glyphicon-star';
            }
            if (a.value && a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
              a.link = 'https://ipfs.io' + a.value;
              a.linkName = a.value;
              a.iconStyle = 'glyphicon glyphicon-link';
              a.btnStyle = 'btn-default';
            }
            if (a.verifications + a.unverifications > 0) {
              percentage = a.verifications * 100 / (a.verifications + a.unverifications);
              if (percentage >= 80) {
                alpha = a.verifications / mostConfirmations * 0.7 + 0.3;
              // a.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
              } else if (percentage >= 60) {
                a.rowClass = 'warning';
              } else {
                a.rowClass = 'danger';
              }
            }
            $scope.hasQuickContacts = $scope.hasQuickContacts || a.quickContact;
          }
          return $scope.attributesLength = $scope.attributes.length;
        });
      };
      $scope.attributeClicked = function(event,
    attr) {
        var a,
    hasAttr1,
    hasAttr2,
    i,
    j,
    len,
    len1,
    msg,
    ref,
    ref1,
    ref2;
        if (attr.connectingMsgs) {
          return attr.collapse = !attr.collapse;
        } else {
          attr.connectingMsgs = [];
          ref = $scope.received.list;
          for (i = 0, len = ref.length; i < len; i++) {
            msg = ref[i];
            if ((ref1 = msg.signedData.type) !== 'verification' && ref1 !== 'unverification' && ref1 !== 'verify_identity' && ref1 !== 'unverify_identity') {
              continue;
            }
            hasAttr1 = hasAttr2 = false;
            ref2 = msg.getRecipientArray();
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              a = ref2[j];
              hasAttr1 = hasAttr1 || a.type === attr.type && a.value === attr.value;
              hasAttr2 = hasAttr2 || a.type === $scope.idType && a.value === $scope.idValue;
              if (hasAttr1 && hasAttr2) {
                attr.connectingMsgs.push(msg);
                break;
              }
            }
          }
          return attr.collapse = !attr.collapse;
        }
      };
      $scope.getSentMsgs = function() {
        var callback,
    cursor;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.sent = [];
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        callback = function(msg) {
          $scope.processMessages([msg],
    {
            authorIsSelf: true
          });
          return $scope.sent.push(msg);
        };
        return $scope.identity.sent({callback});
      };
      $scope.getReceivedMsgs = function() {
        var callback,
    cursor;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.received = {
          list: [],
          seen: {}
        };
        cursor = $scope.received.list.length ? $scope.received.list[$scope.received.list.length - 1].cursor : '';
        callback = function(msg) {
          if ($scope.received.seen[msg.getHash()]) {
            return;
          }
          $scope.processMessages([msg],
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            var a,
    i,
    len,
    ref;
            if (msg.isPositive()) {
              if (!msg.linkToAuthor) {
                msg.authorArray = msg.getAuthorArray();
                ref = msg.authorArray;
                for (i = 0, len = ref.length; i < len; i++) {
                  a = ref[i];
                  if (!msg.linkToAuthor) {
                    msg.linkToAuthor = a;
                  }
                }
              }
              if ($scope.thumbsUp.length < 12 && !thumbsUpObj[JSON.stringify(msg.signedData.author)]) {
                thumbsUpObj[JSON.stringify(msg.signedData.author)] = true;
                $scope.thumbsUp.push(msg);
                $scope.hasThumbsUp = true;
              }
            } else if (msg.isNegative() && $scope.thumbsDown.length < 12 && !thumbsDownObj[JSON.stringify(msg.signedData.author)]) {
              thumbsDownObj[JSON.stringify(msg.signedData.author)] = true;
              $scope.thumbsDown.push(msg);
              $scope.hasThumbsDown = true;
            }
            $scope.received.list.push(msg);
            return $scope.received.seen[msg.getHash()] = true;
          });
        };
        return $scope.identity.received({callback,
    cursor});
      };
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    filters);
      };
      $scope.uploadCoverPhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          recipient = {
            coverPhoto: '/ipfs/' + files[0].path
          };
          recipient[$scope.idType] = $scope.idValue;
          return $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.irisIndex.addMessage(m);
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.openSharePageModal = function() {
        return $scope.openModal('sharePageModal',
    {
          templateUrl: 'app/identities/share.modal.html',
          size: 'md'
        });
      };
      $scope.openCoverPhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadCoverPhoto,
    'Upload cover photo',
    false);
      };
      $scope.findOne = function() {
        var onMessage;
        if (!$scope.irisIndex) {
          return;
        }
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.idAttr = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue);
        $scope.idUrl = $scope.getIdUrl($scope.idType,
    $scope.idValue);
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        if ($scope.isCurrentUser) {
          NotificationService.markAllSeen();
        }
        $scope.isUniqueType = $window.irisLib.Attribute.isUniqueType($scope.idType);
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        if ($state.is('identities.show')) {
          $scope.setPageTitle($scope.idValue);
        }
        $scope.identity = $scope.irisIndex.get($scope.idType,
    $scope.idValue); // , true)
        $scope.setIdentityNames($scope.identity,
    false,
    true);
        $scope.identity.gun.on(function(data) {
          return $scope.identity.data = data;
        });
        $scope.getAttributes();
        $scope.getSentMsgs();
        $scope.getReceivedMsgs();
        $scope.identity.gun.get('scores').open(function(scores) {
          return $scope.scores = scores;
        });
        if ($scope.idType === 'keyID') {
          // TODO: only init when opening chat fönster
          $scope.chatMessages = [];
          onMessage = function(msg) {
            return $scope.$apply(function() {
              if (msg) {
                return $scope.chatMessages.push(msg);
              }
            });
          };
          $scope.chat = new $window.irisLib.Chat({
            onMessage: onMessage,
            key: $scope.privateKey,
            gun: $scope.gun,
            participants: $scope.idValue
          });
          $scope.sendChatMessage = function(msg) {
            var m,
    t;
            t = new Date().getTime();
            m = {
              author: $scope.viewpoint.identity.primaryName,
              text: msg,
              time: t
            };
            return $scope.chat.send(m);
          };
          return $scope.irisIndex.getOnline($scope.idValue,
    function(isOnline) {
            return $scope.isOnline = isOnline;
          });
        }
      };
      load = function() {
        if ($scope.irisIndex) {
          if ($state.is('identities.show')) {
            $scope.findOne();
          }
          if ($state.is('identities.create')) {
            focus('idNameFocus');
            return $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
          }
        }
      };
      $scope.$watch('irisIndex',
    load);
      $scope.qrScanSuccess = function(data) {
        var a,
    type,
    value;
        a = data.split('/');
        if (a.length > 4) {
          type = decodeURIComponent(a[a.length - 2]);
          value = decodeURIComponent(a[a.length - 1].split('?')[0]);
          console.log('value',
    value);
          console.log('data',
    data);
          return $state.go('identities.show',
    {type,
    value});
        } else {
          return console.log('Unrecognized identity url',
    data);
        }
      };
      return $scope.qrScanError = function(e) {};
    }
  ]);

  // this is called each time a QR code is not found on the camera
// console.error e

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsc0JBQXpDLEVBQWlFO0lBQy9ELFFBRCtEO0lBRS9ELFFBRitEO0lBRy9ELFlBSCtEO0lBSS9ELFNBSitEO0lBSy9ELGNBTCtEO0lBTS9ELGNBTitEO0lBTy9ELFdBUCtEO0lBUS9ELE9BUitEO0lBUy9ELElBVCtEO0lBVS9ELFVBVitEO0lBVy9ELFdBWCtEOztJQWEvRCxRQWIrRDtJQWMvRCxxQkFkK0Q7SUFlL0QsT0FmK0Q7SUFnQi9ELHFCQWhCK0Q7SUFpQi9ELFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxZQUFwRDtJQUFrRSxTQUFsRTtJQUE2RSxLQUE3RTtJQUFvRixFQUFwRjtJQUF3RixRQUF4RjtJQUFrRyxTQUFsRztJQUE2RyxNQUE3RztJQUNBLG1CQURBO0lBQ3FCLEtBRHJCO0lBQzRCLG1CQUQ1QixDQUFBLEVBQUE7QUFFRSxVQUFBLElBQUE7SUFBQSxDQUFBO0lBQUEsYUFBQTtJQUFBO01BQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsQ0FBQTtNQUNsQixNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUNuQixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsS0FBRCxDQUFBO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQ0U7UUFBQSxJQUFBLEVBQU0sRUFBTjtRQUNBLElBQUEsRUFBTSxDQUFBO01BRE47TUFFRixNQUFNLENBQUMsVUFBUCxHQUFvQjtN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QUpGOztNQURLO01BUVAsTUFBTSxDQUFDLE1BQVAsQ0FBYyxXQUFkO0lBQTJCLElBQTNCO01BRUEsTUFBTSxDQUFDLGFBQVAsR0FBdUIsUUFBQSxDQUFDLElBQUQsQ0FBQTtBQUNyQixZQUFBLENBQUE7SUFBQSxJQUFBO0lBQUE7UUFBQSxDQUFBLEdBQUksSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0osSUFBRyxDQUFDLENBQUMsTUFBRixHQUFXLENBQWQ7VUFDRSxJQUFBLEdBQU8sa0JBQUEsQ0FBbUIsQ0FBRSxDQUFBLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWCxDQUFyQjtVQUNQLEtBQUEsR0FBUSxrQkFBQSxDQUFtQixDQUFFLENBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFYLENBQWEsQ0FBQyxLQUFoQixDQUFzQixHQUF0QixDQUEyQixDQUFBLENBQUEsQ0FBOUM7VUFDUixPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7SUFBcUIsS0FBckI7VUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7SUFBb0IsSUFBcEI7aUJBQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVjtJQUE2QixDQUFDLElBQUQ7SUFBTyxLQUFQLENBQTdCLEVBTEY7U0FBQSxNQUFBO2lCQU9FLE9BQU8sQ0FBQyxHQUFSLENBQVksMkJBQVo7SUFBeUMsSUFBekMsRUFQRjs7TUFGcUI7YUFVdkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLENBQUQsQ0FBQSxFQUFBO0lBL1R2QixDQWpCK0Q7R0FBakU7O0VBRkE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJHRyYW5zaXRpb25zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAnJHVpYk1vZGFsJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICdmb2N1cydcbiAgJ05vdGlmaWNhdGlvblNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkdHJhbnNpdGlvbnMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgJHVpYk1vZGFsLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGZvY3VzLCBOb3RpZmljYXRpb25TZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5uZXdFbnRyeSA9IHt9XG4gICAgJHNjb3BlLmFjdGl2ZVRhYiA9IDFcbiAgICAkc2NvcGUuYWN0aXZhdGVUYWIgPSAodGFiSWQpIC0+ICRzY29wZS5hY3RpdmVUYWIgPSB0YWJJZFxuICAgICRzY29wZS5zZW50ID0gW11cbiAgICAkc2NvcGUucmVjZWl2ZWQgPVxuICAgICAgbGlzdDogW11cbiAgICAgIHNlZW46IHt9XG4gICAgJHNjb3BlLmF0dHJpYnV0ZXMgPSBbXVxuICAgIHRodW1ic1VwT2JqID0ge31cbiAgICB0aHVtYnNEb3duT2JqID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAkc3RhdGVQYXJhbXMuc2VhcmNoIGlmICRzdGF0ZVBhcmFtcy5zZWFyY2hcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgb3B0aW9uczpcbiAgICAgICAgZmxvb3I6IC0zXG4gICAgICAgIGNlaWw6IDNcbiAgICAgICAgaGlkZVBvaW50ZXJMYWJlbHM6IHRydWVcbiAgICAgICAgaGlkZUxpbWl0TGFiZWxzOiB0cnVlXG4gICAgICAgIGRpc2FibGVBbmltYXRpb246IHRydWVcblxuICAgIHMgPSAkbG9jYXRpb24uc2VhcmNoKClcbiAgICAkc2NvcGUuc2hhcmUgPSB0cnVlIGlmIHMuc2hhcmVcbiAgICAkc2NvcGUuc3RyZWFtID0gdHJ1ZSBpZiBzLnN0cmVhbVxuXG4gICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0ubGVuZ3RoIGFuZCAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9IDBcbiAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgICAkc2NvcGUub3BlblZpZGVvQ2hhdE1vZGFsKCkgaWYgJHNjb3BlLnN0cmVhbSBhbmQgbm90ICRzY29wZS52aWRlb0NoYXRNb2RhbFxuXG4gICAgJHNjb3BlLmFkZEVudHJ5ID0gKGV2ZW50LCBlbnRyeSkgLT5cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIGxpbmtUbyA9IHt0eXBlOidlbWFpbCcsIHZhbHVlOiBlbnRyeS5lbWFpbH1cbiAgICAgIGVsc2UgaWYgZW50cnkudXJsXG4gICAgICAgIGxpbmtUbyA9IHt0eXBlOid1cmwnLCB2YWx1ZTogZW50cnkudXJsfVxuICAgICAgZWxzZVxuICAgICAgICBsaW5rVG8gPSAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmdldFV1aWQoKVxuICAgICAgICBlbnRyeS51dWlkID0gbGlua1RvLnZhbHVlXG4gICAgICBwYXJhbXMgPVxuICAgICAgICB0eXBlOiAndmVyaWZpY2F0aW9uJ1xuICAgICAgICByZWNpcGllbnQ6IGVudHJ5XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ3Vlc3NUeXBlT2YoJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZSlcbiAgICAgICAgdW5sZXNzICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZVxuICAgICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlLm1hdGNoIC9cXGB8XFx+fFxcIXxcXEB8XFwjfFxcJHxcXCV8XFxefFxcJnxcXCp8XFwofFxcKXxcXCt8XFw9fFxcW3xcXHt8XFxdfFxcfXxcXHx8XFxcXHxcXCd8XFw8fFxcLHxcXC58XFw+fFxcP3xcXC98XFxcIlwifFxcO3xcXDovXG4gICAgICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnbmFtZSdcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJydcblxuICAgICRzY29wZS5hZGROYW1lID0gKG5hbWUpIC0+XG4gICAgICBpZiBuYW1lXG4gICAgICAgIHJlY2lwaWVudCA9IHtuYW1lfVxuICAgICAgICByZWNpcGllbnRbJHNjb3BlLmlkVHlwZV0gPSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAkc2NvcGUubmFtZUFkZGVkID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuYWRkaW5nTmFtZSA9IHRydWVcbiAgICAgICAgZm9jdXMoJ2FkZE5hbWVGb2N1cycpXG5cbiAgICAkc2NvcGUuZ2V0QXR0cmlidXRlcyA9IC0+XG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJzIG9yIFtdXG4gICAgICAgIGlmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMFxuICAgICAgICAgIGMgPSBhdHRyaWJ1dGVzWzBdXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLnZlcmlmaWNhdGlvbnNcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgICAkc2NvcGUuYXR0cmlidXRlcyA9IE9iamVjdC52YWx1ZXMoYXR0cmlidXRlcylcbiAgICAgICAgZm9yIGEgaW4gJHNjb3BlLmF0dHJpYnV0ZXNcbiAgICAgICAgICByZXR1cm4gdW5sZXNzIGEudHlwZSBhbmQgYS52YWx1ZVxuICAgICAgICAgIGEuYXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKGEudHlwZSwgYS52YWx1ZSlcbiAgICAgICAgICBhLmlzQ3VycmVudCA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKS5lcXVhbHMoYS5hdHRyKVxuICAgICAgICAgIGEub3JkZXIgPSBpZiBhLmlzQ3VycmVudCB0aGVuIEluZmluaXR5IGVsc2UgKGEudmVyaWZpY2F0aW9ucyBvciBhLmNvbmYpIC0gMiAqIChhLnVudmVyaWZpY2F0aW9ucyBvciBhLnJlZilcbiAgICAgICAgICBhLnJvd0NsYXNzID0gJ2N1cnNvci1kZWZhdWx0JyBpZiBhLmlzQ3VycmVudFxuICAgICAgICAgIHN3aXRjaCBhLnR5cGVcbiAgICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnbWFpbHRvOicgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnYml0Y29pbl9hZGRyZXNzJywgJ2JpdGNvaW4nXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9hZGRyZXNzLycgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgYS52YWx1ZVxuICAgICAgICAgICAgd2hlbiAnYWNjb3VudCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtYXQnXG4gICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmUnXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGEubGluayA9ICd0ZWw6JyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdrZXlJRCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgICAgaWYgYS52YWx1ZS5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGEudmFsdWUpLnRoZW4gKGNvdmVyUGhvdG8pIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY292ZXJQaG90byA9ICRzY29wZS5jb3ZlclBob3RvIG9yIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKGRhdGE6aW1hZ2U7YmFzZTY0LCcgKyBjb3ZlclBob3RvLnRvU3RyaW5nKCdiYXNlNjQnKSArICcpJyB9XG4gICAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgaWYgYS52YWx1ZS5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnZmFjZWJvb2suY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgndHdpdHRlci5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdwbHVzLmdvb2dsZS5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdsaW5rZWRpbi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdnaXRodWIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyJ1xuICAgICAgICAgIGlmIGEudmFsdWUgYW5kIGEudmFsdWUubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL2lwZnMuaW8nICsgYS52YWx1ZVxuICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgaWYgYS52ZXJpZmljYXRpb25zICsgYS51bnZlcmlmaWNhdGlvbnMgPiAwXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gYS52ZXJpZmljYXRpb25zICogMTAwIC8gKGEudmVyaWZpY2F0aW9ucyArIGEudW52ZXJpZmljYXRpb25zKVxuICAgICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgICBhbHBoYSA9IGEudmVyaWZpY2F0aW9ucyAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAgICMgYS5yb3dTdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ1xuICAgICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICAgIGEucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYS5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBhLnF1aWNrQ29udGFjdFxuICAgICAgICAkc2NvcGUuYXR0cmlidXRlc0xlbmd0aCA9ICRzY29wZS5hdHRyaWJ1dGVzLmxlbmd0aFxuXG4gICAgJHNjb3BlLmF0dHJpYnV0ZUNsaWNrZWQgPSAoZXZlbnQsIGF0dHIpIC0+XG4gICAgICBpZiBhdHRyLmNvbm5lY3RpbmdNc2dzXG4gICAgICAgIGF0dHIuY29sbGFwc2UgPSAhYXR0ci5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICBhdHRyLmNvbm5lY3RpbmdNc2dzID0gW11cbiAgICAgICAgZm9yIG1zZyBpbiAkc2NvcGUucmVjZWl2ZWQubGlzdFxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtc2cuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJywgJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddXG4gICAgICAgICAgaGFzQXR0cjEgPSBoYXNBdHRyMiA9IGZhbHNlXG4gICAgICAgICAgZm9yIGEgaW4gbXNnLmdldFJlY2lwaWVudEFycmF5KClcbiAgICAgICAgICAgIGhhc0F0dHIxID0gaGFzQXR0cjEgb3IgYS50eXBlID09IGF0dHIudHlwZSBhbmQgYS52YWx1ZSA9PSBhdHRyLnZhbHVlXG4gICAgICAgICAgICBoYXNBdHRyMiA9IGhhc0F0dHIyIG9yIGEudHlwZSA9PSAkc2NvcGUuaWRUeXBlIGFuZCBhLnZhbHVlID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgICBpZiBoYXNBdHRyMSBhbmQgaGFzQXR0cjJcbiAgICAgICAgICAgICAgYXR0ci5jb25uZWN0aW5nTXNncy5wdXNoIG1zZ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICBhdHRyLmNvbGxhcHNlID0gIWF0dHIuY29sbGFwc2VcblxuICAgICRzY29wZS5nZXRTZW50TXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnNlbnQubGVuZ3RoIHRoZW4gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIGNhbGxiYWNrID0gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXSwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuc2VudC5wdXNoIG1zZ1xuXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuc2VudCh7Y2FsbGJhY2t9KVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLnJlY2VpdmVkID1cbiAgICAgICAgbGlzdDogW11cbiAgICAgICAgc2Vlbjoge31cbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5yZWNlaXZlZC5saXN0Lmxlbmd0aCB0aGVuICRzY29wZS5yZWNlaXZlZC5saXN0WyRzY29wZS5yZWNlaXZlZC5saXN0Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICBjYWxsYmFjayA9IChtc2cpIC0+XG4gICAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQuc2Vlblttc2cuZ2V0SGFzaCgpXVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBpZiBtc2cuaXNQb3NpdGl2ZSgpXG4gICAgICAgICAgICB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgICAgICBtc2cuYXV0aG9yQXJyYXkgPSBtc2cuZ2V0QXV0aG9yQXJyYXkoKVxuICAgICAgICAgICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgICAgaWYgJHNjb3BlLnRodW1ic1VwLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV1cbiAgICAgICAgICAgICAgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcC5wdXNoIG1zZ1xuICAgICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzVXAgPSB0cnVlXG4gICAgICAgICAgZWxzZSBpZiBtc2cuaXNOZWdhdGl2ZSgpIGFuZCAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPCAxMiBhbmQgbm90IHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV1cbiAgICAgICAgICAgIHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93bi5wdXNoIG1zZ1xuICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic0Rvd24gPSB0cnVlXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmxpc3QucHVzaCBtc2dcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuc2Vlblttc2cuZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0eS5yZWNlaXZlZCh7Y2FsbGJhY2ssIGN1cnNvcn0pXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcblxuICAgICRzY29wZS51cGxvYWRDb3ZlclBob3RvID0gKGJsb2IsIGlkZW50aXR5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIHJlY2lwaWVudCA9IHtjb3ZlclBob3RvOiAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGh9XG4gICAgICAgIHJlY2lwaWVudFskc2NvcGUuaWRUeXBlXSA9ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuU2hhcmVQYWdlTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnc2hhcmVQYWdlTW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hhcmUubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5Db3ZlclBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8sICdVcGxvYWQgY292ZXIgcGhvdG8nLCBmYWxzZSlcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgJHNjb3BlLmlkQXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlkVXJsID0gJHNjb3BlLmdldElkVXJsKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlzQ3VycmVudFVzZXIgPSAkc2NvcGUuYXV0aGVudGljYXRpb24gYW5kXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyIGFuZFxuICAgICAgICAkc2NvcGUuaWRUeXBlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSBhbmRcbiAgICAgICAgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5tYXJrQWxsU2VlbigpIGlmICRzY29wZS5pc0N1cnJlbnRVc2VyXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5pc1VuaXF1ZVR5cGUoJHNjb3BlLmlkVHlwZSlcbiAgICAgIGlmICEkc2NvcGUuaXNVbmlxdWVUeXBlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0JywgeyBzZWFyY2g6ICRzY29wZS5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLnRhYnNbMl0uYWN0aXZlID0gdHJ1ZSBpZiAkc2NvcGUudGFic1xuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKSAjICwgdHJ1ZSlcbiAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSwgZmFsc2UsIHRydWUpXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZGF0YSA9IGRhdGFcbiAgICAgICRzY29wZS5nZXRBdHRyaWJ1dGVzKClcbiAgICAgICRzY29wZS5nZXRTZW50TXNncygpXG4gICAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzKClcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdzY29yZXMnKS5vcGVuIChzY29yZXMpIC0+XG4gICAgICAgICRzY29wZS5zY29yZXMgPSBzY29yZXNcbiAgICAgIGlmICRzY29wZS5pZFR5cGUgPT0gJ2tleUlEJ1xuICAgICAgICAjIFRPRE86IG9ubHkgaW5pdCB3aGVuIG9wZW5pbmcgY2hhdCBmw7Zuc3RlclxuICAgICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzID0gW11cbiAgICAgICAgb25NZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzLnB1c2gobXNnKSBpZiBtc2dcbiAgICAgICAgJHNjb3BlLmNoYXQgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkNoYXRcbiAgICAgICAgICBvbk1lc3NhZ2U6IG9uTWVzc2FnZVxuICAgICAgICAgIGtleTogJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICAgICBndW46ICRzY29wZS5ndW5cbiAgICAgICAgICBwYXJ0aWNpcGFudHM6ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICRzY29wZS5zZW5kQ2hhdE1lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICAgIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgIG0gPVxuICAgICAgICAgICAgYXV0aG9yOiAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5LnByaW1hcnlOYW1lXG4gICAgICAgICAgICB0ZXh0OiBtc2dcbiAgICAgICAgICAgIHRpbWU6IHRcbiAgICAgICAgICAkc2NvcGUuY2hhdC5zZW5kKG0pXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0T25saW5lICRzY29wZS5pZFZhbHVlLCAoaXNPbmxpbmUpIC0+XG4gICAgICAgICAgJHNjb3BlLmlzT25saW5lID0gaXNPbmxpbmVcblxuICAgIGxvYWQgPSAtPlxuICAgICAgaWYgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG5cbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBmb2N1cygnaWROYW1lRm9jdXMnKVxuICAgICAgICAgICRzY29wZS5uZXdFbnRyeS5uYW1lID0gJHNjb3BlLmNhcGl0YWxpemVXb3Jkcygkc2NvcGUucXVlcnkudGVybSlcbiAgICAkc2NvcGUuJHdhdGNoICdpcmlzSW5kZXgnLCBsb2FkXG5cbiAgICAkc2NvcGUucXJTY2FuU3VjY2VzcyA9IChkYXRhKSAtPlxuICAgICAgYSA9IGRhdGEuc3BsaXQoJy8nKVxuICAgICAgaWYgYS5sZW5ndGggPiA0XG4gICAgICAgIHR5cGUgPSBkZWNvZGVVUklDb21wb25lbnQoYVthLmxlbmd0aCAtIDJdKVxuICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChhW2EubGVuZ3RoIC0gMV0uc3BsaXQoJz8nKVswXSlcbiAgICAgICAgY29uc29sZS5sb2cgJ3ZhbHVlJywgdmFsdWVcbiAgICAgICAgY29uc29sZS5sb2cgJ2RhdGEnLCBkYXRhXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfVxuICAgICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyAnVW5yZWNvZ25pemVkIGlkZW50aXR5IHVybCcsIGRhdGFcbiAgICAkc2NvcGUucXJTY2FuRXJyb3IgPSAoZSkgLT5cbiAgICAgICMgdGhpcyBpcyBjYWxsZWQgZWFjaCB0aW1lIGEgUVIgY29kZSBpcyBub3QgZm91bmQgb24gdGhlIGNhbWVyYVxuICAgICAgIyBjb25zb2xlLmVycm9yIGVcbl1cbiJdfQ==

(function() {
  angular.module('irisAngular').run(function($log, $transitions, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $transitions.onSuccess({}, function(params) {
      $rootScope.pageTitle = $state.current.title || 'Iris';
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxHQURILENBQ08sUUFBQSxDQUFDLElBQUQsRUFBTyxZQUFQLEVBQXFCLFVBQXJCLEVBQWlDLE1BQWpDLEVBQXlDLFlBQXpDLEVBQXVELE9BQXZELEVBQWdFLG1CQUFoRSxDQUFBO0lBQ0g7SUFDQSxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7V0FDQSxZQUFZLENBQUMsU0FBYixDQUF1QixDQUFBLENBQXZCLEVBQTJCLFFBQUEsQ0FBQyxNQUFELENBQUE7TUFDekIsVUFBVSxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO2FBQy9DLE9BQU8sQ0FBQyxRQUFSLENBQWlCLENBQWpCLEVBQW1CLENBQW5CO0lBRnlCLENBQTNCO0VBSEcsQ0FEUDtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAucnVuICgkbG9nLCAkdHJhbnNpdGlvbnMsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHRyYW5zaXRpb25zLm9uU3VjY2VzcyB7fSwgKHBhcmFtcykgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJHN0YXRlLmN1cnJlbnQudGl0bGUgfHwgJ0lyaXMnXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

(function() {
  angular.module('irisAngular').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $locationProvider.hashPrefix('');
    $stateProvider.state('identities', {
      url: '/contacts',
      template: "<ui-view/>",
      abstract: true
    }).state('identities.list', {
      url: '',
      templateUrl: 'app/identities/list.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities',
      params: {
        search: ''
      },
      title: 'Iris - Contacts'
    }).state('identities.create', {
      url: '/create',
      templateUrl: 'app/identities/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('identities.show', {
      url: '/:type/:value',
      templateUrl: 'app/identities/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('messages', {
      url: '',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Iris'
    }).state('messages.show', {
      url: '/messages/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Iris - About'
    }).state('settings', {
      url: '/settings',
      templateUrl: 'app/main/settings.html',
      title: 'Iris - Settings'
    }).state('privacy', {
      url: '/privacy',
      templateUrl: 'app/main/privacy-policy.html',
      title: 'Iris - Privacy policy'
    });
    return $urlRouterProvider.otherwise('');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxjQUFELEVBQWlCLGtCQUFqQixFQUFxQyxpQkFBckMsQ0FBQTtJQUNOO0lBQ0EsaUJBQWlCLENBQUMsVUFBbEIsQ0FBNkIsRUFBN0I7SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVU7SUFGVixDQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVE7TUFBUixDQUxGO01BTUEsS0FBQSxFQUFPO0lBTlAsQ0FOSixDQWFFLENBQUMsS0FiSCxDQWFTLG1CQWJULEVBY0k7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLFdBQUEsRUFBYSw0QkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBZEosQ0FrQkUsQ0FBQyxLQWxCSCxDQWtCUyxpQkFsQlQsRUFtQkk7TUFBQSxHQUFBLEVBQUssZUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQTVCSixDQWlDRSxDQUFDLEtBakNILENBaUNTLGVBakNULEVBa0NJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWxDSixDQXNDRSxDQUFDLEtBdENILENBc0NTLE9BdENULEVBdUNJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXZDSixDQTBDRSxDQUFDLEtBMUNILENBMENTLFVBMUNULEVBMkNJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQTNDSixDQThDRSxDQUFDLEtBOUNILENBOENTLFNBOUNULEVBK0NJO01BQUEsR0FBQSxFQUFLLFVBQUw7TUFDQSxXQUFBLEVBQWEsOEJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQS9DSjtXQW1EQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixFQUE3QjtFQXRETSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKVxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcvY29udGFjdHMnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSXJpcyAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdtZXNzYWdlcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lyaXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLnNob3cnLFxuICAgICAgICB1cmw6ICcvbWVzc2FnZXMvOmlkJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgLnN0YXRlICdhYm91dCcsXG4gICAgICAgIHVybDogJy9hYm91dCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9hYm91dC5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBBYm91dCdcbiAgICAgIC5zdGF0ZSAnc2V0dGluZ3MnLFxuICAgICAgICB1cmw6ICcvc2V0dGluZ3MnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gU2V0dGluZ3MnXG4gICAgICAuc3RhdGUgJ3ByaXZhY3knLFxuICAgICAgICB1cmw6ICcvcHJpdmFjeSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9wcml2YWN5LXBvbGljeS5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBQcml2YWN5IHBvbGljeSdcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJydcbiJdfQ==

(function() {
  angular.module('irisAngular').constant('config', {
    defaultFilters: {
      type: 'post',
      limit: 10,
      maxDistance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxRQURILENBQ1ksUUFEWixFQUVJO0lBQUEsY0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE1BQU47TUFDQSxLQUFBLEVBQU8sRUFEUDtNQUVBLFdBQUEsRUFBYTtJQUZiO0VBREYsQ0FGSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJylcbiAgLmNvbnN0YW50ICdjb25maWcnLFxuICAgIGRlZmF1bHRGaWx0ZXJzOlxuICAgICAgdHlwZTogJ3Bvc3QnXG4gICAgICBsaW1pdDogMTBcbiAgICAgIG1heERpc3RhbmNlOiAwXG4iXX0=

(function() {
  angular.module('irisAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsUUFBQSxDQUFDLFlBQUQsQ0FBQTtJQUNOLFdBQUE7O1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWOztFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRsb2dQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgIyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCB0cnVlXG4gICAgIyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiJdfQ==

angular.module('irisAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/chat.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold>currently messages are encrypted, but anyone can see who are communicating with each other</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small></div><form class="form-inline mar-bot5" ng-submit="sendChatMessage(m);m = \'\'"><input class=form-control type=text ng-model=m style="display:inline-block; width:80%"> <button class="btn btn-default" type=submit style=display:inline-block><i class="glyphicon glyphicon-send"></i></button></form><div style=background:white;padding:5px class=mar-bot5 ng-repeat="msg in chatMessages | orderBy:\'-time\'"><b ng-bind=msg.author></b> <small ng-bind="msg.time | date : \'yyyy-M-d HH:mm\'"></small><br><span ng-bind=msg.text></span></div></div></div></div>');
$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top45-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!irisIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr id=createIdRow ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:\'data.trustDistance\':false:trustDistanceComparator | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: ids.activeKey == $index}"><td class=gravatar-col><identicon identity=result border=3 width=50 ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance === false" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.wellVerified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><b>Scan QR from profile page</b></p><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.attributes.html','<!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes | orderBy:\'order\':true" style="{{!a.isCurrent && a.rowStyle}}" ng-class="!a.isCurrent && a.rowClass" ng-click="!a.isCurrent && attributeClicked($event, a)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n            <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n          --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.verifications||a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.unverifications||a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connectingMsgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.signedData.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.signedData.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=30></identicon><span ng-bind=msg.author_name||msg.signedData.author.type.value></span> </a></strong>- <span ng-bind="msg.signedData.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span> <span ng-if=msg.signedData.comment>- {{msg.signedData.comment|limitTo:250}}</span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: newVerification})" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button> <button ng-if="authentication.user && !isCurrentUser && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openChatModal()><span class="fa fa-comment mar-right5"></span> Chat</button> <button ng-if="authentication.user && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video mar-right5"></span> {{isCurrentUser ? \'Go live\' : \'Video\'}}</button> <small class="positive mar-left15" ng-show=isOnline>online</small></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.list.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType ng-include="\'app/identities/show.stats.html\'"></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-include="\'app/messages/create.rating.partial.html\'" ng-show="!loggingIn && authentication.user && !isCurrentUser"></div><div ng-include="\'app/identities/show.received.html\'"></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div ng-include="\'app/identities/show.sent.html\'"></div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div ng-include="\'app/identities/show.attributes.html\'" id=attributes></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/show.received.html','<div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in received.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div>');
$templateCache.put('app/identities/show.sent.html','<div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div>');
$templateCache.put('app/identities/show.stats.html','<div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.wellVerified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openSharePageModal()><span class="glyphicon glyphicon-share"></span></button> <button ng-if="authentication.user && !isCurrentUser && idType === \'keyID\'" class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openChatModal()><span class="fa fa-comment"></span></button> <button ng-if="authentication.user && idType === \'keyID\'" class="visible-xs-inline-block visible-sm-inline-block mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video"></span></button> <small class="positive mar-left15 visible-xs-inline-block visible-sm-inline-block" ng-show=isOnline>online</small> <span ng-if="identity.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance === false" class="label label-default pull-right">unconnected</span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n          <p class="received-stats">\n          <div><strong>Received</strong></div>\n          <div>\n          <strong>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n          </strong>\n          </div>\n          </p>\n          <p>\n          <div>Sent</div>\n          <div>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n          </div>\n          </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/identities/video.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold ng-if="!isCurrentUser && !stream">currently this is unencrypted livestreaming :D</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small><div class=mar-top5><videochat ng-if="idType === \'keyID\'" watch-only=stream gun=gun pubkey=idValue></videochat></div><p ng-if="isCurrentUser || stream"><button ng-click="copyToClipboard(idUrl + \'?stream\')" class="btn btn-default mar-top10">Copy link to stream</button></p></div></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Iris</h3><p class=lead>Iris is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><p>Longer description on <a href=https://github.com/irislib/iris/blob/master/README.md>GitHub</a>.</p><h4>Available at</h4><ul><li><a href=https://iris.to>iris.to</a></li><li><a href=https://iris.cx>iris.cx</a></li><li><a href=https://irislib.github.io>irislib.github.io</a></li><li>Browser extension: use Iris even if you are offline. In the future, can be used to sign in to websites.<ul><li><a href=https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome</a></li><li><a href=https://addons.mozilla.org/en-US/firefox/addon/irisapp/ >Firefox</a></li></ul></li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>everything you post on Iris is public</b>.</p><p>Private chat between users will probably be implemented at some point, and other user permissions and groups maybe later.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class="form-inline createuser-form" ng-submit=createUser(newUserName)><div class=form-group><input focus-on=newUser style=min-width:200px type=text class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit id=createUserBtn class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Iris distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><hr style=border-color:#ddd><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" id=logout ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Iris is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Iris is <b>public</b> unless otherwise stated.</p><p>Iris\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Iris "account" is a cryptographic keypair generated and stored locally on the user\'s device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class="container mar-top20-xs"><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div ng-if="ipfsPeers && ipfsPeers.length" class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"><!--<button ng-click="$event.preventDefault;addDefaultIpfsPeers()" class="btn btn-default pull-right">Add default peers</button>--></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>Search indexes</div><div class=panel-body><p><small><b>query</b> = when you search for content on Iris, include results from the index</small></p><p><small><b>subscribe</b> = listen for new messages that are added to the index, potentially adding them to your own index</small></p><table class="table table-striped"><thead><tr><td>index</td><td>query</td><td>subscribe</td></tr></thead><tbody><tr ng-repeat="i in trustedIndexes"><td><identicon uib-tooltip={{i.attribute.value}} identity=i.attribute class=mar-right5 border=3 width=30></identicon><a ui-sref="identities.show({ type: i.attribute.type, value: i.attribute.value })"><identicon ipfs=ipfs identity=i.identity border=3 width=30></identicon></a></td><td><input type=checkbox checked></td><td><input type=checkbox checked></td></tr><tr><td colspan=4><form class=form-inline ng-submit=addTrustedIndex(trustedIndexKey)><input class=form-control type=text placeholder="public key" ng-model=trustedIndexKey> <input class="btn btn-primary" type=submit value="Add trusted index"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Iris indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="irisIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Iris</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', comment: newMessage.comment, pollOptions: createPoll && newMessage.pollOptions }, { files: newMessage.files });createPoll = false"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p ng-class="{\'align-center\': newMessage.files.length == 1}"><span ng-repeat="file in newMessage.files" class=attachment><button type=button class=close aria-label=Close ng-click=newMessage.files.splice($index,1)><span aria-hidden=true>&times;</span></button> <a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}"><audio controls ngf-src=file></audio><video controls ngf-src=file></video></span></p></div></div><div class=form-group><textarea style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="What\'s on your mind?"></textarea></div><div ng-if=createPoll ng-include="\'app/messages/poll.create.html\'"></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.comment || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out>Publish</button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button> <button class="btn btn-default pull-right" ng-click="$event.preventDefault();newMessage.pollOptions=[{text: \'\'}, {text: \'\'}];createPoll = !createPoll"><span class="glyphicon glyphicon-stats"></span> Create poll</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.rating.partial.html','<div ng-style=newMessage.style class="panel panel-default panel-success" id=newRatingPanel><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment }, {addTo: received})"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment ng-disabled=addingMessage placeholder="Comment (optional)"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button ng-disabled=addingMessage type=submit class="pull-right btn btn-primary" data-style=zoom-out><span ng-show="newMessage.rating == 0">Neutral</span> <span ng-show="newMessage.rating > 0">Upvote</span> <span ng-show="newMessage.rating < 0">Downvote</span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({maxDistance: -1})" ng-class="{active: filters.maxDistance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 1})" ng-class="{active: filters.maxDistance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 2})" ng-class="{active: filters.maxDistance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 3})" ng-class="{active: filters.maxDistance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 0})" ng-class="{active: filters.maxDistance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class="container no-padding-xs"><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-if=authentication.user ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div infinite-scroll=showMoreMsgs(); infinite-scroll-distance=1 infinite-scroll-disabled="!msgs || !msgs.list || !irisIndex || loadingMsgs"><message auth=authentication ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true | limitTo:filters.limit as filteredMsgs track by msg.hash" msg=msg ng-click="openMessage($event, msg, \'lg\');$event.preventDefault()"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/poll.create.html','<div class=row><div class=col-xs-12><ul><li ng-repeat="o in newMessage.pollOptions" class=mar-bot5><div class=form-inline><input class=form-control style="width: 200px;display: inline-block;" placeholder="option {{$index + 1}}" ng-model=o.text> <button class="btn btn-default" ng-if="$index > 1" ng-click="newMessage.pollOptions.splice($index, 1)"><i class="fa fa-times"></i></button></div></li><li><a ng-click="newMessage.pollOptions.push({text: \'\'})">Add option</a></li></ul></div></div>');
$templateCache.put('app/messages/share.modal.html','<div class="panel panel-default"><div class=panel-body><h3>Share message?</h3><form ng-submit="shareMessage(message, comment)"><p><input type=text class=form-control placeholder="Add comment" ng-model=comment></p><p><message auth=authentication ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message></p><button class="btn btn-primary">Share</button></form></div></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><message ng-repeat="msg in message.repliesArr" auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info></message><!-- <div class="mar-top15 mar-bot10"><button ng-click="chatModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/services/notification.template.html','<div class="ui-notification panel panel-info"><div class=panel-heading><h3 ng-show=title ng-bind-html=title></h3><div class=message ng-bind-html=message></div></div></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':msg.isVerification, \'panel-default\':msg.isPost}" style={{msg.bgColor}} ng-if=msg.signedData><div class=message-panel ng-class="{ \'panel-body\': !msg.isVerification, \'panel-heading\': msg.isVerification || msg.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=msg.iconStyle ng-repeat="n in msg.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=msg.local></span> <strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=35></identicon><span ng-bind=msg.author_name></span> </a></strong><span ng-show=!msg.sameAuthorAndRecipient><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: msg.linkToRecipient.type, value: msg.linkToRecipient.value })" class=id-link><identicon ng-if=showRecipient ipfs=ipfs identity=msg.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="(msg.recipientIsSelf && pageInfo.primaryName)||msg.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: (msg.ipfsUri || msg.hash) })" ng-bind="msg.signedData.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><div ng-if="msg.isVerification || msg.isUnverification"><div ng-repeat="a in msg.recipientArray"><small><b ng-bind=a.type></b>: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span></small></div></div><div ng-class="{\'align-center\': msg.attachments.length == 1}"><span ng-repeat="attachment in msg.attachments" class=attachment><a ng-if="[\'video\',\'image\',\'audio\'].indexOf(attachment.typeSubstr) == -1" download={{attachment.name}} ng-click="download(attachment.name, null, null, null, attachment.src)"><i class="fa fa-download mar-right5"></i> {{attachment.name}} </a><a ng-if="attachment.type && attachment.typeSubstr == \'image\'" ng-href={{attachment.src}} target=_blank><img alt={{attachment.uri}} ng-src={{attachment.src}} ng-style="{\'max-width\': msg.attachments.length > 1 ? \'150px\' : \'100%\', \'max-height\': msg.attachments.length > 1 ? \'150px\' : \'450px\'}"></a><videostream ng-if="attachment.typeSubstr == \'video\' || attachment.typeSubstr == \'audio\'" ipfs=ipfs uri=attachment.uri></videostream><span ng-bind-html=attachment.element ng-if=attachment.element></span></span></div><p style="white-space: pre-line;" ng-if=msg.signedData.comment hm-read-more hm-limit=280 hm-text="{{ msg.signedData.comment|linky }}" hm-more-text="Show more" hm-less-text="Show less"></p><form ng-if="msg.signedData.pollOptions && !msg.myVote" ng-submit="vote(msg, msg.choice)" ng-init="choice = \'asdf\'"><div class=radio ng-repeat="o in msg.signedData.pollOptions"><label><input ng-hide=msg.myVote ng-disabled=!authentication.user type=radio ng-model=msg.choice ng-value=o.text> <span ng-show=msg.myVote ng-bind=o.voteCount></span> {{o.text}}</label></div><button ng-disabled="!authentication.user || !msg.choice" class="btn btn-primary mar-right5">Vote</button> <small>{{msg.voteCount || 0}} votes</small></form><div ng-if=msg.voteResults><div ng-repeat="(k, v) in msg.voteResults"><b ng-bind=v style="width: 50px; display:inline-block"></b> <span ng-bind=k></span></div><small>{{msg.voteCount || 0}} votes</small></div><message ng-if="msg.sharedMsg && msgUtils" msg=msg.sharedMsg></message><span ng-class="{disabled: !authentication.user}" class=pull-right ng-if="msgUtils && msg.signedData.type == \'post\'"><a class=msg-reaction href="" ng-class="{active: msg.showCommentField}" ng-click="authentication.user && (msg.showCommentField = !msg.showCommentField)"><b ng-if=msg.repliesArr.length>{{msg.repliesArr.length}} </b><i class="glyphicon glyphicon-comment"></i> </a><a class=msg-reaction href="" ng-click="authentication.user && msgUtils.share(msg)"><b ng-if=msg.sharesArr.length>{{msg.sharesArr.length}} </b><i class="glyphicon glyphicon-retweet"></i> </a><a class=msg-reaction ng-class="{active: msg.liked}" href="" ng-click="authentication.user && msgUtils.like(msg)"><b ng-if="msg.likes || msg.liked">{{msg.likes || 1}} </b><i class=glyphicon ng-class="{\'glyphicon-heart-empty\': !msg.liked, \'glyphicon-heart\': msg.liked,}"></i></a></span><form class=form-inline ng-submit="msgUtils.replyTo(msg, reply)" ng-show="authentication.user && msg.showCommentField"><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=reply placeholder="Write a reply"></div><button type=submit class="btn btn-primary">Post</button></form></div></div>');}]);