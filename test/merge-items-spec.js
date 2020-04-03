const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
 
  it("should return no <tr>s and no <td>s for no items", () => {
    const items = [];
    let test = mergeItems(template, items);
    expect(test).to.contain('<table>');
    expect(test).to.contain('</table>');
    expect(test).to.contain('<tbody>');
    expect(test).to.contain('</tbody>');
    expect(test).to.not.contain('<tr>');
    expect(test).to.not.contain('</tr>');
    expect(test).to.not.contain('<td>'); 
    expect(test).to.not.contain('</td>');
  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];
    let test = mergeItems(template, items);
    expect(test).to.contain('<table>');
    expect(test).to.contain('</table>');
    expect(test).to.contain('<tbody>');
    expect(test).to.contain('</tbody>');
    expect(test).to.contain('<tr>');
    expect(test).to.contain('</tr>');
    expect(test).to.contain('<td>Title 1</td>');
    expect(test).to.contain('<td>Category 1</td>');
    expect(test).to.contain('<form method="POST" action="/items/1">');
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1', isComplete: true },
    ];
    let test = mergeItems(template, items);
    expect(test).to.contain('<table>');
    expect(test).to.contain('</table>');
    expect(test).to.contain('<tbody>');
    expect(test).to.contain('</tbody>');
    expect(test).to.contain('<tr>');
    expect(test).to.contain('</tr>');
    expect(test).to.contain('<td>Title 1</td>');
    expect(test).to.contain('<td>Category 1</td>');
    expect(test).to.not.contain('<form method="POST" action="/items/1">');
  });

  it("should return three <tr>s for three items", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1', isComplete: true },
      { title: 'Title 2', category: 'Category 2', isComplete: false },
      { title: 'Title 3', category: 'Category 3', isComplete: true },
    ];
    let test = mergeItems(template, items);
    expect(test).to.contain('<tr>');
    expect(test).to.contain('</tr>');
    expect(test).to.not.contain('<form method="POST" action="/items/1">');
  });
});
