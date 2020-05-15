formatCurrency() {
    const value = this.amountSold.replace(/,/g, '')
    if (+value) {
      if (value.includes('.')) {
        if (value.split('.')[1].length) {
          const valueBeforeComma = value.split('.')[0]
          const valueAfterComma = value.split('.')[1]
          let numBeforeComma
          if (valueAfterComma.length <= 2) {
            const numBeforeComma = value
              .split('.')[0]
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            this.amountSold = `${numBeforeComma}.${valueAfterComma}`
          } else {
            numBeforeComma = `${valueBeforeComma}${
              valueAfterComma.split('')[0]
            }`
            const numAfterComma = `${valueAfterComma.split('')[1]}${
              valueAfterComma.split('')[2]
            }`
            const numBeforeCommaFormatted = numBeforeComma
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            this.amountSold = `${numBeforeCommaFormatted}.${numAfterComma}`
          }
        }
      } else {
        this.amountSold = value
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    } else {
      this.amountSold = ''
    }
  }