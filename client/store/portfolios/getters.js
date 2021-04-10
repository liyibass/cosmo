export default {
  getAllPortfolios(state) {
    return state.portfolioList
  },
  getEditorChoicePortfolios(state) {
    const newList = state.portfolioList.filter((portfolio) => {
      return portfolio.isEditorChoice
    })

    return newList
  },
}
