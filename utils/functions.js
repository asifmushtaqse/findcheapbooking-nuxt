export function stringToUrl(data){
    data = data.toLowerCase().replaceAll(" ", "-")
    return data
}
export function urlToString(data){
    data = data.replaceAll("-"," ")
    return data
}