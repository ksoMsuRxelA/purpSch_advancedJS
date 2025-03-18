"use strict";

const isAgeValid = (bdayStr) => {
  const bday = new Date(bdayStr);
  const now = new Date();
  const fourteenYearsAgo = new Date(
    now.getFullYear() - 14,
    now.getMonth(),
    now.getDate()
  );

  return bday < fourteenYearsAgo;
};

console.log(isAgeValid("2011-03-18"));
