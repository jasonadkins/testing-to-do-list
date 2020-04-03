const { expect } = require('chai');
const { saveItems } = require('../save-items');

describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];
    const newItems = [
      { title: 'Title 2', category: 'Category 2' },
    ];
    let test = saveItems(items, newItems);

    expect(test).to.include(newItems);
  });

  it('makes sure the result and the original are different', () => {
    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];
    const newItems = [
      { title: 'Title 2', category: 'Category 2' },
    ];
    let test = saveItems(items, newItems);

    expect(test).does.not.equal(items);
  });
});
