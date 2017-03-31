export const defaultBlogData = [
  {
    id: 0,
    text: 'paragraph one',
    type: 'text',
  },
  {
    id: 1,
    text: `I'm a apple`,
    type: 'text',
  },
  {
    id: 2,
    text: 'none can tell me',
    type: 'text',
  }
]

export const defaultPosition = {
  open: false,
  position: {},
  update: false,
}

export const defaultSlideData = function() {
  return {
    list: [],
    type: 'slide',
    currentInt: 0,
  }
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