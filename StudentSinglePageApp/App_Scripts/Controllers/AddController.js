var AddController = function ($scope, $location, MainService, StudentData) {
    
    $scope.create = function () {

        var student = {
            studentId: $scope.newStudent.studentId,
            firstName: $scope.newStudent.firstName,
            lastName: $scope.newStudent.lastName,
            email: $scope.newStudent.email,
            phone: $scope.newStudent.phone
        };

        MainService.addNewStudent(student).then
        (
            function (stud) {
                $location.path('/');
            }, function (errStud) {
                $scope.error = 'Error in Adding Stuent', errStud;
            }
        );
    };

    $scope.cancel = function () {
        //var x = xyz;
        $location.path('/');
    };    
}
AddController.$inject = ['$scope', '$location', 'MainService', 'StudentData']
