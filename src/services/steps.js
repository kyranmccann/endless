export const getSteps = () => {
    return fetch("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge")
    .then(data =>
      data.json()
    ).catch(err =>
      console.log(err)
    );
}
