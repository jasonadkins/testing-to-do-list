const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');
const chai = require("chai");
const spies = require("chai-spies");

chai.use(spies);


describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;
    // beforeEach(() => {
    //   const categories = [];
    // });

    it("should return no <li>s for no categories", () => {
      const categories = [];
      let test = mergeCategories(template, categories, "li");
      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<ul>');
      expect(test).to.contain('</ul>');
      expect(test).to.not.contain('<li>');
      expect(test).to.not.contain('</li>');
    });

    it("should return a single <li> for one category", () => {
      const categories = ['Fun'];
      const test = mergeCategories(template, categories, "li");
      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<ul>');
      expect(test).to.contain('</ul>');
      expect(test).to.include('<li>Fun</li>');
    });

    it("should return an <li> for each category", () => {
      const categories = ["Fun", "Work", "Crap"];
      const test = mergeCategories(template, categories, "li");
      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<ul>');
      expect(test).to.contain('</ul>');
      expect(test).to.include('<li>Fun</li>');
      expect(test).to.include('<li>Work</li>');
      expect(test).to.include('<li>Crap</li>');
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      const categories = [];
      let test = mergeCategories(template, categories, "option");
      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<select>');
      expect(test).to.contain('</select>');
      expect(test).to.not.contain('<option>');
      expect(test).to.not.contain('</option>');     
    });

    it("should return a single <option> for one category", () => {
      const categories = ["Fun"];
      let test = mergeCategories(template, categories, "option");
      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<select>');
      expect(test).to.contain('</select>');
      expect(test).to.contain('<option>Fun</option>');
    });

    it("should return an <option> for each category", () => {
      const categories = ["Fun", "Work", "Crap"];
      const test = mergeCategories(template, categories, "option");
      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<select>');
      expect(test).to.contain('</select>');
      expect(test).to.include('<option>Fun</option>');
      expect(test).to.include('<option>Work</option>');
      expect(test).to.include('<option>Crap</option>');
    });
  });
});
