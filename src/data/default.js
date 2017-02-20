export const defaultBlogData = [
  {
    text: 'paragraph one',
    type: 'text',
  },
  {
    text: `I'm a apple`,
    type: 'text',
  }
]

export const defaultSectionData = function() {
  return {
    text: 'Hello I am a new section',
    type: 'text',
  }
}

export const defaultImageData = function() {
  return {
    url: '',
    fullScreen: true,
    type: 'image',
  }
}