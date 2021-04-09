export const sortAndFilter = (data) => {
  //sort steps received from api
  data.sort((a,b) => a.stepNumber > b.stepNumber ? 1 : -1)
  //find latest version of text for each step and remove extra information.
  data = data.map(datum => {
    datum.versionContent = datum.versionContent.reduce((a, b) => (a.effectiveDate > b.effectiveDate ? a : b));
    return datum;
  })
  //return sorted and filtered data
  return data;
}
