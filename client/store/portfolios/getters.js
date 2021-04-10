export default {
  getAllPortfolios: (state) => {
    return state.portfolioList
  },

  getEditorChoicePortfolios: (state) => {
    const newList = state.portfolioList.filter((portfolio) => {
      return portfolio.isEditorChoice
    })

    return newList
  },

  //   通过让 getter 返回一个函数，来实现给 getter 传参
  getPortfolioById: (state) => (targetId) => {
    const found = state.portfolioList.find((portfolio) => {
      return portfolio.id === targetId
    })

    return found
  },
}
