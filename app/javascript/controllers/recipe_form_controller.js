import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["stepsContainer", "stepTemplate", "ingredientGroupsContainer", "ingredientGroupTemplate"]

  connect() {
    this.addStep()
    this.addIngredientGroup()
  }

  addStep() {
    const newStep = this.stepTemplateTarget.content.cloneNode(true)
    const stepNumber = this.stepsContainerTarget.children.length + 1
    newStep.querySelector('.step-number').textContent = stepNumber
    this.stepsContainerTarget.appendChild(newStep)
  }

  removeStep(event) {
    event.preventDefault()
    const step = event.target.closest('.step')
    step.remove()
    this.renumberSteps()
  }

  renumberSteps() {
    this.stepsContainerTarget.querySelectorAll('.step-number').forEach((el, index) => {
      el.textContent = index + 1
    })
  }

  addIngredientGroup() {
    const newGroup = this.ingredientGroupTemplateTarget.content.cloneNode(true)
    this.ingredientGroupsContainerTarget.appendChild(newGroup)
  }

  removeIngredientGroup(event) {
    event.preventDefault()
    const group = event.target.closest('.ingredient-group')
    group.remove()
  }

  addIngredient(event) {
    event.preventDefault()
    const group = event.target.closest('.ingredient-group')
    const ingredientsContainer = group.querySelector('.ingredients')
    const template = group.querySelector('.ingredient-template')
    const newIngredient = template.content.cloneNode(true)
    ingredientsContainer.appendChild(newIngredient)
  }

  removeIngredient(event) {
    event.preventDefault()
    const ingredient = event.target.closest('.ingredient')
    ingredient.remove()
  }

  moveIngredientUp(event) {
    event.preventDefault()
    const ingredient = event.target.closest('.ingredient')
    const previousIngredient = ingredient.previousElementSibling
    if (previousIngredient) {
      ingredient.parentNode.insertBefore(ingredient, previousIngredient)
    }
  }

  moveIngredientDown(event) {
    event.preventDefault()
    const ingredient = event.target.closest('.ingredient')
    const nextIngredient = ingredient.nextElementSibling
    if (nextIngredient) {
      ingredient.parentNode.insertBefore(nextIngredient, ingredient)
    }
  }
}