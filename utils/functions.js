export function stringToUrl(data){
    return stringToSlug(data)
}
export function urlToString(data){
    data = data.replaceAll("-"," ")
    return data
}

const stringToSlug = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, '-')
      .replace(/^-+|-+$/g, '');
};