module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      "2xl": ["32px", "48px"],
      "3xl": ["48px", "60px"],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        purple: "#362066"
      },
      maxWidth: {
        "twelve": "1200px",
        "349px": "349px",
        "720px": "720px",
      },
      height: {
        sm: "640px",
        xs: "500px",
        "2xs": "350px",
      },
      width: {
        "twelve": "1200px",
        "sixteen": "1600px",
      },
      spacing: {
        "25": "100px",
        "50": "200px",
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}