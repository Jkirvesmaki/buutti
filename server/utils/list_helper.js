

const dummy = (blogs) => {
    return 1
  }
  
const totalLikes = (blogs) => {
    const reducer = (sum, blogs) => {
        return sum + blogs.likes
      
    }
    return blogs.reduce(reducer, 0)

}

const favoriteBlog = (blogs) => {
    const maxNumber = blogs.reduce((p, c) => p.likes > c.likes ? p : c);
    return maxNumber
}

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
  }