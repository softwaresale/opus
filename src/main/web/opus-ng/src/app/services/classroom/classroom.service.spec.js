"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var classroom_service_1 = require("./classroom.service");
describe('ClassroomService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(classroom_service_1.ClassroomService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
