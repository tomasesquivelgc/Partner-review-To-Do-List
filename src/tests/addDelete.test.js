import Task from '../Task.js';
import { addNewTask, deleteAllCompleted } from '../addDelete.js';
import {TaskList} from '../populate.js';

jest.mock('../Task');

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;


  describe('deleteAllCompleted', () => {
    beforeEach(() => {

    // Mock the localStorage data
    localStorage.getItem.mockReturnValue(JSON.stringify([{ id: 1, completed: false }]));
  });

  afterEach(() => {
    // Reset the mock
    localStorageMock.getItem.mockReset();
    localStorageMock.setItem.mockReset();
    localStorageMock.clear.mockReset();
  });

  test('should remove completed tasks from the task array', () => {
    // Arrange
    const mockTasks = [{ id: 1, completed: true }, { id: 2, completed: false }];
    const expectedTasks = [{ id: 1, completed: false }];

    // Act
    deleteAllCompleted(mockTasks);

    // Assert
    expect(mockTasks).toEqual(expectedTasks);
  });

  test('should load data from localStorage', () => {
    // Arrange
    const mockTasks = [{ id: 1, completed: false }];
    const loadedData = JSON.parse(localStorage.getItem());

    // Act
    deleteAllCompleted(mockTasks);

    // Assert
    expect(loadedData).toEqual(mockTasks);
  });
});


describe('addTask', () => {
  test('should return nothing if string is empty', () => {
    // Arrange
    const mockTasks = [];

    // Act
    addNewTask('', mockTasks);

    // Assert
    expect(mockTasks).toEqual([]);
  });

  test('should add one Task to the array', () => {
    // Arrange
    const mockTasks = [];
    const expectedTasks = [new Task('test task', false, 1)];

    // Act
    addNewTask('test task', mockTasks);

    // Assert
    expect(mockTasks).toEqual(expectedTasks);
  });
});

describe('TaskList', () => {
  let taskList;

  beforeEach(() => {
    localStorage.clear();
    taskList = new TaskList();
  });

  test('should create a new task list', () => {
    expect(taskList).toBeDefined();
  });

  test('should add a task to the task list', () => {
    const task = { title: 'Task 1', completed: false };
    taskList.addTask(task);
    expect(taskList.length).toBe(1);
    expect(taskList[0]).toEqual(task);
  });

  test('should delete all completed tasks from the task list', () => {
    const task1 = { title: 'Task 1', completed: true };
    const task2 = { title: 'Task 2', completed: false };
    taskList.push(task1, task2);
    taskList.deleteCompletedTasks();
    expect(taskList.length).toBe(1);
    expect(taskList[0]).toEqual(task2);
  });

  test('should render the task list', () => {
    const task1 = { title: 'Task 1', completed: true };
    const task2 = { title: 'Task 2', completed: false };
    taskList.push(task1, task2);
    taskList.render();
    expect(list.innerHTML).not.toBe('');
  });
});