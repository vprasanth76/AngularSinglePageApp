var MainController = function ($scope, $location, $route, MainService, ModalService, StudentData) {
    
    loadStudentsData();

    function loadStudentsData() {
        var srvGetStudents = MainService.getStudents();

        srvGetStudents
            .then(function (stud) {
                //promise fulfilled
                $scope.students = stud.data;
            })
            .catch(function (errStud) {
                JL('Main').error('Error in loading Students : ' + errStud);
            });
    }
        
    $scope.editStudent = function (studId) {
        StudentData.value = studId;
        $location.path('/edit');
    }

    $scope.deleteStudent = function (studId, studFirstName, studLastName) {
        StudentData.value = studId;
        var studentName = studLastName + ' ' + studFirstName;
        
        var modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: 'Delete Student',
            headerText: 'Delete ' + studentName + '?',
            bodyText: 'Are you sure you want to delete this Student?'
        };

        ModalService.showModal({}, modalOptions).then(function (result) {
            MainService.deleteStudent(studId)
                .then(function () {
                    $location.path('/');
                    $route.reload();
                })
                .catch(function (errStud) {
                    JL('Main').error('Error in deleting Student : ' + errStud);
                });
        });
    }
};
MainController.$inject = ['$scope', '$location', '$route', 'MainService', 'ModalService', 'StudentData'];