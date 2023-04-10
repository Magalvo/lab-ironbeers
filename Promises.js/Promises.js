//A promise is an object that may produce
//some value some
// time in the future

//Promise created in the API
function getListOfBeers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve(['beer1', 'beer2', 'beer3']);
      } else {
        reject('error ocurred');
      }
    }, 2000);
  });
}

//consume the promise using .then
const beers = getListOfBeers();

getListOfBeers()
  .then(response => {
    console.log(response);
    console.log('Render view');
  })
  .catch(error => {
    console.log(error);
  });

//consume the promisse using async await (USE THIS ONE)
async function getBeers() {
  try {
    const response = await getListOfBeers();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

getBeers();
