export const defaultBlogData = [
  {
    id: 1,
    text: 'paragraph one',
    type: 'text',
  },
  {
    id: 2,
    text: `I'm a apple`,
    type: 'text',
  },
  {
    id: 3,
    text: 'none can tell me',
    type: 'text',
  }
]

export const defaultPosition = {
  open: false,
  position: {}
}

export const defaultSectionData = function() {
  return {
    text: '',
    type: 'text',
  }
}

export const defaultImageData = function(url) {
  return {
    url: url || '',
    fullScreen: false,
    type: 'image',
  }
}