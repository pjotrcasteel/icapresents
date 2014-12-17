// public/directives/common.js

/**
 * Expose common directives
 */
(function(){
    angular.module('common-directives', [])
        .directive('redir', ['$http', function ($http) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    element.on('click', function (e) {
                        e.preventDefault();
                        window.location = attrs.href;
                    });
                }
            };
        }])
        .directive('menuside', ['$http', function ($http) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.preventDefault();
                        $('body').toggleClass('menu-open');
                    })
                }
            };
        }])
        .directive('menusideright', ['$http', function ($http) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.preventDefault();
                        $('body').toggleClass('menu-open-right');
                    })
                }
            };
        }])
        .directive('logout', ['$http', function ($http) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    element.on('click', function (e) {
                        e.preventDefault();
                        $http.post('/logout');
                    });
                }
            };
        }])
        .directive('uploadimageform', ['$http', function ($http) {
            return {
                restrict: 'AEC',
                link: function ($scope, element, attrs) {
                    $("#imageform").submit(function(e) {
                        e.preventDefault();

                        var formData = new FormData($(this)[0]);

                        $.ajax({
                            url: "/upload",
                            type: "POST",
                            data: formData,
                            async: false,
                            success: function (data) {
                                $('#imageinfo').html(data.path);
                            },
                            cache: false,
                            contentType: false,
                            processData: false
                        });

                        return false;
                    });
                }
            };
        }]);
})();
