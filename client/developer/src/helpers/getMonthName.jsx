export const getMonthName = (monthnumber) => {
      const months = {
        0: "january",
        1: "february",
        2: "march",
        3: "april",
        4: "may",
        5: "june",
        6: "july",
        7: "august",
        8: "september",
        9: "october",
        10: "november",
        11: "december"
        };
        console.log(monthnumber)
        console.log(months[monthnumber])
        return months[monthnumber]
  }