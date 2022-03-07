export const filterSearch = (data: Array<any>, search: string) => {
  return data.filter((el: any) => {
    return el.full_name.toLowerCase().indexOf(search.toLowerCase()) > -1
  })
}
