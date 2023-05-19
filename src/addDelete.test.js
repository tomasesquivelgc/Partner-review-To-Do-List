import Task from "./Task";
import { addNewTask, deleteAllCompleted } from "./addDelete";
jest.mock('./Task');


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
    localStorage.getItem.mockReturnValue(JSON.stringify([{ id: 1, completed: true }, { id: 2, completed: false }]));
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
    const expectedTasks = [{ id: 2, completed: false }];

    // Act
    deleteAllCompleted(mockTasks);

    // Assert
    expect(mockTasks).toEqual(expectedTasks);
  });

  test('should load data from localStorage', () => {
    // Arrange
    const mockTasks = [{ id: 1, completed: true }, { id: 2, completed: false }];
  
    // Act
    const loadedData = JSON.parse(localStorage.getItem());
  
    // Assert
    expect(loadedData).toEqual(mockTasks);
  });
  
});
describe('addTask', () => {
  test('should return nothing if string is empty', () => {
    //Arrange
    const mockTasks = [];

    //Act
    addNewTask('', mockTasks);

    //Assert
    expect(mockTasks).toEqual([]);
  });

  test('should add one Task to the array', () => {
    //Arrange
    const mockTasks = [];
    const expectedTasks = [new Task('test task', false, 1)];

    //Act
    addNewTask('test task', mockTasks);

    //Assert
    expect(mockTasks).toEqual(expectedTasks);
  })
})
