var app = angular.module('app');

app.controller('HomeController', function ($scope) {
    
    $scope.headers = ['id', 'x-cord', 'y-coord', 'tag', 'status'];
    $scope.columnSort = { sortColumn: 'col1', reverse: false };
    $scope.records = [
        { id: 100, 'x-coord': 45.6754, 'y-coord': 56.7354, 'tags': ["blue", "small", "green"], 'status': "ok" },
        { id: 120, 'x-coord': 45.3423, 'y-coord': 16.7890, 'tags': ["blue","green","bateman"], 'status': "ok" },
        { id: 130, 'x-coord': 35.3423, 'y-coord': 76.7890, 'tags': ["blue","red","bateman"], 'status': "ok" },
        { id: 140, 'x-coord': 5.3423, 'y-coord': 86.7890, 'tags': ["blue","large","bateman"], 'status': "ok" },
        { id: 150, 'x-coord': 4.3423, 'y-coord': 56.7890, 'tags': ["blue","large","bateman"], 'status': "ok" },
        { id: 180, 'x-coord': 54.3423, 'y-coord': 51.7890, 'tags': ["blue","small","bateman"], 'status': "ok" },
        { id: 99, 'x-coord': 41.3423, 'y-coord': 6.7890, 'tags': ["orange","large","bateman"], 'status': "no" },
    ];
});
