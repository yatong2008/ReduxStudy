import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//test a sync action
describe('Course Actuins', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };

      //act
      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});
