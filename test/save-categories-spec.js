const { expect } = require('chai');
const { saveCategories } = require('../save-categories');
describe("saveCategories()", () => {
  it('adds the new category to the list', () => {
    // Arrange
    const categories = ['One', 'Two', 'Three'];
    const newCategory = 'New Category';
    // Act
    const result = saveCategories(categories, newCategory);
    // Assert
    expect(result).to.include(newCategory);
  });

  it('sorts the list', () => {
    // Arrange
    const categories = ['Cat 3', 'Cat1'];
    const newCategory = 'Cat 2';
    // Act
    const result = saveCategories(categories, newCategory);
    // Assert
    expect(result).to.eql(["Cat 2", "Cat 3", "Cat1"]);
  });

  it('makes sure the result and the original are different', () => {
    // Arrange
    const categories = ['Cat 3', 'Cat1'];
    const newCategory = 'Cat 2';
    // Act
    const result = saveCategories(categories, newCategory);

    // Assert
    expect(result).to.not.equal(categories);
  });
});
