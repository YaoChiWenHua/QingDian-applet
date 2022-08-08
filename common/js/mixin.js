// 字数转化
export const wordsNumMixin = {
  filters: {
    wordsNum(num) {
      if (num > 10000) {
        return Math.round(num / 10000) + '万字'
      } else {
        return num + '字'
      }
    }
  }
}