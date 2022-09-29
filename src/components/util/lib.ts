export const transformData = (data: any[]) => {
  return data.map((elem: { [key: string]: any }) => {
    const {
      title,
      description,
      keywords,
      photographer,
      nasa_id,
      date_created,
    } = elem.data[0];
    return {
      id: nasa_id,
      image: elem.links[0].href,
      date: date_created,
      title,
      description,
      keywords,
      photographer,
    };
  });
};
