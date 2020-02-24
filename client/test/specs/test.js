const expect = require("chai").expect

describe("Notes App", () => {
  const noteText = "Get better at testing"
  const newTitle = 'Updated title'
  const newDesc = 'Updated description'

  beforeEach(() => {
    browser.url("http://localhost:3000/")
  })

  it("Check title", () => {
    const actualTitle = browser.getTitle()

    expect(actualTitle).to.eql("Notes")
  })

  it("Create a Note", () => {
    $("#add-new-note").click()
    $("#title-note").setValue(noteText)
    $("#description-note").setValue(noteText)
    $("#save-new-note").click()

    const actual = $('.new-note').getText();
    
    expect(actual).to.equal(noteText)
  })

  it('Update a Note', () => {
    $(".new-note").click()
    $('.title-note').setValue(newTitle)
    $('.description-note').setValue(newDesc)
    $('.save-btn').click()
    $('.backHomeButton').click()

    const actual = $('.new-note').getText()

    expect(actual).to.equal(noteText);
  })

  it('Delete a Note', () => {
    $(".deleteBtn").click()
    const actual = $('.new-note')

    expect(actual.state).to.equal(undefined);
  })
})
