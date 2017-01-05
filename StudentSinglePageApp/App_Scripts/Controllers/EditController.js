var EditController = function ($scope, $location, MainService, StudentData) {
    getStudent();

    function getStudent() {
        var studentInfo = MainService.getStudent(StudentData.value);

        studentInfo
            .then(function (stud) {
                //Success
                $scope.student = stud.data;                
                $scope.fullName = function () {
                    if ($scope.student)
                        return $scope.student.lastName + ' ' + $scope.student.firstName;
                    else
                        return "";
                };
            })
            .catch(function (errStud) {
                //Failure, handle error here.
                JL('Edit').error('Error in loading Student : ' + errStud);
            });
    }

    $scope.save = function () {
        var student = {
            studentId: $scope.student.studentId,
            firstName: $scope.student.firstName,
            lastName: $scope.student.lastName,
            email: $scope.student.email,
            phone: $scope.student.phone            
        };
        var saveStudent = MainService.updateStudent($scope.student.studentId, student);

        saveStudent
            .then(function (stud) {
                //Success
                $location.path('/');
            })
            .catch(function (errStud) {
                //Failure, uses jsnlog
                JL('Edit').error('Error in updating Stuent : ' + errStud)                
            });
    };

    $scope.cancel = function () {
        $location.path('/');
    };
}
EditController.$inject = ['$scope', '$location', 'MainService', 'StudentData'];