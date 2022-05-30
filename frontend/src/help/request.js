export const getUserInfo = async (url) => {
  return await fetch(url)
    .then(async (response) => await response.json())
    // and return the result data.
    .then((data) => data)
}
