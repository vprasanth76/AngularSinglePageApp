MainModule.service("MainService", function ($http) {

    var config = { timeout: 5000, warningAfter: 2000 };

    this.getStudents = function () {
        return $http.get('/api/StudentsAPI', config);
    };

    this.getStudent = function (id) {
        return $http.get('/api/StudentsAPI/' + id, config);
    }

    this.updateStudent = function (id, student) {
        var request = $http({
            method: 'put',
            url: '/api/StudentsAPI/' + id,
            data: student
        });
        return request;
    };

    this.checkUniqueValue = function (id, property, value) {
        return $http.get('/api/StudentsAPI', config).then(
            function (results) {
                var resultsdata = results.data;
                var returnValue = true;

                if (property == 'email') {
                    angular.forEach(resultsdata, function (field) {
                        if (returnValue) {
                            if (field.email == value) {
                                returnValue = false;
                            }
                        }
                    });
                }
                else if (property == 'studentId') {
                    angular.forEach(resultsdata, function (field) {
                        if (returnValue) {
                            if (field.studentId == value) {
                                returnValue = false;
                            }
                        }                        
                    });
                }
                return returnValue;                
            });
    }

    this.addNewStudent = function (student) {
        var request = $http({
            method: 'post',
            url: '/api/StudentsAPI/',
            data: student
        });
        return request;
    };

    this.deleteStudent = function (id) {
        var request = $http({
            method: 'delete',
            url: '/api/StudentsAPI/' + id
        });
        return request;
    }
});