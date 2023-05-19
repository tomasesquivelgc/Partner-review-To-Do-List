import Task from './Task.js';
import { addNewTask, deleteAllCompleted } from './addDelete.js';

jest.mock('./Task');

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// describe('addTask and removeTask', () => {
//   // Before each test, clear the localStorage mock and set up the document body
//   beforeEach(() => {
//     // Test that the addTask method adds one <li> element to the list in the DOM

//       // Create an instance of the class and call the addTask method
//       addRemoveTask.addTask(mockEvent);

//       // Get the list element from the document body
//       const list = document.getElementById('taskList');

//       // Assert that the list has one child element
//       expect(list.children.length).toBe(1);

//       // Assert that the child element is an <li> element with the expected content
//       expect(list.children[0].tagName).toBe('LI');
//       expect(list.children[0].textContent).toBe('New task');
//     });
//   });

  describe('deleteAllCompleted', () => {
    beforeEach(() => {
    // Mock the dom
      document.body.innerHTML = `
    <div class="add_container">
      <input id="inputElement" type="text" placeholder="Add to your list...">
      <i class="fas fa-plus-circle"></i>
    </div>
    <ul id="taskList"></ul>
  `;
    });
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
