import { addNewTask, deleteAllCompleted } from "./addDelete";

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
    deleteAllCompleted(mockTasks);
  
    // Assert
    expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('tasks');
  });
});
