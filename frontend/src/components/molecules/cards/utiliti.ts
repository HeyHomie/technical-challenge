export const optionStar = ['Future ideas', 'My Stack', 'Inspiration']

export const ColorLabelanguage: any = (language: string) => {
  switch (language) {
    case 'Ruby': {
      return '#701516'
    }
    case 'C#': {
      return '#178600'
    }
    case 'JavaScript': {
      return '#F1E05A'
    }
    case 'TypeScript': {
      return '#2B7489'
    }
    case 'HTML': {
      return '#E34626'
    }
    case 'CSS': {
      return '#563D76'
    }
    case 'Python': {
      return '#3572A5'
    }
    case 'Java': {
      return '#b07219'
    }
    case 'Elixir': {
      return '#6e4a7e'
    }
    default: {
      return '#d0d7de'
    }
  }
}
